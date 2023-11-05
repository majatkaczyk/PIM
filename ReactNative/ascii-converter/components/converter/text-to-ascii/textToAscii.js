import { StyleSheet, Text, View } from "react-native";
import React from "react";
import converterStyle from "../converterStyle";

const TextToAscii = () => {
  return (
    <View style={converterStyle.tabContentStyle}>
      <Text style={converterStyle.label}>Enter text:</Text>
    </View>
  );
};

export default TextToAscii;

const styles = StyleSheet.create({});
