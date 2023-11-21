import { Text, View, SafeAreaView, TextInput, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import miniGameStyle from "./miniGameStyle";
import globalContentStyle from "../../globalStyles/globalContentStyle";
import { TouchableOpacity } from "react-native-gesture-handler";
const AsciiToTextGame = () => {
  const [randomAscii, setRandomAscii] = useState(null);
  const [userAnswer, setUserAnswer] = useState("");
  const [result, setResult] = useState("");
  useEffect(() => {
    generateRandomAscii();
  }, []);
  const generateRandomAscii = () => {
    const randomAsciiValue = Math.floor(Math.random() * (125 - 33 + 1)) + 33; // Zakres od 33 do 125
    setRandomAscii(randomAsciiValue);
    setUserAnswer("");
    setResult("");
  };

  const checkAnswer = () => {
    const inputText = userAnswer.trim();
    const asciiValue = inputText.length === 1 ? inputText.charCodeAt(0) : NaN;
    if (!isNaN(asciiValue) && asciiValue === randomAscii) {
      setResult("Correct!");
    } else {
      setResult("Incorrect. Try again.");
    }
  };

  return (
    <View style={miniGameStyle.tabContentStyle}>
      <Text style={miniGameStyle.label}>Guess the text:</Text>
      <View style={globalContentStyle.outputContainer}>
        <Text>{randomAscii}</Text>
      </View>
      <Text style={miniGameStyle.label}>Your answer:</Text>
      <SafeAreaView style={miniGameStyle.safeAreaView}>
        <TextInput
          onChangeText={setUserAnswer}
          value={userAnswer}
          keyboardType="ascii-capable"
          style={globalContentStyle.input}
          maxLength={3}
        />
      </SafeAreaView>
      <TouchableOpacity style={miniGameStyle.bigButton} onPress={checkAnswer}>
        <Text style={miniGameStyle.gameText}>Check answer</Text>
      </TouchableOpacity>
      <Text style={miniGameStyle.result}>{result}</Text>
    </View>
  );
};

export default AsciiToTextGame;
