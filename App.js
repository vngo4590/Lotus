import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { useScreens } from "react-native-screens";

import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import DefaultText from "./components/DefaultText";
import DefaultTitle from "./components/DefaultTitle";
import BottomMenu from "./navigation/BottomMenu";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TutorialPage from "./screens/TutorialPage";
import RegisterScreen from "./screens/RegisterScreen";
import RegisterScreen2 from "./screens/RegisterScreen2";
import RegisterScreen3 from "./screens/RegisterScreen3";
import HomeScreen from "./screens/HomeScreen";

const AppStack = createStackNavigator(); 

const fetchFonts = () => {
  return Font.loadAsync({
    "roboto-regular": require("./assets/Fonts/Roboto-Regular.ttf"),
    "roboto-bold": require("./assets/Fonts/Roboto-Bold.ttf"),
    "roboto-light": require("./assets/Fonts/Roboto-Light.ttf"),
  });
};

export default function App() {
  // Loading up base fonts
  const [fontLoaded, setFontLoaded] = useState(false);
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <NavigationContainer>
      <AppStack.Navigator headerMode="none">

        <AppStack.Screen name="TutorialPage" component={TutorialPage}/>
        <AppStack.Screen name="RegisterScreen" component={RegisterScreen}/>
        <AppStack.Screen name="RegisterScreen2" component={RegisterScreen2}/>
        <AppStack.Screen name="RegisterScreen3" component={RegisterScreen3}/>
        <AppStack.Screen name="HomeScreen" component={HomeScreen}/>


      </AppStack.Navigator>

      {/* <TutorialPage /> */}
      {/* <BottomMenu />
      <StatusBar style="auto" animated={true} /> */}

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  statusbarStyle: {
    backgroundColor: "black",
  },
});
