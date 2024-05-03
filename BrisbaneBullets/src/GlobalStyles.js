import { StyleSheet, Dimensions, Platform } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const GlobalStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0, // Additional padding for Android
  },
  //   container: {
  //     flex: 1,
  //     paddingHorizontal: 10, // Common horizontal padding
  //     paddingBottom: 10, // Common bottom padding
  //   },
  //   scrollViewContainer: {
  //     flexGrow: 1,
  //     justifyContent: "center",
  //     width: windowWidth,
  //     height: windowHeight,
  //   },
});
