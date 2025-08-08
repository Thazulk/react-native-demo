import { StyleSheet } from "react-native";
import { Link } from "expo-router";
import React from "react";

// Themed components
import ThemedView from "../components/ThemedView";
import ThemedLogo from "../components/ThemedLogo";
import Spacer from "../components/Spacer";
import ThemedText from "../components/ThemedText";

const Home = () => (
  <ThemedView style={styles.container}>
    <ThemedLogo />
    <Spacer height={20} />
    <ThemedText style={styles.title} title={true}>
      The Number 1
    </ThemedText>
    <Spacer height={10} />
    <ThemedText>Reading List App</ThemedText>
    <Spacer />
    <Link href="/login" style={styles.link}>
      <ThemedText>Login</ThemedText>
    </Link>
    <Link href="/register" style={styles.link}>
      <ThemedText>Register</ThemedText>
    </Link>
  </ThemedView>
);

export default Home;

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
