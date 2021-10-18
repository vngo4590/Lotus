import React from "react";
import { StyleSheet, Text, View, ImageBackground, Dimensions } from "react-native";

const WelcomeScreen = () => {
    const image = require('../assets/background_shade.png');

    return (
        <View style={stylesWelcome.welcomeLayout}>
        
            <ImageBackground source={image} resizeMode="cover" style={stylesWelcome.welcomeImage}>
                <View style={stylesWelcome.welcomeHeadingContainer}>
                    <Text style={stylesWelcome.welcomeHeading}>Welcome to Lotus</Text>
                </View>
            </ImageBackground>


      </View>
  );
};

const stylesWelcome = StyleSheet.create({
    welcomeLayout:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    welcomeHeading:{
        fontWeight:"bold",
        fontSize:50,
        color:"white",
        textAlign:"center"
    }, 
    welcomeHeadingContainer:{
        padding: 20
    },
    welcomeImage:{
        flex: 1,
        justifyContent: "center",
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    }
});
export default WelcomeScreen;
