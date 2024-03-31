import React, {useState} from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, Pressable, Modal, Image, Dimensions, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { commonStyles, blueAutonStyles, redAutonStyles } from "../Styles/HomePageStyles";
import Menu from "../Components/Menu";
import AutonGroups from "../Components/AutonGroups";

export default function Home(navigation) {
    const [numOfFolders, setNumoffolders] = useState(2);

    const [folders, setFolders] = useState([
        {
            id: 0,
            name: "Blue"
        },
        {
            id: 1,
            name: "Red"
        }
    ]);

    const updateNumOfFolders = (newNum) => {
        setNumoffolders(newNum);

        const nextId = folders.length;
        setFolders(prevFolders => [
            ...prevFolders,
            { id: nextId, name: "New Folder" }
        ]);
    };
    
        return (
            <LinearGradient
                colors = {["#00236f", "#4e1264", "#6f004f", "#820036", "#88001a"]}
                start = {{x: 0, y: 0}}
                end = {{x: 0.5, y: 0.5}}
                style = {commonStyles.container}
            >
            
            <Menu />
            <AutonGroups numofFolders={numOfFolders} folders={folders} updateNumOfFolders={updateNumOfFolders} />
                    
            </LinearGradient>
        );
    }