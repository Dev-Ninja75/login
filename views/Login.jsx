import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function Login(props) {
  const [username, setUsername] = useState(
    location.state ? location.state.username : ""
  );
  const [password, setPassword] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (username.length >= 5 && password.length >= 5) {
      setIsDisabled(false);
      setErrorMsg("");
    } else if (username.length >= 1 && password.length >= 1) {
      setErrorMsg("Your username and password must be at least 5 characters.");
    }
  }, [username, password]);

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
        {errorMsg}
        Please try again
      </Text>
      <Button
        onPress={() => props.history.push("/Home", { username })}
        disabled={isDisabled}
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

  errorMsg: {
    color: "orange",
    fontWeight: "bold",
    textAlign: "center",
  },
});
