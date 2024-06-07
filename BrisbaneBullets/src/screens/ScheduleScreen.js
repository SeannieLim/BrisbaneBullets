import { View, Text, Box, HStack } from "@gluestack-ui/themed";
import { Dimensions, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import TeamToggle from "../components/GeneralToggle";
import UpcomingGames from "../components/UpcomingGames";
import PastGames from "../components/PastGames";
import { GlobalStyles } from "../constants/GlobalStyles";

const windowWidth = Dimensions.get("window").width;

const scheduleTabs = [
  { label: "Upcoming Games", content: <UpcomingGames /> },
  { label: "Past Games", content: <PastGames /> },
];

export default function ScheduleScreen({ navigation }) {
  const navigateStandings = () => {
    navigation.navigate("Standings");
  };

  const navigateTicketek = () => {
    navigation.navigate("Ticket");
  };
  return (
    <View style={GlobalStyles.mainContainer}>
      <SafeAreaView style={GlobalStyles.safeArea}>
        <Box style={GlobalStyles.screenHeader}>
          <Text style={GlobalStyles.screenHeading}>Schedule</Text>
          <HStack>
            <Box style={styles.circleBackground}>
              <TouchableOpacity onPress={navigateStandings}>
                <Ionicons
                  name="podium"
                  size={23}
                  color="white"
                  style={{ paddingBottom: 2 }}
                />
              </TouchableOpacity>
            </Box>
            <Box style={styles.circleBackground}>
              <TouchableOpacity onPress={navigateTicketek}>
                <FontAwesome name="ticket" size={26} color="white" />
              </TouchableOpacity>
            </Box>
          </HStack>
        </Box>
        <TeamToggle tabs={scheduleTabs} />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  circleBackground: {
    alignItems: "center",
    justifyContent: "center",
    width: 45,
    height: 45,
    borderRadius: 25,
    backgroundColor: "#113B81",
    marginLeft: windowWidth * 0.02,
  },
  toggle: {
    paddingVertical: windowWidth * 0.02,
    marginHorizontal: windowWidth * 0.08,
    flex: 1,
    overflowY: "scroll",
  },
});
