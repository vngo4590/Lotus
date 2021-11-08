import React from "react";
import { StyleSheet, Image, View } from "react-native";
import DefaultText from "./DefaultText";

const UserStreakRank = (props) => {
  const rank = props.rank;
  const getMedal = () => {
    switch (rank) {
      case 1:
        return (
          <Image
            style={styles.tinyLogo}
            source={require("../assets/medal_1.png")}
            resizeMode={"contain"}
          />
        );
      case 2:
        return (
          <Image
            style={styles.tinyLogo}
            source={require("../assets/medal_2.png")}
            resizeMode={"contain"}
          />
        );
      case 3:
        return (
          <Image
            style={styles.tinyLogo}
            source={require("../assets/medal_3.png")}
            resizeMode={"contain"}
          />
        );
      default:
        return (
          <Image
            style={styles.tinyLogo}
            source={require("../assets/medal_1.png")}
            resizeMode={"contain"}
          />
        );
    }
  };
  return (
    <View style={{ ...styles.containterStyle, ...props.containterStyle }}>
      {getMedal()}
      <DefaultText style={{ ...styles.text, ...props.textStyle }}>
        {props.userName}
      </DefaultText>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
  },
  containterStyle: {
    width: 100,
    alignItems: "center",
  },
  tinyLogo: {
    // width: "40%",
  },
});

export default UserStreakRank;
