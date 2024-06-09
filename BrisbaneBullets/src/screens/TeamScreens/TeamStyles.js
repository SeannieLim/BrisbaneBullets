import { StyleSheet, Dimensions } from "react-native";
import { scaleFontSize } from "../../constants/Layout";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const MyStyles = StyleSheet.create({
  backgroundImageContainer: {
    flex: 1,
    width: windowWidth,
  },
  toggleContainer: {
    marginHorizontal: windowWidth * 0.08,
    flexGrow: 1,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: windowHeight * 0.07,
  },

  BackArrow: {
    color: "#FAB81B",
  },

  playerName: {
    flex: 1,
    fontSize: scaleFontSize(22),
    fontWeight: "bold",
    color: "#113B81",
    textAlign: "center",
    letterSpacing: 1,
  },

  imageBox: {
    flex: 1,
    width: "100%",
    height: windowHeight * 0.3,
    backgroundColor: "#164CA8",
    borderRadius: 15,
    marginTop: windowHeight * 0.03,
    shadowColor: "#000",
    shadowOffset: { width: 3, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    position: "relative",
    overflow: "hidden",
    justifyContent: "flex-start",
  },
  textContainer: {
    position: "absolute",
    left: 15,
    alignItems: "center",
  },
  jerseyNumber: {
    fontWeight: "bold",
    fontSize: scaleFontSize(32),
    color: "#FFFFFF",
  },
  playerProfileImage: {
    flex: 1,
    width: "90%",
    height: "90%",
    alignSelf: "center",
    overflow: "visible",
  },
  playerHeadShot: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignSelf: "center",
    overflow: "visible",
    marginTop: windowHeight * 0.2,
  },
  playerProfileGif: {
    width: "100%",
    height: "100%",
    maxWidth: "100%",
    alignSelf: "center",
    borderRadius: 15,
  },

  ProfileStatsToggle: {
    flex: 1,
    marginTop: windowHeight * 0.03,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  scrollViewContent: {
    flexGrow: 1,
    flexDirection: "row",
  },
  container: {
    width: 107,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    height: 107,
    borderRadius: 15,
    marginTop: windowHeight * 0.03,
    marginRight: windowWidth * 0.01,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    position: "relative",
    marginBottom: windowHeight * 0.01,
  },
  playerDetailsText: {
    fontSize: scaleFontSize(12),
    fontWeight: "bold",
    color: "#113B81",
    letterSpacing: 1,
    marginTop: windowHeight * 0.002,
  },
  countryIconContainer: {
    alignItems: "center",
  },

  countryIcon: {
    marginTop: windowHeight * 0.009,
    marginBottom: windowHeight * 0.009,
    borderRadius: 3,
  },
  Country: {
    alignItems: "center",
    color: "#686060",
    fontSize: scaleFontSize(9),
    fontWeight: "bold",
    letterSpacing: 1,
  },

  circle: {
    width: 45,
    height: 45,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#164CA7",
    marginTop: windowHeight * 0.008,
    marginBottom: windowHeight * 0.006,
  },

  positionCode: {
    color: "#FFFFFF",
    fontSize: scaleFontSize(23),
    fontWeight: "bold",
  },
  positionText: {
    alignItems: "center",
    color: "#686060",
    fontSize: scaleFontSize(9),
    fontWeight: "bold",
    letterSpacing: 1,
    marginTop: windowHeight * 0.001,
  },
  playerTextContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: windowHeight * 0.012,
    color: "#113B81",
    fontSize: scaleFontSize(12),
    fontWeight: "bold",
    letterSpacing: 1,
  },
  PlayerText: {
    fontSize: scaleFontSize(18),
    color: "#000000",
    fontWeight: "bold",
    letterSpacing: 1,
    marginBottom: windowHeight * 0.04,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#164CA8",
    borderRadius: 25,
    paddingVertical: 8,
    paddingHorizontal: 10,
    height: 35,
    marginTop: windowHeight * 0.015,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    position: "relative",
  },
  buttonText: {
    fontSize: scaleFontSize(10),
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  icon: {
    width: 13,
    height: 13,
    marginLeft: 2,
  },
  socialMedia: {
    fontSize: scaleFontSize(17),
    fontWeight: "bold",
    letterSpacing: 1,
    marginTop: windowHeight * 0.02,
  },
  bio: {
    fontSize: scaleFontSize(17),
    letterSpacing: 1,
    marginTop: windowHeight * 0.0,
  },
  statsText: {
    fontSize: scaleFontSize(18),
    color: "#000000",
    fontWeight: "bold",
    letterSpacing: 1,
    alignItems: "center",
  },
  statsValueText: {
    fontSize: scaleFontSize(18),
    color: "#000000",
    letterSpacing: 1,
    alignItems: "center",
    left: 3,
    marginBottom: windowHeight * 0.04,
  },
});

export default MyStyles;
