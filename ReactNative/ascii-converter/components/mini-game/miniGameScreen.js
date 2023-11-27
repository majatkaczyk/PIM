import { Text, View } from "react-native";
import React, { useState, useEffect } from "react";
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
import globalContentStyle from "../../globalStyles/globalContentStyle";
import { Pressable } from "react-native";
const MiniGameScreen = ({ navigation }) => {
  const [randomAscii, setRandomAscii] = useState(null);
  const [userAnswer, setUserAnswer] = useState("");
  const [result, setResult] = useState("");
  useEffect(() => {
    generateRandomAscii();
  }, []);
  const generateRandomAscii = () => {
    const randomAsciiValue = Math.floor(Math.random() * (125 - 33 + 1)) + 33; // Zakres od 33 do 125
    setRandomAscii(randomAsciiValue);
    setUserAnswer("");
    setResult("");
  };

  const checkAnswer = () => {
    const inputText = userAnswer.trim();
    const asciiValue = inputText.length === 1 ? inputText.charCodeAt(0) : NaN;
    if (!isNaN(asciiValue) && asciiValue === randomAscii) {
      setResult("Correct!");
    } else {
      setResult("Incorrect. Try again.");
    }
  };
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
      <View style={globalContentStyle.contentContainer}>
        <Pressable
          style={miniGameStyle.rowNavigationContainer}
          onPress={() => navigation.pop()}
        >
          <MaterialIcons
            name="arrow-back-ios"
            size={20}
            color={colors.fontColor}
          />
          <Text style={miniGameStyle.navigationText}>Back to converter</Text>
        </Pressable>
        <Text style={miniGameStyle.header}>Mini game</Text>
        <View style={miniGameStyle.tabContainer}>
          <TabNavigator isGame={true} />
        </View>
      </View>
    </View>
  );
};

export default MiniGameScreen;
