import React from 'react'

import { Menu } from '../components/Menu'
import '../styles/Home.css'

export function Home() {
    return(
        <>
            <div className='homeContainer'>
                <Menu />
                <h1 className='home'> Home </h1>
            </div>
        </>
    )
}