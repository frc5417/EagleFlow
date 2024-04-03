import React, { Component } from "react";
import { Text, View, Button, Pressable, Image } from "react-native";
import { AutonStyles } from "../Styles/AutonGroupsStyles";
import FolderIcon from "../assets/Images/FolderIcon.png";
import threeDots from "../assets/Images/3-dots.png";

export default class AutonGroups extends Component {

    handleUpdate = () => {
        const newNum = this.props.numofFolders + 1;

        this.props.updateNumOfFolders(newNum);
    };
    
    render() {
        const { numofFolders } = this.props;
        const {folders} = this.props;

        if (numofFolders == 2) {
            return (
                <View>
                    <Pressable style={AutonStyles.button} onPress={this.handleUpdate} >
                        <Text style={AutonStyles.pressHereText}> New Group </Text>
                    </Pressable>

                        <View style={AutonStyles.overallContainer}>

                            {folders.map(({ id, name }) => {
                                let folderStyle = AutonStyles.newAutos; 

                                if (name === 'Red') {
                                    folderStyle = AutonStyles.redAutos;
                                } else if (name === 'Blue') {
                                    folderStyle = AutonStyles.blueAutos;
                                }

                                return (
                                    <View style={[folderStyle]} key={id}>
                                        <Text style={AutonStyles.mainText}> {name} </Text>

                                    </View>
                                );
                            })}

                        </View>
                </View>
            );
        } else {
            if(numofFolders <= 4){
                return (
                    <View>
                        <Pressable style={AutonStyles.button} onPress={this.handleUpdate} >
                            <Text style={AutonStyles.pressHereText}> New Group </Text>
                        </Pressable>
    
                            <View style={AutonStyles.overallContainer}>
    
                                {folders.map(({ id, name }) => {
                                    let folderStyle = AutonStyles.newAutosSmaller; 
    
                                    if (name === 'Red') {
                                        folderStyle = AutonStyles.redAutosSmaller;
                                    } else if (name === 'Blue') {
                                        folderStyle = AutonStyles.blueAutosSmaller;
                                    }
    
                                    return (
                                        <View style={[folderStyle]} key={id}>
                                            <Text style={AutonStyles.mainText}> {name} </Text>
                                            <Image source={threeDots} style={AutonStyles.threeDotsImageSmallest} />
                                        </View>
                                    );
                                })}
    
                            </View>
                    </View>
                );
            } else {
                if(numofFolders > 4){
                    return (
                        <View>
                            <Pressable style={AutonStyles.button} onPress={this.handleUpdate} >
                                <Text style={AutonStyles.pressHereText}> New Group </Text>
                            </Pressable>
        
                                <View style={AutonStyles.overallContainer}>
        
                                    {folders.map(({ id, name }) => {
                                        let folderStyle = AutonStyles.newAutosSmallest; 
        
                                        if (name === 'Red') {
                                            folderStyle = AutonStyles.redAutosSmallest;
                                        } else if (name === 'Blue') {
                                            folderStyle = AutonStyles.blueAutosSmallest;
                                        }
        
                                        return (
                                            <View style={[folderStyle]} key={id}>
                                                <Image source={FolderIcon} style={AutonStyles.image} />
                                                <Text style={AutonStyles.mainTextSmall}> {name} </Text>
                                                <Image source={threeDots} style={AutonStyles.threeDotsImageSmallest} />
                                            </View>
                                        );
                                    })}
        
                                </View>
                        </View>
                    );
                }
            }
        }
    }
}
