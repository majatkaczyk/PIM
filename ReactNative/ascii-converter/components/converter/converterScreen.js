import { StyleSheet, Text, View } from "react-native";
import React from "react";
import converterStyle from "./converterStyle";
import TabNavigator from "../../navigators/tabNavigator";
import AsciiToText from "./ascii-to-text/asciiToText";
import { Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

const ConverterScreen = ({ navigation }) => {
  return (
    <View style={converterStyle.mainContainer}>
      <View style={converterStyle.contentContainer}>
        <Text>ASCII converter</Text>
        <TabNavigator></TabNavigator>
      </View>
    </View>
  );
};

export default ConverterScreen;

const styles = StyleSheet.create({});
