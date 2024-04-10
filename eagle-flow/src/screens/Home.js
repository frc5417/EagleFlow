import React from 'react'
import { useNavigate } from 'react-router-dom';

import { Menu } from '../components/Menu'
import '../styles/Home.css'

export function Home() {

    const navigate = useNavigate();

    return(
        <>
            <div className='homeContainer'>
                <Menu navigate={navigate}/>
                <h1 className='home'> Home </h1>
            </div>
        </>
    )
}