import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import converterStyle from "./converterStyle";
import TabNavigator from "../../navigators/tabNavigator";
import {
  useFonts,
  Nunito_400Regular,
  Nunito_500Medium,
} from "@expo-google-fonts/nunito";
import {
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";
const ConverterScreen = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_500Medium,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
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
        <TouchableOpacity
          style={converterStyle.bigButton}
          onPress={() => navigation.push("MiniGame")}
        >
          <Text style={converterStyle.gameText}>Mini game</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ConverterScreen;

const styles = StyleSheet.create({});
