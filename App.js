import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app! NOWWW</Text>
      <Text> Let make some amazing things now please </Text>
      <MaterialCommunityIcons
        name="swim"
        color="black"
        size={100}
        backgroundColor="blue"
      />
      <MaterialCommunityIcons
        name="swim"
        color="black"
        size={100}
        backgroundColor="blue"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
