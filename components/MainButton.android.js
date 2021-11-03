import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";

import Colors from "../constants/Colors";
import DefaultText from "./DefaultText";
const MainButton = (props) => {
  let ButtonComponent = TouchableOpacity;

  return (
    <ButtonComponent activeOpacity={0.6} onPress={props.onPress}>
      <View style={{ ...styles.button, ...props.buttonStyle }}>
        <DefaultText style={{ ...styles.buttonText, ...props.buttonTextStyle }}>
          {props.children}
        </DefaultText>
      </View>
    </ButtonComponent>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    overflow: "hidden",
    elevation: 10,
    backgroundColor: "white",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: Colors.darkColor,
    fontSize: 18,
    textAlign: "center",
  },
});

export default MainButton;
