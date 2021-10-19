import React from "react";
import { View, StyleSheet } from "react-native";
const DefaultContainer = (props) => {
  return (
    <View style={{ ...styles.container, ...props.style }}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 40,
  },
});

export default DefaultContainer;
