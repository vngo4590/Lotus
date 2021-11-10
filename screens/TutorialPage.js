import React, { useState, useEffect } from "react";
import Onboarding from "react-native-onboarding-swiper";
import { View, Image, StyleSheet, Dimensions } from "react-native";

const Dots = ({ selected }) => {
  let backgroundColor;

  backgroundColor = selected ? "#F4456F" : "#FCE6E1";

  return (
    <View
      style={{
        width: 10,
        height: 10,
        marginHorizontal: 8,
        borderRadius: 25,
        backgroundColor,
      }}
    />
  );
};

const TutorialPage = ({ navigation }) => {
  const [bottomBarHeight, setBottomBarHeight] = useState(140);
  const updateBottomBarHeight = () => {
    if (Dimensions.get("window").height < 700) {
      return setBottomBarHeight(50);
    } else {
      return setBottomBarHeight(90);
    }
  };
  useEffect(() => {
    updateBottomBarHeight();
  }, []);

  return (
    <Onboarding
      onSkip={() => navigation.navigate("RegisterScreen")}
      onDone={() => navigation.navigate("RegisterScreen")}
      titleStyles={styles.titleStyles}
      textStyle={styles.textStyle}
      imageContainerStyles={styles.imageContainerStyles}
      containerStyles={styles.containerStyles}
      DotComponent={Dots}
      bottomBarColor={"#fff"}
      bottomBarHeight={bottomBarHeight}
      pages={[
        {
          backgroundColor: "#fff",
          image: (
            <Image
              resizeMode="contain"
              style={styles.imageStyle}
              source={require("../assets/tutorialscreen/screen1.png")}
            />
          ),
          title: "Device Connection",
          subtitle: "Enter code given by elder with physical device",
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
              resizeMode="contain"
              style={styles.imageStyle}
              source={require("../assets/tutorialscreen/screen2.png")}
            />
          ),
          title: "Colour of the Day",
          subtitle: "This page will light up with the colour of the day",
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
              resizeMode="contain"
              style={styles.imageStyle}
              source={require("../assets/tutorialscreen/screen3.png")}
            />
          ),
          title: "Connected Accounts",
          subtitle: "View your family members on your account page",
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
              resizeMode="contain"
              style={styles.imageStyle}
              source={require("../assets/tutorialscreen/screen4.png")}
            />
          ),
          title: "Colour Picker",
          subtitle:
            "This page and icon will appear when it is your turn to choose",
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  titleStyles: {
    fontWeight: "bold",
  },
  textStyle: {
    marginBottom: 0,
    fontWeight: "bold",
  },
  imageContainerStyles: {
    paddingVertical: 0,
    marginVertical: 20,
    justifyContent: "center",
    alignItems: "center",
    height: Dimensions.get("window").height * 0.6,
  },
  containerStyles: {
    paddingHorizontal: 50,
    paddingVertical: 20,
    width: Dimensions.get("window").width * 1,
    justifyContent: "center",
  },
  imageStyle: {
    width: Dimensions.get("window").width * 0.8,
    marginTop: 0,
  },
});

export default TutorialPage;
