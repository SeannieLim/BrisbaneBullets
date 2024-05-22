import React from "react";
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
    playerName: "Rocco Zikarsky",
    playerImage: require("../../assets/teamPageImages/RoccoZikarsky.png"),
    playerProfileImage: require("../../assets/teamPageImages/Image1.png"),
    playerHeadShot: require("../../assets/teamPageImages/RoccoZikarskyHead.jpg"),
    playerDashboard: require("../../assets/Dashboard/playerStats.png")
  },
  {
    id: "2",
    jerseyNumber: 12,
    playerName: "Aron Baynes",
    playerImage: require("../../assets/teamPageImages/AronBaynes.jpeg"),
    playerProfileImage: require("../../assets/teamPageImages/Image1.png"),
    playerHeadShot: require("../../assets/teamPageImages/AronBaynesHead.jpg"),
    playerDashboard: require("../../assets/Dashboard/playerStats.png")
  },
  {
    id: "3",
    jerseyNumber: 23,
    playerName: "Casey Prather",
    playerImage: require("../../assets/teamPageImages/CaseyPrather.jpeg"),
    playerProfileImage: require("../../assets/teamPageImages/Image1.png"),
    playerDashboard: require("../../assets/Dashboard/playerStats.png")
  },
  {
    id: "4",
    jerseyNumber: 34,
    playerName: "Chris Smith",
    playerImage: require("../../assets/teamPageImages/ChrisSmith.png"),
    playerProfileImage: require("../../assets/teamPageImages/Image1.png"),
    playerHeadShot: require("../../assets/teamPageImages/ChrisSmithHead.jpg"),
    playerDashboard: require("../../assets/Dashboard/playerStats.png")
  },
  {
    id: "5",
    jerseyNumber: 0,
    playerName: "DJ Mitchell",
    playerImage: require("../../assets/teamPageImages/DJMitchell.png"),
    playerProfileImage: require("../../assets/teamPageImages/Image1.png"),
    playerHeadShot: require("../../assets/teamPageImages/DJMitchellHead.jpg"),
    playerDashboard: require("../../assets/Dashboard/playerStats.png")
  },
  {
    id: "6",
    jerseyNumber: 4,
    playerName: "Gabe Hadley",
    playerImage: require("../../assets/teamPageImages/GabeHadley.jpeg"),
    playerProfileImage: require("../../assets/teamPageImages/Image1.png"),
    playerHeadShot: require("../../assets/teamPageImages/GabeHadleyHead.jpg"),
    playerDashboard: require("../../assets/Dashboard/playerStats.png")
  },
  {
    id: "7",
    jerseyNumber: 2,
    playerName: "Isaac White",
    playerImage: require("../../assets/teamPageImages/IsaacWhite.jpeg"),
    playerProfileImage: require("../../assets/teamPageImages/Image1.png"),
    playerHeadShot: require("../../assets/teamPageImages/IsaacWhiteHead.jpg"),
    playerDashboard: require("../../assets/Dashboard/playerStats.png")
  },
  {
    id: "8",
    jerseyNumber: 13,
    playerName: "Josh Bannan",
    playerImage: require("../../assets/teamPageImages/JoshBannan.png"),
    playerProfileImage: require("../../assets/teamPageImages/Image1.png"),
    playerDashboard: require("../../assets/Dashboard/playerStats.png")
  },
  {
    id: "9",
    jerseyNumber: 8,
    playerName: "Mitch Norton",
    playerImage: require("../../assets/teamPageImages/MitchNorton.jpeg"),
    playerProfileImage: require("../../assets/teamPageImages/Image1.png"),
    playerHeadShot: require("../../assets/teamPageImages/MitchNortonHead.jpg"),
    playerDashboard: require("../../assets/Dashboard/playerStats.png")
  },
  {
    id: "10",
    jerseyNumber: 20,
    playerName: "Nathan Sobey",
    playerImage: require("../../assets/teamPageImages/NathanSobey.png"),
    playerProfileImage: require("../../assets/teamPageImages/Image1.png"),
    playerHeadShot: require("../../assets/teamPageImages/NathanSobeyHead.jpg"),
    playerDashboard: require("../../assets/Dashboard/playerStats.png")
  },
  {
    id: "11",
    jerseyNumber: 26,
    playerName: "Sam McDaniel",
    playerImage: require("../../assets/teamPageImages/SamMcDaniel.png"),
    playerProfileImage: require("../../assets/teamPageImages/Image1.png"),
    playerHeadShot: require("../../assets/teamPageImages/SamMcDanielHead.jpg"),
    playerDashboard: require("../../assets/Dashboard/playerStats.png")
  },
  {
    id: "12",
    jerseyNumber: 32,
    playerName: "Matthew Johns",
    playerImage: require("../../assets/teamPageImages/MatthewJohns.png"),
    playerProfileImage: require("../../assets/teamPageImages/Image1.png"),
    playerHeadShot: require("../../assets/teamPageImages/MattJohnsHead.jpg"),
    playerDashboard: require("../../assets/Dashboard/playerStats.png")
  },
  {
    id: "13",
    jerseyNumber: 3,
    playerName: "Shannon Scott",
    playerImage: require("../../assets/teamPageImages/ShannonScott.jpeg"),
    playerProfileImage: require("../../assets/teamPageImages/Image1.png"),
    playerHeadShot: require("../../assets/teamPageImages/ShannonScottHead.jpg"),
    playerDashboard: require("../../assets/Dashboard/playerStats.png")
  },
  {
    id: "14",
    jerseyNumber: 6,
    playerName: "Tristan Devers",
    playerImage: require("../../assets/teamPageImages/TristanDevers.png"),
    playerProfileImage: require("../../assets/teamPageImages/Image1.png"),
    playerDashboard: require("../../assets/Dashboard/playerStats.png")
  },
  {
    id: "15",
    jerseyNumber: 24,
    playerName: "Tyrell Harrison",
    playerImage: require("../../assets/teamPageImages/TyrrelHarrison.png"),
    playerProfileImage: require("../../assets/teamPageImages/Image1.png"),
    playerDashboard: require("../../assets/Dashboard/playerStats.png")
  }
];

const Square = ({ player }) => {
  const navigation = useNavigation();
  const navigateToProfile = () => {
    navigation.navigate("DashBoardPlayerStats", { player });
  };

  return (
    <TouchableOpacity onPress={navigateToProfile}>
      <View style={styles.square}>
        <View style={styles.imageContainer}>
          <Image source={player.playerImage} style={styles.playerImage} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.jerseyNumber}>{player.jerseyNumber}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const DashBoardPlayerList = () => {
  return (
   
    <View style={styles.container}>
      <FlatList
        data={players}
        renderItem={({ item }) => <Square player={item} />}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.columnWrapper}
      />
    </View>

  );
};

export default DashBoardPlayerList;

const styles = StyleSheet.create({
  container: {
    paddingBottom: windowHeight * 0.5,
  },
  columnWrapper: {
    justifyContent: "center",
    marginTop: windowHeight * 0.01,
    marginHorizontal: windowWidth * 0.01,
  },
  square: {
    width: 140,
    height: 120,
    backgroundColor: "lightblue",
    marginVertical: windowHeight * 0.01,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    overflow: "hidden",
    marginRight : windowWidth * 0.1,
  },
  imageContainer: {
    width: "100%",
    height: "100%",
    borderRadius: 15,
    overflow: "hidden",
  },
  playerImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  textContainer: {
    position: "absolute",
    top: 15,
    left: 10,
    alignItems: "center",
  },
  jerseyNumber: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
