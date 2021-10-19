import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import DefaultText from "../components/DefaultText";
import DefaultTitle from "../components/DefaultTitle";
import DefaultContainer from "../components/DefaultContainer";
const FAQScreen = () => {
  return (
    <ScrollView>
      <DefaultContainer style={stylesFAQ.faqContainer}>
        {/* Heading */}
        <DefaultTitle style={stylesFAQ.faqHeading}>FAQ</DefaultTitle>

        <DefaultText style={stylesFAQ.faqQuestions}>
          How do I connect to a different Lotus?
        </DefaultText>
        <DefaultText style={stylesFAQ.faqAnswer}>
          Navigate to your account page and press “leave lotus”
        </DefaultText>

        <DefaultText style={stylesFAQ.faqQuestions}>
          What does the colour on the main page mean?
        </DefaultText>
        <DefaultText style={stylesFAQ.faqAnswer}>
          This is the colour of the day chosen by another family member
        </DefaultText>

        <DefaultText style={stylesFAQ.faqQuestions}>
          How do I choose the colour of the day?
        </DefaultText>
        <DefaultText style={stylesFAQ.faqAnswer}>
          When it is your turn to choose, the dropper icon will appear on the
          top left corner of all screens. Press the dropper icon to be taken to
          the choose colour page.
        </DefaultText>

        <DefaultText style={stylesFAQ.faqQuestions}>
          When do I choose the colour of the day?
        </DefaultText>
        <DefaultText style={stylesFAQ.faqAnswer}>
          You will be notified when it is your turn and the main page will also
          let you know
        </DefaultText>

        <DefaultText style={stylesFAQ.faqQuestions}>
          What do the icons on the pick colour page mean?
        </DefaultText>
        <DefaultText style={stylesFAQ.faqAnswer}>
          These icons are used to increase the accessibility of the app and
          cater to those who are colourblind
        </DefaultText>
      </DefaultContainer>
    </ScrollView>
  );
};

const stylesFAQ = StyleSheet.create({
  faqContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 40,
    marginTop: 50,
    marginBottom: 60,
  },
  faqHeading: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "justify",
  },
  faqQuestions: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  faqAnswer: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 30,
  },
});

export default FAQScreen;
