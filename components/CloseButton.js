import React from "react";
import { TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const BUTTON_SIZE = 50;
const BORDER_WIDTH = 1;

function CloseButton(props) {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[
        styles.button,
        { backgroundColor: "white", borderColor: props.color },
      ]}
    >
      <Icon name={"close"} color={props.color} size={BUTTON_SIZE / 2} />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    position: "absolute",
    right: Dimensions.get("window").width * 0.05,
    top: Dimensions.get("window").height * 0.07,
    justifyContent: "center",
    alignItems: "center",
    width: BUTTON_SIZE + BORDER_WIDTH,
    height: BUTTON_SIZE + BORDER_WIDTH,
    borderRadius: BUTTON_SIZE / 2,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 10,
    shadowOpacity: 0.26,
    elevation: 10,
  },
});
export default CloseButton;
