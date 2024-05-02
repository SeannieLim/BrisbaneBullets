import {View,Text,Dimensions,ScrollView, ImageBackground} from "react-native";
import MyStyles from '../screens/TeamScreen/TeamStyles';
import ToggleComponent from "../components/TeamToggle";
import TeamPlayers from "../screens/TeamScreen/TeamPlayers";


const teamTabs = [
    {label: "Team"},
    {label: "Advance Statistics"},
];


export default function TeamScreen({navigation}) {
    
    return (
     

        <View style={MyStyles.mainContainer}>
            <View style={MyStyles.ImageBackground}><ImageBackground source={require('../../assets/Logo/BB-logo.png')} resizeMode="center" opacity={'0.5'}>
            <ScrollView>
            <Text style={MyStyles.Heading}>Team</Text>
            <ToggleComponent tabs={teamTabs} style={MyStyles.teamPageToggle}/>
            <TeamPlayers/>
            </ScrollView>
            </ImageBackground>
            </View>
        </View>
    )
}