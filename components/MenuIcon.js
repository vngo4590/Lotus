import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
// import DefaultText from "./DefaultText";
// import Colors from "../constants/Colors";

const MenuIcon = (props) => {
  let ButtonComponent = TouchableOpacity;
  if (Platform.Version >= 21) {
    ButtonComponent = TouchableNativeFeedback;
  }
  return (
    <ButtonComponent activeOpacity={0.6} onPress={props.onPress}>
      <View style={{ ...styles.container, ...props.containerStyle }}>
        <Image
          source={props.imgSource}
          style={{ ...styles.imageStyle, ...props.iconStyle }}
          resizeMode={"contain"}
        />
      </View>
    </ButtonComponent>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    // borderRadius: 1000,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 5,
    shadowOpacity: 0.26,
    alignItems: "center",
    width: 40,
    height: 40,
    padding: 10,
    elevation: 10,
  },
  imageStyle: {
    width: "100%",
  },
});

export default MenuIcon;
