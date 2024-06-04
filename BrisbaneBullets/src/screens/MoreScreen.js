import React, { useState } from "react";
import {
  SafeAreaView,
  Dimensions,
  ImageBackground,
  View,
  StyleSheet,
  Text,
  Image,
  Platform,
  Linking,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { scaleFontSize } from "../constants/Layout";
import { Button, ButtonText, Box, ButtonGroup } from "@gluestack-ui/themed";
import { GlobalStyles } from "../constants/GlobalStyles";
import AppSettings from "../notifications/appSettings";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function MoreScreen({ navigation }) {
  const nav = useNavigation();

  const handleNav = (screenName) => {
    nav.navigate(screenName);
  };

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const handleCrowdCanvas = () => {
    const crowdCanvasUrl = "crowdcanvas://"; // Deep link to CrowdCanvas app (sample link)
    const appStoreUrl = Platform.select({
      ios: "https://apps.apple.com/au/app/crowdcanvas/id1526770094", //Crowd canvas App Store ID
      android:
        "https://play.google.com/store/apps/details?id=com.crowdcanvas.pixelplayer&hl=en_AU&gl=US&pli=1", // Google Play Store URL
    });

    // Try opening the CrowdCanvas app
    Linking.canOpenURL(crowdCanvasUrl)
      .then((supported) => {
        if (supported) {
          Linking.openURL(crowdCanvasUrl); // Open CrowdCanvas app
        } else {
          // If CrowdCanvas app is not installed, prompt user to download from App Store
          Linking.openURL(appStoreUrl);
        }
      })
      .catch((err) => console.error("Error checking CrowdCanvas app:", err));
  };
  return (
    <View style={GlobalStyles.mainContainer}>
      <SafeAreaView style={GlobalStyles.safeArea}>
        <Box style={GlobalStyles.screenHeader}>
          <Text style={GlobalStyles.screenHeading}>More</Text>
        </Box>

        <View style={styles.contentContainer}>
          <ImageBackground
            source={require("../../assets/Logo/BB-logo.png")}
            resizeMode="center"
            opacity={0.5}
            style={styles.backgroundImageContainer}
          >
            <View style={styles.shadowBox1}>
              <ButtonGroup
                isAttached="true"
                space="sm"
                style={styles.boxContainer}
              >
                <Button style={styles.item}>
                  <ButtonText style={styles.buttonText}>
                    Push Notification
                  </ButtonText>
                  <AppSettings />
                </Button>
                <Button
                  style={styles.item}
                  onPress={() => handleNav("MembershipScreen")}
                >
                  <ButtonText style={styles.buttonText}>Membership </ButtonText>
                  <Entypo name="chevron-small-right" size={26} color="white" />
                </Button>
              </ButtonGroup>
            </View>
            <View style={styles.shadowBox1}>
              <ButtonGroup
                isAttached="true"
                space="sm"
                style={styles.boxContainer}
              >
                <Button
                  style={styles.item}
                  onPress={() => handleNav("PrivacyPolicy")}
                >
                  <ButtonText style={styles.buttonText}>
                    Privacy Policy
                  </ButtonText>
                  <Entypo name="chevron-small-right" size={26} color="white" />
                </Button>
                <Button style={styles.item}>
                  <ButtonText style={styles.buttonText}>
                    Feedback and Support
                  </ButtonText>
                  <Entypo name="chevron-small-right" size={26} color="white" />
                </Button>
                <Button style={styles.item}>
                  <ButtonText style={styles.buttonText}>
                    Terms and Conditions
                  </ButtonText>
                  <Entypo name="chevron-small-right" size={26} color="white" />
                </Button>
              </ButtonGroup>
            </View>
            <View style={styles.othersContainer}>
              <View style={styles.shadowBox2}>
                <Button style={styles.othersButton} onPress={handleCrowdCanvas}>
                  <Image
                    source={require("../../assets/CrowdCanvas.png")}
                    style={styles.othersImage}
                  />
                  <View style={styles.textOverlay}>
                    <ButtonText style={styles.othersText}>
                      Crowd Canvas
                    </ButtonText>
                  </View>
                </Button>
              </View>
            </View>
          </ImageBackground>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: windowWidth * 0.03,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  heading: {
    color: "#113B81",
    fontWeight: "600",
    fontSize: scaleFontSize(33),
  },
  contentContainer: {
    marginTop: windowWidth * 0.08,
    flex: 1,
  },
  backgroundImageContainer: {
    flex: 1,
    backgroundColor: "white",
  },

  boxContainer: {
    overflow: "hidden",
    flexDirection: "column",
    borderRadius: 10,
  },
  shadowBox1: {
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000", // Shadow color
    shadowOffset: { width: 3, height: 5 }, // Shadow offset
    shadowOpacity: 0.25, // Shadow opacity
    shadowRadius: 4, // Shadow radius
    elevation: 10, // Elevation for Android
    marginVertical: 5,
  },
  shadowBox2: {
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "#000", // Shadow color
    shadowOffset: { width: 3, height: 5 }, // Shadow offset
    shadowOpacity: 0.25, // Shadow opacity
    shadowRadius: 4, // Shadow radius
    elevation: 10, // Elevation for Android
    margin: 5,
  },
  item: {
    backgroundColor: "#164CA8",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginVertical: 0.5,
    height: windowWidth * 0.1,
    borderRadius: 0,
  },
  buttonText: {
    color: "white",
    fontSize: scaleFontSize(16),
    fontWeight: "light",
  },
  othersContainer: {
    marginVertical: 10,
    flexDirection: "row",
  },
  othersButton: {
    backgroundColor: "white",
    width: 150,
    height: 150,
    borderRadius: 20,
    overflow: "hidden",
  },
  othersImage: {
    position: "absolute",
    width: "150%",
    height: "150%",
    resizeMode: "cover",
  },
  textOverlay: {
    justifyContent: "flex-end",
    alignItems: "center",
    bottom: 10,
    position: "absolute",
    zIndex: 1,
  },
  othersText: {
    color: "white",
    fontWeight: "bold",
    width: "100%",
    fontSize: scaleFontSize(16),
  },
});
