import React, {Component} from "react";
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
                <View style = {MenuStyles.sideMenu}>
                    <Image source = {RobotImg} style = {MenuStyles.image} />

                    <Pressable
                        onPress={() => this.props.navigation.navigate("Home")}
                    >

                    <Text style = {MenuStyles.menuText}> Home Page </Text>
                    
                    </Pressable>

                    <Pressable
                    onPress={() =>
                        this.props.navigation.navigate("Named")}
                    >

                    <Text style = {MenuStyles.menuText}> Named Commands </Text>

                    </Pressable>

                    <Pressable
                    onPress={() =>
                        console.log("You tried to go to Path. We're not there yet tho...")}
                    >

                    <Text style = {MenuStyles.menuText}> Path </Text>

                    </Pressable>

                    <Pressable
                    onPress={() =>
                        console.log("You tried to go to Telemetry. We're not there yet tho...")}
                    >

                    <Text style = {MenuStyles.menuText}> Telemetry </Text>

                    </Pressable>

                    <Pressable
                    onPress={() =>
                        console.log("You tried to go to Field. We're not there yet tho...")}
                    >

                    <Text style = {MenuStyles.menuText}> Field </Text>

                    </Pressable>

                    <Pressable
                    onPress={() =>
                        console.log("You tried to go to Settings. We're not there yet tho...")}
                    >

                    <Text style = {MenuStyles.menuText}> Settings </Text>

                    </Pressable>

                    <Pressable
                    onPress={() =>
                        console.log("You tried to go to Documentation. We're not there yet tho...")}
                    >

                    <Text style = {MenuStyles.menuText}> Documentation </Text>

                    </Pressable>

                    
                    <LinearGradient
                        colors = {["#b12941", "#a62537", "#9a222d", "#8f1e24", "#831b1b"]}
                        start = {{x: 0, y: 0}}
                        end = {{x: 0.5, y: 0.5}}
                        style = {MenuStyles.newProjectContainer}
                    >
                        <Pressable onPress={() => this.props.navigation.navigate("Welcome")}>
                            <Text style = {MenuStyles.newProjectText}> New Project </Text>
                        </Pressable>

                    </LinearGradient>
                </View>
        );
    }
}