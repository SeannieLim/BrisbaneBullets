import {
    View,
    Text,
    Dimensions,
    ScrollView,
    ImageBackground,
  } from "react-native";
  import MyStyles from "../screens/TeamScreen/TeamStyles";
  import ToggleTest from "../components/ToggleTest";
  import TeamPlayers from "../screens/TeamScreen/TeamPlayers";
  
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
            <Text style={MyStyles.Heading}>Team</Text>
            <View style={MyStyles.toggleContainer}>
              <ToggleTest tabs={teamTabs} />
            </View>
          </ImageBackground>
        </View>
      </View>
    );
  }