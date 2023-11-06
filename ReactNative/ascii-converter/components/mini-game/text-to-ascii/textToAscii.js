import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  TextInput,
} from "react-native";
import React from "react";

const TextToAsciiGame = () => {
  return (
    <View>
      <Text>GameII</Text>
    </View>
    //   <View style={converterStyle.tabContentStyle}>
    //     <Text style={converterStyle.label}>Enter text:</Text>
    //     <View style={converterStyle.rowContainer}>
    //       <SafeAreaView style={converterStyle.safeAreaView}>
    //         <TextInput
    //           keyboardType="ascii-capable"
    //           style={converterStyle.input}
    //           maxLength={3}
    //         />
    //       </SafeAreaView>
    //       <Pressable style={converterStyle.convertButton}>
    //         <Text style={converterStyle.buttonText}>Convert</Text>
    //       </Pressable>
    //     </View>
    //     <Text style={converterStyle.label}>Output:</Text>
    //     <View style={converterStyle.outputContainer}></View>
    //   </View>
  );
};

export default TextToAsciiGame;

const styles = StyleSheet.create({});
