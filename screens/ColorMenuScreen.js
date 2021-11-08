import React, { useState, useEffect, useCallback } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import MenuIconButton from "../components/MenuIconButton";

import CloseButton from "../components/CloseButton";
import DefaultTitle from "../components/DefaultTitle";
import MainButton from "../components/MainButton.android";

import { useDispatch, useSelector } from "react-redux";
import {
  toggleSelectColor,
  toggleDeselectColor,
  toggleSetColor,
  ColorLuminance,
} from "../store/actions/ColorActions";
import { topupUser } from "../store/actions/UserActions";

const size = Dimensions.get("window").width * 0.7;
const symbolSize = Dimensions.get("window").width * 0.2;
const radius = size / 2;
const centerX = Dimensions.get("window").width / 2;
const centerY = Dimensions.get("window").height * 0.48;
const buttonWidth = Dimensions.get("window").width / 2;

function degToRad(deg) {
  return (deg * Math.PI) / 180;
}

function setUpMenuConfig(itemNo, numItems) {
  const angleRad = degToRad((360 / numItems) * (itemNo - 1) - 90);
  const x = radius * Math.cos(angleRad) + centerX - symbolSize / 2;
  const y = radius * Math.sin(angleRad) + centerY - symbolSize / 2;
  return {
    left: x,
    top: y,
  };
}

// general styling component
const ColorMenuScreen = (props) => {
  const currentColor = useSelector((state) => state.colorset.colorSelected);
  // const imgLinks = IconsConfigs;
  const colorData = useSelector((state) => state.colorset.colors);

  const [colorSelected, setColorSelected] = useState(null);
  const dispatch = useDispatch();
  const updateColor = (color) => {
    setColorSelected(color);
  };

  const selectColor = useCallback(() => {
    dispatch(toggleSelectColor(colorSelected));
  }, [colorSelected, dispatch]);

  const deselectColor = useCallback(() => {
    dispatch(toggleDeselectColor(colorSelected));
  }, [colorSelected, dispatch]);

  const setColor = useCallback(() => {
    dispatch(toggleSetColor(colorSelected));
  }, [colorSelected, dispatch]);

  const incrementStreak = useCallback(() => {
    dispatch(topupUser());
  }, [dispatch]);

  const onClose = () => {
    deselectColor();
    props.navigation.pop();
  };
  const onSelect = () => {
    setColor();
    incrementStreak();
    onClose();
  };

  // Use effect to update the color
  useEffect(() => {
    selectColor();
  }, [selectColor]);

  return (
    <View>
      <View>
        <DefaultTitle style={styles.title}>Pick a Color</DefaultTitle>
        {colorData.map((color, index) => {
          return (
            <View key={color.id} style={styles.iconWrapper}>
              <MenuIconButton
                imgSource={color.properties.uri}
                containerStyle={{
                  ...styles.itemContainer,
                  ...setUpMenuConfig(index + 1, colorData.length),
                  ...{
                    backgroundColor:
                      color.active == true
                        ? color.name === "White" || color.name === "Ice Blue"
                          ? ColorLuminance(color.properties.color, 0.3)
                          : ColorLuminance(color.properties.color, 0.7)
                        : "white",
                  },
                }}
                onPress={() => updateColor(color)}
              />
            </View>
          );
        })}
        <View style={styles.buttonContainer}>
          <MainButton onPress={onSelect}>Select Color</MainButton>
        </View>
      </View>
      <CloseButton onPress={onClose} />
    </View>
  );
};
const styles = StyleSheet.create({
  itemContainer: {
    width: symbolSize,
    height: symbolSize,
    borderRadius: 100,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    position: "absolute",
    width: "100%",
    marginTop: Dimensions.get("window").height * 0.1,
  },
  iconWrapper: {
    borderRadius: 100,
  },
  buttonContainer: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    width: buttonWidth,
    top: Dimensions.get("window").height * 0.8,
    left: Dimensions.get("window").width * 0.5 - buttonWidth / 2,
  },
});
export default ColorMenuScreen;
