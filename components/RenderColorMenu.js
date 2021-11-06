import React from "react";
import { View } from "react-native";
import ColorMenuButton from "./ColorMenuButton";
import { useSelector } from "react-redux";
const RenderColorMenu = (props) => {
  const onPress = () => {
    props.navigation.navigate("Color Menu");
  };
  const currentColor = useSelector((state) => state.colorset.selectedColor);
  if (currentColor == null) {
    return <ColorMenuButton onPress={onPress} topInset={30} />;
  }
  return <View></View>;
};

export default RenderColorMenu;
