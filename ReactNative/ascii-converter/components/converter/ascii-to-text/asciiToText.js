import { StyleSheet, Text, View } from "react-native";
import React from "react";
import converterStyle from "../converterStyle";

const AsciiToText = () => {
  return (
    <View style={converterStyle.tabContentStyle}>
      <Text style={converterStyle.label}>Enter ASCII decimal number:</Text>
      <Text style={converterStyle.label}>Output</Text>
    </View>
  );
};

export default AsciiToText;

const styles = StyleSheet.create({});
