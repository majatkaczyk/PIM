import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  Pressable,
  Modal,
} from "react-native";
import React, { useState, useEffect } from "react";
import miniGameStyle from "./miniGameStyle";
import globalContentStyle from "../../globalStyles/globalContentStyle";
import { TouchableOpacity } from "react-native-gesture-handler";
const TextToAsciiGame = () => {
  const [randomChar, setRandomChar] = useState("");
  const [userAnswer, setUserAnswer] = useState("");
  const [result, setResult] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
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
      setResult("Good answer!");
      setModalVisible(true);
    } else {
      setResult("Wrong answer!");
      setModalVisible(true);
    }
  };
  const refresh = () => {
    generateRandomChar();
  };
  const closeModal = () => {
    setModalVisible(false);
    generateRandomChar();
  };
  return (
    <View style={miniGameStyle.tabContentStyle}>
      <Text style={miniGameStyle.label}>Guess the ASCII decimal number:</Text>
      <View style={miniGameStyle.rowContainer}>
        <View style={miniGameStyle.randomNumberContainer}>
          <Text>{randomChar}</Text>
        </View>

        <Pressable style={miniGameStyle.refreshButton}>
          <Text style={miniGameStyle.gameText} onPress={refresh}>
            Refresh
          </Text>
        </Pressable>
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

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={globalContentStyle.modalContainer}>
          <View style={globalContentStyle.modalBox}>
            <View style={globalContentStyle.modalWhiteBox}>
              <Text style={globalContentStyle.modalAnswer}>{result}</Text>
              <TouchableOpacity
                style={globalContentStyle.modalButton}
                onPress={closeModal}
              >
                <Text style={globalContentStyle.modalTextButton}>
                  Start again
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default TextToAsciiGame;
