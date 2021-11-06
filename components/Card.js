import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";

// general styling component
const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};
const styles = StyleSheet.create({
  card: {
    width: Dimensions.get("window").width * 0.7,
    maxWidth: "100%",
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 5,
    shadowOpacity: 0.26,
    elevation: 20, // for Android
    backgroundColor: "white",
    padding: 20,
    borderRadius: 20,
  },
});
export default Card;
