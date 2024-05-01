import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import CountryFlag from "react-native-country-flag";
import MyStyles from './TeamStyles';

function PlayerDetails({player}){
    return(
        <View style={MyStyles.scrollViewContent}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <View style={MyStyles.container}>
            <Text style={MyStyles.playerDetailsText}>Nationality</Text>
            <View style={MyStyles.countryIconContainer}>
              <CountryFlag isoCode={player.CountryCode} size={45} style={MyStyles.countryIcon} />
              <Text style={MyStyles.Country}>{player.Country}</Text>
            </View>
          </View>
          <View style={MyStyles.container}>
            <Text style={MyStyles.playerDetailsText}>Position</Text>
            <View style={MyStyles.circle}><Text style={MyStyles.positionCode}>{player.positionCode}</Text></View>
            <Text style={MyStyles.positionText}>{player.position}</Text>
          </View>
          <View style={MyStyles.container}>
            <Text style={MyStyles.playerTextContainer}>Height</Text>
            <Text style={MyStyles.PlayerText}>{player.Height}</Text>
          </View>
          <View style={MyStyles.container}>
            <Text style={MyStyles.playerTextContainer}>Weight</Text>
            <Text style={MyStyles.PlayerText}>{player.Weight}</Text>
          </View>
          <View style={MyStyles.container}>
            <Text style={MyStyles.playerTextContainer}>DOB</Text>
            <Text style={[MyStyles.PlayerText, { fontSize: 14 }]}>{player.DOB}</Text>
          </View>
        </ScrollView>
  </View>
    )
     
    };

export default PlayerDetails