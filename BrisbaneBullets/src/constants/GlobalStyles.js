import { StyleSheet, Dimensions, Platform } from "react-native";
import { scaleFontSize } from "./Layout";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const GlobalStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0, // Additional padding for Android
  },
  mainContainer: {
    flex: 1,
    paddingHorizontal: windowWidth * 0.08,
    backgroundColor: "white",
  },
  screenHeader: {
    paddingVertical: windowWidth * 0.03,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  screenHeading: {
    color: "#113B81",
    fontWeight: "600",
    fontSize: scaleFontSize(33),
    justifyContent: "center",
    // textAlign: "center",
    letterSpacing: 1,
  },
});
