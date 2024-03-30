import React, {Component} from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, Pressable, Modal, Image, Dimensions, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { commonStyles, blueAutonStyles, redAutonStyles } from "./Styles/HomePageStyles";
import RobotImg from './assets/Images/RobotIcon.png';
import _5417Logo from './assets/Images/5417Logo.png';
import _5788Logo from './assets/Images/5788Logo.png';
import Menu from "./Menu";

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
                <Menu />
                    <View style = {blueAutonStyles.blueAutos}>
                        <Text style = {blueAutonStyles.mainBlueText}>Blue Autos</Text>
                    </View>

                    <View style = {redAutonStyles.redAutos}>
                        <Text style = {redAutonStyles.mainRedText}>Red Autos</Text>
                    </View>
            </LinearGradient>
        );
    }
}