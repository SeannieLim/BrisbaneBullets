import React from "react";
import {
  SafeAreaView,
  Dimensions,
  ImageBackground,
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { scaleFontSize } from "../constants/Layout";
import { Button, ButtonText, Box } from "@gluestack-ui/themed";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function MoreScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <Box style={styles.header}>
          <Text style={styles.heading}>More</Text>
        </Box>

        <View style={styles.backgroundImageContainer}>
          <ImageBackground
            source={require("../../assets/Logo/BB-logo.png")}
            resizeMode="center"
            opacity={"0.5"}
          >
            <View style={[styles.boxContainer, styles.marginBottom]}>
              <View style={[styles.topButton, { backgroundColor: "#164CA8" }]}>
                <Text style={styles.buttonText}>Push Notification </Text>
              </View>
              <Button
                style={[styles.bottomButton, { backgroundColor: "#164CA8" }]}
              >
                <ButtonText style={styles.buttonText}>Membership </ButtonText>
              </Button>
            </View>
            <View style={[styles.boxContainer, styles.marginTop]}>
              <Button
                style={[styles.topButton, { backgroundColor: "#164CA8" }]}
              >
                <ButtonText style={styles.buttonText}>
                  Privacy Policy
                </ButtonText>
              </Button>
              <Button
                style={[styles.midButton, { backgroundColor: "#164CA8" }]}
              >
                <ButtonText style={styles.buttonText}>
                  Feedback and Support{" "}
                </ButtonText>
              </Button>
              <Button
                style={[styles.bottomButton, { backgroundColor: "#164CA8" }]}
              >
                <ButtonText style={styles.buttonText}>
                  Terms and Condition{" "}
                </ButtonText>
              </Button>
            </View>
            <View style={styles.othersContainer}>
              <Button style={styles.others}>
                <ButtonText style={styles.othersText}>Crowd Canvas </ButtonText>
                <Image
                  source={require("../../assets/CrowdCanvas.png")}
                  style={{ width: 80, height: 90 }}
                  resizeMode="contain"
                />
              </Button>
            </View>
          </ImageBackground>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: windowWidth * 0.08,
    backgroundColor: "white",
  },
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
  backgroundImageContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "white",
  },
  boxContainer: {
    // marginLeft: windowWidth * 0.08,
    marginTop: windowWidth * 0.05,
    flexDirection: "column",
    // justifyContent: "center",
    // alignItems: "center",
  },
  topButton: {
    width: 260,
    height: 30,
    marginVertical: 0.3,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    justifyContent: "center",
  },
  midButton: {
    width: 260,
    height: 30,
    marginVertical: 0.3,
  },

  bottomButton: {
    width: 260,
    height: 30,
    marginVertical: 0.3,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    paddingLeft: 15,
  },
  marginTop: {
    marginTop: 10,
  },
  marginBottom: {
    marginBottom: 10,
  },
  othersContainer: {
    marginLeft: windowWidth * 0.08,
    marginTop: windowWidth * 0.05,
    flexDirection: "column",
    // justifyContent: "center",
    // alignItems: "center",
  },
  others: {
    marginTop: 10,
    width: 60,
    height: 70,
    marginVertical: 0.3,
    borderRadius: 15,
  },
  othersText: {
    color: "white",
    justifyContent: "flex-end",
    paddingTop: 30,
    paddingLeft: 5,
  },
});
