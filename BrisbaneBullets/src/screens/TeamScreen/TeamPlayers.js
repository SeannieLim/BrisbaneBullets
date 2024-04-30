import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const players = [{
  id:"1",
  jerseyNumber: 11,
  playerName: "Rocco Zikarsky",
  playerImage: require('../../../assets/teamPageImages/RoccoZikarsky.png')
}, {
  id:"2",
  jerseyNumber: 12,
  playerName: "Aron Baynes",
  playerImage : require('../../../assets/teamPageImages/AronBaynes.jpeg')
}, {
  id:"3",
  jerseyNumber: 23,
  playerName: "Casey Prather",
  playerImage : require('../../../assets/teamPageImages/CaseyPrather.jpeg')
}, {
  id:"4",
  jerseyNumber: 34,
  playerName: "Chris Smith",
  playerImage : require('../../../assets/teamPageImages/ChrisSmith.png')
}, {
  id:"5",
  jerseyNumber: 0,
  playerName: "DJ Mitchell",
  playerImage : require('../../../assets/teamPageImages/DJMitchell.png')
}, {
  id:"6",
  jerseyNumber: 4,
  playerName: "Gabe Hadley",
  playerImage : require('../../../assets/teamPageImages/GabeHadley.jpeg')
}, {
  id:"7",
  jerseyNumber: 2,
  playerName: "Isaac White",
  playerImage : require('../../../assets/teamPageImages/IsaacWhite.jpeg')
}, {
  id:"8",
  jerseyNumber: 13,
  playerName: "Josh Bannan",
  playerImage : require('../../../assets/teamPageImages/JoshBannan.png')
}, {
  id:"9",
  jerseyNumber: 8,
  playerName: "Mitch Norton",
  playerImage : '../../../assets/teamPageImages/MitchNorton.jpeg'
}, {
  id:"10",
  jerseyNumber: 20,
  playerName: "Nathan Sobey",
  playerImage : require('../../../assets/teamPageImages/NathanSobey.png')
}, {
  id:"11",
  jerseyNumber: 26,
  playerName: "Sam McDaniel",
  playerImage : require('../../../assets/teamPageImages/SamMcDaniel.png')
}, {
  id:"12",
  jerseyNumber: 32,
  playerName: "Matthew Johns",
  playerImage : require('../../../assets/teamPageImages/MatthewJohns.png')
}, {
  id:"13",
  jerseyNumber: 3,
  playerName: "Shannon Scott",
  playerImage : require('../../../assets/teamPageImages/ShannonScott.jpeg')
}, {
  id:"14",
  jerseyNumber: 6,
  playerName: "Tristan Devers",
  playerImage : require('../../../assets/teamPageImages/TristanDevers.png')
}, {
  id:"15",
  jerseyNumber: 24,
  playerName: "Tyrell Harrison",
  playerImage : require('../../../assets/teamPageImages/TyrrelHarrison.png')
}
]

const Square = ({ player }) => {
  console.log('Player Image:', player.playerImage);
  return (
    <View style={styles.square}>
      <Image source = {player.playerImage} style={styles.playerImage} />
      <Text>{player.jerseyNumber}</Text>
    </View>
  );
};

const TeamPlayers = () => {
  return (
    <View style={styles.container}>
      {/* Map over the array of data and render each square */}
      <View style={styles.leftColumn}>
        {players.slice(0, 8).map((player, index) => (
          <Square key={index} player={player} />
        ))}
      </View>
      <View style={styles.rightColumn}>
        {players.slice(8).map((player, index) => (
          <Square key={index+8} player={player}/>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: windowHeight * 0.015,
    marginLeft: windowWidth * 0.12,
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  playerImage: {
    width: 100, // Set the width of the image to fit within the container
    height: 100, // Set the height of the image to fit within the container
    resizeMode: 'contain',
  },
});

export default TeamPlayers;
