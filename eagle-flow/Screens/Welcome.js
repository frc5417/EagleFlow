import {React, useState} from "react";
import { View, Text, Pressable, Image, Modal } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { WelcomeStyles } from "../Styles/WelcomeStyles";
import IconImg from '../assets/Images/UploadCloudIcon.png';

export default function Welcome({navigation}) {
    const [showModal, updateShowModal] = useState(false);

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
                goHome();
            } else {
                updateShowModal(true);
            }
        });
        fileInput.click();
    };

    const goHome = () => {
        updateShowModal(false)
        navigation.navigate("Home");
    }

    if(!showModal) {
        return (
            <LinearGradient
                // colors={["#00174a", "#2c0c3f", "#3e0031", "#470020", "#48000e"]}
                colors={["#00236f", "#4e1264", "#6f004f", "#820036", "#88001a"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 0.5, y: 0.5 }}
                style={WelcomeStyles.container}
            >
                <View style={WelcomeStyles.mainTextContainer}>
                    <Text style={WelcomeStyles.mainText}> Eagle Flow</Text>
                    </View>
                    {console.log(showModal)}
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
        } else {
            return(
                <LinearGradient
                // colors={["#00174a", "#2c0c3f", "#3e0031", "#470020", "#48000e"]}
                colors={["#00236f", "#4e1264", "#6f004f", "#820036", "#88001a"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 0.5, y: 0.5 }}
                style={WelcomeStyles.container}
            >

                    <View style={WelcomeStyles.mainTextContainer}>
                        <Text style={WelcomeStyles.mainText}> Eagle Flow</Text>
                    </View>

                    <Modal
                        visible={showModal}
                        animationType="fade"
                        transparent={true}
                    >
                        <View style={WelcomeStyles.popup}>

                            <View style={WelcomeStyles.modalView}>

                        <Text style={WelcomeStyles.popupText}> {"You have uploaded a non-FRC folder. You can go back or proceed for practice."} </Text>

                        <View style={WelcomeStyles.popupButtonContainer}>

                        <Pressable onPress={() => {updateShowModal(false)}} style={[WelcomeStyles.popupButton, {backgroundColor: 'rgba(204, 53, 65, 0.8)'}]}>
                            <Text style={WelcomeStyles.popupButtonText}> {"Go Back"} </Text>
                        </Pressable>

                        <Pressable onPress={goHome} style={[WelcomeStyles.popupButton, {backgroundColor: 'rgba(59, 105, 224, 0.8)'}]}>
                            <Text style={WelcomeStyles.popupButtonText}> {"Practice Eagle Flow"} </Text>
                        </Pressable>

                        </View>
                        </View>
                        </View>
                    </Modal>
                </LinearGradient>
            );
        }

}
