import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView,Button } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import MyStyles from './TeamStyles';
import { AntDesign } from '@expo/vector-icons';
import ProfileStatsToggle from '../../components/ProfileStatsToggle'
import CountryFlag from "react-native-country-flag";
import PlayerDetails from './PlayerDetails';  
import PlayerStats from './PlayerStats';

const PlayerProfile = ({ route }) => {
  const { player } = route.params;
  const navigation = useNavigation();
  // Back to TeamScreen
  const goBackToTeamScreen = () => {
    navigation.navigate("TeamScreen");
  };
  
 const ProfileStats = [
  { label: "Profile", content:  <PlayerDetails player = {player}/>},
  { label: "Stats", content: <PlayerStats player = {player}/>  },
];

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

        {/* Data pass through player */}
        <ProfileStatsToggle tabs={ProfileStats} style={MyStyles.ProfileStatsToggle} player={player}/>

    </ScrollView>
  );
};

export default PlayerProfile;