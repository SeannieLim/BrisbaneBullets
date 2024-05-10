import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
} from "react-native";
import MyStyles from "../screens/TeamScreens/TeamStyles";
import TeamToggle from "../components/TeamToggle";
import TeamPlayers from "../screens/TeamScreens/TeamPlayers";
import { GlobalStyles } from "../constants/GlobalStyles";
import { Box } from "@gluestack-ui/themed-native-base";

const teamTabs = [
  { label: "Players", content: <TeamPlayers /> },
  { label: "Advance Statistics" },
];

export default function TeamScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={MyStyles.mainContainer}>
      <SafeAreaView style={GlobalStyles.safeArea}>
        <ImageBackground
          source={require("../../assets/Logo/BB-logo.png")}
          resizeMode="center"
          opacity={0.5}
        >
          <View style={MyStyles.ImageBackground}>
            <Box style={GlobalStyles.screenHeader}>
              <Text style={GlobalStyles.screenHeading}>Team</Text>
            </Box>
            <View style={MyStyles.toggleContainer}>
              <TeamToggle tabs={teamTabs} />
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </ScrollView>
  );
}
