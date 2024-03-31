import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { WelcomeStyles } from "../Styles/WelcomeStyles";
import IconImg from '../assets/Images/UploadCloudIcon.png';

export default function Welcome({navigation}) {
    const handleFolderPick = async () => {
        const fileInput = document.createElement("input");
        fileInput.type = "file";
        fileInput.webkitdirectory = true;
        fileInput.multiple = false;
        fileInput.addEventListener("change", async (event) => {
             
            var approved = false;

            for(i=0; i<event.target.files.length; i++){
                if(event.target.files[i].name == "wpilib_preferences.json"){
                    approved = true;
                    break;
                }
            }
            
            if(approved){
                navigation.navigate("Home")
            }
        });
        fileInput.click();
    };

    return (
        <LinearGradient
            colors={["#00236f", "#4e1264", "#6f004f", "#820036", "#88001a"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0.5, y: 0.5 }}
            style={WelcomeStyles.container}
        >
            <View style={WelcomeStyles.mainTextContainer}>
                <Text style={WelcomeStyles.mainText}> Eagle Flow</Text>
            </View>

            <View style={WelcomeStyles.uploadContainer}>
                <Image source={IconImg} style={WelcomeStyles.image} />
                <Text style={WelcomeStyles.uploadText}> Drag & Drop to Upload Folder</Text>
                <Text style={[WelcomeStyles.uploadText, { marginTop: 25 }]}>OR</Text>
                <View style={WelcomeStyles.browseButtonContainer}>
                    <Pressable onPress={handleFolderPick}>
                        <View style={WelcomeStyles.browseButton}>
                            <Text style={WelcomeStyles.browseText}> Browse Files </Text>
                        </View>
                    </Pressable>
                </View>
            </View>
        </LinearGradient>
    );
}
