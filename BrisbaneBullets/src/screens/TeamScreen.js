import {
    View,
    Text,
    Dimensions,
    ScrollView,
    ImageBackground,
  } from "react-native";
  import MyStyles from "../screens/TeamScreens/TeamStyles";
  import TeamToggle from "../components/TeamToggle";
  import TeamPlayers from "../screens/TeamScreens/TeamPlayers";
  
  const teamTabs = [
    { label: "Players", content: <TeamPlayers /> },
    { label: "Advance Statistics" },
  ];
  
  export default function TeamScreen({ navigation }) {
    return (
      <View style={MyStyles.mainContainer}>
        <View style={MyStyles.ImageBackground}>
          <ImageBackground
            source={require("../../assets/Logo/BB-logo.png")}
            resizeMode="center"
            opacity={0.5}
          >
            <ScrollView>
            <Text style={MyStyles.Heading}>Team</Text>
            <View style={MyStyles.toggleContainer}>
              <TeamToggle tabs={teamTabs}/>
            </View>
            </ScrollView>
          </ImageBackground>
        </View>
      </View>
    );
  }