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
  modalBox: {
    // width: windowWidth * 0.9,
    // height: windowWidth * 0.7,
    // backgroundColor: colors.white,
    // borderRadius: 3,
  },
  input: {
    fontFamily: "Poppins_400Regular",
    fontSize: 16,
    marginTop: "2%",
  },
  outputText: { fontFamily: "Poppins_400Regular", fontSize: 16 },
  modalContainer: {
    backgroundColor: "#C3C2C2",
    flex: 1,
    opacity: 0.7,
    justifyContent: "center",
    alignItems: "center",
  },
  modalWhiteBox: {
    width: windowWidth * 0.9,
    height: windowWidth * 0.7,
    backgroundColor: colors.white,
    borderRadius: 3,
    justifyContent: "space-between",
    paddingHorizontal: "8%",
    paddingVertical: "8%",
  },
  modalAnswer: {
    fontFamily: "Poppins_400Regular",
    fontSize: 24,
    color: colors.black,
    paddingTop: "10%",
    textAlign: "center",
  },
  modalButton: {
    height: windowHeight * 0.08,
    width: "100%",
    backgroundColor: colors.blue,
    borderRadius: 3,
    marginTop: "5%",
    justifyContent: "center",
    alignItems: "center",
  },
  modalTextButton: {
    color: colors.white,
    fontFamily: "Poppins_500Medium",
    fontSize: 18,
  },
});
export default globalContentStyle;
