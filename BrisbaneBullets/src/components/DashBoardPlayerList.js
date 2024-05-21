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

  },
  {
    id: "2",
    jerseyNumber: 12,
    playerName: "Aron Baynes",
    playerImage: require("../../assets/teamPageImages/AronBaynes.jpeg"),
    playerProfileImage: require("../../assets/teamPageImages/Image1.png"),
    playerHeadShot: require("../../assets/teamPageImages/AronBaynesHead.jpg"),
    },
    {
    id: "3",
    jerseyNumber: 23,
    playerName: "Casey Prather",
    playerImage: require("../../assets/teamPageImages/CaseyPrather.jpeg"),
    playerProfileImage: require("../../assets/teamPageImages/Image1.png"),
    },
    {
    id: "4",
    jerseyNumber: 34,
    playerName: "Chris Smith",
    playerImage: require("../../assets/teamPageImages/ChrisSmith.png"),
    playerProfileImage: require("../../assets/teamPageImages/Image1.png"),
    playerHeadShot: require("../../assets/teamPageImages/ChrisSmithHead.jpg"),
  },
    {
    id: "5",
    jerseyNumber: 0,
    playerName: "DJ Mitchell",
    playerImage: require("../../assets/teamPageImages/DJMitchell.png"),
    playerProfileImage: require("../../assets/teamPageImages/Image1.png"),
    playerHeadShot: require("../../assets/teamPageImages/DJMitchellHead.jpg"),
    
     },
  {
    id: "6",
    jerseyNumber: 4,
    playerName: "Gabe Hadley",
    playerImage: require("../../assets/teamPageImages/GabeHadley.jpeg"),
    playerProfileImage: require("../../assets/teamPageImages/Image1.png"),
    playerHeadShot: require("../../assets/teamPageImages/GabeHadleyHead.jpg"),
   },
  {
    id: "7",
    jerseyNumber: 2,
    playerName: "Isaac White",
    playerImage: require("../../assets/teamPageImages/IsaacWhite.jpeg"),
    playerProfileImage: require("../../assets/teamPageImages/Image1.png"),
    playerHeadShot: require("../../assets/teamPageImages/IsaacWhiteHead.jpg"),
    },
  {
    id: "8",
    jerseyNumber: 13,
    playerName: "Josh Bannan",
    playerImage: require("../../assets/teamPageImages/JoshBannan.png"),
    playerProfileImage: require("../../assets/teamPageImages/Image1.png"),
    
     },
  {
    id: "9",
    jerseyNumber: 8,
    playerName: "Mitch Norton",
    playerImage: require("../../assets/teamPageImages/MitchNorton.jpeg"),
    playerProfileImage: require("../../assets/teamPageImages/Image1.png"),
    playerHeadShot: require("../../assets/teamPageImages/MitchNortonHead.jpg"),
     },
  {
    id: "10",
    jerseyNumber: 20,
    playerName: "Nathan Sobey",
    playerImage: require("../../assets/teamPageImages/NathanSobey.png"),
    playerProfileImage: require("../../assets/teamPageImages/Image1.png"),
    playerHeadShot: require("../../assets/teamPageImages/NathanSobeyHead.jpg"),
    },
  {
    id: "11",
    jerseyNumber: 26,
    playerName: "Sam McDaniel",
    playerImage: require("../../assets/teamPageImages/SamMcDaniel.png"),
    playerProfileImage: require("../../assets/teamPageImages/Image1.png"),
    playerHeadShot: require("../../assets/teamPageImages/SamMcDanielHead.jpg"),
    },
  {
    id: "12",
    jerseyNumber: 32,
    playerName: "Matthew Johns",
    playerImage: require("../../assets/teamPageImages/MatthewJohns.png"),
    playerProfileImage: require("../../assets/teamPageImages/Image1.png"),
    playerHeadShot: require("../../assets/teamPageImages/MattJohnsHead.jpg"),
 },
  {
    id: "13",
    jerseyNumber: 3,
    playerName: "Shannon Scott",
    playerImage: require("../../assets/teamPageImages/ShannonScott.jpeg"),
    playerProfileImage: require("../../assets/teamPageImages/Image1.png"),
    playerHeadShot: require("../../assets/teamPageImages/ShannonScottHead.jpg"),
  },
  {
    id: "14",
    jerseyNumber: 6,
    playerName: "Tristan Devers",
    playerImage: require("../../assets/teamPageImages/TristanDevers.png"),
    playerProfileImage: require("../../assets/teamPageImages/Image1.png"),
    },
  {
    id: "15",
    jerseyNumber: 24,
    playerName: "Tyrell Harrison",
    playerImage: require("../../assets/teamPageImages/TyrrelHarrison.png"),
    playerProfileImage: require("../../assets/teamPageImages/Image1.png"),
  }
    
];

const Square = ({ player }) => {
  const navigation = useNavigation();
  const navigateToProfile = () => {
    navigation.navigate("PlayerProfile", { player });
  };

  return (
    <TouchableOpacity onPress={''}>
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
  // container: {
  //   flexDirection: "row",
  //   marginTop: windowHeight * 0.015,
  //   paddingBottom: windowHeight * 0.5,
  //   flex: 1,
  //   alignItems: "center",
  // },
  container: {
    paddingBottom: windowHeight * 0.5,
  },
  columnWrapper: {
    justifyContent: "space-between", // Ensures space between items horizontally
    marginTop: windowHeight * 0.01,
    marginHorizontal: windowWidth * 0.04,
  },
  // leftColumn: {
  //   flex: 1, // Take up 50% of the available space
  //   // flexDirection: "column",
  //   marginLeft: windowWidth * 0.001, // Adjust margin if needed
  // },
  // rightColumn: {
  //   flex: 1, // Take up 50% of the available space
  //   // flexDirection: "column",
  //   marginLeft: windowWidth * 0.1,
  // },
  square: {
    width: 140,
    height: 120,
    backgroundColor: "lightblue",
    marginVertical: windowHeight * 0.01,

    borderRadius: 15,
    shadowColor: "#000", // Shadow color
    shadowOffset: { width: 1, height: 2 }, // Shadow offset
    shadowOpacity: 0.25, // Shadow opacity
    shadowRadius: 4, // Shadow radius
    elevation: 5, // Elevation for Android
    overflow: "hidden",
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
    position: "absolute", // Position the text container absolutely within the container
    top: 15,
    left: 10,
    alignItems: "center",
  },
  jerseyNumber: {
    fontWeight: "bold",
    fontSize: 16,
  },
});


