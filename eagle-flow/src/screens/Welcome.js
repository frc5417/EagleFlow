import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

import { ProceedModal } from '../components/ProceedModal';
import '../styles/Welcome.css'
import uploadIcon from '../assets/images/UploadCloudIcon.png'

export function Welcome() {

  const ipcRenderer = window.electron.ipcRenderer;

  const [openModal, setOpenModal] = useState(false);
  const [navigation, setNavigation] = useState(false);
  const [jsonFilePath, setJSONFilePath] = useState("");
  
  const navigate = useNavigate();

  const handleClick = async () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.webkitdirectory = true;
    fileInput.multiple = false;
    fileInput.addEventListener("change", async (event) => {
      var FRCFolder = false;
      var firstTime = true;
      for (var i = 0; i < event.target.files.length; i++) {
        if (event.target.files[i].name === "wpilib_preferences.json") {
          FRCFolder = true;
          break;
        }
      }
      if (FRCFolder && firstTime) {
        ipcRenderer.send('upload-folder', { path: event.target.files[0].path });
      } else {
        if(FRCFolder) {
          ipcRenderer.send('upload-old-folder', {path: event.target.files[0].path});
        } else {
          setOpenModal(true);
        }
      }
    });
  
    ipcRenderer.on('json-file-path', (event, jsonFilePath) => {
      setJSONFilePath(jsonFilePath)
      setNavigation(true);
    });
  
    fileInput.click();
  };
  
  if(navigation === true){
    navigate("/home")
  }

  if(openModal === false){
    return( 
      <>
        <div className='welcomeContainer'>
          <h1 className='header'> Eagle Flow </h1>

          <button type='button' className='overallButton' onClick={handleClick}>
            <div className='opacityBox'>
              <img src={uploadIcon} alt="uploadIcon" className='uploadImage' />

              <p className='uploadText'> Click to Upload Folder </p>
              
              <div className='uploadButton'>
                  <p> Upload Folder </p>
              </div>
            </div>
          </button>
        </div>
        
      </>
    )
  } else {
    return( 
      <>
        <div className='welcomeContainer'>
          <h1 className='header'> Eagle Flow </h1>

          {openModal && <ProceedModal setOpenModal={setOpenModal} setNavigation={setNavigation} />}

        </div>
      </>
    )
  }
}