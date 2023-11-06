import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../globalStyles/colors";
import React from "react";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const miniGameStyle = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.backgroundColor,
    flex: 1,
    width: windowWidth,
    paddingHorizontal: windowWidth * 0.08,
    paddingTop: windowHeight * 0.08,
  },
  contentContainer: {
    width: "100%",
    height: "80%",
  },
  header: {
    fontFamily: "Nunito_500Medium",
    fontSize: 32,
    color: colors.fontColor,
    marginBottom: windowHeight * 0.03,
    marginTop: windowHeight * 0.02,
  },
  tabContainer: {
    width: "100%",
    height: "49%",
  },

  rowNavigationContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
  navigationText: {
    fontFamily: "Poppins_300Light",
    color: colors.fontColor,
    fontSize: 14,
  },

  //   bigButton: {
  //     height: windowHeight * 0.08,
  //     width: "100%",
  //     backgroundColor: colors.darkBlue,
  //     borderRadius: 10,
  //     marginTop: "5%",
  //     justifyContent: "center",
  //     alignItems: "center",
  //   },
  //   gameText: {
  //     color: colors.white,
  //     fontFamily: "Poppins_500Medium",
  //     fontSize: 18,
  //   },

  //   tabContentStyle: {
  //     flex: 1,
  //     backgroundColor: "#FFF",
  //     borderBottomLeftRadius: 10,
  //     borderBottomRightRadius: 10,
  //     paddingTop: "10%",
  //     paddingHorizontal: "8%",
  //   },
  //   label: { fontFamily: "Poppins_300Light", fontSize: 14 },
  //   rowContainer: {
  //     flexDirection: "row",
  //     height: windowHeight * 0.08,
  //     paddingTop: "2%",
  //     width: "100%",
  //     justifyContent: "space-between",
  //     marginBottom: "5%",
  //   },
  //   input: {
  //     fontFamily: "Poppins_400Regular",
  //     fontSize: 16,
  //     marginTop: "2%",
  //   },
  //   safeAreaView: {
  //     borderColor: colors.darkBlue,
  //     borderWidth: 1,
  //     borderRadius: 3,
  //     height: "95%",
  //     width: "48%",
  //     justifyContent: "center",
  //     paddingHorizontal: "3%",
  //   },
  //   convertButton: {
  //     height: "95%",
  //     width: "48%",
  //     justifyContent: "center",
  //     paddingHorizontal: "3%",
  //     alignItems: "center",
  //     backgroundColor: colors.blue,
  //     borderRadius: 3,
  //   },
  //   buttonText: {
  //     color: colors.fontColor,
  //     fontFamily: "Poppins_500Medium",
  //     fontSize: 16,
  //   },
  //   outputContainer: {
  //     height: windowHeight * 0.08,
  //     width: "100%",
  //     backgroundColor: colors.lightBlue,
  //     borderRadius: 3,
  //   },
});
export default miniGameStyle;
