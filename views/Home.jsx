import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Home(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Thank you and welcome {props.location.state.username}
      </Text>
      <TouchableOpacity>
        <Text>Click Opacity</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "gray",
    fontSize: 20,
    padding: 10,
  },
});
