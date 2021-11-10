import React, { useCallback } from "react";
import { StyleSheet, View, FlatList, Dimensions } from "react-native";
import DefaultTitle from "../components/DefaultTitle";
import DefaultContainer from "../components/DefaultContainer";
import Card from "../components/Card";
import UserOnlineStatus from "../components/UserOnlineStatus";
import UserStreakRank from "../components/UserStreakRank";
import { USERS } from "../data/dummy-data";
import MainButton from "../components/MainButton.android";
import RenderColorMenu from "../components/RenderColorMenu";
import Constants from "expo-constants";
import { toggleReset } from "../store/actions/ColorActions";
import { useDispatch } from "react-redux";

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
  const RenderUserStreak = (itemData) => {
    return (
      <UserStreakRank
        userName={itemData.item.name}
        rank={itemData.index + 1}
        style={styles.containterStyle}
      />
    );
  };

  const dispatch = useDispatch();
  const resetColor = useCallback(() => {
    dispatch(toggleReset());
  }, [dispatch]);
  const onLeave = () => {
    resetColor();
    props.navigation.navigate("RegisterScreen2");
  };

  return (
    <View>
      <RenderColorMenu navigation={props.navigation} />
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
          {/* <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={userSort(3)}
            renderItem={RenderUserStreak}
            scrollEnabled={false}
            // numColumns={2}
            // columnWrapperStyle={styles.listStreakStyle}
            contentContainerStyle={styles.listStreakStyle}
          /> */}
          <View style={styles.listStreakStyle}>
            {userSort(3).map((item, index) => {
              const itemData = {
                item: item,
                index: index,
              };
              return (
                <View key={index}>
                  <RenderUserStreak item={item} index={index} />
                </View>
              );
            })}
          </View>
        </Card>
        <View style={styles.buttonCustom}>
          <MainButton onPress={onLeave}>Leave Account</MainButton>
        </View>
      </DefaultContainer>
    </View>
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
    height: Dimensions.get("window").height * 0.3,
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
    height:
      Dimensions.get("window").height < 700
        ? Dimensions.get("window").height * 0.1
        : Dimensions.get("window").height * 0.15,
  },
});
export default ProfileScreen;
