import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from "react-native-gesture-handler";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const players = [{
  id:"1",
  jerseyNumber: 17,
  playerName: "Rocco Zikarsky",
  playerImage: require('../../../assets/teamPageImages/RoccoZikarsky.png'),
  playerProfileImage: require('../../../assets/teamPageImages/Image1.png'),
  CountryCode: 'AU',
  Country: 'Australia',
  positionCode: 'C',
  position: 'Center',
  Height: '2.17M',
  Weight: '107kg',
  DOB: '24/8/2004',
  Bio : `He recently turned 17-year-old who already stands 7'3 tall has a remarkable potential and he is going to begin that professional journey in NBL24 with the Brisbane Bullets.

  Despite being aged just 16, was one of the hottest properties and with the world at his feet but decided to join the NBL Next Star program to start his professional career and signed with the Brisbane Bullets.
  
  Penned a two-year Next Star deal to join the Bullets given he won't be eligible for the NBA Draft until 2025 and having only just turned 17, the big man is one of the most exciting talents to come through Australian basketball in a long time.
  
  Has starred in Queensland representative teams and been part of the NBA Global Academy in Canberra while also having played at the Centre of Excellence in the NBL1 East during 2023, ahead of now joining the Bullets ahead of his first NBL season.
  
  Given his pure size and with the ability to move well given his size and his ability to play above the rim at both ends of the floor, it's obvious why there is so much excitement surrounding him`
}, {
  id:"2",
  jerseyNumber: 12,
  playerName: "Aron Baynes",
  playerImage : require('../../../assets/teamPageImages/AronBaynes.jpeg'),
  playerProfileImage: require('../../../assets/teamPageImages/Image1.png'),
  CountryCode: 'AU',
  Country: 'Australia',
  positionCode: 'C',
  position: 'Center',
  Height: '2.17M',
  Weight: '107kg',
  DOB: '24/8/2004',
  Bio : `He recently turned 17-year-old who already stands 7'3 tall has a remarkable potential and he is going to begin that professional journey in NBL24 with the Brisbane Bullets.

  Despite being aged just 16, was one of the hottest properties and with the world at his feet but decided to join the NBL Next Star program to start his professional career and signed with the Brisbane Bullets.
  
  Penned a two-year Next Star deal to join the Bullets given he won't be eligible for the NBA Draft until 2025 and having only just turned 17, the big man is one of the most exciting talents to come through Australian basketball in a long time.
  
  Has starred in Queensland representative teams and been part of the NBA Global Academy in Canberra while also having played at the Centre of Excellence in the NBL1 East during 2023, ahead of now joining the Bullets ahead of his first NBL season.
  
  Given his pure size and with the ability to move well given his size and his ability to play above the rim at both ends of the floor, it's obvious why there is so much excitement surrounding him`
}, {
  id:"3",
  jerseyNumber: 23,
  playerName: "Casey Prather",
  playerImage : require('../../../assets/teamPageImages/CaseyPrather.jpeg'),
  playerProfileImage: require('../../../assets/teamPageImages/Image1.png'),
  CountryCode: 'AU',
  Country: 'Australia',
  positionCode: 'C',
  position: 'Center',
  Height: '2.17M',
  Weight: '107kg',
  DOB: '24/8/2004',
  Bio : `He recently turned 17-year-old who already stands 7'3 tall has a remarkable potential and he is going to begin that professional journey in NBL24 with the Brisbane Bullets.

  Despite being aged just 16, was one of the hottest properties and with the world at his feet but decided to join the NBL Next Star program to start his professional career and signed with the Brisbane Bullets.
  
  Penned a two-year Next Star deal to join the Bullets given he won't be eligible for the NBA Draft until 2025 and having only just turned 17, the big man is one of the most exciting talents to come through Australian basketball in a long time.
  
  Has starred in Queensland representative teams and been part of the NBA Global Academy in Canberra while also having played at the Centre of Excellence in the NBL1 East during 2023, ahead of now joining the Bullets ahead of his first NBL season.
  
  Given his pure size and with the ability to move well given his size and his ability to play above the rim at both ends of the floor, it's obvious why there is so much excitement surrounding him`
}, {
  id:"4",
  jerseyNumber: 34,
  playerName: "Chris Smith",
  playerImage : require('../../../assets/teamPageImages/ChrisSmith.png'),
  playerProfileImage: require('../../../assets/teamPageImages/Image1.png'),
  CountryCode: 'AU',
  Country: 'Australia',
  positionCode: 'C',
  position: 'Center',
  Height: '2.17M',
  Weight: '107kg',
  DOB: '24/8/2004',
  Bio : `He recently turned 17-year-old who already stands 7'3 tall has a remarkable potential and he is going to begin that professional journey in NBL24 with the Brisbane Bullets.

  Despite being aged just 16, was one of the hottest properties and with the world at his feet but decided to join the NBL Next Star program to start his professional career and signed with the Brisbane Bullets.
  
  Penned a two-year Next Star deal to join the Bullets given he won't be eligible for the NBA Draft until 2025 and having only just turned 17, the big man is one of the most exciting talents to come through Australian basketball in a long time.
  
  Has starred in Queensland representative teams and been part of the NBA Global Academy in Canberra while also having played at the Centre of Excellence in the NBL1 East during 2023, ahead of now joining the Bullets ahead of his first NBL season.
  
  Given his pure size and with the ability to move well given his size and his ability to play above the rim at both ends of the floor, it's obvious why there is so much excitement surrounding him`
}, {
  id:"5",
  jerseyNumber: 0,
  playerName: "DJ Mitchell",
  playerImage : require('../../../assets/teamPageImages/DJMitchell.png'),
  playerProfileImage: require('../../../assets/teamPageImages/Image1.png'),
  CountryCode: 'AU',
  Country: 'Australia',
  positionCode: 'C',
  position: 'Center',
  Height: '2.17M',
  Weight: '107kg',
  DOB: '24/8/2004',
  Bio : `He recently turned 17-year-old who already stands 7'3 tall has a remarkable potential and he is going to begin that professional journey in NBL24 with the Brisbane Bullets.

  Despite being aged just 16, was one of the hottest properties and with the world at his feet but decided to join the NBL Next Star program to start his professional career and signed with the Brisbane Bullets.
  
  Penned a two-year Next Star deal to join the Bullets given he won't be eligible for the NBA Draft until 2025 and having only just turned 17, the big man is one of the most exciting talents to come through Australian basketball in a long time.
  
  Has starred in Queensland representative teams and been part of the NBA Global Academy in Canberra while also having played at the Centre of Excellence in the NBL1 East during 2023, ahead of now joining the Bullets ahead of his first NBL season.
  
  Given his pure size and with the ability to move well given his size and his ability to play above the rim at both ends of the floor, it's obvious why there is so much excitement surrounding him`
}, {
  id:"6",
  jerseyNumber: 4,
  playerName: "Gabe Hadley",
  playerImage : require('../../../assets/teamPageImages/GabeHadley.jpeg'),
  playerProfileImage: require('../../../assets/teamPageImages/Image1.png'),
  CountryCode: 'AU',
  Country: 'Australia',
  positionCode: 'C',
  position: 'Center',
  Height: '2.17M',
  Weight: '107kg',
  DOB: '24/8/2004',
  Bio : `He recently turned 17-year-old who already stands 7'3 tall has a remarkable potential and he is going to begin that professional journey in NBL24 with the Brisbane Bullets.

  Despite being aged just 16, was one of the hottest properties and with the world at his feet but decided to join the NBL Next Star program to start his professional career and signed with the Brisbane Bullets.
  
  Penned a two-year Next Star deal to join the Bullets given he won't be eligible for the NBA Draft until 2025 and having only just turned 17, the big man is one of the most exciting talents to come through Australian basketball in a long time.
  
  Has starred in Queensland representative teams and been part of the NBA Global Academy in Canberra while also having played at the Centre of Excellence in the NBL1 East during 2023, ahead of now joining the Bullets ahead of his first NBL season.
  
  Given his pure size and with the ability to move well given his size and his ability to play above the rim at both ends of the floor, it's obvious why there is so much excitement surrounding him`
}, {
  id:"7",
  jerseyNumber: 2,
  playerName: "Isaac White",
  playerImage : require('../../../assets/teamPageImages/IsaacWhite.jpeg'),
  playerProfileImage: require('../../../assets/teamPageImages/Image1.png'),
  CountryCode: 'AU',
  Country: 'Australia',
  positionCode: 'C',
  position: 'Center',
  Height: '2.17M',
  Weight: '107kg',
  DOB: '24/8/2004',
  Bio : `He recently turned 17-year-old who already stands 7'3 tall has a remarkable potential and he is going to begin that professional journey in NBL24 with the Brisbane Bullets.

  Despite being aged just 16, was one of the hottest properties and with the world at his feet but decided to join the NBL Next Star program to start his professional career and signed with the Brisbane Bullets.
  
  Penned a two-year Next Star deal to join the Bullets given he won't be eligible for the NBA Draft until 2025 and having only just turned 17, the big man is one of the most exciting talents to come through Australian basketball in a long time.
  
  Has starred in Queensland representative teams and been part of the NBA Global Academy in Canberra while also having played at the Centre of Excellence in the NBL1 East during 2023, ahead of now joining the Bullets ahead of his first NBL season.
  
  Given his pure size and with the ability to move well given his size and his ability to play above the rim at both ends of the floor, it's obvious why there is so much excitement surrounding him`
}, {
  id:"8",
  jerseyNumber: 13,
  playerName: "Josh Bannan",
  playerImage : require('../../../assets/teamPageImages/JoshBannan.png'),
  playerProfileImage: require('../../../assets/teamPageImages/Image1.png'),
  CountryCode: 'AU',
  Country: 'Australia',
  Bio : `He recently turned 17-year-old who already stands 7'3 tall has a remarkable potential and he is going to begin that professional journey in NBL24 with the Brisbane Bullets.

  Despite being aged just 16, was one of the hottest properties and with the world at his feet but decided to join the NBL Next Star program to start his professional career and signed with the Brisbane Bullets.
  
  Penned a two-year Next Star deal to join the Bullets given he won't be eligible for the NBA Draft until 2025 and having only just turned 17, the big man is one of the most exciting talents to come through Australian basketball in a long time.
  
  Has starred in Queensland representative teams and been part of the NBA Global Academy in Canberra while also having played at the Centre of Excellence in the NBL1 East during 2023, ahead of now joining the Bullets ahead of his first NBL season.
  
  Given his pure size and with the ability to move well given his size and his ability to play above the rim at both ends of the floor, it's obvious why there is so much excitement surrounding him`
}, {
  id:"9",
  jerseyNumber: 8,
  playerName: "Mitch Norton",
  playerImage : require('../../../assets/teamPageImages/MitchNorton.jpeg'),
  playerProfileImage: require('../../../assets/teamPageImages/Image1.png'),
  CountryCode: 'AU',
  Country: 'Australia',
  positionCode: 'C',
  position: 'Center',
  Height: '2.17M',
  Weight: '107kg',
  DOB: '24/8/2004',
  Bio : `He recently turned 17-year-old who already stands 7'3 tall has a remarkable potential and he is going to begin that professional journey in NBL24 with the Brisbane Bullets.

  Despite being aged just 16, was one of the hottest properties and with the world at his feet but decided to join the NBL Next Star program to start his professional career and signed with the Brisbane Bullets.
  
  Penned a two-year Next Star deal to join the Bullets given he won't be eligible for the NBA Draft until 2025 and having only just turned 17, the big man is one of the most exciting talents to come through Australian basketball in a long time.
  
  Has starred in Queensland representative teams and been part of the NBA Global Academy in Canberra while also having played at the Centre of Excellence in the NBL1 East during 2023, ahead of now joining the Bullets ahead of his first NBL season.
  
  Given his pure size and with the ability to move well given his size and his ability to play above the rim at both ends of the floor, it's obvious why there is so much excitement surrounding him`
}, {
  id:"10",
  jerseyNumber: 20,
  playerName: "Nathan Sobey",
  playerImage : require('../../../assets/teamPageImages/NathanSobey.png'),
  playerProfileImage: require('../../../assets/teamPageImages/Image1.png'),
  CountryCode: 'AU',
  Country: 'Australia',
  positionCode: 'C',
  position: 'Center',
  Height: '2.17M',
  Weight: '107kg',
  DOB: '24/8/2004',
  Bio : `He recently turned 17-year-old who already stands 7'3 tall has a remarkable potential and he is going to begin that professional journey in NBL24 with the Brisbane Bullets.

  Despite being aged just 16, was one of the hottest properties and with the world at his feet but decided to join the NBL Next Star program to start his professional career and signed with the Brisbane Bullets.
  
  Penned a two-year Next Star deal to join the Bullets given he won't be eligible for the NBA Draft until 2025 and having only just turned 17, the big man is one of the most exciting talents to come through Australian basketball in a long time.
  
  Has starred in Queensland representative teams and been part of the NBA Global Academy in Canberra while also having played at the Centre of Excellence in the NBL1 East during 2023, ahead of now joining the Bullets ahead of his first NBL season.
  
  Given his pure size and with the ability to move well given his size and his ability to play above the rim at both ends of the floor, it's obvious why there is so much excitement surrounding him`
}, {
  id:"11",
  jerseyNumber: 26,
  playerName: "Sam McDaniel",
  playerImage : require('../../../assets/teamPageImages/SamMcDaniel.png'),
  playerProfileImage: require('../../../assets/teamPageImages/Image1.png'),
  CountryCode: 'AU',
  Country: 'Australia',
  positionCode: 'C',
  position: 'Center',
  Height: '2.17M',
  Weight: '107kg',
  DOB: '24/8/2004',
  Bio : `He recently turned 17-year-old who already stands 7'3 tall has a remarkable potential and he is going to begin that professional journey in NBL24 with the Brisbane Bullets.

  Despite being aged just 16, was one of the hottest properties and with the world at his feet but decided to join the NBL Next Star program to start his professional career and signed with the Brisbane Bullets.
  
  Penned a two-year Next Star deal to join the Bullets given he won't be eligible for the NBA Draft until 2025 and having only just turned 17, the big man is one of the most exciting talents to come through Australian basketball in a long time.
  
  Has starred in Queensland representative teams and been part of the NBA Global Academy in Canberra while also having played at the Centre of Excellence in the NBL1 East during 2023, ahead of now joining the Bullets ahead of his first NBL season.
  
  Given his pure size and with the ability to move well given his size and his ability to play above the rim at both ends of the floor, it's obvious why there is so much excitement surrounding him`
}, {
  id:"12",
  jerseyNumber: 32,
  playerName: "Matthew Johns",
  playerImage : require('../../../assets/teamPageImages/MatthewJohns.png'),
  playerProfileImage: require('../../../assets/teamPageImages/Image1.png'),
  CountryCode: 'AU',
  Country: 'Australia',
  positionCode: 'C',
  position: 'Center',
  Height: '2.17M',
  Weight: '107kg',
  DOB: '24/8/2004',
  Bio : `He recently turned 17-year-old who already stands 7'3 tall has a remarkable potential and he is going to begin that professional journey in NBL24 with the Brisbane Bullets.

  Despite being aged just 16, was one of the hottest properties and with the world at his feet but decided to join the NBL Next Star program to start his professional career and signed with the Brisbane Bullets.
  
  Penned a two-year Next Star deal to join the Bullets given he won't be eligible for the NBA Draft until 2025 and having only just turned 17, the big man is one of the most exciting talents to come through Australian basketball in a long time.
  
  Has starred in Queensland representative teams and been part of the NBA Global Academy in Canberra while also having played at the Centre of Excellence in the NBL1 East during 2023, ahead of now joining the Bullets ahead of his first NBL season.
  
  Given his pure size and with the ability to move well given his size and his ability to play above the rim at both ends of the floor, it's obvious why there is so much excitement surrounding him`
}, {
  id:"13",
  jerseyNumber: 3,
  playerName: "Shannon Scott",
  playerImage : require('../../../assets/teamPageImages/ShannonScott.jpeg'),
  playerProfileImage: require('../../../assets/teamPageImages/Image1.png'),
  CountryCode: 'AU',
  Country: 'Australia',
  positionCode: 'C',
  position: 'Center',
  Height: '2.17M',
  Weight: '107kg',
  DOB: '24/8/2004',
  Bio : `He recently turned 17-year-old who already stands 7'3 tall has a remarkable potential and he is going to begin that professional journey in NBL24 with the Brisbane Bullets.

  Despite being aged just 16, was one of the hottest properties and with the world at his feet but decided to join the NBL Next Star program to start his professional career and signed with the Brisbane Bullets.
  
  Penned a two-year Next Star deal to join the Bullets given he won't be eligible for the NBA Draft until 2025 and having only just turned 17, the big man is one of the most exciting talents to come through Australian basketball in a long time.
  
  Has starred in Queensland representative teams and been part of the NBA Global Academy in Canberra while also having played at the Centre of Excellence in the NBL1 East during 2023, ahead of now joining the Bullets ahead of his first NBL season.
  
  Given his pure size and with the ability to move well given his size and his ability to play above the rim at both ends of the floor, it's obvious why there is so much excitement surrounding him`
}, {
  id:"14",
  jerseyNumber: 6,
  playerName: "Tristan Devers",
  playerImage : require('../../../assets/teamPageImages/TristanDevers.png'),
  playerProfileImage: require('../../../assets/teamPageImages/Image1.png'),
  CountryCode: 'AU',
  Country: 'Australia',
  positionCode: 'C',
  position: 'Center',
  Height: '2.17M',
  Weight: '107kg',
  DOB: '24/8/2004',
  Bio : `He recently turned 17-year-old who already stands 7'3 tall has a remarkable potential and he is going to begin that professional journey in NBL24 with the Brisbane Bullets.

  Despite being aged just 16, was one of the hottest properties and with the world at his feet but decided to join the NBL Next Star program to start his professional career and signed with the Brisbane Bullets.
  
  Penned a two-year Next Star deal to join the Bullets given he won't be eligible for the NBA Draft until 2025 and having only just turned 17, the big man is one of the most exciting talents to come through Australian basketball in a long time.
  
  Has starred in Queensland representative teams and been part of the NBA Global Academy in Canberra while also having played at the Centre of Excellence in the NBL1 East during 2023, ahead of now joining the Bullets ahead of his first NBL season.
  
  Given his pure size and with the ability to move well given his size and his ability to play above the rim at both ends of the floor, it's obvious why there is so much excitement surrounding him`
}, {
  id:"15",
  jerseyNumber: 24,
  playerName: "Tyrell Harrison",
  playerImage : require('../../../assets/teamPageImages/TyrrelHarrison.png'),
  playerProfileImage: require('../../../assets/teamPageImages/Image1.png'),
  CountryCode: 'AU',
  Country: 'Australia',
  positionCode: 'C',
  position: 'Center',
  Height: '2.17M',
  Weight: '107kg',
  DOB: '24/8/2004',
  Bio : `He recently turned 17-year-old who already stands 7'3 tall has a remarkable potential and he is going to begin that professional journey in NBL24 with the Brisbane Bullets.

  Despite being aged just 16, was one of the hottest properties and with the world at his feet but decided to join the NBL Next Star program to start his professional career and signed with the Brisbane Bullets.
  
  Penned a two-year Next Star deal to join the Bullets given he won't be eligible for the NBA Draft until 2025 and having only just turned 17, the big man is one of the most exciting talents to come through Australian basketball in a long time.
  
  Has starred in Queensland representative teams and been part of the NBA Global Academy in Canberra while also having played at the Centre of Excellence in the NBL1 East during 2023, ahead of now joining the Bullets ahead of his first NBL season.
  
  Given his pure size and with the ability to move well given his size and his ability to play above the rim at both ends of the floor, it's obvious why there is so much excitement surrounding him`
}];


