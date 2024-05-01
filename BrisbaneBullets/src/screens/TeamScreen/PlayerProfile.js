import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
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

  return (
    <ScrollView style={MyStyles.mainContainer}>
      <View style={MyStyles.headerContainer}>
        <TouchableOpacity onPress={goBackToTeamScreen}>
          <AntDesign name="left" size={32} style={MyStyles.BackArrow} />
        </TouchableOpacity>
        <Text style={MyStyles.playerName}>{player.playerName}</Text>
      </View>

      <View style={MyStyles.imageBox}>
        <View style={MyStyles.textContainer}>
          <Text style={MyStyles.jerseyNumber}>{player.jerseyNumber}</Text>
          <Image
            source={player.playerProfileImage}
            style={MyStyles.playerProfileImage}
          />
        </View>
      </View>

      <ToggleComponent tabs={ProfileStats} style={MyStyles.ProfileStatsToggle} />

      <PlayerDetails player = {player}/>
      <Text>Hello</Text>
      

      
    </ScrollView>
  );
};

export default PlayerProfile;