import React, {Component} from "react";
import "../styles/TeamNumberModal.css";

export class TeamNumberModal extends Component {
  render() {
    const { teamNumber, onClose } = this.props;

    return (
      <div className = "modalBackground">
        <div className = "modalContent">
          <p> Your team number is: {teamNumber}. </p>
          <button onClick = {onClose}> OK </button>
        </div>
      </div>
    );
  }
}