import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView,Button } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import MyStyles from './TeamStyles';
import { AntDesign } from '@expo/vector-icons';
import ProfileStatsToggle from '../../components/ProfileStatsToggle'
import CountryFlag from "react-native-country-flag";
import PlayerDetails from './PlayerDetails';  
import TextTruncate from '../../components/TextTruncate';
import PlayerStats from './PlayerStats';

const ProfileStats = [
  { label: "Profile", content: <PlayerDetails player = {player}/> },
  { label: "Stats", content: <PlayerStats player = {player}/> },
];

const PlayerProfile = ({ route }) => {
  const { player } = route.params;
  const navigation = useNavigation();
  // Back to TeamScreen
  const goBackToTeamScreen = () => {
    navigation.navigate("TeamScreen");
  };
 console.log(player)
  

  const buttonWidth = player.playerName.length * 9.5

  return (
    <View style={MyStyles.mainContainer}>
      <View style={MyStyles.headerContainer}>
        <TouchableOpacity onPress={goBackToTeamScreen}>
          <AntDesign name="left" size={32} style={MyStyles.BackArrow} />
        </TouchableOpacity>
        <Text style={MyStyles.playerName}>{player.playerName}</Text>
      </View>

      <View style={MyStyles.imageBox}>
        <Image
          source={player.playerProfileImage}
          style={MyStyles.playerProfileImage}
        />
        <View style={MyStyles.textContainer}>
          <Text style={MyStyles.jerseyNumber}>{player.jerseyNumber}</Text>
        </View>
      </View>

      <View style={MyStyles.toggleContainer}>
        {/* Data pass through player */}
        <ProfileStatsToggle tabs={ProfileStats} style={MyStyles.ProfileStatsToggle} player={player}/>
      </View>

      <Text style={MyStyles.socialMedia}>Social Media</Text>
  <TouchableOpacity style={[MyStyles.buttonContainer, { width: buttonWidth }]}   >
  <Text style={MyStyles.buttonText}>@{player.playerName}</Text>
  <Image source={require('../../../assets/social-media/X.png')} style={MyStyles.icon} />
</TouchableOpacity>
      
  <Text style={MyStyles.socialMedia}>Bio</Text>


  <TextTruncate text ={player.Bio} numberOfLines={3} />
  
  </View>
  );
};

export default PlayerProfile;