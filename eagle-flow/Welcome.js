import React, {Component} from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable, Modal, Image, Dimensions, Alert } from "react-native";
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';
import { LinearGradient } from "expo-linear-gradient";
import { WelcomeStyles } from "./Styles/WelcomeStyles";
import IconImg from './assets/Images/UploadCloudIcon.png';

export default class Welcome extends Component {
    constructor(props) {
        super(props);
    }

    handleFolderPick = async () => {
       const fileInput = document.createElement("input");
       fileInput.type = "file";
       fileInput.webkitdirectory = true;
       fileInput.multiple = false;
       fileInput.addEventListener("change", (event) => {
        const folder = event.target.files[0];
        console.log("Folder picked: ", folder);
       });
       fileInput.click();
    };

    render() {
        return (
            <LinearGradient
                colors = {["#00236f", "#4e1264", "#6f004f", "#820036", "#88001a"]}
                start = {{x: 0, y: 0}}
                end = {{x: 0.5, y: 0.5}}
                style = {WelcomeStyles.container}
            >
                <View style = {WelcomeStyles.mainTextContainer}>
                    <Text style = {WelcomeStyles.mainText}> Eagle Flow</Text>
                </View>

                <View style = {WelcomeStyles.uploadContainer}>
                    <Image source = {IconImg} style = {WelcomeStyles.image} />
                    <Text style = {WelcomeStyles.uploadText}> Drag & Drop to Upload Folder</Text>
                    <Text style = {[WelcomeStyles.uploadText, {marginTop: 25}]}>OR</Text>
                    <View style = {WelcomeStyles.browseButtonContainer}>
                        <Pressable onPress = {this.handleFolderPick}>
                            <View style = {WelcomeStyles.browseButton}>
                                <Text style = {WelcomeStyles.browseText}> Browse Files </Text>
                            </View>
                        </Pressable>
                    </View>
                </View>
            </LinearGradient>
        );
    }
}