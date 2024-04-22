import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { GluestackUIProvider, Text } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config"; // Importing configuration object for GlueStack to access styling configurations and theme settings

import HomeScreen from './src/screens/HomeScreen';
export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <SafeAreaView style={styles.container} customTheme >
        <HomeScreen />
        <StatusBar style="auto" />
      </SafeAreaView>
    </GluestackUIProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
