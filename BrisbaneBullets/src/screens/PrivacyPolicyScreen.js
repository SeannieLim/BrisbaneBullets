import { View } from "@gluestack-ui/themed";
import { StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

export default function PrivacyPolicyScreen() {
  return (
    <View style={styles.container}>
      <WebView
        source={{
          uri: "https://www.brisbanebullets.com.au/pages/privacy-policy",
        }}
      ></WebView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
