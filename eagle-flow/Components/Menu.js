import React, {Component} from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, Pressable, Modal, Image, Dimensions, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MenuStyles } from "../Styles/MenuStyles";
import RobotImg from '../assets/Images/RobotIcon.png';

export default class Menu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            // <LinearGradient
            //     colors = {["#00236f", "#4e1264", "#6f004f", "#820036", "#88001a"]}
            //     start = {{x: 0, y: 0}}
            //     end = {{x: 0.5, y: 0.5}}
            //     style = {MenuStyles.container}
            // >
                <View style = {MenuStyles.sideMenu}>
                    <Image source = {RobotImg} style = {MenuStyles.image} />

                    <Text style = {MenuStyles.homeText}> Home Page </Text>

                    <Text style = {MenuStyles.namedCommandsText}> Named Commands </Text>

                    <Text style = {MenuStyles.pathsText}> Paths </Text>

                    <Text style = {MenuStyles.telemetryText}> Telemetry </Text>

                    <Text style = {MenuStyles.fieldText}> Field </Text>

                    <Text style = {MenuStyles.settingsText}> Settings </Text>

                    <Text style = {MenuStyles.documentationText}> Documentation </Text>

                    <LinearGradient
                        colors = {["#b12941", "#a62537", "#9a222d", "#8f1e24", "#831b1b"]}
                        start = {{x: 0, y: 0}}
                        end = {{x: 0.5, y: 0.5}}
                        style = {MenuStyles.newProjectContainer}
                    >
                        <Text style = {MenuStyles.newProjectText}> New Project </Text>
                    </LinearGradient>
                </View>
            // </LinearGradient>
        );
    }
}