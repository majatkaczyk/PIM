import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../globalStyles/colors";
import React from "react";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

const converterStyle = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.backgroundColor,
    flex: 1,
    width: windowWidth,
    paddingHorizontal: "8%",
    paddingTop: "25%",
  },
  contentContainer: {
    width: "100%",
    height: "70%",
  },
});
export default converterStyle;
