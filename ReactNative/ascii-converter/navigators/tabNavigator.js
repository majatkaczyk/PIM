import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AsciiToText from "../components/converter/ascii-to-text/asciiToText";
import TextToAscii from "../components/converter/text-to-ascii/textToAscii";
import { NavigationContainer } from "@react-navigation/native";
const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="AsciiToText" component={AsciiToText} />
        <Tab.Screen name="TextToAscii" component={TextToAscii} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});
