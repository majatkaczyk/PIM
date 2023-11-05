import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AsciiToText from "../components/converter/ascii-to-text/asciiToText";
import TextToAscii from "../components/converter/text-to-ascii/textToAscii";
import { NavigationContainer } from "@react-navigation/native";
import { colors } from "../globalStyles/colors";
const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: colors.darkBlue,
          tabBarInactiveTintColor: colors.inActiveColor,
          tabBarStyle: { borderTopLeftRadius: 10, borderTopRightRadius: 10 },
          tabBarIndicatorStyle: { backgroundColor: colors.darkBlue },
          tabBarLabelStyle: { fontFamily: "Poppins_400Regular", fontSize: 16 },
        }}
      >
        <Tab.Screen
          name="AsciiToText"
          component={AsciiToText}
          options={{ title: "ASCII to text" }}
        />
        <Tab.Screen
          name="TextToAscii"
          component={TextToAscii}
          options={{ title: "Text to ASCII" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});
