import { StyleSheet, Dimensions } from "react-native";
import * as Font from 'expo-font';
import { LinearGradient } from "expo-linear-gradient";

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const fontScaleFactor = Math.min(screenWidth, screenHeight) / 400;

Font.loadAsync({
    'K2D-Regular': require('../assets/Fonts/K2D-Regular.ttf'),
    'K2D-SemiBold': require('../assets/Fonts/K2D-SemiBold.ttf'),
    'K2D-Bold': require('../assets/Fonts/K2D-Bold.ttf'),
});

export const commonStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        height: screenHeight,
        width: screenWidth,
    },

    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },

    image: {
        height: screenHeight / 10,
        width: screenWidth / 15,
        aspectRatio: 1,
        alignSelf: 'center',
        marginVertical: screenHeight / 75,
    },

    sideMenu: {
        alignContent: 'center',
        alignSelf: 'center',
        width: screenWidth * 0.175,
        height: screenHeight / 1.25,
        backgroundColor: 'rgba(210, 183, 183, 0.4)',
        borderRadius: 30,
        marginLeft: screenWidth / 42.5,
    },

    namedCommandsText: {
        fontFamily: 'K2D-SemiBold',
        marginVertical: screenHeight / 50,
        fontSize: 12.5 * fontScaleFactor,
        alignSelf: 'center',
        color: 'white',
    },

    pathsText: {
        fontFamily: 'K2D-SemiBold',
        marginVertical: screenHeight / 50,
        fontSize: 12.5 * fontScaleFactor,
        alignSelf: 'center',
        color: 'white',
    },

    telemetryText: {
        fontFamily: 'K2D-SemiBold',
        marginVertical: screenHeight / 50,
        fontSize: 12.5 * fontScaleFactor,
        alignSelf: 'center',
        color: 'white',
    },

    fieldText: {
        fontFamily: 'K2D-SemiBold',
        marginVertical: screenHeight / 50,
        fontSize: 12.5 * fontScaleFactor,
        alignSelf: 'center',
        color: 'white',
    },

    settingsText: {
        fontFamily: 'K2D-SemiBold',
        marginVertical: screenHeight / 50,
        fontSize: 12.5 * fontScaleFactor,
        alignSelf: 'center',
        color: 'white',
    },

    documentationText: {
        fontFamily: 'K2D-SemiBold',
        marginVertical: screenHeight / 50,
        fontSize: 12.5 * fontScaleFactor,
        alignSelf: 'center',
        color: 'white',
    },

    newProjectContainer: {
        marginTop: screenHeight / 50,
        backgroundColor: 'transparent',
        borderRadius: 25,
        alignSelf: 'center',
        width: screenWidth * 0.125,
        height: screenHeight * 0.1,
    },

    newProjectText: {
        marginTop: 20,
        fontFamily: 'K2D-SemiBold',
        fontSize: 15 * fontScaleFactor,
        alignSelf: 'center',
        color: 'white',
    },

    // _5417LogoStyle: {
    //     height: screenHeight / 27.5,
    //     width: screenWidth / 50,
    //     alignSelf: 'center',
    //     marginLeft: -(screenHeight / 5),
    // },

    // _5788LogoStyle: {
    //     height: screenHeight / 25,
    //     width: screenWidth / 50,
    //     alignSelf: 'center',
    //     marginTop: -(screenHeight / 75),
    //     backgroundColor: 'transparent'
    // },

    autonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
});

export const blueAutonStyles = StyleSheet.create({
    blueAutos: {
        marginLeft: screenWidth / 20,
        width: screenWidth * 0.325,
        height: screenHeight / 1.25,
        backgroundColor: '#3B69E0',
        alignContent: 'center',
        alignSelf: 'center',
        borderRadius: 35,
    },

    mainBlueText: {
        fontFamily: 'K2D-SemiBold',
        fontSize: 25 * fontScaleFactor,
        alignSelf: 'center',
        color: 'black',
        textDecorationLine: 'underline',
    },
});

export const redAutonStyles = StyleSheet.create({
    redAutos: {
        marginRight: screenWidth / 20,
        width: screenWidth * 0.325,
        height: screenHeight / 1.25,
        backgroundColor: 'rgba(204, 53, 65, 0.8)',
        alignContent: 'center',
        alignSelf: 'center',
        borderRadius: 35,
    },

    mainRedText: {
        fontFamily: 'K2D-SemiBold',
        fontSize: 25 * fontScaleFactor,
        alignSelf: 'center',
        color: 'black',
        textDecorationLine: 'underline',
    },
});