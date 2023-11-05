import {
  Pressable,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
} from "react-native";
import React from "react";
import converterStyle from "../converterStyle";

const AsciiToText = () => {
  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState("");
  return (
    <View style={converterStyle.tabContentStyle}>
      <Text style={converterStyle.label}>Enter ASCII decimal number:</Text>
      <View style={converterStyle.rowContainer}>
        <SafeAreaView style={converterStyle.safeAreaView}>
          <TextInput
            onChangeText={onChangeNumber}
            value={number}
            keyboardType="numeric"
            style={converterStyle.input}
          />
        </SafeAreaView>
        <Pressable style={converterStyle.convertButton}>
          <Text style={converterStyle.buttonText}>Convert</Text>
        </Pressable>
      </View>
      <Text style={converterStyle.label}>Output</Text>
    </View>
  );
};

export default AsciiToText;

const styles = StyleSheet.create({});
