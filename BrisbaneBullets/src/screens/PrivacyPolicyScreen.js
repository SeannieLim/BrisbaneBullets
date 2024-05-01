// https://www.brisbanebullets.com.au/pages/privacy-policy
import React, { useRef, useLayoutEffect } from "react";
import { WebView } from "react-native-webview";
import { View, StyleSheet, TouchableOpacity, Text, Share } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { scaleFontSize } from "../constants/Layout";

const PrivacyPolicyScreen = ({ route }) => {
  const { uri } = route.params;
  const webviewRef = useRef(null);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: { height: 100, backgroundColor: "#164CA8" },
      headerTitle: "PrivacyPolicy",
      headerTitleAlign: "center",
      headerTitleStyle: {
        color: "white",
        // fontWeight: "bold",
        fontSize: scaleFontSize(20),
      },
      headerTintColor: "#fab81b",
      // headerBackTitle: "Back",
      headerBackTitleVisible: false,
      headerLeftContainerStyle: { paddingLeft: 10 },
      headerRightContainerStyle: { paddingRight: 10 },

      headerRight: () => (
        <View style={styles.headerButtons}>
          <TouchableOpacity onPress={onShare} style={styles.headerButton}>
            <Entypo name="share-alternative" size={26} color="white" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  const onShare = async () => {
    try {
      await Share.share({
        url: uri,
      });
    } catch (error) {
      console.error("Error sharing", error);
    }
  };

  return (
    <WebView
      // added originWhitelist to fix the warning (can't open url: about:srcdoc)
      originWhitelist={["*"]}
      ref={webviewRef}
      source={{ uri }}
      style={styles.webview}
    />
  );
};

const styles = StyleSheet.create({
  webview: {
    flex: 1,
  },
  headerButtons: {
    flexDirection: "row",
  },
  headerButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});

export default PrivacyPolicyScreen;
