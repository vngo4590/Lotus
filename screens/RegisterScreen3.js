import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Button,
  Pressable,
  Text,
  TextInput,
} from "react-native";
import DefaultText from "../components/DefaultText";
import DefaultTitle from "../components/DefaultTitle";
import DefaultContainer from "../components/DefaultContainer";

const RegisterScreen3 = ({ navigation }) => {
  const [text, onChangeText] = React.useState(" ");
  const [selected, setSelected] = useState(false);

  return (
    <ScrollView>
      <DefaultContainer style={styles.registerContainer}>
        <DefaultTitle style={styles.registerHeading}>
          Enter your unique code
        </DefaultTitle>

        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />

        <Pressable
          onPressIn={() => setSelected(!selected)}
          style={{
            backgroundColor: selected ? "#FCE6E1" : "transparent",
            borderColor: selected ? "#F4456F" : "black",
            padding: 10,
            width: 150,
            borderRadius: 50,
            borderWidth: 3,
          }}
          onPress={() => navigation.navigate("Bottom Menu")}
        >
          <Text
            onPressIn={() => setSelected(!selected)}
            style={{
              color: selected ? "#F4456F" : "black",
              textAlign: "center",
              fontSize: 16,
            }}
          >
            Connect
          </Text>
        </Pressable>
      </DefaultContainer>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
    marginBottom: 20,
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
    borderWidth: 0,
  },
});

export default RegisterScreen3;
