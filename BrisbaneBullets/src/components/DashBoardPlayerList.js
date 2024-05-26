import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FlatList, ScrollView } from "react-native-gesture-handler";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const players = [
  {
    id: "1",
    jerseyNumber: 11,
    playerName: "Rocco",
    playerImage: require("../../assets/teamPageImages/RoccoZikarsky.png"),
    playerProfileImage: require("../../assets/teamPageImages/Image1.png"),
    playerHeadShot: require("../../assets/teamPageImages/RoccoZikarskyHead.jpg"),
    playerDashboard: require("../../assets/Dashboard/playerStats.png"),
    points: 3,
    assists: 2,
    rebounds: 1
  },
  {
    id: "2",
    jerseyNumber: 12,
    playerName: "Aron",
    playerImage: require("../../assets/teamPageImages/AronBaynes.jpeg"),
    playerProfileImage: require("../../assets/teamPageImages/Image1.png"),
    playerHeadShot: require("../../assets/teamPageImages/AronBaynesHead.jpg"),
    playerDashboard: require("../../assets/Dashboard/playerStats.png"),
    points: 2,
    assists: 2,
    rebounds: 1
  },
  {
    id: "3",
    jerseyNumber: 23,
    playerName: "Casey",
    playerImage: require("../../assets/teamPageImages/CaseyPrather.jpeg"),
    playerProfileImage: require("../../assets/teamPageImages/Image1.png"),
    playerDashboard: require("../../assets/Dashboard/playerStats.png"),
    points: 2,
    assists: 2,
    rebounds: 1
  },
  {
    id: "4",
    jerseyNumber: 34,
    playerName: "Chris",
    playerImage: require("../../assets/teamPageImages/ChrisSmith.png"),
    playerProfileImage: require("../../assets/teamPageImages/Image1.png"),
    playerHeadShot: require("../../assets/teamPageImages/ChrisSmithHead.jpg"),
    playerDashboard: require("../../assets/Dashboard/playerStats.png"),
    points: 1,
    assists: 2,
    rebounds: 1
  },
  {
    id: "5",
    jerseyNumber: 0,
    playerName: "DJ",
    playerImage: require("../../assets/teamPageImages/DJMitchell.png"),
    playerProfileImage: require("../../assets/teamPageImages/Image1.png"),
    playerHeadShot: require("../../assets/teamPageImages/DJMitchellHead.jpg"),
    playerDashboard: require("../../assets/Dashboard/playerStats.png"),
    points: 0,
    assists: 2,
    rebounds: 1
  },
  {
    id: "6",
    jerseyNumber: 4,
    playerName: "Gabe",
    playerImage: require("../../assets/teamPageImages/GabeHadley.jpeg"),
    playerProfileImage: require("../../assets/teamPageImages/Image1.png"),
    playerHeadShot: require("../../assets/teamPageImages/GabeHadleyHead.jpg"),
    playerDashboard: require("../../assets/Dashboard/playerStats.png"),
    points: 0,
    assists: 2,
    rebounds: 1
  },
  {
    id: "7",
    jerseyNumber: 2,
    playerName: "Isaac",
    playerImage: require("../../assets/teamPageImages/IsaacWhite.jpeg"),
    playerProfileImage: require("../../assets/teamPageImages/Image1.png"),
    playerHeadShot: require("../../assets/teamPageImages/IsaacWhiteHead.jpg"),
    playerDashboard: require("../../assets/Dashboard/playerStats.png"),
    points: 0,
    assists: 2,
    rebounds: 1
  },
  {
    id: "8",
    jerseyNumber: 13,
    playerName: "Josh",
    playerImage: require("../../assets/teamPageImages/JoshBannan.png"),
    playerProfileImage: require("../../assets/teamPageImages/Image1.png"),
    playerDashboard: require("../../assets/Dashboard/playerStats.png"),
    points: 0,
    assists: 2,
    rebounds: 1
  },
  {
    id: "9",
    jerseyNumber: 8,
    playerName: "Mitch",
    playerImage: require("../../assets/teamPageImages/MitchNorton.jpeg"),
    playerProfileImage: require("../../assets/teamPageImages/Image1.png"),
    playerHeadShot: require("../../assets/teamPageImages/MitchNortonHead.jpg"),
    playerDashboard: require("../../assets/Dashboard/playerStats.png"),
    points: 0,
    assists: 2,
    rebounds: 1
  },
  {
    id: "10",
    jerseyNumber: 20,
    playerName: "Nathan",
    playerImage: require("../../assets/teamPageImages/NathanSobey.png"),
    playerProfileImage: require("../../assets/teamPageImages/Image1.png"),
    playerHeadShot: require("../../assets/teamPageImages/NathanSobeyHead.jpg"),
    playerDashboard: require("../../assets/Dashboard/playerStats.png"),
    points: 0,
    assists: 2,
    rebounds: 1
  },
  {
    id: "11",
    jerseyNumber: 26,
    playerName: "Sam",
    playerImage: require("../../assets/teamPageImages/SamMcDaniel.png"),
    playerProfileImage: require("../../assets/teamPageImages/Image1.png"),
    playerHeadShot: require("../../assets/teamPageImages/SamMcDanielHead.jpg"),
    playerDashboard: require("../../assets/Dashboard/playerStats.png"),
    points: 0,
    assists: 2,
    rebounds: 1
  },
  {
    id: "12",
    jerseyNumber: 32,
    playerName: "Matthew",
    playerImage: require("../../assets/teamPageImages/MatthewJohns.png"),
    playerProfileImage: require("../../assets/teamPageImages/Image1.png"),
    playerHeadShot: require("../../assets/teamPageImages/MattJohnsHead.jpg"),
    playerDashboard: require("../../assets/Dashboard/playerStats.png"),
    points: 0,
    assists: 2,
    rebounds: 1
  },
  {
    id: "13",
    jerseyNumber: 3,
    playerName: "Shannon",
    playerImage: require("../../assets/teamPageImages/ShannonScott.jpeg"),
    playerProfileImage: require("../../assets/teamPageImages/Image1.png"),
    playerHeadShot: require("../../assets/teamPageImages/ShannonScottHead.jpg"),
    playerDashboard: require("../../assets/Dashboard/playerStats.png"),
    points: 0,
    assists: 2,
    rebounds: 1
  },
  {
    id: "14",
    jerseyNumber: 6,
    playerName: "Tristan",
    playerImage: require("../../assets/teamPageImages/TristanDevers.png"),
    playerProfileImage: require("../../assets/teamPageImages/Image1.png"),
    playerDashboard: require("../../assets/Dashboard/playerStats.png"),
    points: 0,
    assists: 2,
    rebounds: 1
  },
  {
    id: "15",
    jerseyNumber: 24,
    playerName: "Tyrell",
    playerImage: require("../../assets/teamPageImages/TyrrelHarrison.png"),
    playerProfileImage: require("../../assets/teamPageImages/Image1.png"),
    playerDashboard: require("../../assets/Dashboard/playerStats.png"),
    points: 0,
    assists: 2,
    rebounds: 1
  }
];

