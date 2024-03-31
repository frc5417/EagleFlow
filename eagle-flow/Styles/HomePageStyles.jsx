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