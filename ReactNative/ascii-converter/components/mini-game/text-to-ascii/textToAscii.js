import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  TextInput,
} from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import miniGameStyle from "../miniGameStyle";
const TextToAsciiGame = () => {
  return (
    <View style={miniGameStyle.tabContentStyle}>
      <Text style={miniGameStyle.label}>Guess the ASCII decimal number:</Text>
      <View style={miniGameStyle.outputContainer}></View>
      <Text style={miniGameStyle.label}>Your answer:</Text>
      <SafeAreaView style={miniGameStyle.safeAreaView}>
        <TextInput
          keyboardType="ascii-capable"
          style={miniGameStyle.input}
          maxLength={3}
        />
      </SafeAreaView>
    </View>
  );
};

export default TextToAsciiGame;

const styles = StyleSheet.create({});
