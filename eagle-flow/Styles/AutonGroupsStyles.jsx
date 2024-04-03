import { StyleSheet, Dimensions } from "react-native";
import * as Font from 'expo-font';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const fontScaleFactor = Math.min(screenWidth, screenHeight) / 400;

const textVerticalMargin = 60;

Font.loadAsync({
    'K2D-Regular': require('../assets/Fonts/K2D-Regular.ttf'),
    'K2D-SemiBold': require('../assets/Fonts/K2D-SemiBold.ttf'),
    'K2D-Bold': require('../assets/Fonts/K2D-Bold.ttf'),
});

export const AutonStyles = StyleSheet.create({
    overallContainer: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        width: screenWidth * 0.75
    },

    blueAutos: {
        marginTop: screenHeight / 30,
        marginLeft: screenWidth / 20,
        width: screenWidth * 0.325,
        height: screenHeight / 1.275,
        backgroundColor: 'rgba(59, 105, 224, 0.8)',
        alignContent: 'center',
        alignSelf: 'center',
        borderRadius: 35,
    },

    mainText: {
        fontFamily: 'K2D-SemiBold',
        fontSize: 25 * fontScaleFactor,
        alignSelf: 'center',
        color: 'black',
        textDecorationLine: 'underline',
        textAlign: "center"
    },

    redAutos: {
        marginTop: screenHeight / 30,
        marginLeft: screenWidth / 20,
        width: screenWidth * 0.325,
        height: screenHeight / 1.275,
        backgroundColor: 'rgba(204, 53, 65, 0.8)',
        alignContent: 'center',
        alignSelf: 'center',
        borderRadius: 35,
    },
    
    newAutos: {
        marginLeft: screenWidth / 20,
        width: screenWidth * 0.325,
        height: screenHeight / 1.25,
        backgroundColor: 'rgba(245, 221, 20, 0.8)',
        alignContent: 'center',
        alignSelf: 'center',
        borderRadius: 35,
    },
    button: {
        backgroundColor: 'rgba(217, 217, 217, .2)',
        borderRadius: 25,
        alignSelf: "flex-end",
        margin: screenHeight / 75,
        padding: 10,
    },
    pressHereText: {
        fontFamily: 'K2D-SemiBold',
        fontSize: 10 * fontScaleFactor,
        alignSelf: 'center',
        color: 'white',
    },
    blueAutosSmaller: {
        marginLeft: screenWidth / 20,
        marginVertical: screenHeight / 100,
        width: screenWidth * 0.325,
        height: screenHeight / 2.5,
        backgroundColor: 'rgba(59, 105, 224, 0.8)',
        alignContent: 'center',
        alignSelf: 'center',
        borderRadius: 35,
    },
    newAutosSmaller: {
        marginLeft: screenWidth / 20,
        marginVertical: screenHeight / 100,
        width: screenWidth * 0.325,
        height: screenHeight / 2.5,
        backgroundColor: 'rgba(245, 221, 20, 0.8)',
        alignContent: 'center',
        alignSelf: 'center',
        borderRadius: 35,
    },
    redAutosSmaller: {
        marginLeft: screenWidth / 20,
        marginVertical: screenHeight / 100,
        width: screenWidth * 0.325,
        height: screenHeight / 2.5,
        backgroundColor: 'rgba(204, 53, 65, 0.8)',
        alignContent: 'center',
        alignSelf: 'center',
        borderRadius: 35,
    },
    mainTextSmall: {
        fontFamily: 'K2D-SemiBold',
        fontSize: 10 * fontScaleFactor,
        color: 'black',
        alignSelf: 'center',
    },
    blueAutosSmallest: {
        display: "flex",
        flexDirection: "row",
        marginLeft: screenWidth / 20,
        marginVertical: screenHeight / 100,
        width: screenWidth * 0.15,
        height: screenHeight / 20,
        backgroundColor: 'rgba(59, 105, 224, 0.8)',
        alignContent: 'center',
        borderRadius: 15,
        paddingHorizontal: 5,
        justifyContent: "space-between"
    },
    redAutosSmallest: {
        display: "flex",
        flexDirection: "row",
        marginLeft: screenWidth / 20,
        marginVertical: screenHeight / 100,
        width: screenWidth * 0.15,
        height: screenHeight / 20,
        backgroundColor: 'rgba(204, 53, 65, 0.8)',
        alignContent: 'center',
        borderRadius: 15,
        paddingHorizontal: 5,
        justifyContent: "space-between"
    },
    newAutosSmallest: {
        display: "flex",
        flexDirection: "row",
        marginLeft: screenWidth / 20,
        marginVertical: screenHeight / 100,
        width: screenWidth * 0.15,
        height: screenHeight / 20,
        backgroundColor: 'rgba(245, 221, 20, 0.8)',
        alignContent: 'center',
        borderRadius: 15,
        paddingHorizontal: 5,
        justifyContent: "space-between"
    },
    image: {
        width: screenWidth * 0.015,
        height: screenWidth * 0.015,
        alignSelf: 'center',
    },
    threeDotsImageSmallest: {
        width: screenWidth * 0.015,
        height: screenWidth * 0.015,
        alignSelf: 'center',
    },
    threeDotsImage: {
        width: screenWidth * 0.025,
        height: screenWidth * 0.025,
        alignSelf: "flex-end",
        marginBottom: screenHeight/200,
        marginRight: screenWidth/200
    },
    textHolder: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    textContainer: {
        flex: 1,
    },

});