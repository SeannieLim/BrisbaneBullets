import React from 'react'
import MyStyles from '../TeamScreen/TeamStyles';
import {View,Text,Dimensions,ScrollView, ImageBackground} from "react-native";
import ToggleComponent from "../../components/TeamToggle";

const teamTabs = [
    {label: "Players"},
    {label: "AdvanceStatistics"},
];

const AdvanceStatistics = () => {
  return (
    <View style={MyStyles.mainContainer}>
            <ScrollView>
            <Text style={MyStyles.Heading}>Team</Text>
            <ToggleComponent tabs={teamTabs} style={MyStyles.teamPageToggle}/>
            </ScrollView>
            
    </View>
  )
}

export default AdvanceStatistics
