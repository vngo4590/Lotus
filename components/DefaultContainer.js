import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
const DefaultContainer = (props) => {
  return (
    <SafeAreaView>
      <View style={{ ...styles.container, ...props.style }}>
        {props.children}
      </View>
    </SafeAreaView>
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
