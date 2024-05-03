import React from 'react';
import { View, Text, ScrollView,TouchableOpacity,Image,Dimensions } from 'react-native';
import MyStyles from './TeamStyles';
import ProfileStatsToggle from '../../components/ProfileStatsToggle'
import { useRoute, useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ProfileStats = [
  { label: "Profile" },
  { label: "Stats" },
];

const PlayerStats = ({route}) => {

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
        <Image
          source={player.playerProfileImage}
          style={MyStyles.playerProfileImage}
        />
        <View style={MyStyles.textContainer}>
          <Text style={MyStyles.jerseyNumber}>{player.jerseyNumber}</Text>
        </View>
      </View>

      <ProfileStatsToggle tabs={ProfileStats} style={MyStyles.ProfileStatsToggle}  player={player}/>

 
      <View style={{ 
      backgroundColor: '#fff', 
      padding: 20, 
      top:20,
      bottom: 20,
      borderWidth: 0, // Set border width to zero to remove outer border
      marginLeft: windowWidth * 0.1
    }}>
      <View style={{ flexDirection: 'row'}}>
        <View style={{ flex: 1 }}>
          <Text style={MyStyles.statsText}>GP</Text>
          <Text style={MyStyles.statsValueText}>27</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={MyStyles.statsText}>PPG</Text>
          <Text style={MyStyles.statsValueText}>25.6</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={MyStyles.statsText}>Mins</Text>
          <Text style={MyStyles.statsValueText}>25.5</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 1 }}>
          <Text style={MyStyles.statsText}>FGA</Text>
          <Text style={MyStyles.statsValueText}>15.7</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={MyStyles.statsText}>FGM</Text>
          <Text style={MyStyles.statsValueText}>6.8</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={MyStyles.statsText}>REB</Text>
          <Text style={MyStyles.statsValueText}>9.2</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 1 }}>
          <Text style={MyStyles.statsText}>FG%</Text>
          <Text style={MyStyles.statsValueText}>53.5</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={MyStyles.statsText}>3PA</Text>
          <Text style={MyStyles.statsValueText}>1.7%</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={MyStyles.statsText}>AST</Text>
          <Text style={MyStyles.statsValueText}>1.5</Text>
        </View>
      </View>
    </View>

    </ScrollView>
  );
};

export default PlayerStats;