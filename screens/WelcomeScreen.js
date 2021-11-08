import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import DefaultTitle from "../components/DefaultTitle";
const WelcomeScreen = (props) => {
  const image = require("../assets/background_shade.png");
  const [welcomeText, setWelcomeText] = useState("Welcome to Lotus");
  const [isTap, setTapped] = useState(false);
  // change text when user clicks on any parts of the screen
  const changeText = () => {
    if (!isTap) {
      setWelcomeText("We work so you can keep in touch with your elders");
      setTapped(true);
    } else {
      props.navigation.navigate("TutorialPage");
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
          <DefaultTitle style={stylesWelcome.welcomeHeading}>
            {welcomeText}
          </DefaultTitle>
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
    marginHorizontal: 20,
  },
  welcomeImage: {
    flex: 1,
    justifyContent: "center",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
export default WelcomeScreen;
