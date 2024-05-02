import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView,Button } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import MyStyles from './TeamStyles';
import { AntDesign } from '@expo/vector-icons';
import ToggleComponent from '../../components/TeamToggle';
import CountryFlag from "react-native-country-flag";
import PlayerDetails from './PlayerDetails';  

const ProfileStats = [
  { label: "Profile" },
  { label: "Stats" },
];

const PlayerProfile = ({ route }) => {
  const { player } = route.params;
  const navigation = useNavigation();

  // Back to TeamScreen
  const goBackToTeamScreen = () => {
    navigation.goBack();
  };

  const buttonWidth = player.playerName.length * 9.5

  return (
    <ScrollView style={MyStyles.mainContainer}>
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

      <ToggleComponent tabs={ProfileStats} style={MyStyles.ProfileStatsToggle} />

      
      <PlayerDetails player = {player}/>

      <Text style={MyStyles.socialMedia}>Social Media</Text>
  <TouchableOpacity style={[MyStyles.buttonContainer, { width: buttonWidth }]}   >
  <Text style={MyStyles.buttonText}>@{player.playerName}</Text>
  <Image source={require('../../../assets/social-media/X.png')} style={MyStyles.icon} />
</TouchableOpacity>
      
  <Text style={MyStyles.socialMedia}>Bio</Text>
  <Text style={MyStyles.bio}>The recently turned 17-year-old who already stands 7'3 tall has a remarkable potential for Brisbane Bullets.</Text>
  </ScrollView>
  );
};

export default PlayerProfile;