import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";

const WelcomeScreen = () => {
  const image = require("../assets/background_shade.png");
  const [welcomeText, setWelcomeText] = useState("Welcome to Lotus");
  const [isTap, setTapped] = useState(false);
  // change text when user clicks on any parts of the screen
  const changeText = () => {
    if (!isTap) {
      setWelcomeText("We work so you can keep in touch with your elders");
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={changeText}
      style={stylesWelcome.welcomeLayout}
    >
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={stylesWelcome.welcomeImage}
      >
        <View style={stylesWelcome.welcomeHeadingContainer}>
          <Text style={stylesWelcome.welcomeHeading}>{welcomeText}</Text>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

const stylesWelcome = StyleSheet.create({
  welcomeLayout: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeHeading: {
    fontWeight: "bold",
    fontSize: 30,
    color: "white",
    textAlign: "center",
  },
  welcomeHeadingContainer: {
    padding: 20,
  },
  welcomeImage: {
    flex: 1,
    justifyContent: "center",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
export default WelcomeScreen;
