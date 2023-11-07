import { Pressable, Text, View, SafeAreaView, TextInput } from "react-native";
import React, { useState } from "react";
import converterStyle from "./converterStyle";
import globalContentStyle from "../../globalStyles/globalContentStyle";

const AsciiToText = () => {
  const [number, setNumber] = useState("");
  const [output, setOutput] = useState("");

  const convertToChar = () => {
    const asciiNumber = parseInt(number);
    if (Number.isInteger(asciiNumber)) {
      const char = String.fromCharCode(asciiNumber);
      setOutput(char);
    } else {
      setOutput("Invalid output");
    }
  };

  return (
    <View style={converterStyle.tabContentStyle}>
      <Text style={converterStyle.label}>Enter ASCII decimal number:</Text>
      <View style={converterStyle.rowContainer}>
        <SafeAreaView style={converterStyle.safeAreaView}>
          <TextInput
            onChangeText={setNumber}
            value={number}
            keyboardType="numeric"
            style={globalContentStyle.input}
            maxLength={3}
          />
        </SafeAreaView>
        <Pressable style={converterStyle.convertButton} onPress={convertToChar}>
          <Text style={converterStyle.buttonText}>Convert</Text>
        </Pressable>
      </View>
      <Text style={converterStyle.label}>Output:</Text>
      <View style={globalContentStyle.outputContainer}>
        <Text style={globalContentStyle.outputText}>{output}</Text>
      </View>
    </View>
  );
};

export default AsciiToText;
