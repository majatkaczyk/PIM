import { Text, View, SafeAreaView, Pressable, TextInput } from "react-native";
import React from "react";
import converterStyle from "./converterStyle";
import globalContentStyle from "../../globalStyles/globalContentStyle";

const TextToAscii = () => {
  return (
    <View style={converterStyle.tabContentStyle}>
      <Text style={converterStyle.label}>Enter text:</Text>
      <View style={converterStyle.rowContainer}>
        <SafeAreaView style={converterStyle.safeAreaView}>
          <TextInput
            keyboardType="ascii-capable"
            style={globalContentStyle.input}
            maxLength={3}
          />
        </SafeAreaView>
        <Pressable style={converterStyle.convertButton}>
          <Text style={converterStyle.buttonText}>Convert</Text>
        </Pressable>
      </View>
      <Text style={converterStyle.label}>Output:</Text>
      <View style={globalContentStyle.outputContainer}></View>
    </View>
  );
};

export default TextToAscii;
