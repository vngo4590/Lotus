import React from "react";
import { StyleSheet, Text, View } from "react-native";

const FAQScreen = () => {
  return (
    <View style={stylesFAQ.faqContainer}>

        {/* Heading */}
        <Text style={stylesFAQ.faqHeading}>FAQ</Text>

        <Text style={stylesFAQ.faqQuestions}>How do I connect to a different Lotus?</Text>
        <Text style={stylesFAQ.faqAnswer}>Navigate to your account page and press “leave lotus”</Text>       

        <Text style={stylesFAQ.faqQuestions}>What does the colour on the main page mean?</Text>
        <Text style={stylesFAQ.faqAnswer}>This is the colour of the day chosen by another family member</Text>

        <Text style={stylesFAQ.faqQuestions}>How do I choose the colour of the day?</Text>
        <Text style={stylesFAQ.faqAnswer}>When it is your turn to choose, the dropper icon
        will appear on the top left corner of all screens.
        Press the dropper icon to be taken to the choose colour page.</Text>

        <Text style={stylesFAQ.faqQuestions}>When do I choose the colour of the day?</Text>
        <Text style={stylesFAQ.faqAnswer}>You will be notified when it is your turn and
        the main page will also let you know</Text>

        <Text style={stylesFAQ.faqQuestions}>What do the icons on the pick colour page mean?</Text>
        <Text style={stylesFAQ.faqAnswer}>These icons are used to increase the accessibility of the app and cater to those 
        who are colourblind</Text>
        
    </View>
    );
};

const stylesFAQ = StyleSheet.create({
    faqContainer: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        padding: 40,
        paddingTop: 5
    },
    faqHeading:{
        fontSize: 35, 
        fontWeight: "bold",
        marginBottom: 30,
        textAlign:"justify"
    },
    faqQuestions:{
        fontWeight:"bold",
        fontSize: 18,
        textAlign:"center"
    }, 
    faqAnswer:{
        textAlign: "center",
        fontSize: 18,
        marginBottom: 30
    }
    
  });


export default FAQScreen;
