import { Link } from "expo-router";
import { StyleSheet, View } from "react-native";
import React from "react";
import ThemedView from "../components/ThemedView";
import ThemedText from "../components/ThemedText";

const About = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>About Page</ThemedText>
      <View style={styles.link}>
        <Link href="/">
          <ThemedText>Home Page</ThemedText>
        </Link>
      </View>
    </ThemedView>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
});
