import React from 'react'
import { useNavigate } from 'react-router-dom';

import { Menu } from '../components/Menu'
import { AutonGroups } from '../components/AutonGroups'
import '../styles/Home.css'

export function Home() {

    const navigate = useNavigate();

    return(
        <>
            <div className='homeContainer'>
                <Menu navigate={navigate}/>
                <AutonGroups />
            </div>
        </>
    )
}