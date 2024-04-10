import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

import { ProceedModal } from '../components/ProceedModal';
import '../styles/Welcome.css'
import uploadIcon from '../assets/images/UploadCloudIcon.png'

export function Welcome() {

  const [openModal, setOpenModal] = useState(false);
  const [navigation, setNavigation] = useState(false);
  
  const navigate = useNavigate();

  const handleClick = async () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.webkitdirectory = true;
    fileInput.multiple = false;
    fileInput.addEventListener("change", async (event) => {
         
        var approved = false;

        for(var i=0; i<event.target.files.length; i++){
            if(event.target.files[i].name === "wpilib_preferences.json"){
                approved = true;
                break;
            }
        }
        
        if(approved){
            navigate("/home")
        } else {
          setOpenModal(true);
        }
    });
    fileInput.click();
};

  if(navigation === true){
    navigate("Home");
  }

  if(openModal === false){
    return( 
      <>
        <div className='welcomeContainer'>
          <h1 className='header'> Eagle Flow </h1>

          <div className='opacityBox'>
            <img src={uploadIcon} alt="uploadIcon" className='uploadImage' />

            <p className='uploadText'> Drag & Drop to Upload Folder </p>
            <p className='uploadText'> OR </p>
            <button type="button" onClick={handleClick} className='uploadButton'>
              Browse Files
            </button>
          </div>
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