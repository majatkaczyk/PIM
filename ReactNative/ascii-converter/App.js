import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ConverterScreen from "./components/converter/converterScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ConverterScreen></ConverterScreen>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
