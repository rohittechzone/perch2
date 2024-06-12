import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  useWindowDimensions,
  ScrollView,
  Pressable,
  Modal,
  Keyboard,
  ActivityIndicator,
} from "react-native";

import { useFonts } from "expo-font";
import { Divider } from "@rneui/themed";

import AppHeader from "../components/header.js";

export default function Home() {
  const [fontsLoaded] = useFonts({
    Hostania: require("../assets/fonts/Hostania.ttf"),
  });

  const [username, setUsername] = useState("Rohit");

  return (
    <View style={styles.container}>
      <AppHeader />
      <Text style={{ fontFamily: "Hostania", fontSize: 25, top: 25, left: 25 }}>
        Hey {username}
      </Text>
      <View style={{ minHeight: 200, overflow: "hidden" }}>
        <View style={styles.tile}>
          <View style={{ height: 100 }}>
            <View style={[styles.small_container, styles.shadow]}>
              <View style={styles.container2}>
                <Text style={{ fontSize: 65, alignSelf: "center" }}>😁</Text>
                <Text style={[styles.text, { fontSize: 12, bottom: 5 }]}>
                  Happy
                </Text>
              </View>
            </View>
            <Text style={[styles.text, { fontSize: 13, top: 5 }]}>Mood</Text>
          </View>

          <View style={{ height: 100 }}>
            <View style={[styles.small_container, styles.shadow]}>
              <View style={styles.container3}>
                <Text style={{ fontSize: 65, alignSelf: "center" }}>😁</Text>
                <Text style={[styles.text, { fontSize: 12, bottom: 5 }]}>
                  1/5 Hrs
                </Text>
              </View>
            </View>
            <Text style={styles.text2}>Hours Meditated</Text>
          </View>
          
          <View style={{ height: 100 }}>
            <View style={[styles.small_container, styles.shadow]}>
              <View style={styles.container4}>
                <Text style={{ fontSize: 65, alignSelf: "center" }}>😁</Text>
                <Text style={[styles.text, { fontSize: 12, bottom: 5 }]}>
                  2 Hrs
                </Text>
              </View>
            </View>
            <Text style={styles.text2}>Mindless Scrolling</Text>
          </View>
        </View>
      </View>

      {/* Mood summary */}
      <View style={{ paddingLeft: 25, paddingRight: 25 }}>
        <View style={[styles.big_container, styles.shadow]}>
          <Text style={[styles.text, { fontSize: 12, top: 5 }]}>
            Your daily mood summary
          </Text>
          <Text style={{ fontSize: 65, alignSelf: "center" }}>😐</Text>
          <Text style={[styles.text, { fontSize: 8, top: -5 }]}>Tap me!</Text>
        </View>
      </View>

      {/* Quick Shortcut buttons */}
      <View style={{ padding: 25 }}>
        <View style={[styles.big_container, styles.shadow]}></View>
      </View>

      {/* Extra features */}
      <View style={{ paddingLeft: 25, paddingRight: 25 }}>
        <View style={[styles.big_container, styles.shadow]}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCF9E2",
  },

  container2: {
    flexDirection: "column",
    alignSelf: "center",
    justifyContent: "space-between",
    flex: 1,
  },

  container3: {
    flexDirection: "column",
    alignSelf: "center",
    justifyContent: "space-between",
    flex: 1,
  },

  container4: {
    flexDirection: "column",
    alignSelf: "center",
    justifyContent: "space-between",
    flex: 1,
  },

  stats_container: {
    top: 25,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },

  tile: {
    height: 100,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "space-between",
    padding: 25,
    paddingTop: 45,
  },

  small_container: {
    height: 100,
    width: 100,
    backgroundColor: "#e8def7",
    borderRadius: 19,
  },

  big_container: {
    height: 100,
    width: "100%",
    alignSelf: "center",
    backgroundColor: "#e8def7",
    borderRadius: 19,
    position: "relative",
  },

  shadow: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  text: {
    alignSelf: "center",
    fontFamily: "Hostania",
  },

  text2: {
    fontSize: 13,
    top: 5,
    alignSelf: "center",
    fontFamily: "Hostania",
    width: 100,
    textAlign: "center",
  },
});
