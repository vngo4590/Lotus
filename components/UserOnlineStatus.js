import React from "react";
import { View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import DefaultText from "./DefaultText";
const UserOnlineStatus = (props) => {
  const getUserStatus = () => {
    const sizeCircle = 15;
    if (props.active == true) {
      return (
        <FontAwesome
          name="circle"
          size={sizeCircle}
          color={Colors.activeColor}
        />
      );
    } else {
      return (
        <FontAwesome
          name="circle"
          size={sizeCircle}
          color={Colors.inActiveColor}
        />
      );
    }
  };
  return (
    <View style={{ ...styles.container, ...props.style }}>
      {getUserStatus()}
      <DefaultText style={styles.nameTag}>{props.userName}</DefaultText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginVertical: 10,
    width: "45%",
    // maxWidth: "50%",
  },
  nameTag: {
    marginLeft: 10,
    fontSize: 15,
  },
});

export default UserOnlineStatus;
