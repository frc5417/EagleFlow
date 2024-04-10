import React, {Component} from 'react'

import '../styles/Menu.css'
import wifiConnectedIcon from '../assets/images/wifiConnected.png'
import wifiDisonnectedIcon from '../assets/images/wifiDisconnected.png'

export class Menu extends Component {
    render() {
        const wifi = false;

        var wifiIcon = wifiDisonnectedIcon;

        const newProject = () => {
            this.props.navigate("/");
        }

        if(wifi === true){
            wifiIcon = wifiConnectedIcon;
        } else {
            wifiIcon = wifiDisonnectedIcon;
        }

        return(
            <div className='menuContainer'>

                <img src={wifiIcon} className='wifiIcon' alt='' />

                <div className='menuTextContainer'>
                    <button className='menuTextButton'>
                        Named Commands
                    </button>

                    <button className='menuTextButton'>
                        Paths
                    </button>

                    <button className='menuTextButton'>
                        Telemetry
                    </button>

                    <button className='menuTextButton'>
                        Field
                    </button>

                    <button className='menuTextButton'>
                        Settings
                    </button>

                    <button className='menuTextButton'>
                        Documentation
                    </button>
                </div>

                <button className='menuNewProject' onClick={newProject}>
                        New Project
                </button>
            </div>
        )
    }
}