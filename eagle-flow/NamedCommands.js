import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, Pressable, Modal, Image, Dimensions, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { NamedStyles } from "./Styles/NamedCommandStyes";
import Menu from "./Menu";

export default class Named extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <LinearGradient
                colors = {["#00236f", "#4e1264", "#6f004f", "#820036", "#88001a"]}
                start = {{x: 0, y: 0}}
                end = {{x: 0.5, y: 0.5}}
                style = {NamedStyles.container}
            >
                <Menu />
                <View style = {NamedStyles.namedCommandsContainer}>
                    <Text style = {NamedStyles.namedCommandsText}> Named Commands </Text>

                    <View style = {NamedStyles.intakeNoteContainer}>
                        <Text style = {NamedStyles.intakeNoteText}>Intake Note</Text>
                    </View>

                    <View style = {NamedStyles.shootAngleContainer}>
                        <Text style = {NamedStyles.shootAngleText}> Shooter At Angle </Text>
                    </View>

                    <View style = {NamedStyles.elevatorContainer}>
                        <Text style = {NamedStyles.elevatorText}> Elevator Up</Text>
                    </View>

                    
                </View>
            </LinearGradient>
        );
    }
}