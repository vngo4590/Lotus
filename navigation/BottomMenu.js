import React from "react";
import { StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
// Components for bottom navigator
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SettingsScreen from "../screens/SettingsScreen";
import FAQScreen from "../screens/FAQScreen";

// Setting default Nav options onto the screens
/**
 * The navigationOptions you set on the navigator will NOT be used in its screens! That's the difference to defaultNavigationOptions - those option WILL be merged with the screens.
 */
const hideHeader = {
  headerShown: false,
  headerBackVisible: false,
};
const defaultStackNavOptions = {
  shifting: true,
  showLabel: false,
  // tabBarShowLabel: false,
  tabBarLabelStyle: {
    fontSize: 12,
    fontFamily: "roboto-regular",
    marginBottom: 10,
  },
  tabBarStyle: {
    position: "absolute",
    height: 70,
    padding: 10,
  },

  tabBarActiveTintColor: Colors.darkColor,
  tabBarInactiveTintColor: Colors.ignoredColor,
};

// Setting up stack screens
const HomeNavigator = createStackNavigator();
const ProfileNavigator = createStackNavigator();
const SettingsNavigator = createStackNavigator();
const FAQNavigator = createStackNavigator();

// Each of these functions will have different linking routes
function HomeStack() {
  return (
    <HomeNavigator.Navigator screenOptions={hideHeader}>
      <HomeNavigator.Screen name="Home Screen" component={HomeScreen} />
    </HomeNavigator.Navigator>
  );
}
function ProfileStack() {
  return (
    <ProfileNavigator.Navigator screenOptions={hideHeader}>
      <ProfileNavigator.Screen
        name="Profile Screen"
        component={ProfileScreen}
      />
    </ProfileNavigator.Navigator>
  );
}
function SettingsStack() {
  return (
    <SettingsNavigator.Navigator screenOptions={hideHeader}>
      <SettingsNavigator.Screen
        name="Settings Screen"
        component={SettingsScreen}
      />
    </SettingsNavigator.Navigator>
  );
}
function FAQStack() {
  return (
    <FAQNavigator.Navigator screenOptions={hideHeader}>
      <FAQNavigator.Screen name="FAQ Screen" component={FAQScreen} />
    </FAQNavigator.Navigator>
  );
}

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
      initialRouteName="HomeTab"
      inactiveColor={Colors.ignoredColor}
      activeColor="black"
      screenOptions={{ ...defaultStackNavOptions, ...hideHeader }}
      labeled={false}
    >
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-sharp" size={size} color={color} />
          ),
        }}
        component={HomeStack}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle-sharp" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="FAQ"
        component={FAQStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="question-circle" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-settings-sharp" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  // menuBar: {
  //   paddingVertical: 40,
  //   backgroundColor: Colors.darkBlueColor,
  // },
});

export default BottomMenu;
