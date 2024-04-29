import React, { Component } from 'react';
import { ChromePicker } from 'react-color';

import '../styles/NewFolderModal.css'

export class NewFolderModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            folderName: '',
            folderColor: '#2ded29', 
            displayColorPicker: false,
            proceed: false,
        };
    }

    handleNameChange = (event) => {
        this.setState({ folderName: event.target.value });
    }

    handleClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
      };
    
    handleClose = () => {
        this.setState({ displayColorPicker: false })
    };

    handleChange = (color) => {
        this.setState({ folderColor: color.hex })
    };

    handleContinue = () => {
        const { folderName, folderColor, proceed } = this.state;
        if (folderName.trim() !== '') {
            this.props.addNewFolder(folderName, folderColor);
            this.props.onClose(proceed);
        }
        
    };

    handleCloseModal = () => {
        const {proceed} = this.state;
        this.props.onClose(proceed);
    }

    render() {
        return (
            <div className="modalBackground">
                <div className="modalBigText" onClick={this.handleClick}>
                    <h1>Create New Folder</h1>
                </div>
                <div className='nameAndColor'>
                    <input
                        className='textInput'
                        type="text"
                        value={this.state.folderName}
                        onChange={this.handleNameChange}
                        placeholder="Folder Name"
                    />
                    <div>
                        <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div className='swatch' onClick={this.handleClick}>
                            <div className='color' style={{ background: this.state.folderColor }} />
                        </div>
                        
                        <p className='chooseColor'> Choose Folder Color </p>
                        </div>

                        {this.state.displayColorPicker ?
                            <div className='popover'>
                                <div className='color' onClick={this.handleClose} />
                                <ChromePicker color={this.state.folderColor} onChange={this.handleChange} />
                            </div> : null}
                    </div>
                    <div className="buttonContainer">
                        <button onClick={this.handleCloseModal} id="cancelBtn" className='modalButton'>Cancel</button>
                        <button onClick={this.handleContinue} id="proceedBtn" className='modalButton'>Continue</button>
                    </div>
                </div>
            </div>
        );
    }
}
