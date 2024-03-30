import { StyleSheet, Dimensions } from "react-native";
import * as Font from 'expo-font';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const fontScaleFactor = Math.min(screenWidth, screenHeight) / 400;

Font.loadAsync({
    'K2D-Regular': require('../assets/Fonts/K2D-Regular.ttf'),
    'K2D-SemiBold': require('../assets/Fonts/K2D-SemiBold.ttf'),
    'K2D-Bold': require('../assets/Fonts/K2D-Bold.ttf'),
});

export const NamedStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        height: screenHeight,
        width: screenWidth,
    },

    namedCommandsContainer: {
        marginLeft: screenWidth / 20,
        width: screenWidth * 0.7,
        height: screenHeight / 1.25,
        backgroundColor: 'rgba(59, 105, 224, 1)',
        alignContent: 'center',
        alignSelf: 'center',
        borderRadius: 30,
    },

    namedCommandsText: {
        fontFamily: 'K2D-SemiBold',
        fontSize: 25 * fontScaleFactor,
        alignSelf: 'center',
        color: 'black',
        textDecorationLine: 'underline',
    },

    intakeNoteContainer: {
        marginTop: screenHeight / 20,
        width: screenWidth * 0.6,
        height: screenHeight / 7.5,
        backgroundColor: 'rgba(217, 217, 217, 0.5)',
        alignContent: 'center',
        alignSelf: 'center',
        borderRadius: 50,
    },

    intakeNoteText: {
        marginTop: screenHeight / 32.5,
        fontFamily: 'K2D-SemiBold',
        fontSize: 20 * fontScaleFactor,
        alignSelf: 'center',
        color: 'white',
    },

    shootAngleContainer: {
        marginTop: screenHeight / 20,
        width: screenWidth * 0.6,
        height: screenHeight / 7.5,
        backgroundColor: 'rgba(217, 217, 217, 0.5)',
        alignContent: 'center',
        alignSelf: 'center',
        borderRadius: 50,
    },

    shootAngleText: {
        marginTop: screenHeight / 32.5,
        fontFamily: 'K2D-SemiBold',
        fontSize: 20 * fontScaleFactor,
        alignSelf: 'center',
        color: 'white',
    },

    elevatorContainer: {
        marginTop: screenHeight / 20,
        width: screenWidth * 0.6,
        height: screenHeight / 7.5,
        backgroundColor: 'rgba(217, 217, 217, 0.5)',
        alignContent: 'center',
        alignSelf: 'center',
        borderRadius: 50,
    },

    elevatorText: {
        marginTop: screenHeight / 32.5,
        fontFamily: 'K2D-SemiBold',
        fontSize: 20 * fontScaleFactor,
        alignSelf: 'center',
        color: 'white',
    },
});