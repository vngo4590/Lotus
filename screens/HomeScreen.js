import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image, Dimensions } from "react-native";
import DefaultContainer from "../components/DefaultContainer";
import DefaultTitle from "../components/DefaultTitle";
import DefaultText from "../components/DefaultText";
import { useSelector } from "react-redux";
import Colors from "../constants/Colors";
import { ColorLuminance, checkHexIsLight } from "../store/actions/ColorActions";
import RenderColorMenu from "../components/RenderColorMenu";

import StreakDisplay from "../components/StreakDisplay";

// import colors from "native-base/lib/typescript/theme/base/colors";
const HomeScreen = (props) => {
  const currentColor = useSelector((state) => state.colorset.selectedColor);
  const currentUser = useSelector((state) => state.userset.currentUser);
  const ColorQuote = () => {
    if (currentColor == null) {
      return (
        <View>
          <DefaultTitle
            style={{
              ...styles.colorTitleText,
              ...{
                fontSize: 20,
              },
            }}
          >
            Your turn to choose the colour of the day!
          </DefaultTitle>
        </View>
      );
    } else {
      const textStyle = {
        color: checkHexIsLight(currentColor.properties.color)
          ? Colors.darkColor
          : Colors.whiteColor,
      };
      return (
        <View
          style={{
            ...styles.textContainer,
          }}
        >
          <DefaultText
            style={{
              ...styles.colorText,
              ...textStyle,
            }}
          >
            Today's Colour is
          </DefaultText>
          <DefaultTitle
            style={{
              ...styles.colorTitleText,
              ...textStyle,
            }}
          >
            {currentColor.name}
          </DefaultTitle>
        </View>
      );
    }
  };
  const ScreenColor = () => {
    if (currentColor == null) {
      return <View></View>;
    }
    return (
      <Image
        source={currentColor.properties.gradient}
        style={styles.imageStyle}
        resizeMode={"cover"}
      />
    );
  };
  const ColorIcon = () => {
    if (currentColor == null) {
      return <View></View>;
    }
    return (
      <View style={styles.iconContainer}>
        <Image
          source={currentColor.properties.uri}
          style={styles.iconStyle}
          resizeMode={"contain"}
        />
      </View>
    );
  };
  return (
    <View style={styles.outerContainer}>
      <RenderColorMenu navigation={props.navigation} />
      <ScreenColor />
      <StreakDisplay user={currentUser} />
      <ColorIcon />
      <DefaultContainer style={styles.container}>
        <ColorQuote />
      </DefaultContainer>
      <StatusBar
        style="auto"
        barStyle="dark-content"
        animated={true}
        backgroundColor={
          currentColor == null
            ? Colors.darkColor
            : ColorLuminance(currentColor.properties.color, 0.5)
        }
        translucent={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: Colors.darkColor,
  },
  container: {},
  colorTitleText: {
    textAlign: "center",
    fontSize: 40,
    color: "white",
  },
  colorText: {
    textAlign: "center",
    fontSize: 20,
    color: "white",
  },
  imageStyle: {
    position: "absolute",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  iconContainer: {
    position: "absolute",
    top:
      Math.random() * Dimensions.get("window").height * 0.3 +
      Dimensions.get("window").height * 0.03,
    left:
      Math.random() * Dimensions.get("window").width * 0.6 -
      Math.random() * Dimensions.get("window").width * 0.8,
    // shadowColor: "black",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowRadius: 5,
    // shadowOpacity: 0.26,
    // elevation: 1, // for Android
  },
  iconStyle: {
    width: Dimensions.get("window").width,
  },
});
export default HomeScreen;
