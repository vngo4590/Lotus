import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import MenuIcon from "./MenuIcon";
import IconsConfigs from "../constants/IconsConfigs";

const size = Dimensions.get("window").width * 0.7;
const symbolSize = Dimensions.get("window").width * 0.2;
const radius = size / 2;
const centerX = Dimensions.get("window").width / 2;
const centerY = Dimensions.get("window").height / 2;

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
const ColorMenu = (props) => {
  const imgLinks = IconsConfigs;
  const imgKeys = Object.keys(imgLinks);
  return (
    <View>
      <View>
        {imgKeys.map((key, index) => {
          return (
            <View style={styles.iconWrapper}>
              <MenuIcon
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
      </View>
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
  iconWrapper: {
    borderRadius: 100,
  },
});
export default ColorMenu;
