import React from "react";
import { StyleSheet, Text, View } from "react-native";

const WelcomeScreen = () => {
  return (
      <View style={stylesWelcome.welcomeLayout}>
            <Text style={stylesWelcome.welcomeHeading}>Welcome</Text>
      </View>
  );
};

const stylesWelcome = StyleSheet.create({
    welcomeLayout:{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    welcomeHeading:{
        fontWeight:"bold",
        fontSize:50
    }
});
export default WelcomeScreen;
