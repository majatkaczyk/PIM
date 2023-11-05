import { StyleSheet, Text, View } from "react-native";
import React from "react";
import converterStyle from "./converterStyle";
import TabNavigator from "../../navigators/tabNavigator";
import AsciiToText from "./ascii-to-text/asciiToText";
import { Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  useFonts,
  Nunito_400Regular,
  Nunito_500Medium,
} from "@expo-google-fonts/nunito";
const ConverterScreen = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_500Medium,
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={converterStyle.mainContainer}>
      <View style={converterStyle.contentContainer}>
        <Text style={converterStyle.header}>ASCII converter</Text>
        <View style={converterStyle.tabContainer}>
          <TabNavigator></TabNavigator>
        </View>
      </View>
    </View>
  );
};

export default ConverterScreen;

const styles = StyleSheet.create({});
