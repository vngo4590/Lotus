import React from "react";
import { StyleSheet, View, FlatList, Dimensions } from "react-native";
import DefaultText from "../components/DefaultText";
import DefaultTitle from "../components/DefaultTitle";
import DefaultContainer from "../components/DefaultContainer";
import Card from "../components/Card";
import UserOnlineStatus from "../components/UserOnlineStatus";
import UserStreakRank from "../components/UserStreakRank";
import { USERS } from "../data/dummy-data";
import MainButton from "../components/MainButton.android";
import Colors from "../constants/Colors";
import Constants from "expo-constants";
function userSort(n) {
  let userSortedList = [];
  // for (int i=0) {
  //   userSortedList.push(u);
  // }
  USERS.map((u) => userSortedList.push(u));
  userSortedList.sort((a, b) => {
    return b.streak - a.streak;
  });
  return userSortedList.slice(0, n);
}
const ProfileScreen = (props) => {
  const renderUser = (itemData) => {
    return (
      <UserOnlineStatus
        active={itemData.item.active}
        userName={itemData.item.name}
      />
    );
  };
  // console.log(userSort(3));
  const renderUserStreak = (itemData) => {
    return (
      <UserStreakRank
        userName={itemData.item.name}
        rank={itemData.index + 1}
        style={styles.containterStyle}
      />
    );
  };
  return (
    <DefaultContainer style={styles.container}>
      <DefaultTitle style={styles.mainHeader}>My Account</DefaultTitle>
      <Card style={styles.cardUserContainer}>
        <DefaultTitle style={styles.cardHeader}>Connections</DefaultTitle>
        {/* <View style={styles.userList}>
          
        </View> */}
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={USERS}
          renderItem={renderUser}
          numColumns={2}
          columnWrapperStyle={styles.listUserStyle}
          // contentContainerStyle={styles.listUserStyle}
        />
      </Card>
      <Card
        style={{ ...styles.cardUserContainer, ...styles.cardStreakContainer }}
      >
        <DefaultTitle style={styles.cardHeader}>Streak Podium</DefaultTitle>
        {/* <UserStreakRank userName={"Hannah"} /> */}
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={userSort(3)}
          renderItem={renderUserStreak}
          // numColumns={2}
          // columnWrapperStyle={styles.listStreakStyle}
          contentContainerStyle={styles.listStreakStyle}
        />
      </Card>
      <View style={styles.buttonCustom}>
        <MainButton>Leave Account</MainButton>
      </View>
    </DefaultContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1,
    // marginTop: 50,
    paddingTop: Constants.statusBarHeight,
  },
  mainHeader: {
    marginBottom: 30,
  },
  cardUserContainer: {
    alignItems: "flex-start",
    height: 250,
    width: "100%",
  },
  cardStreakContainer: {
    marginVertical: 20,
    height: 150,
  },
  userList: {
    alignItems: "center",
    width: "100%",
  },
  cardHeader: {
    fontSize: 20,
    marginBottom: 20,
  },
  listUserStyle: {
    // width: "100%",
    // justifyContent: "space-between",
    // alignContent: "stretch",
    // backgroundColor: "green",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "flex-start",
  },
  listStreakStyle: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    // alignContent: "space-between",
  },
  containterStyle: {
    width: 200,
  },
  buttonCustom: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: Dimensions.get("window").height > 600 ? 100 : 50,
    // backgroundColor: Colors.greenColor,
  },
});
export default ProfileScreen;
