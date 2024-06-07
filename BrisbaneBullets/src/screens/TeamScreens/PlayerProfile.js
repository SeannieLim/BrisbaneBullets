import React, { useState, useEffect } from "react";
import { View, Text, Image, ScrollView, SafeAreaView, } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MyStyles from "./TeamStyles";
import { GlobalStyles } from "../../constants/GlobalStyles";
import ProfileStatsToggle from "../../components/ProfileStatsToggle";
import PlayerDetails from "./PlayerDetails";
import PlayerStats from "./PlayerStats";

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
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
        >
          <View style={MyStyles.imageBox}>
            {showGif ? (
              <Image
                source={require("../../../assets/teamPageImages/gif1.gif")} // Replace with the path to GIF
                style={MyStyles.playerProfileGif}
              />
            ) : (
              <Image
                source={player.playerHeadShot ? player.playerHeadShot : player.playerProfileImage}
                style={player.playerHeadShot ? MyStyles.playerHeadShot : MyStyles.playerProfileImage}
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
