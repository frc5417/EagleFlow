import React from 'react'
import '../styles/Welcome.css'
import uploadIcon from '../assets/images/UploadCloudIcon.png'

export function Welcome() {
  
  const handleClick = () => {
    console.log("clicked")
  }

  return( 
    <>
      <div className='container'>
        <h1> Welcome </h1>

        <div className='opacityBox'>
          <img src={uploadIcon} alt="uploadIcon" />

          <p> Drag & Drop to Upload Folder </p>
          <p> OR </p>
          <button type="button" onClick={handleClick}>
            Browse Files
          </button>
        </div>
      </div>
    </>
  )
}