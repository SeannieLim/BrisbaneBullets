import React from 'react';
import { View, Text, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';

const PlayerProfile = ({route}) => {
  const { player } = route.params;

  return (
    <View>
      <Image source={player.playerImage} />
      <Text>{player.playerName}</Text>
      <Text>Jersey Number: {player.jerseyNumber}</Text>
      {/* Other player details */}
    </View>
  );
};

export default PlayerProfile;
