import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ConverterScreen from "../components/converter/converterScreen";
import MiniGameScreen from "../components/mini-game/miniGameScreen";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Converter"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Converter" component={ConverterScreen} />
        <Stack.Screen name="MiniGame" component={MiniGameScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
