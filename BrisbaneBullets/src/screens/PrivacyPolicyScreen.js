import { View } from "@gluestack-ui/themed";
import { StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

export default function PrivacyPolicyScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <WebView
        source={{
          uri: "https://www.brisbanebullets.com.au/pages/privacy-policy",
        }}
        style={{ flex: 1 }}
      ></WebView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
