import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Menu } from '../components/Menu';

export function Field() {
    const navigate = useNavigate();

    return (
        <div className = 'backgroundContainer'>
            <Menu navigate = {navigate} />

            <div className = 'fieldContainer'>
                
            </div>
        </div>
    ); 
}