import React, {useState} from "react";
import { StyleSheet, Text, View, Switch, Dimensions } from "react-native";
import {Picker} from '@react-native-picker/picker';
import DefaultContainer from "../components/DefaultContainer";
import DefaultText from "../components/DefaultText";
import DefaultTitle from "../components/DefaultTitle";
import Card from "../components/Card";
import MainButton from "../components/MainButton.android";


// FCE6E1 light pink
// F4456F dark pink

const SettingsScreen = (props) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);

  const [selectedValue, setSelectedValue] = useState("java");

  return (
    <DefaultContainer style={styles.container}>

      <DefaultTitle style={styles.mainHeader}>Settings</DefaultTitle>

      {/* ======== REMINDER SECTION ==========*/}
      <Card style={styles.cardReminder}>

        {/* -daily reminder-*/}
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

        {/* -sound effects- */}
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

      {/* ======== ADDITIONAL SETTINGS SECTION ==========*/}
      <Card style={styles.cardAdditionalSettings}>

        {/* -LANGUAGE-*/}
        <View style={styles.cardReminderContent}>
          <DefaultText style={styles.cardText2}>Language:</DefaultText>

          <View style={styles.dropdownContainer}>
            <Picker
              selectedValue={selectedValue}
              style={styles.dropdown}
              onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
              <Picker.Item label="English" value="EN" />
              <Picker.Item label="Chinese" value="CN" />
              <Picker.Item label="Spanish" value="ES" />
              <Picker.Item label="Hindi" value="HI" />

            </Picker>
          </View>
        </View>

        {/* -who gets to choose- */}
        <View style={styles.cardReminderContent}>
          <DefaultText style={styles.cardText2}>Colour Picker:</DefaultText>

          <View style={styles.dropdownContainer}>
            <Picker
              selectedValue={selectedValue}
              style={styles.dropdown}
              onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
              <Picker.Item label="Elderly" value="Elderly" />
              <Picker.Item label="Everyone" value="Everyone" />

            </Picker>
          </View>
        </View>

        {/* -FREQUENCY-*/}
        <View style={styles.cardReminderContent}>
          <DefaultText style={styles.cardText2}>Frequency:</DefaultText>

          <View style={styles.dropdownContainer}>
            <Picker
              selectedValue={selectedValue}
              style={styles.dropdown}
              onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
              <Picker.Item label="Daily" value="Daily" />
              <Picker.Item label="Every 2 days" value="Every 2 days" />
              <Picker.Item label="Weekly" value="Weekly" />
            </Picker>
          </View>
        </View>

        {/* -ADDITIONAL TEXTS-*/}
        <View style={styles.additionalInfoContainer}>
          <Text style={styles.additionalText}>FAQ and Support</Text>
          <Text style={styles.additionalText}>Privacy Policy</Text>
        </View>
        
      </Card>

        {/* -APPLY CHANGES BUTTON-*/}
      <View style={styles.buttonCustom}>
        <MainButton>Apply Changes</MainButton>
      </View>


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
    padding: 20,
    marginBottom: 30
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
  },
  cardAdditionalSettings:{
    height: 300,
    width: "100%"
  },
  dropdownContainer:{

    alignItems:"center",
    borderRadius: 25,
    borderWidth: 1,

  },
  dropdown:{
    width: 130,
    height: 40,
    alignContent: "center", 
    borderWidth: 1,
    paddingLeft: 20,
    fontSize: 10
  },
  cardText2:{
    fontSize: 20,
    marginTop: 3
  }, 
  additionalText:{
    textAlign: "left",
    marginBottom: 10,
    textDecorationLine: 'underline'
  },
  additionalInfoContainer:{
    width: "100%", 
    marginBottom: 20
  }, 

  buttonCustom:{
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: Dimensions.get("window").height > 600 ? 100 : 50,
  }

});
export default SettingsScreen;
