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

                    <Pressable onPress={() => setSelected(!selected)}
                        style={{ 
                            backgroundColor: selected ? "#FCE6E1" : "transparent", 
                            padding: 15, 
                            width: 300,
                            borderRadius: 10
                        }}
                    >
                        <Text onPress={() => setSelected(!selected)} style={{

                            color: selected ? "#F4456F" : "black",
                            textAlign: "center",
                            fontSize: 35
                            
                        }}>English</Text>
                    </Pressable>

                    <Pressable 
                        style={{ 
                            backgroundColor:"transparent", 
                            padding: 15, 
                            width: 300}}
                     >
                        <Text style={styles.buttonText}>中文</Text>
                    </Pressable>

                    <Pressable 
                        style={{ 
                            backgroundColor: "transparent", 
                            padding: 15, 
                            width: 300}}
                    >
                        <Text style={styles.buttonText}>español</Text>
                    </Pressable>

                    <Pressable 
                        style={{ 
                            backgroundColor: "transparent", 
                            padding: 15, 
                            width: 300}}
                    >
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
        fontSize: 50,
        fontWeight: "bold",
        marginBottom:0,
        marginTop: 120,
        textAlign: "justify",
  },
  buttonContainer:{
        margin: 10,
        padding: 30,
        borderColor: "black"

  },
  buttonLanguage:{
      marginTop: 50,
      fontSize: 40,
  },
  buttonText:{
      color: "black",
      textAlign: "center",
      fontSize: 35
  }
});

export default RegisterScreen;
