import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet } from "react-native";

// import { useScreens } from "react-native-screens";

import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import BottomMenu from "./navigation/BottomMenu";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TutorialPage from "./screens/TutorialPage";
import RegisterScreen from "./screens/RegisterScreen";
import RegisterScreen2 from "./screens/RegisterScreen2";
import RegisterScreen3 from "./screens/RegisterScreen3";
import WelcomeScreen from "./screens/WelcomeScreen";

import ColorMenuScreen from "./screens/ColorMenuScreen";

import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import colorReducer from "./store/reducers/ColorReducer";
import userSetReducer from "./store/reducers/UserReducer";

// Add redux
const rootReducer = combineReducers({
  colorset: colorReducer,
  userset: userSetReducer,
});

const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    "roboto-regular": require("./assets/Fonts/Roboto-Regular.ttf"),
    "roboto-bold": require("./assets/Fonts/Roboto-Bold.ttf"),
    "roboto-light": require("./assets/Fonts/Roboto-Light.ttf"),
  });
};

const RootStack = createStackNavigator();

export default function App() {
  // Loading up base fonts
  const [fontLoaded, setFontLoaded] = useState(false);
  const [colorOfTheDay, setColorOfTheDay] = useState(null);

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
    <Provider store={store}>
      <NavigationContainer>
        <RootStack.Navigator screenOptions={{ ...opacityTransition }}>
          <RootStack.Screen name="WelcomeScreen" component={WelcomeScreen} />
          <RootStack.Screen name="TutorialPage" component={TutorialPage} />
          <RootStack.Screen name="RegisterScreen" component={RegisterScreen} />
          <RootStack.Screen
            name="RegisterScreen2"
            component={RegisterScreen2}
          />
          <RootStack.Screen
            name="RegisterScreen3"
            component={RegisterScreen3}
          />
          <RootStack.Screen name="Bottom Menu" component={BottomMenu} />
          <RootStack.Screen name="Color Menu">
            {(props) => (
              <ColorMenuScreen
                {...props}
                colorOfTheDay={colorOfTheDay}
                setColorOfTheDay={setColorOfTheDay}
              />
            )}
          </RootStack.Screen>
        </RootStack.Navigator>
      </NavigationContainer>

      <StatusBar
        style="auto"
        barStyle="dark-content"
        animated={true}
        // backgroundColor={Colors.darkColor}
        translucent={true}
      />
    </Provider>
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

const opacityTransition = {
  gestureDirection: "vertical-inverted",
  presentation: "modal",
  transitionSpec: {
    open: {
      animation: "timing",
      delay: 300,
    },
    close: {
      animation: "spring",
      config: {
        duration: 300,
      },
    },
  },
  headerShown: false,
  headerBackVisible: false,
  headerMode: "none",
  // A config which just fades the screen
  cardStyleInterpolator: ({ current }) => ({
    cardStyle: {
      opacity: current.progress,
    },
  }),
};
