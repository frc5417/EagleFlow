import React, {Component} from 'react'

import '../styles/Menu.css'

export class Menu extends Component {
    render() {

        const newProject = () => {
            this.props.navigate("/");
        }

        return(
            <div className='menuContainer'>
                <div style={{backgroundColor:"red", width: "15vw", height: "15vh", alignSelf: "center"}}>
                    <p> Placeholder for wifi icon </p>
                </div>

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