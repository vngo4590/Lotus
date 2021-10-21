import React, {useState} from "react";
import { StyleSheet, Text, View, Switch } from "react-native";
import DefaultContainer from "../components/DefaultContainer";
import DefaultText from "../components/DefaultText";
import DefaultTitle from "../components/DefaultTitle";
import Card from "../components/Card";

// FCE6E1 light pink
// F4456F dark pink

const SettingsScreen = (props) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);

  return (
    <DefaultContainer style={styles.container}>
      <DefaultTitle style={styles.mainHeader}>Settings</DefaultTitle>
      <Card style={styles.cardReminder}>
        <View style={styles.cardReminderContent}>
          <DefaultText style={styles.cardText}>Daily Reminder:</DefaultText>
          <Switch
            trackColor={{ false: "#767577", true: "#FCE6E1" }}
            thumbColor={isEnabled ? "#F4456F" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={styles.switch}
          />
        </View>
        <View style={styles.cardReminderContent}>
          <DefaultText style={styles.cardText}>Sound Effects:</DefaultText>
          <Switch
            trackColor={{ false: "#767577", true: "#FCE6E1" }}
            thumbColor={isEnabled2 ? "#F4456F" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch2}
            value={isEnabled2}
          />
        </View>
      </Card>
    </DefaultContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 50,
  },
  mainHeader: {
    marginBottom: 30,
    marginTop: 75
  },
  cardText:{
    fontSize: 20,
    marginBottom: 10
  },
  cardReminder: {
    alignItems: "flex-start",
    height: 120,
    width: "100%",
    padding: 20
  },
  cardReminderContent:{
    flex: 2, 
    flexDirection: "row",
    flexWrap:'wrap',
    justifyContent: "space-between",
    height: 10,
    width: "100%",
    padding: 0, 

  }, 
  switch: {
    marginBottom: 0
  }

});
export default SettingsScreen;
