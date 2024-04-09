import React from 'react'
import { useNavigate } from 'react-router-dom';

import '../styles/Welcome.css'
import uploadIcon from '../assets/images/UploadCloudIcon.png'

export function Welcome() {
  
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/home');
  }

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
}