import React, {Component} from "react";

import '../styles/NewCommandModal.css';

export class NewCommandModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commandName: ''
        };
    }

    handleInputChange = (event) => {
        this.setState({commandName: event.target.value});
    };

    handleCreate = () => {
        this.props.onCreate(this.state.commandName);
        this.setState({commandName: ''});
        this.props.onClose();
    };

    render() {
        const {isOpen, onClose} = this.props;
        const {commandName} = this.state;

        return (
            isOpen && (
                <div className = "modal">
                    <div className = "modalContent">
                        <span className = "close" onClick = {onClose}>&times;</span>
                        <input 
                            type = "text"
                            placeholder = "Command Name"
                            value = {commandName}
                            onChange = {this.handleInputChange}
                            className = "commandInput"
                        />
                        <button onClick = {this.handleCreate} className = "createButton"> Create Command </button>
                        <button onClick = {onClose} className = "cancelButton"> Cancel </button>
                    </div>
                </div>
            )
        ); 
    }
}