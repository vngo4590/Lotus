import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";

// Components for bottom navigator
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Screens
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";

// const MenuTabNavigator =
//   Platform.OS === "android"
//     ? createMaterialBottomTabNavigator(tabScreenConfig, {
//         activeTintColor: "white",
//         shifting: true,
//         barStyle: {
//           backgroundColor: Colors.primaryColor,
//         },
//       })
//     : createBottomTabNavigator(tabScreenConfig, {
//         tabBarOptions: {
//           labelStyle: {
//             fontFamily: "open-sans",
//           },
//           activeTintColor: Colors.accentColor,
//         },
//       });
const Tab = createBottomTabNavigator();
const BottomMenu = (props) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      inactiveColor={Colors.ignoredColor}
      activeColor="black"
      screenOptions={{
        tabBarStyle: {
          position: "absolute",
        },
      }}
      labeled={false}
      barStyle={styles.menuBar}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  menuBar: {
    paddingVertical: 20,
  },
});
export default BottomMenu;
