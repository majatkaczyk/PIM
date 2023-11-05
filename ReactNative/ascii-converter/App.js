import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StackNavigator from "./navigators/stackNavigator";
import ConverterScreen from "./components/converter/converterScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <StackNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",

    justifyContent: "center",
  },
});
