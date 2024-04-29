import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const players = [{
  id:"1",
  jerseyNumber: 17,
  playerName: "Rocco",
  playerImage : "img"
}]

const Square = () => {
  return <View style={styles.square}></View>;
};

const TeamPlayers = () => {
  // Create an array of data representing each square (Mapping)
  const squaresData = Array.from({ length: 15 }, (_, index) => index + 1);

  return (
    <View style={styles.container}>
      {/* Map over the array of data and render each square */}
      <View style={styles.leftColumn}>
        {squaresData.slice(0, 8).map((item, index) => (
          <Square key={index} />
        ))}
      </View>
      <View style={styles.rightColumn}>
        {squaresData.slice(8).map((item, index) => (
          <Square key={index} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: windowHeight * 0.015,
    marginLeft: windowWidth * 0.1,
  },
  leftColumn: {
    flex: 1,
    flexDirection: 'column',
  },
  rightColumn: {
    flex: 1,
    flexDirection: 'column',
    marginRight: windowWidth * 0.05
  },
  square: {
    width: 140,
    height: 120,
    backgroundColor: 'lightblue',
    marginVertical : windowHeight * 0.010,
    borderRadius: 15,
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.25, // Shadow opacity
    shadowRadius: 4, // Shadow radius
    elevation: 5, // Elevation for Android
  }
});

export default TeamPlayers;
