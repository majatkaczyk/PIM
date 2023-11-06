import {
  Pressable,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
} from "react-native";
import React from "react";
import miniGameStyle from "../miniGameStyle";

const AsciiToTextGame = () => {
  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState("");
  return (
    <View style={miniGameStyle.tabContentStyle}>
      <Text style={miniGameStyle.label}>Guess the text:</Text>
      <View style={miniGameStyle.outputContainer}></View>
      <Text style={miniGameStyle.label}>Your answer:</Text>
      <SafeAreaView style={miniGameStyle.safeAreaView}>
        <TextInput
          onChangeText={onChangeNumber}
          value={number}
          keyboardType="numeric"
          style={miniGameStyle.input}
          maxLength={3}
        />
      </SafeAreaView>
    </View>
  );
};

export default AsciiToTextGame;

const styles = StyleSheet.create({});
