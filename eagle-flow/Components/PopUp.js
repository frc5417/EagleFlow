import {React, Component} from "react";
import { View, Text, Pressable, Image, Modal } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Popup } from "../Styles/Popup";

export default class PopUp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { textMessage } = this.props;
        const {button1} = this.props;
        const {button2} = this.props;

        return (
            <View>
            

            </View>
        );
    }
}