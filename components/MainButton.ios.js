import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import DefaultText from "./DefaultText";
import Colors from "../constants/Colors";

const MainButton = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
      <View style={{ ...styles.button, ...props.buttonStyle }}>
        <DefaultText style={{ ...styles.buttonText, ...props.buttonTextStyle }}>
          {props.children}
        </DefaultText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 5,
    shadowOpacity: 0.26,
  },
  buttonText: {
    color: Colors.darkColor,
    fontSize: 18,
  },
});

export default MainButton;
