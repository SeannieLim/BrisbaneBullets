import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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
  playerImage : require('../../../assets/teamPageImages/MitchNorton.jpeg')
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
  const navigation = useNavigation();

  const navigateToProfile = () => {
    navigation.navigate('PlayerProfile', {players: players });
  };

  return (
    <TouchableOpacity onPress={navigateToProfile}>
      <View style={styles.square}>
        <View style={styles.imageContainer}>
          <Image 
            source={player.playerImage} 
            style={styles.playerImage} 
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.jerseyNumber}>{player.jerseyNumber}</Text>
        </View>
      </View>
    </TouchableOpacity>
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
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 1, height: 2 }, // Shadow offset
    shadowOpacity: 0.25, // Shadow opacity
    shadowRadius: 4, // Shadow radius
    elevation: 5, // Elevation for Android
    position: 'relative', // Add relative positioning to the square container
    overflow: 'hidden',
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    borderRadius: 15, 
    overflow: 'hidden', 
  },
  playerImage: {
    width: '100%', 
    height: '100%', 
    resizeMode: 'cover',
   
  },
  textContainer: {
    position: 'absolute', // Position the text container absolutely within the container
    top: 10, 
    left: 10, 
    alignItems: 'center',
  },
  jerseyNumber: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default TeamPlayers;
