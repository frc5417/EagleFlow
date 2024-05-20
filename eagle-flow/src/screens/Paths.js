import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Menu } from '../components/Menu';
import '../styles/Paths.css';
import fieldImage from '../assets/images/Field_Image.png';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

export function Paths() {
    const navigate = useNavigate();

    return (
        <div className = 'backgroundContainer'>
            <Menu navigate = {navigate} />

            <div className = 'pathsContainer'>
                <h1 className = 'titlesText'> Paths </h1>

                <SimpleBar style = {{height: '90%'}}>
                    {[...Array(5)].map((x, i) =>
                    // The number in the line above is what displays the field images (in this case, 5). All we need to do is
                    // link that number with the to the new paths thing and we're set.
                    <>
                        <img key={i} src={fieldImage} className='fieldImage' alt='' />
                    </>
                    )}
                </SimpleBar>
            </div>

            <div className = 'newFolderContainer'>
                <h1 className = 'titlesText'> New Folder </h1>

                <SimpleBar style = {{height: '90%'}}>
                    {[...Array(10)].map((x, i) =>
                    // The number in the line above is what displays the field images (in this case, 5). All we need to do is
                    // link that number with the to the new paths thing and we're set.
                    <>
                        <img key={i} src={fieldImage} className='fieldImage' alt='' />
                    </>
                    )}
                </SimpleBar>                
            </div>
        </div>
    );
}