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
const AsciiToTextGame = () => {
  const [randomAscii, setRandomAscii] = useState(null);
  const [userAnswer, setUserAnswer] = useState("");
  const [result, setResult] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

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
      setResult("Good answer!");
      setModalVisible(true);
    } else {
      setResult("Wrong answer!");
      setModalVisible(true);
    }
  };
  const refresh = () => {
    generateRandomAscii();
  };
  const closeModal = () => {
    setModalVisible(false);
    generateRandomAscii();
  };
  return (
    <View style={miniGameStyle.tabContentStyle}>
      <Text style={miniGameStyle.label}>Guess the text:</Text>
      <View style={miniGameStyle.rowContainer}>
        <View style={miniGameStyle.randomNumberContainer}>
          <Text>{randomAscii}</Text>
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
          keyboardType="ascii-capable"
          style={globalContentStyle.input}
          maxLength={3}
        />
      </SafeAreaView>
      <Pressable style={miniGameStyle.bigButton} onPress={() => checkAnswer()}>
        <Text style={miniGameStyle.gameText}>Check answer</Text>
      </Pressable>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={globalContentStyle.modalContainer}>
          <View style={globalContentStyle.modalBackground}>
            <View style={globalContentStyle.modalWhiteBox}>
              <Text style={globalContentStyle.modalAnswer}>{result}</Text>
              <Pressable
                style={globalContentStyle.modalButton}
                onPress={closeModal}
              >
                <Text style={globalContentStyle.modalTextButton}>
                  Start again
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default AsciiToTextGame;
