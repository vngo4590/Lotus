import React, { useState } from "react";
import { StyleSheet, ScrollView, View, Button, Pressable, Text } from "react-native";
import DefaultText from "../components/DefaultText";
import DefaultTitle from "../components/DefaultTitle";
import DefaultContainer from "../components/DefaultContainer";

const RegisterScreen = () => {

    const [selected, setSelected] = useState(false);


    
    return (
        <ScrollView>

        <DefaultContainer style={styles.registerContainer}>
            {/* Heading */}

                <DefaultTitle style={styles.registerHeading}>Language</DefaultTitle>

                <DefaultContainer style={styles.buttonContainer}>

                    <Pressable style={styles.buttonContainer}  onPress={() => setSelected(!selected)}
                        style={{ backgroundColor: selected ? "red" : "transparent" }}
                    >
                        <Text style={styles.buttonText}>English</Text>
                    </Pressable>

                    <Pressable style={styles.buttonContainer} >
                        <Text style={styles.buttonText}>中文</Text>
                    </Pressable>

                    <Pressable style={styles.buttonContainer} >
                        <Text style={styles.buttonText}>español</Text>
                    </Pressable>

                    <Pressable style={styles.buttonContainer}  >
                        <Text style={styles.buttonText}>Hindi</Text>
                    </Pressable>


                </DefaultContainer>

        </DefaultContainer>
        </ScrollView>
    );
};

const styles= StyleSheet.create({
  registerContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        margin: 40,
        marginTop: 50,
        marginBottom: 60,
  },
  registerHeading: {
        fontSize: 35,
        fontWeight: "bold",
        marginBottom: 30,
        textAlign: "justify",
  },
  buttonContainer:{
        margin: 40,
        padding: 30,
        borderColor: "black"

  },
  buttonLanguage:{
      marginTop: 50,
      fontSize: 50,
  },
  buttonText:{
      color: "black"
  }
});

export default RegisterScreen;
