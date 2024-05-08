import { View, Text, Box, HStack } from "@gluestack-ui/themed";
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { scaleFontSize } from "../constants/Layout";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import ToggleComponent from "../components/ToggleButton";
import UpcomingGames from "../components/upcomingGames";
import PastGames from "../components/pastGames";
import { GlobalStyles } from "../constants/GlobalStyles";

const windowWidth = Dimensions.get("window").width;

const videoTabs = [
  { label: "Upcoming Games", content: <UpcomingGames /> },
  { label: "Past Games", content: <PastGames /> },
];

export default function ScheduleScreen({ navigation }) {
  const navigateStandings = () => {
    navigation.navigate("Standings");
  };
  return (
    <View style={styles.container}>
      <SafeAreaView style={GlobalStyles.safeArea}>
        <Box style={styles.header}>
          <Text style={styles.heading}>Schedule</Text>
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
              <TouchableOpacity onPress={navigateStandings}>
                <FontAwesome name="ticket" size={26} color="white" />
              </TouchableOpacity>
            </Box>
          </HStack>
        </Box>

        <Box
          style={{
            paddingVertical: windowWidth * 0.05,
            flex: 1,
            overflowY: "scroll",
          }}
        >
          <ToggleComponent tabs={videoTabs} />
        </Box>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: windowWidth * 0.08,
    backgroundColor: "white",
  },
  header: {
    paddingTop: windowWidth * 0.03,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  heading: {
    color: "#113B81",
    fontWeight: "600",
    fontSize: scaleFontSize(33),
  },
  circleBackground: {
    alignItems: "center",
    justifyContent: "center",
    width: 45,
    height: 45,
    borderRadius: 25,
    backgroundColor: "#113B81",
    marginLeft: windowWidth * 0.02,
  },
});
