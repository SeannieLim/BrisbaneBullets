import {View,Text,Dimensions,ScrollView, ImageBackground, Linking} from "react-native";
import {MyStyles} from '../screens/TeamScreen/TeamStyles';
import ToggleComponent from "../components/TeamToggle";
import TeamPlayers from "../screens/TeamScreen/TeamPlayers"


const teamTabs = [
    {label: "Players"},
    {label: "Advance Statistics"},
];

const adstatsURL = "https://www.google.com";

export default function TeamScreen({navigation}) {
    const handleTabSelect = (tab) => {
        console.log("Tab selected:", tab.label);
        if (tab.label === "Advance Statistics") {
        console.log("Opening URL:", adstatsURL);
        Linking.openURL(adstatsURL).catch(err => console.error("Failed to open URL:", err));
    }
    };
    
    return (
        <View style={MyStyles.mainContainer}>
            <View style={MyStyles.ImageBackground}><ImageBackground source={require('../../assets/Logo/BB-logo.png')} resizeMode="center" opacity={'0.5'}>
            <ScrollView>
            <Text style={MyStyles.Heading}>Team</Text>
            <ToggleComponent tabs={teamTabs} style={MyStyles.teamPageToggle} onSelect={handleTabSelect} />
            <TeamPlayers/>
            </ScrollView>
            </ImageBackground>
            </View>
        </View>
        
    )
}