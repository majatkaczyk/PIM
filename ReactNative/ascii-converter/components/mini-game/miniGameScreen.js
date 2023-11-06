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
import { TouchableOpacity } from "react-native-gesture-handler";

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
        <TouchableOpacity
          style={miniGameStyle.rowNavigationContainer}
          onPress={() => navigation.pop()}
        >
          <MaterialIcons
            name="arrow-back-ios"
            size={20}
            color={colors.fontColor}
          />
          <Text style={miniGameStyle.navigationText}>Back to converter</Text>
        </TouchableOpacity>
        <Text style={miniGameStyle.header}>Mini game</Text>
        <View style={miniGameStyle.tabContainer}>
          <TabNavigator isGame={true} />
        </View>
        <TouchableOpacity style={miniGameStyle.bigButton}>
          <Text style={miniGameStyle.gameText}>Check answer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MiniGameScreen;

const styles = StyleSheet.create({});