const Square = ({ player }) => {
  const navigation = useNavigation();
  const navigateToProfile = () => {
    navigation.navigate('PlayerProfile', {player });
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
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        {/* Map over the array of data and render each square */}
        <View style={styles.leftColumn}>
          {players.slice(0, 8).map((player, index) => (
            <Square key={index} player={player} />
          ))}
        </View>
        <View style={styles.rightColumn}>
          {players.slice(8).map((player, index) => (
            <Square key={index + 8} player={player} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: windowHeight * 0.015,
    flex: 1,
    alignItems: "flex-start",
  },
  leftColumn: {
    flex: 1, // Take up 50% of the available space
    // flexDirection: "column",
    marginLeft: windowWidth * 0.001, // Adjust margin if needed
  },
  rightColumn: {
    flex: 1, // Take up 50% of the available space
    // flexDirection: "column",
    marginLeft: windowWidth * 0.1,
  },
  square: {
    width: 140,
    height: 120,
    backgroundColor: "lightblue",
    marginVertical: windowHeight * 0.01,
    borderRadius: 15,
    shadowColor: "#000", // Shadow color
    shadowOffset: { width: 1, height: 2 }, // Shadow offset
    shadowOpacity: 0.25, // Shadow opacity
    shadowRadius: 4, // Shadow radius
    elevation: 5, // Elevation for Android
    overflow: "hidden",
  },
  imageContainer: {
    width: "100%",
    height: "100%",
    borderRadius: 15,
    overflow: "hidden",
  },
  playerImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  textContainer: {
    position: "absolute", // Position the text container absolutely within the container
    top: 15,
    left: 10,
    alignItems: "center",
  },
  jerseyNumber: {
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default TeamPlayers;
