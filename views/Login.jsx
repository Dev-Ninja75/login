import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.centeredView}>
      <TextInput
        style={styles.input}
        onChangeText={setUsername}
        value={username}
        placeholder="Your username"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Your password"
        secureTextEntry={true}
      />
      <Text style={styles.text}>
        Please log in with your username and password
      </Text>
      <Button
        onPress={() => {
          props.history.push("/Home", { username });

          console.log("data: ", { username, password });
        }}
        title="Login"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },

  input: {
    height: 40,
    width: "90%",
    margin: 12,
    borderWidth: 1,
    padding: 20,
  },

  text: {
    color: "gray",
    fontSize: 20,
    padding: 20,
  },
});
