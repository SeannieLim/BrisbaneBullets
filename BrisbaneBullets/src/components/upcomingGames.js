import { useState } from "react";
import { Text, Box, HStack, VStack, Image } from "@gluestack-ui/themed";
import { Dimensions, ScrollView, StyleSheet } from "react-native";
import { scaleFontSize } from "../constants/Layout";

const windowWidth = Dimensions.get("window").width;

const data = [
  {
    date: "Fri, May 19",
    time: "8:30pm AEDT",
    match: "ROUND 18",
    location: "Nissan Arena",
  },
  {
    date: "Sat, May 26",
    time: "4:30pm AEDT",
    match: "ROUND 19",
    location: "Spark Arena",
  },
  {
    date: "Sun, Jun 02",
    time: "6:30pm AEDT",
    match: "ROUND 20",
    location: "Qudos Bank Arena",
  },
  {
    date: "Fri, Jun 11",
    time: "8:30pm AEDT",
    match: "ROUND 21",
    location: "Nissan Arena",
  },
];

const mockTeams = [
  { img: require("../../assets/teamImages/BB.png"), team: "Brisbane Bullets" },
  {
    img: require("../../assets/teamImages/ade.png"),
    team: "Adelaide 36ers",
  },
  { img: require("../../assets/teamImages/syd.png"), team: "Sydney Kings" },
  {
    img: require("../../assets/teamImages/BB.png"),
    team: "Brisbane Bullets",
  },
  {
    img: require("../../assets/teamImages/nz.png"),
    team: "New Zealand Breakers",
  },
  {
    img: require("../../assets/teamImages/BB.png"),
    team: "Brisbane Bullets",
  },
];

export default function UpcomingGames({ navigation }) {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack pt={25}>
        {data.map((item, index) => (
          <Box key={index} pb={20}>
            <HStack justifyContent="center">
              <Box flex={1}>
                <Text style={styles.details}>{data[index].date}</Text>
              </Box>
              <Box style={styles.matchBackground}>
                <Text style={styles.title}>{data[index].match}</Text>
              </Box>
              <Box flex={1} alignItems="flex-end">
                <Text style={styles.details}>{data[index].time}</Text>
              </Box>
            </HStack>

            <Box style={styles.gameBackground}>
              <HStack alignItems="center" pt={5}>
                <VStack flex={1} maxWidth="65%" pl={10}>
                  <HStack alignItems="center" space="lg" maxWidth="70%" pb={10}>
                    <Image
                      source={mockTeams[index].img}
                      style={styles.image}
                      alt="Team Logo"
                    />
                    <Text style={styles.teamName}>{mockTeams[index].team}</Text>
                  </HStack>
                  <HStack alignItems="center" space="lg" maxWidth="70%">
                    <Image
                      source={mockTeams[index + 1].img}
                      style={styles.image}
                      alt="Team Logo"
                    />
                    <Text style={styles.teamName}>
                      {mockTeams[index + 1].team}
                    </Text>
                  </HStack>
                </VStack>
                <VStack flex={1} maxWidth="30%" pr={8}>
                  <Text style={styles.location}>{data[index].location}</Text>
                </VStack>
              </HStack>
            </Box>
          </Box>
        ))}
      </VStack>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  matchBackground: {
    alignItems: "center",
    justifyContent: "center",
    width: 130,
    height: 40,
    borderRadius: 15,
    backgroundColor: "#113B81",
  },
  title: {
    color: "white",
    fontWeight: "800",
    fontSize: scaleFontSize(16),
  },
  details: {
    fontWeight: "500",
    fontSize: scaleFontSize(13),
  },
  gameBackground: {
    alignItems: "center",
    justifyContent: "center",
    width: "auto",
    height: 140,
    marginTop: -19,
    zIndex: -1,
    borderRadius: 13,
    backgroundColor: "#F5F5F5",
  },
  image: {
    width: windowWidth * 0.11,
    height: windowWidth * 0.11,
  },
  teamName: {
    color: "#113B81",
    fontWeight: "600",
    fontSize: scaleFontSize(14),
  },
  location: {
    fontWeight: "500",
    fontSize: scaleFontSize(13),
    textAlign: "right",
  },
});
