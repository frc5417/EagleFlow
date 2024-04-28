import React, { Component } from 'react';
import '../styles/AutonGroups.css';
import folderIcon from '../assets/images/folderIcon.png'
import threeDots from '../assets/images/threeDots.png'

export class AutonGroups extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filePath: null,
            data: null,
            dataLength: null,
            autonData: null,
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

    componentDidUpdate(prevProps, prevState) {
        const ipcRenderer = window.electron.ipcRenderer;

        ipcRenderer.send('read-json-file', this.state.filePath);

        ipcRenderer.on('json-file-data', (event, data) => {
        this.setState({ data: data });
        });

        if (this.state.data !== prevState.data) {
            const dataLength = this.state.data ? this.state.data[0]?.folders?.AutonFolders?.length : 0;
            const autonData = this.state.data ? this.state.data[0]?.folders?.AutonFolders : null;
            if (dataLength !== prevState.dataLength) {
                this.setState({dataLength: dataLength, autonData:  autonData});
            }
        }
    }
    
    handleJsonData = (event, jsonData) => {
        console.log("Received JSON data:", jsonData);
        this.setState({ data: jsonData });
    };
    
    addNewFolder = (folderName, folderColor, folderToUpdate) => {
        const ipcRenderer = window.electron.ipcRenderer;

        const newData = {
            name: folderName,
            color: folderColor
        };
    
        ipcRenderer.send('new-folder', [newData, folderToUpdate]);
    };
    
    

    render() {
        if(this.state.dataLength === 2){
            return (
                <div className='autonContainer'>
                    <button className='newAutonFolderButton' onClick={() => this.addNewFolder("Test", "#2DED29", "AutonFolders")}> New Group </button>

                    <div style={{display: 'flex', flexDirection: "row"}}>
                        {this.state.autonData ? (
                            this.state.autonData.map(folder => (
                                <div className='biggestContainer' style={{backgroundColor: folder.color}}>
                                    <div>
                                        <p key={folder.name} className='bigText'> {folder.name} </p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No data available</p>
                        )}
                    </div>
                </div>
            );
        } else {
        if(this.state.dataLength <= 4){
            return (
                <div className='autonContainer'>
                    <button className='newAutonFolderButton' onClick={() => this.addNewFolder("Test", "#2DED29", "AutonFolders")}> New Group </button>

                    <div className='overallMedium'>
                    {this.state.autonData ? (
                        this.state.autonData.map(folder => (
                            <div className='mediumContainer' style={{backgroundColor: folder.color}}>
                                <p key={folder.name} className='bigText'> {folder.name} </p>
                            </div>
                        ))
                    ) : (
                        <p>No data available</p>
                    )}
                    </div>
                    <button onClick={() => this.addNewFolder("Test", "#2DED29", "AutonFolders")}>{this.state.dataLength}</button>
                </div>
            );            
        } else {
            return (
                <div className='autonContainer'>
                    <button className='newAutonFolderButton' onClick={() => this.addNewFolder("Test", "#2DED29", "AutonFolders")}> New Group </button>
                    <div className='overallSmall'>
                    {this.state.autonData ? (
                        this.state.autonData.map(folder => (
                            <div className='smallContainer' style={{backgroundColor: folder.color}}>
                                <img src={folderIcon} alt='Folder Icon' className='folderIcon' />
                                <p key={folder.name} className='smallText'> {folder.name} </p>
                                <img src={threeDots} alt='Folder Icon' className='menuIcon' />
                            </div>
                        ))
                    ) : (
                        <p>No data available</p>
                    )}
                    </div>
                    <button onClick={() => this.addNewFolder("Test", "#2DED29", "AutonFolders")}>{this.state.dataLength}</button>
                </div>
            );
        }
        }
    }
}
