import React from "react";
import { Text, StyleSheet } from "react-native";

const DefaultTitle = (props) => {
  return (
    <Text style={{ ...styles.text, ...props.style }}>{props.children}</Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "roboto-bold",
    fontSize: 30,
  },
});

export default DefaultTitle;
