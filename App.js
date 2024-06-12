import React from "react";
import { StyleSheet, View } from "react-native";

import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

import Home from "./screens/home.js";
import "react-native-gesture-handler";

const Tab = createMaterialBottomTabNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <StatusBar hidden={true} />
      <Home style={styles.home} />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
        shifting={true}
        tabBarInactiveTintColor="#000"
        barStyle={{
          backgroundColor: "#fff",
          borderTopColor: "#000",
          borderTopWidth: 2,
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <Feather name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Meditate"
          component={HomeScreen}
          options={{
            tabBarLabel: "Meditate",
            tabBarIcon: ({ color }) => (
              <Ionicons name="flower-outline" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Chat"
          component={HomeScreen}
          options={{
            tabBarLabel: "Chat",
            tabBarIcon: ({ color }) => (
              <Ionicons name="chatbubble-outline" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Logs"
          component={HomeScreen}
          options={{
            tabBarLabel: "Mood Logs",
            tabBarIcon: ({ color }) => (
              <AntDesign name="profile" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    height: "100%",
    width: "100%",
    backgroundColor: "#fff",
  },

  home: {
    flex: 1,
    flexGrow: 1,
    height: "100px",
  },
});
