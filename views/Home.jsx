import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Home(props) {
  return (
    <View style={styles.container}>
      <Text>Thank you and welcome</Text>
      <TouchableOpacity
        onPress={() => props.history.push("/Login", { name: "Sofiane" })}
      >
        <Text>Click me</Text>
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
});
