import { StyleSheet } from "react-native";
import { colors } from "./colors";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const globalContentStyle = StyleSheet.create({
  contentContainer: {
    width: "100%",
    height: "80%",
  },
  tabContainer: {
    width: "100%",
    height: "49%",
  },
  outputContainer: {
    height: windowHeight * 0.08,
    width: "100%",
    backgroundColor: colors.lightBlue,
    borderRadius: 3,
    justifyContent: "center",
    paddingHorizontal: "3%",
  },
  input: {
    fontFamily: "Poppins_400Regular",
    fontSize: 16,
    marginTop: "2%",
  },
  outputText: { fontFamily: "Poppins_400Regular", fontSize: 16 },
});
export default globalContentStyle;
