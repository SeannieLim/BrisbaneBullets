import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import MyStyles from "./TeamStyles";
import { GlobalStyles } from "../../constants/GlobalStyles";
import { AntDesign } from "@expo/vector-icons";
import ProfileStatsToggle from "../../components/ProfileStatsToggle";
import CountryFlag from "react-native-country-flag";
import PlayerDetails from "./PlayerDetails";
import PlayerStats from "./PlayerStats";
import { Box } from "@gluestack-ui/themed-native-base";

const PlayerProfile = ({ route }) => {
  const { player } = route.params;
  const navigation = useNavigation();
  const [showGif, setShowGif] = useState(true);

  useEffect(() => {
    const gifInterval = setInterval(() => {
      setShowGif(false);
      setTimeout(() => {
        setShowGif(true);
      }, 14000); // Adjust the time for how long you want the GIF to be displayed
    }, 10000); // Interval for every 10 seconds
    return () => clearInterval(gifInterval);
  }, []);

  // Back to TeamScreen
  const goBackToTeamScreen = () => {
    navigation.navigate("TeamScreen");
  };

  const ProfileStats = [
    { label: "Profile", content: <PlayerDetails player={player} /> },
    { label: "Stats", content: <PlayerStats player={player} /> },
  ];

  return (
    <View style={GlobalStyles.mainContainer}>
      <SafeAreaView style={GlobalStyles.safeArea}>
        {/* <TouchableOpacity onPress={goBackToTeamScreen}>
          <AntDesign name="left" size={32} style={MyStyles.BackArrow} />
        </TouchableOpacity> */}
        {/* <Box style={GlobalStyles.screenHeader}>
          <Text style={MyStyles.playerName}>{player.playerName}</Text>
        </Box> */}
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
        >
          <View style={MyStyles.imageBox}>
            {showGif ? (
              <Image
                source={require("../../../assets/teamPageImages/gif1.gif")} // Replace with the path to your GIF
                style={MyStyles.playerProfileGif}
              />
            ) : (
              <Image
                source={player.playerProfileImage}
                style={MyStyles.playerProfileImage}
              />
            )}
            <View style={MyStyles.textContainer}>
              <Text style={MyStyles.jerseyNumber}>{player.jerseyNumber}</Text>
            </View>
          </View>

          {/* Data pass through player */}
          <ProfileStatsToggle
            tabs={ProfileStats}
            style={MyStyles.ProfileStatsToggle}
            player={player}
          />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default PlayerProfile;
