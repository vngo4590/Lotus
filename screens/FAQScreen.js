import React, { Component } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import DefaultTitle from "../components/DefaultTitle";
import Card from "../components/Card";
import Constants from "expo-constants";
import * as Animatable from "react-native-animatable";
import Accordion from "react-native-collapsible/Accordion";

const CONTENT = [
  {
    title: "How do I connect to a different Lotus?",
    content: "Navigate to your account page and press “leave lotus”",
  },
  {
    title: "What does the colour on the main \npage mean?",
    content: "This is the colour of the day chosen by another family member",
  },
  {
    title: "How do I choose the colour of \nthe day?",
    content:
      "When it is your turn to choose, the dropper icon will appear on the top left corner of all screens. Press the dropper icon to be taken to the choose colour page.",
  },
  {
    title: "When do I choose the colour of \nthe day?",
    content:
      "You will be notified when it is your turn and the main page will also let you know",
  },
  {
    title: "What do the icons on the pick \ncolour page mean?",
    content:
      "These icons are used to increase the accessibility of the app and cater to those who are colourblind",
  },
  {
    title: "How does the streak system work?",
    content:
      "You receive daily streaks on days you consecutively use/check the app",
  },
  {
    title: "I chose the wrong colour. How do I \nchange it?",
    content: "The chosen colour cannot be changed",
  },
];

export default class NewFAQScreen extends Component {
  state = {
    activeSections: [],
    collapsed: true,
    multipleSelect: true,
  };

  toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  setSections = (sections) => {
    this.setState({
      activeSections: sections.includes(undefined) ? [] : sections,
    });
  };

  renderHeader = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={400}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        <Text
          style={
            (styles.headerText,
            isActive ? styles.activeText : styles.headerText)
          }
        >
          {section.title}{" "}
        </Text>
        <Text
          style={
            (styles.headerText,
            isActive ? styles.activeText : styles.headerText)
          }
        >
          ▼
        </Text>
      </Animatable.View>
    );
  };

  renderContent(section, _, isActive) {
    return (
      <Animatable.View
        duration={400}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        <Animatable.Text
          style={{ fontSize: 16, paddingLeft: 4 }}
          animation={isActive ? "fadeIn" : undefined}
        >
          {section.content}
        </Animatable.Text>
      </Animatable.View>
    );
  }

  render() {
    const { multipleSelect, activeSections } = this.state;

    return (
      <View style={styles.container}>
        <DefaultTitle style={styles.title}>FAQ</DefaultTitle>

        <Card style={styles.cardUserContainer}>
          <ScrollView>
            <Accordion
              activeSections={activeSections}
              sections={CONTENT}
              touchableComponent={TouchableOpacity}
              expandMultiple={multipleSelect}
              renderHeader={this.renderHeader}
              renderContent={this.renderContent}
              duration={400}
              onChange={this.setSections}
              renderAsFlatList={false}
            />
          </ScrollView>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Constants.statusBarHeight * 2,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
  },
  header: {
    backgroundColor: "white",
    padding: 20,
    paddingLeft: 0,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerText: {
    textAlign: "left",
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
  },
  content: {
    padding: 20,
    paddingLeft: 0,
    backgroundColor: "white",
  },
  active: {
    backgroundColor: "white",
  },
  inactive: {
    backgroundColor: "white",
  },
  activeText: {
    color: "#F0466F",
    textAlign: "left",
    fontSize: 16,
    fontWeight: "bold",
  },
  cardUserContainer: {
    alignItems: "center",
    height: "70%",
    width: "90%",
    justifyContent: "center",
    marginLeft: 20,
  },
});
