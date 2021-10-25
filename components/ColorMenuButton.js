import React, { useState } from "react";
import { TouchableOpacity, View, StyleSheet, Animated } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

// type ColorMenuButtonProps = {
//   onPress: () => void,
//   topInset: number,
// };

const ColorMenuButton = (props) => {
  const { onPress, topInset } = props;
  const [scaleValue, setScaleValue] = useState(new Animated.Value(0));
  const onButtonClicked = () => {
    Animated.timing(scaleValue, {
      toValue: 1,
      useNativeDriver: true,
      duration: 1000,
    }).start(() => {
      scaleValue.setValue(0);
    });
    onPress();
  };

  const scaleValueInterpolation = scaleValue.interpolate({
    inputRange: [0, 0.25, 10],
    outputRange: [1, 30, 40],
  });
  return (
    <View>
      <Animated.View
        style={[
          styles.container,
          {
            transform: [{ scale: scaleValueInterpolation }],
            top: 20 + topInset,
          },
        ]}
      />
      <TouchableOpacity
        style={[styles.container, { top: 20 + topInset }]}
        onPress={onButtonClicked}
      >
        <Ionicons name="color-wand-sharp" size={35} color={Colors.darkColor} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: 55,
    height: 55,
    borderRadius: 55,
    position: "absolute",
    left: 20,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
    elevation: 5,
  },
});
export default ColorMenuButton;
