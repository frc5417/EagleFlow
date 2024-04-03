import { StyleSheet, Dimensions } from "react-native";
import * as Font from 'expo-font';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const fontScaleFactor = Math.min(screenWidth, screenHeight) / 400;

Font.loadAsync({
    'K2D-SemiBold':require('../assets/Fonts/K2D-SemiBold.ttf'),
});

export const WelcomeStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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

    mainTextContainer: {
        flex: 1,
        alignContent: 'center',
        marginTop: screenHeight / 3 - screenHeight / 4,
    },

    mainText: {
        fontFamily: 'K2D-SemiBold',
        fontSize: 75 * fontScaleFactor,
        color: 'white',
    },

    uploadContainer: {
        alignContent: 'center',
        alignSelf: 'center',
        width: screenWidth * 0.6,
        height: screenHeight / 2,
        backgroundColor: 'rgba(210, 183, 183, 0.4)',
        borderRadius: 50,
        marginBottom: screenHeight / 12.5,
    },

    uploadText: {
        fontFamily: 'K2D-SemiBold',
        fontSize: 27.5 * fontScaleFactor,
        alignSelf: 'center',
        color: 'white',
    },

    browseButtonContainer: {
        width: '100%',
        alignItems: 'center',
    },

    browseButton: {
        marginTop: 25,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 25,
        alignSelf: 'center',
        textAlign: 'center',
        width: screenWidth * 0.3,
        height: screenHeight * 0.1,
    },

    browseText: {
        fontFamily: 'K2D-SemiBold',
        fontSize: 27.5 * fontScaleFactor,
        alignSelf: 'center',
        color: 'white',
    },

    image: {
        height: 100,
        width: 100,
        alignSelf: 'center',
        marginVertical: screenHeight / 75,
    },
    popup: {
        display: "flex",
        alignSelf: 'center',
        alignContent: 'center',
        padding: screenWidth/50,
        marginHorizontal: screenWidth * 0.25,
        marginVertical: screenHeight * 0.3,
    },
    popupText: {
        fontFamily: 'K2D-SemiBold',
        fontSize: 15 * fontScaleFactor,
        color: 'white',
        textAlign: "center"
    },
    popupButtonContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        margin: screenHeight/50
    },
    popupButton: {
        borderRadius: 15,
        padding: screenHeight/150,
        textAlignVertical: "center"
    },
    popupButtonText: {
        fontFamily: 'K2D-SemiBold',
        fontSize: 10 * fontScaleFactor,
        textAlign: "center",
        color: 'white',
    },
    modalView: {
        backgroundColor: 'rgba(210, 183, 183, 0.8)',
        margin: screenHeight/10,
        padding: screenWidth/75,
        borderRadius: 20,
      },
});