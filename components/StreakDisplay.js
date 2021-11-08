import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Colors from "../constants/Colors";
import DefaultText from "./DefaultText";
import { AntDesign } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { checkHexIsLight } from "../store/actions/ColorActions";
// general styling component
const StreakDisplay = (props) => {
  const { user } = props;
  const currentColor = useSelector((state) => state.colorset.selectedColor);

  if (user) {
    return (
      <View style={{ ...styles.streakStyle, ...props.style }}>
        <AntDesign
          name="star"
          style={styles.iconStyle}
          size={30}
          color={
            currentColor
              ? currentColor.properties.color == Colors.yellowColor
                ? Colors.orangeColor
                : Colors.yellowColor
              : Colors.yellowColor
          }
        />
        <DefaultText
          style={{
            ...styles.textStyle,
            ...props.textStyle,
            ...{
              color: currentColor
                ? checkHexIsLight(currentColor.properties.color)
                  ? Colors.darkColor
                  : Colors.whiteColor
                : Colors.whiteColor,
            },
          }}
        >
          {user.streak}
        </DefaultText>
      </View>
    );
  } else {
    return <View></View>;
  }
};
const styles = StyleSheet.create({
  streakStyle: {
    position: "absolute",
    top: 50,
    right: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  textStyle: {
    fontSize: 20,
  },
  iconStyle: {
    margin: 10,
  },
});
export default StreakDisplay;
