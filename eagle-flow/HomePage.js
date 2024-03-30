import React, {Component} from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable, Modal, Image, Dimensions, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { commonStyles, blueAutonStyles, redAutonStyles } from "./Styles/HomePageStyles";
import RobotImg from './assets/Images/RobotIcon.png';
import _5417Logo from './assets/Images/5417Logo.png';
import _5788Logo from './assets/Images/5788Logo.png';

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <LinearGradient
                colors = {["#00236f", "#4e1264", "#6f004f", "#820036", "#88001a"]}
                start = {{x: 0, y: 0}}
                end = {{x: 0.5, y: 0.5}}
                style = {commonStyles.container}
            >
                <View style = {commonStyles.sideMenu}>
                    <Image source = {RobotImg} style = {commonStyles.image} />

                    <Text style = {commonStyles.namedCommandsText}> Named Commands </Text>

                    <Text style = {commonStyles.pathsText}> Paths </Text>

                    <Text style = {commonStyles.telemetryText}> Telemetry </Text>

                    <Text style = {commonStyles.fieldText}> Field </Text>

                    <Text style = {commonStyles.settingsText}> Settings </Text>

                    <Text style = {commonStyles.documentationText}> Documentation </Text>

                    <LinearGradient
                        colors = {["#b12941", "#a62537", "#9a222d", "#8f1e24", "#831b1b"]}
                        start = {{x: 0, y: 0}}
                        end = {{x: 0.5, y: 0.5}}
                        style = {commonStyles.newProjectContainer}
                    >
                        <Text style = {commonStyles.newProjectText}> New Project </Text>
                    </LinearGradient>

                    {/* <Image source = {_5417Logo} style = {commonStyles._5417LogoStyle} />
                    <Image source = {_5788Logo} style = {commonStyles._5788LogoStyle} /> */}
                </View>
                
                <View style = {commonStyles.autonContainer}>
                    <View style = {blueAutonStyles.blueAutos}>
                        <Text style = {blueAutonStyles.mainBlueText}>Blue Autos</Text>
                    </View>

                    <View style = {redAutonStyles.redAutos}>
                        <Text style = {redAutonStyles.mainRedText}>Red Autos</Text>
                    </View>
                </View>
            </LinearGradient>
        );
    }
}