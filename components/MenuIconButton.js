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
import Colors from "../constants/Colors";

const MenuIconButton = (props) => {
  let ButtonComponent = TouchableOpacity;
  if (Platform.Version >= 21) {
    ButtonComponent = TouchableOpacity;
  }
  return (
    <ButtonComponent
      style={[styles.container, props.containerStyle]}
      activeOpacity={0.6}
      onPress={props.onPress}
    >
      <View style={styles.imgContainer}>
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
  imgContainer: {
    width: "100%",
  },
  imageStyle: {
    width: "100%",
  },
});

export default MenuIconButton;
