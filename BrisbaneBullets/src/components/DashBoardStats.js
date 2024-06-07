import React from "react";
import { View, Text, Image, StyleSheet, Dimensions, ScrollView, } from "react-native";
import { scaleFontSize } from "../constants/Layout";
import { WebView } from "react-native-webview";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const DashBoardStats = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <View>
        <View style={styles.DashBoardBox}>
          <View style={styles.textBox}>
            <View style={{ flex: 1 }}>
              <Text style={[styles.statsText, { textAlign: "center" }]}></Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={[styles.statsText, { textAlign: "center" }]}>
                Q1
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={[styles.statsText, { textAlign: "center" }]}>
                Q2
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={[styles.statsText, { textAlign: "center" }]}>
                Q3
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={[styles.statsText, { textAlign: "center" }]}>
                Q4
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={[styles.statsText, { textAlign: "center" }]}>
                Total
              </Text>
            </View>
          </View>
          <View style={styles.textBox}>
            <View style={{ flex: 1 }}>
              <Image
                source={require("../../assets/teamImages/BB.png")}
                style={styles.teamIcon}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={[styles.statsNumber, { textAlign: "center" }]}>
                20
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={[styles.statsNumber, { textAlign: "center" }]}>
                20
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={[styles.statsNumber, { textAlign: "center" }]}>
                30
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={[styles.statsNumber, { textAlign: "center" }]}>
                26
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={[styles.statsText, { textAlign: "center" }]}>
                96
              </Text>
            </View>
          </View>
          <View style={styles.textBox}>
            <View style={{ flex: 1 }}>
              <Image
                source={require("../../assets/teamImages/melb.png")}
                style={styles.teamIcon}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={[styles.statsNumber, { textAlign: "center" }]}>
                10
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={[styles.statsNumber, { textAlign: "center" }]}>
                22
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={[styles.statsNumber, { textAlign: "center" }]}>
                22
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={[styles.statsNumber, { textAlign: "center" }]}>
                26
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={[styles.statsText, { textAlign: "center" }]}>
                80
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.bigStatsBanner, { flexDirection: "row" }]}>
          <View style={{ flex: 1 }}>
            <Text style={[styles.bannerNumber]}>20</Text>
            <Text style={[styles.bannerText]}>Rebounds</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={[styles.bannerNumber]}>30</Text>
            <Text style={[styles.bannerText]}>Assists</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={[styles.bannerNumber]}>10</Text>
            <Text style={[styles.bannerText]}>Steals</Text>
          </View>
        </View>
        <View style={[styles.circleRow, { flexDirection: "row" }]}>
          <View style={styles.circleContainer}>
            <View style={styles.circle}>
              <Text style={styles.circleText}>90.0</Text>
            </View>
            <Text style={styles.circleLabel}>FG%</Text>
          </View>
          <View style={styles.circleContainer}>
            <View style={styles.circle}>
              <Text style={styles.circleText}>90.0</Text>
            </View>
            <Text style={styles.circleLabel}>3PTS%</Text>
          </View>
          <View style={styles.circleContainer}>
            <View style={styles.circle}>
              <Text style={styles.circleText}>100.0</Text>
            </View>
            <Text style={styles.circleLabel}>2PTS%</Text>
          </View>
          <View style={styles.circleContainer}>
            <View style={styles.circle}>
              <Text style={styles.circleText}>90.0</Text>
            </View>
            <Text style={styles.circleLabel}>FT%</Text>
          </View>
        </View>
        <View style={styles.webViewContainer}>
          <WebView
            source={{
              uri: "https://www.flashscore.com.au/match/xUoDDejA/#/match-summary/match-summary",
            }}
            style={styles.webView}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  DashBoardBox: {
    flexGrow: 1,
    marginHorizontal: windowWidth * 0.03,
    marginVertical: windowWidth * 0.06,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
  },
  textBox: {
    flexDirection: "row",
    marginHorizontal: windowWidth * 0.05,
  },
  statsText: {
    fontSize: scaleFontSize(18),
    color: "#164CA8",
    fontWeight: "bold",
    letterSpacing: 1,
    alignItems: "center",
    marginTop: windowHeight * 0.02,
  },
  statsNumber: {
    fontSize: scaleFontSize(16),
    color: "#164CA8",
    letterSpacing: 1,
    alignItems: "center",
    marginTop: windowHeight * 0.02,
  },
  teamIcon: {
    width: 35,
    height: 35,
    marginTop: windowHeight * 0.013,

    marginBottom: windowHeight * 0.01,
    alignItems: "center",
  },
  bigStatsBanner: {
    width: windowWidth,
    flexGrow: 1,
    backgroundColor: "#164CA8",
  },
  bannerNumber: {
    fontSize: scaleFontSize(30),
    color: "#FFFFFF",
    textAlign: "center",
    letterSpacing: 1,
    marginTop: windowHeight * 0.02,
  },
  bannerText: {
    fontSize: scaleFontSize(16),
    textAlign: "center",
    color: "#FFFFFF",
    letterSpacing: 1.1,
    marginBottom: windowHeight * 0.02,
  },
  circleRow: {
    justifyContent: "space-around",
    alignItems: "center",
    flexGrow: 1,
    marginVertical: windowHeight * 0.03,
  },
  circleContainer: {
    alignItems: "center",
  },
  circle: {
    width: windowWidth * 0.18,
    height: windowHeight * 0.08,
    borderRadius: 100,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginTop: windowHeight * 0.02,
  },
  circleText: {
    fontSize: scaleFontSize(18),
    color: "#000000",
    fontWeight: "bold",
  },
  circleLabel: {
    marginTop: windowHeight * 0.014,
    marginLeft: windowWidth * 0.02,
    fontSize: scaleFontSize(14),
    color: "#FFFFFF",
    fontWeight: "bold",
    textAlign: "center",
  },
  webViewContainer: {
    height: windowHeight,
    width: windowWidth,
    marginBottom: windowWidth * 0.6,
  },
  webView: {
    flex: 1,
  },
});

export default DashBoardStats;
