import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import MenuIconButton from "../components/MenuIconButton";
import IconsConfigs from "../constants/IconsConfigs";
import CloseButton from "../components/CloseButton";
import DefaultTitle from "../components/DefaultTitle";
import MainButton from "../components/MainButton.android";
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
  const imgLinks = IconsConfigs;
  const imgKeys = Object.keys(imgLinks);
  return (
    <View>
      <View>
        <DefaultTitle style={styles.title}>Pick a Color</DefaultTitle>

        {imgKeys.map((key, index) => {
          return (
            <View key={index} style={styles.iconWrapper}>
              <MenuIconButton
                imgSource={imgLinks[key].uri}
                containerStyle={{
                  ...styles.itemContainer,
                  ...setUpMenuConfig(index + 1, imgKeys.length),
                }}
                // iconStyle={styles.iconImage}
              />
            </View>
          );
        })}
        <View style={styles.buttonContainer}>
          <MainButton>Select Color</MainButton>
        </View>
      </View>
      <CloseButton
        onPress={() => {
          // props.navigation.popToTop();
          props.navigation.pop();
        }}
      />
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
