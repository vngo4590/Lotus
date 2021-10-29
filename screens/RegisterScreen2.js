import React, { useState } from "react";
import { StyleSheet, ScrollView, View, Button, Pressable, Text, TextInput } from "react-native";
import DefaultText from "../components/DefaultText";
import DefaultTitle from "../components/DefaultTitle";
import DefaultContainer from "../components/DefaultContainer";

const RegisterScreen2 = () => {

    const [text, onChangeText] = React.useState(" ");
    const [selected, setSelected] = useState(false);


    
    return (
        <ScrollView>

        <DefaultContainer style={styles.registerContainer}>

                <DefaultTitle style={styles.registerHeading}>What is your name?</DefaultTitle>


                <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                />


                <Pressable onPress={() => setSelected(!selected)}
                        style={{
                            backgroundColor: selected ? "#FCE6E1" : "transparent",  
                            padding: 10, 
                            width: 150,
                            borderRadius: 50,
                            borderWidth: 3,
                        }}
                    >
                        <Text onPress={() => setSelected(!selected)} style={{

                            color: selected ? "#F4456F" : "black",
                            textAlign: "center",
                            fontSize: 16
                            
                        }}>Enter</Text>
                </Pressable>

                

            
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
        fontSize: 40,
        fontWeight: "bold",
        marginBottom:20,
        marginTop: 120,
        textAlign: "center",
  },
  input: {
    height: 50,
    width: 325,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginBottom: 100,
    borderRadius: 10,
    backgroundColor: "lightgrey",
    borderWidth: 0
  },
});

export default RegisterScreen2;
