import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu } from "../components/Menu";
import { TeamNumberModal } from "../components/TeamNumberModal";
import '../styles/Settings.css';

export function Settings() {
    const navigate = useNavigate();
    const [teamNumber, setTeamNumber] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    const handleTeamNumberChange = (event) => {
        const input = event.target.value;
        if (/^\d*$/.test(input)) {
            setTeamNumber(input);
        }
    }

    const handlePopupClose = () => {
        setShowPopup(false);
    }

    const hanldeSaveTeamNumber = () => {
        setShowPopup(true);
    }

    return (
        <div className = "backgroundContainer">
            <Menu navigate = {navigate} />

            <div className = "settingsContainer">
                <div className = "driverStationSettingsContainer">
                    <h1 className = "settingsText"> Driver Station Settings </h1>

                    <div className = "driverStationOptions">
                        <h1 className = "optionsText"> Team Number </h1>
                        <input 
                            type = "number"
                            value = {teamNumber}
                            onChange = {handleTeamNumberChange}
                            min = {0}
                            max = {9999}
                            className = "looksmaxxing"
                        />
                        <button onClick = {hanldeSaveTeamNumber}> Save Team Number </button>
                    </div>

                    <div className = "driverStationOptions">
                        <h1 className = "optionsText"> Host IP </h1>
                    </div>
                </div>

                <div className = "robotSettingsContainer">
                    <h1 className = "settingsText"> Robot Settings </h1>
                </div>
            </div>

            <div className = "userProfileContainer">
                <h2 className = "userProfileText"> User Profile </h2>
            </div>

            {showPopup && (
                <TeamNumberModal
                    teamNumber={teamNumber}
                    onClose={handlePopupClose}
                />
            )}
        </div>
    );
}