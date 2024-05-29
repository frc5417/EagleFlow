import React, {Component} from 'react'

import '../styles/Menu.css'
import wifiConnectedIcon from '../assets/images/wifiConnected.png'
import wifiDisonnectedIcon from '../assets/images/wifiDisconnected.png'

export class Menu extends Component {
    render() {
        const wifi = false;

        var wifiIcon = wifiDisonnectedIcon;

        const ipcRenderer = window.electron.ipcRenderer;

        const newProject = () => {
            ipcRenderer.send('new-project');
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
                    <button onClick = {() => this.props.navigate("/home")} className='menuTextButton'>
                        Home
                    </button>

                    <button onClick = {() => this.props.navigate("/named")} className='menuTextButton'>
                        Named Commands
                    </button>

                    <button onClick = {() => this.props.navigate("/paths")} className='menuTextButton'>
                        Paths
                    </button>

                    <button className='menuTextButton'>
                        Field
                    </button>

                    <button onClick = {() => this.props.navigate("/settings")} className='menuTextButton'>
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