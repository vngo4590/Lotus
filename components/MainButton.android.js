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

  if (Platform.Version >= 21) {
    ButtonComponent = TouchableNativeFeedback;
  }

  return (
    <View style={{ ...styles.buttonContainer, ...props.buttonContainerStyle }}>
      <ButtonComponent activeOpacity={1.0} onPress={props.onPress}>
        <View style={{ ...styles.button, ...props.buttonStyle }}>
          <DefaultText
            style={{ ...styles.buttonText, ...props.buttonTextStyle }}
          >
            {props.children}
          </DefaultText>
        </View>
      </ButtonComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 25,
    overflow: "hidden",
    elevation: 10,
  },
  button: {
    backgroundColor: "white",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    // borderColor: Colors.darkColor,
    // borderWidth: 2,
  },
  buttonText: {
    color: Colors.darkColor,
    fontSize: 18,
    textAlign: "center",
  },
});

export default MainButton;
