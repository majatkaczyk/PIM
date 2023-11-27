import { Text, View } from "react-native";
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
import globalContentStyle from "../../globalStyles/globalContentStyle";
import { Pressable } from "react-native";
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
      <View style={globalContentStyle.contentContainer}>
        <Text style={converterStyle.header}>ASCII converter</Text>
        <View style={globalContentStyle.tabContainer}>
          <TabNavigator isGame={false} />
        </View>
        <Pressable
          style={converterStyle.bigButton}
          onPress={() => navigation.push("MiniGame")}
        >
          <Text style={converterStyle.gameText}>Mini game</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ConverterScreen;
