import react, {Component} from 'react'

import '../styles/ProceedModal.css'

export class ProceedModal extends Component{
    render() {
        return(
            <div className="modalBackground">
                <div className="modalContainer">
                <div className="modalBigText">
                    <h1> You have uploaded a non-FRC folder. You can go back or proceed for practice. </h1>
                </div>
                <div className="buttonContainer">
                    <button onClick={() => this.props.setOpenModal(false)} id="cancelBtn" className='modalButton'> Go Back </button>
                    <button onClick={() => this.props.setNavigation(true)} id="proceedBtn" className='modalButton'> Practice Eagle Flow </button>
                </div>
                </div>
            </div>
        );
    }
}