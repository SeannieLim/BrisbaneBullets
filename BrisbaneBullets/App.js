import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.boxContainer}>
        <View style={[styles.topBox, { backgroundColor: '#164CA8' }]} />
        <View style={[styles.belowBox, { backgroundColor: '#164CA8' }]} />
      </View>
      <View style={styles.boxContainer}>
        <View style={[styles.topBox, { backgroundColor: '#164CA8' }]} />
        <View style={[styles.belowBox, { backgroundColor: '#164CA8' }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  boxContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topBox: {
    width: 260,
    height: 30,
    marginVertical: 0.3,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  belowBox: {
    width: 260,
    height: 30,
    marginVertical: 0.3,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
});
