import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ColorMenuButton from "../components/ColorMenuButton";

const HomeScreen = (props) => {
  // console.log(props.navigation);
  const onPress = () => {
    props.navigation.navigate("Color Menu");
  };
  return (
    <View>
      <Text>This is Homescreen</Text>
      <ColorMenuButton onPress={onPress} topInset={0} />
    </View>
  );
};

const styles = StyleSheet.create({});
export default HomeScreen;
