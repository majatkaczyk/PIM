import { StyleSheet, Text, View } from "react-native";
import React from "react";
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
import miniGameStyle from "./miniGameStyle";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { colors } from "../../globalStyles/colors";
import TabNavigator from "../../navigators/tabNavigator";
const MiniGameScreen = ({ navigation }) => {
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
    <View style={miniGameStyle.mainContainer}>
      <View style={miniGameStyle.contentContainer}>
        <View style={miniGameStyle.rowNavigationContainer}>
          <MaterialIcons
            name="arrow-back-ios"
            size={20}
            color={colors.fontColor}
          />
          <Text style={miniGameStyle.navigationText}>Back to converter</Text>
        </View>
        <Text style={miniGameStyle.header}>Mini game</Text>
        <View style={miniGameStyle.tabContainer}>
          <TabNavigator isGame={true} />
        </View>
        {/* <TouchableOpacity
          style={converterStyle.bigButton}
          onPress={() => navigation.push("MiniGame")}
        >
          <Text style={converterStyle.gameText}>Mini game</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

export default MiniGameScreen;

const styles = StyleSheet.create({});
