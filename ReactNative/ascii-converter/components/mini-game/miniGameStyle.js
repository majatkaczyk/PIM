import { StyleSheet } from "react-native";
import { colors } from "../../globalStyles/colors";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const miniGameStyle = StyleSheet.create({
  header: {
    fontFamily: "Nunito_500Medium",
    fontSize: 32,
    color: colors.fontColor,
    marginBottom: windowHeight * 0.03,
    marginTop: windowHeight * 0.02,
  },
  tabContainer: { width: "100%", height: "62%" },
  mainContainer: {
    backgroundColor: colors.backgroundColor,
    flex: 1,
    width: windowWidth,
    paddingHorizontal: windowWidth * 0.08,
    paddingTop: windowHeight * 0.08,
  },
  gameText: {
    color: colors.fontColor,
    fontFamily: "Poppins_500Medium",
    fontSize: 18,
  },
  bigButton: {
    height: windowHeight * 0.08,
    width: "100%",
    backgroundColor: colors.blue,
    borderRadius: 3,
    marginTop: "5%",
    justifyContent: "center",
    alignItems: "center",
  },
  refreshButton: {
    height: "95%",
    width: "48%",
    justifyContent: "center",
    paddingHorizontal: "3%",
    alignItems: "center",
    backgroundColor: colors.blue,
    borderRadius: 3,
  },
  safeAreaView: {
    borderColor: colors.darkBlue,
    borderWidth: 1,
    borderRadius: 3,
    height: windowHeight * 0.08,
    width: "100%",
    justifyContent: "center",
    paddingHorizontal: "3%",
  },
  tabContentStyle: {
    flex: 1,
    backgroundColor: "#FFF",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingTop: "4%",
    paddingHorizontal: "8%",
  },
  label: {
    fontFamily: "Poppins_300Light",
    fontSize: 14,
    marginTop: windowHeight * 0.02,
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
  rowContainer: {
    flexDirection: "row",
    height: windowHeight * 0.08,
    paddingTop: "2%",
    width: "100%",
    justifyContent: "space-between",
    marginBottom: "5%",
  },
  randomNumberContainer: {
    height: "95%",
    width: "48%",
    justifyContent: "center",
    paddingHorizontal: "3%",
    backgroundColor: colors.lightBlue,
    borderRadius: 3,
  },
});
export default miniGameStyle;
