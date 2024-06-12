import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

import AppHeader from "../components/header.js";

export default function Profile() {
  return (
    <View style={styles.container}>
      <AppHeader />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCF9E2",
  },
});
