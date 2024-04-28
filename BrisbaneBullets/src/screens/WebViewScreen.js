import React from "react";

import { WebView } from "react-native-webview";
import { View, StyleSheet } from "react-native";

const WebViewScreen = ({ route }) => {
  const { uri } = route.params;

  return (
    <View style={styles.frame}>
      <WebView source={{ uri }} style={styles.webview} />
    </View>
  );
};

const styles = StyleSheet.create({
  frame: {
    flex: 1,
    margin: 10, // Adjust frame margins as needed
    borderWidth: 1, // Frame border width
    borderColor: "lightgray", // Frame border color
    borderRadius: 10, // Frame border radius for rounded corners
    overflow: "hidden", // Hide overflow to respect border radius
  },
  webview: {
    flex: 1,
  },
});

export default WebViewScreen;
