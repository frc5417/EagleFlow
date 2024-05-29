import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProceedModal } from '../components/ProceedModal';
import '../styles/Welcome.css';
import uploadIcon from '../assets/images/UploadCloudIcon.png';

export function Welcome() {
  const ipcRenderer = window.electron.ipcRenderer;

  const [openModal, setOpenModal] = useState(false);
  const [navigation, setNavigation] = useState(false);
  const [ipcCompleted, setIpcCompleted] = useState(false); // Track IPC completion

  const navigate = useNavigate();

  useEffect(() => {
    const handleStoredPath = (event, jsonFilePath) => {
      console.log("Received JSON file path:", jsonFilePath);
      if (jsonFilePath) {
        setNavigation(true);
      }
      setIpcCompleted(true);
    };

    ipcRenderer.send('get-stored-path');
    ipcRenderer.on('stored-path', handleStoredPath);

    return () => {
      ipcRenderer.removeListener('stored-path', handleStoredPath);
    };
  }, [ipcRenderer]);

  useEffect(() => {
    if (navigation && ipcCompleted) {
      navigate("/home");
    }
  }, [navigation, ipcCompleted, navigate]);

  const handleClick = async () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.webkitdirectory = true;
    fileInput.multiple = false;
    fileInput.addEventListener("change", async (event) => {
      let FRCFolder = false;
      let firstTime = true;

      for (let i = 0; i < event.target.files.length; i++) {
        if (event.target.files[i].name === "wpilib_preferences.json") {
          FRCFolder = true;
          break;
        }
      }

      for (let j = 0; j < event.target.files.length; j++) {
        if (event.target.files[j].name === "eagle-flow.json") {
          firstTime = false;
          break;
        }
      }

      if (FRCFolder && firstTime) {
        ipcRenderer.send('upload-folder', { path: event.target.files[0].path });
        setNavigation(true);
      } else if (FRCFolder) {
        ipcRenderer.send('upload-old-folder', { path: event.target.files[0].path });
        setNavigation(true);
      } else {
        setOpenModal(true);
      }
    });

    fileInput.click();
  };

  return (
    <div className='welcomeContainer'>
      <h1 className='header'> Eagle Flow </h1>
      {openModal ? (
        <ProceedModal setOpenModal={setOpenModal} setNavigation={setNavigation} />
      ) : (
        <button type='button' className='overallButton' onClick={handleClick}>
          <div className='opacityBox'>
            <img src={uploadIcon} alt="uploadIcon" className='uploadImage' />
            <p className='uploadText'> Click to Upload Folder </p>
            <div className='uploadButton'>
              <p> Upload Folder </p>
            </div>
          </div>
        </button>
      )}
    </div>
  );
}
