import { Text, View, SafeAreaView, Pressable, TextInput } from "react-native";
import React, { useState } from "react";
import converterStyle from "./converterStyle";
import globalContentStyle from "../../globalStyles/globalContentStyle";

const TextToAscii = () => {
  const [character, setCharacter] = useState("");
  const [asciiCode, setAsciiCode] = useState("");

  const convertToAscii = () => {
    if (character.length === 1) {
      const charCode = character.charCodeAt(0);
      setAsciiCode(charCode);
    } else {
      setAsciiCode("Invalid input");
    }
  };

  return (
    <View style={converterStyle.tabContentStyle}>
      <Text style={converterStyle.label}>Enter text:</Text>
      <View style={converterStyle.rowContainer}>
        <SafeAreaView style={converterStyle.safeAreaView}>
          <TextInput
            onChangeText={setCharacter}
            value={character}
            keyboardType="ascii-capable"
            style={globalContentStyle.input}
            maxLength={3}
          />
        </SafeAreaView>
        <Pressable
          style={converterStyle.convertButton}
          onPress={convertToAscii}
        >
          <Text style={converterStyle.buttonText}>Convert</Text>
        </Pressable>
      </View>
      <Text style={converterStyle.label}>Output:</Text>
      <View style={globalContentStyle.outputContainer}>
        <Text style={globalContentStyle.outputText}>
          {asciiCode.toString()}
        </Text>
      </View>
    </View>
  );
};

export default TextToAscii;
