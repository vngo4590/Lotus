import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Components for bottom navigator
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Screens
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();
const BottomMenu = (props) => {
  return (
    <NavigationContainer>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});
export default BottomMenu;
