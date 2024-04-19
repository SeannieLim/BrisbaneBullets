import React from 'react';
import { StyleSheet, View } from 'react-native';
import HorizontalScrollContainer from './src/components/ShareButton.js'; // Corrected import path

export default function App() {
  return (
    <View style={styles.container}>
      <HorizontalScrollContainer />
    </View>
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
