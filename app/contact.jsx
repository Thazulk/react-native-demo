import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Contact = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Page</Text>
      <View style={styles.link}>
        <Link href="/">Home Page</Link>
      </View>
    </View>
  );
};

export default Contact;

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
