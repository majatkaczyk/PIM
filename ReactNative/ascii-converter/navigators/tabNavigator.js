import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AsciiToText from "../components/converter/asciiToText";
import TextToAscii from "../components/converter/textToAscii";
import AsciiToTextGame from "../components/mini-game/asciiToText";
import TextToAsciiGame from "../components/mini-game/textToAscii";
import { colors } from "../globalStyles/colors";
const Tab = createMaterialTopTabNavigator();

const TabNavigator = ({ isGame }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.darkBlue,
        tabBarInactiveTintColor: colors.inActiveColor,
        tabBarStyle: { borderTopLeftRadius: 10, borderTopRightRadius: 10 }, //there is smth like shadow :(((
        tabBarIndicatorStyle: { backgroundColor: colors.darkBlue },
        tabBarLabelStyle: {
          fontFamily: "Poppins_400Regular",
          fontSize: 16,
        },
      }}
    >
      <Tab.Screen
        name="AsciiToText"
        component={isGame ? AsciiToTextGame : AsciiToText}
        options={{ title: "ASCII to text" }}
      />
      <Tab.Screen
        name="TextToAscii"
        component={isGame ? TextToAsciiGame : TextToAscii}
        options={{ title: "Text to ASCII" }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
