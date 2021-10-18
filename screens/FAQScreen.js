import React from "react";
import { StyleSheet, Text, View } from "react-native";

const FAQScreen = () => {
  return (
    <View style={stylesFAQ.faqContainer}>

        {/* Heading */}
        <Text>FAQ</Text>

        {/* Questions */}
        <View style={stylesFAQ.questionContainer}>
            <Text>How do I connect to a different Lotus?</Text>
            <Text>Navigate to your account page and press “leave lotus”</Text>
        </View>

        <View style={stylesFAQ.questionContainer}>
            <Text>How do I connect to a different Lotus?</Text>
            <Text>Navigate to your account page and press “leave lotus”</Text>
        </View>

    </View>
    );
};

const stylesFAQ = StyleSheet.create({
    faqContainer: {
        flex: 1,
        backgroundColor: "#fefefe",
        alignItems: "center",
        justifyContent: "center",
    },
    questionContainer:{
        marginTop: 2,
        textAlign: "center"
    },
    
  });


export default FAQScreen;