const Square = ({ player }) => {
  const navigation = useNavigation();
  const navigateToProfile = () => {
    navigation.navigate("DashBoardPlayerStats", { player });
  };

  return (
    <TouchableOpacity onPress={navigateToProfile}>
      <View style={styles.wrapper}>
        <View style={styles.square}>
          <View style={styles.imageContainer}>
            <Image source={player.playerImage} style={styles.playerImage} />
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.playerName}>{player.playerName}</Text>
        </View>
        <View style={styles.smallStatsContainer}>
          <Text style={styles.smallStats}>assist 2 | rebound 1</Text>
        </View>
        <View style={styles.bigStatsContainer}>
          <Text style={styles.bigStats}>{player.points}</Text>
        </View>
        <View style={styles.pointContainer}>
          <Text style={styles.pointText}>pt</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};


const DashBoardPlayerList = () => {
  const [selectedTab, setSelectedTab] = useState("points");

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  // Filter players based on the selected tab
  const filteredPlayers = players.filter(player => {
    if (selectedTab === "points") {
      return player.points > 0;
    } else if (selectedTab === "assists") {
      return player.assists > 0;
    } else if (selectedTab === "rebounds") {
      return player.rebounds > 0;
    }
  });

  return (
   
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity onPress={() => handleTabChange("points")} style={[styles.tab, selectedTab === "points" && styles.activeTab]}>
          <Text style = {styles.toggleTabText}>Points</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTabChange("assists")} style={[styles.tab, selectedTab === "assists" && styles.activeTab]}>
          <Text style = {styles.toggleTabText}>Assists</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTabChange("rebounds")} style={[styles.tab, selectedTab === "rebounds" && styles.activeTab]}>
          <Text style = {styles.toggleTabText}>Rebounds</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={players}
        renderItem={({ item }) => <Square player={item}/>}
        keyExtractor={(item) => item.id}
        numColumns={1}
        showsVerticalScrollIndicator={false}
      />
    </View>

  );
};

export default DashBoardPlayerList;

const styles = StyleSheet.create({
  container: {
    paddingBottom: windowHeight * 0.5,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: windowHeight * 0.02,
    marginTop: windowHeight * 0.03,
    marginLeft: -windowWidth * 0.05
  },
  tab: {
    paddingTop: 10,
    paddingRight: 15, 
    paddingBottom: 10, 
    paddingLeft: 15,
    borderBottomWidth: 2,
    borderBottomColor: "white",
  },
  activeTab: {
    backgroundColor: 'rgba(22, 76, 168, 0.72)',
    borderBottomColor: 'rgba(22, 76, 168, 0.72)',
  },
  toggleTabText: {
    color: "white",
    fontWeight: "bold",
  },
  wrapper: {
    height: windowHeight * 0.11,
    width: windowWidth * 0.85,
    marginTop: windowHeight * 0.02,
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    borderRadius: 30,
  },
  columnWrapper: {
    justifyContent: "space-between",
    marginTop: windowHeight * 0.01,
    marginHorizontal: windowWidth * 0.01,
  },
  square: {
    height: windowHeight * 0.11,
    width: windowWidth * 0.35,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    overflow: "hidden",
  },
  imageContainer: {
    width: "95%",
    height: "100%",
    overflow: "hidden",
  },
  playerImage: {
    width: "95%",
    height: "100%",
    resizeMode: "cover",
  },
  textContainer: {
    position: "absolute",
    marginTop: windowHeight * 0.011,
    marginLeft: windowWidth * 0.35,
  },
  playerName: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#113B81",
    letterSpacing: 0.5,
  },
  smallStatsContainer: {
    position: "absolute",
    marginTop: windowHeight * 0.07,
    marginLeft: windowWidth * 0.35,
  },
  smallStats: {
    fontSize: 12,
    color: "#113B81",
    letterSpacing: 0.5,
  },
  bigStatsContainer: {
    position: "absolute",
    marginTop: windowHeight * 0.014,
    marginLeft: windowWidth * 0.7,
  },
  bigStats: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#113B81",
    letterSpacing: 0.5,
  },
  pointContainer: {
    position: "absolute",
    marginTop: windowHeight * 0.055,
    marginLeft: windowWidth * 0.78,
  },
  pointText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#113B81",
  },
});
