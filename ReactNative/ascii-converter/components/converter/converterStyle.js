import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../globalStyles/colors";
import React from "react";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const converterStyle = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.backgroundColor,
    flex: 1,
    width: windowWidth,
    paddingHorizontal: windowWidth * 0.08,
    paddingTop: windowHeight * 0.1,
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
  },
  tabContainer: {
    width: "100%",
    height: "70%",
  },

  tabContentStyle: {
    flex: 1,
    backgroundColor: "#FFF",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingTop: "10%",
    paddingHorizontal: "8%",
  },
  label: { fontFamily: "Poppins_300Light", fontSize: 14 },
});
export default converterStyle;
