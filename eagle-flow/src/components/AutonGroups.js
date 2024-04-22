import React, { Component } from 'react';
import '../styles/AutonGroups.css';

export class AutonGroups extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filePath: null,
            data: null,
        };
    }

    componentDidMount() {
        const ipcRenderer = window.electron.ipcRenderer;
    
        ipcRenderer.on('json-file-path', (event, jsonFilePath) => {
            console.log("Received JSON file path:", jsonFilePath);
            this.setState({ filePath: jsonFilePath });
            ipcRenderer.send('read-json-file', jsonFilePath);
        });
    
        
    }
    
    componentWillUnmount() {
        const ipcRenderer = window.electron.ipcRenderer;
        ipcRenderer.removeAllListeners('json-file-path');
        ipcRenderer.removeAllListeners('json-file-data');
        ipcRenderer.removeAllListeners('new-json-file-data');
    }

    componentDidUpdate() {
        const ipcRenderer = window.electron.ipcRenderer;

        ipcRenderer.send('read-json-file', this.state.filePath);

        ipcRenderer.on('json-file-data', (event, data) => {
        this.setState({ data: data });
        });
    }
    
    handleJsonData = (event, jsonData) => {
        console.log("Received JSON data:", jsonData);
        this.setState({ data: jsonData });
    };
    
    addNewFolder = (folderName, folderToUpdate) => {
        const ipcRenderer = window.electron.ipcRenderer;
        console.log(folderName)
        const newData = {
            name: folderName
        };
    
        console.log("New folder data:", newData);
        console.log("File path:", this.state.filePath);
    
        ipcRenderer.send('new-folder', newData, folderToUpdate);
    };
    
    

    render() {
        return (
            <div className='autonContainer'>
                <p className='testText'>File Path: {this.state.filePath}</p>
                <p className='testText'>{JSON.stringify(this.state.data)}</p>
                <button onClick={() => this.addNewFolder("Test", "AutonFolders")}>Add New Folder</button>
            </div>
        );
    }
}
