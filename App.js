import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import StartingScreen from "./screens/StartingScreen";
export default function App() {
  return (
    <View style={styles.container}>
      {/* Maps to StartingScreen here */}
      {/* <StartingScreen /> */}
      {/* <StatusBar style="auto" /> */}
      {/* <Text>Start App</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
