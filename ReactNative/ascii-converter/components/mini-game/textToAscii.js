import { Text, View, SafeAreaView, TextInput, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import miniGameStyle from "./miniGameStyle";
import globalContentStyle from "../../globalStyles/globalContentStyle";
import { TouchableOpacity } from "react-native-gesture-handler";
const TextToAsciiGame = () => {
  const [randomChar, setRandomChar] = useState("");
  const [userAnswer, setUserAnswer] = useState("");
  const [result, setResult] = useState("");
  useEffect(() => {
    generateRandomChar();
  }, []);

  const generateRandomChar = () => {
    const randomAsciiValue = Math.floor(Math.random() * (125 - 33 + 1)) + 33; // Zakres od 33 do 125
    setRandomChar(String.fromCharCode(randomAsciiValue));
    setUserAnswer("");
    setResult("");
  };
  const checkAnswer = () => {
    const inputValue = userAnswer.trim();
    const asciiValue = parseInt(inputValue);

    if (!isNaN(asciiValue) && asciiValue === randomChar.charCodeAt(0)) {
      setResult("Correct!");
    } else {
      setResult("Incorrect. Try again.");
    }
  };
  return (
    <View style={miniGameStyle.tabContentStyle}>
      <Text style={miniGameStyle.label}>Guess the ASCII decimal number:</Text>
      <View style={globalContentStyle.outputContainer}>
        <Text>{randomChar}</Text>
      </View>
      <Text style={miniGameStyle.label}>Your answer:</Text>
      <SafeAreaView style={miniGameStyle.safeAreaView}>
        <TextInput
          onChangeText={setUserAnswer}
          value={userAnswer}
          keyboardType="numeric"
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

export default TextToAsciiGame;
