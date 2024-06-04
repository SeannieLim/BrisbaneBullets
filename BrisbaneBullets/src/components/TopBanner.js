import { useEffect, useRef, useState } from "react";
import { scaleFontSize } from "../constants/Layout";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { HStack, Image, Text, View, Box } from "@gluestack-ui/themed";
import { ActionButton } from "./ActionButton";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "./CustomButton";
import NotificationIcon from "../notifications/notificationIcon";
import { GlobalStyles } from "../constants/GlobalStyles";
import { useNotifications } from "../notifications/notificationContext";

const windowWidth = Dimensions.get("window").width;

const mockTeams = [
  {
    img: require("../../assets/teamImages/BB.png"),
    score: "97",
    alt: "team logo",
  },
  {
    img: require("../../assets/teamImages/ade.png"),
    score: "87",
    alt: "team logo",
  },
  {
    img: require("../../assets/teamImages/BB.png"),
    score: "32",
    alt: "team logo",
  },
  {
    img: require("../../assets/teamImages/nz.png"),
    score: "24",
    alt: "team logo",
  },
  {
    img: require("../../assets/teamImages/BB.png"),
    score: "",
    alt: "team logo",
  },
  {
    img: require("../../assets/teamImages/syd.png"),
    score: "",
    alt: "team logo",
  },
];

const mockPastGame = [{ date: "Fri, Feb 19", match: "Final" }];

const mockCurrentGame = [{ match: "2nd", time: "7:01" }];

const mockUpcomingGame = [
  { date: "Fri, May 27", time: "10:00 AM GMT+10", location: "Spark Arena" },
];

function compareScore(one, two) {
  const scoreOne = parseInt(one);
  const scoreTwo = parseInt(two);

  if (scoreOne > scoreTwo) {
    return 1;
  } else if (scoreOne < scoreTwo) {
    return -1;
  } else {
    return 0;
  }
}

export function TopBanner() {
  //Get navigation prop for webview
  const navigation = useNavigation();
  const { getUnreadCount } = useNotifications();
  const unreadCount = getUnreadCount();

  const handleWatchPress = () => {
    // Navigate to the LiveScreen with some params if necessary
    navigation.navigate("LiveScreen");
  };

  const handlePress = () => {
    navigation.navigate("Dashboard");
  };

  // Need to update after getting data access
  const comparisonResult = compareScore(mockTeams[0].score, mockTeams[1].score);
  const boldTextStyle = {
    fontWeight: "bold",
  };

  // Scrolling
  const [contWidth, setContWidth] = useState(0);
  const scrollViewRef = useRef(null);

  const handleScroll = (event) => {
    //determine the horizontal scroll position
    const scrollX = event.nativeEvent.contentOffset.x;
    //calculates the index of the current slide (rounded)
    const index = Math.round(scrollX / windowWidth);
    setCurrentIndex(index);
  };

  useEffect(() => {
    setContWidth(windowWidth);
  }, []);

  // Pagination
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToIndex = (index) => {
    scrollViewRef.current?.scrollTo({
      x: index * windowWidth,
      animated: true,
    });
  };

  return (
    <LinearGradient colors={["#164CA8", "#091E42"]} style={styles.container}>
      <SafeAreaView style={GlobalStyles.safeArea}>
        <NotificationIcon unreadCount={unreadCount} navigation={navigation} />
        <ScrollView
          horizontal
          ref={scrollViewRef}
          onScroll={handleScroll}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
        >
          {/*Past game*/}
          <View key={mockPastGame[0].id} style={styles.mainContainer}>
            <View style={styles.itemContainer}>
              {/*Left team*/}
              <View style={styles.teamContainer}>
                <Image
                  source={mockTeams[0].img}
                  style={[styles.image, styles.leftImage]}
                  alt="Team Logo"
                />
                <Text
                  style={[
                    styles.score,
                    (comparisonResult === 1 || comparisonResult === 0) &&
                      boldTextStyle,
                  ]}
                >
                  {mockTeams[0].score}
                </Text>
              </View>

              {/*Game details*/}
              <View style={styles.details}>
                <Text style={styles.date}>{mockPastGame[0].date}</Text>
                <Text style={styles.match}>{mockPastGame[0].match}</Text>
              </View>

              {/*Right team*/}
              <View style={styles.teamContainer}>
                <Text
                  style={[
                    styles.score,
                    (comparisonResult === -1 || comparisonResult === 0) &&
                      boldTextStyle,
                  ]}
                >
                  {mockTeams[1].score}
                </Text>
                <Image
                  source={mockTeams[1].img}
                  style={[styles.image, styles.rightImage]}
                  alt="Team Logo"
                />
              </View>
            </View>
            <HStack>
              <ActionButton value={"Recap"} />
            </HStack>
          </View>

          {/*Current game*/}
          <View key={mockCurrentGame[0].id} style={styles.mainContainer}>
            {/*Past game*/}
            <View style={styles.itemContainer}>
              {/*Left team*/}
              <View style={styles.teamContainer}>
                <Image
                  source={mockTeams[3].img}
                  style={[styles.image, styles.leftImage]}
                  alt="Team Logo"
                />
                <Text
                  style={[
                    styles.score,
                    (comparisonResult === 1 || comparisonResult === 0) &&
                      boldTextStyle,
                  ]}
                >
                  {mockTeams[3].score}
                </Text>
              </View>

              {/*Game details*/}
              <View style={styles.details}>
                <Text style={styles.match}>{mockCurrentGame[0].match}</Text>
                <Text style={styles.time}>{mockCurrentGame[0].time}</Text>
              </View>

              {/*Right team*/}
              <View style={styles.teamContainer}>
                <Text
                  style={[
                    styles.score,
                    (comparisonResult === -1 || comparisonResult === 0) &&
                      boldTextStyle,
                  ]}
                >
                  {mockTeams[2].score}
                </Text>
                <Image
                  source={mockTeams[2].img}
                  style={[styles.image, styles.rightImage]}
                  alt="Team Logo"
                />
              </View>
            </View>
            <View style={styles.liveStatus}>
              <View style={styles.greenDot}></View>
              <Text style={styles.liveText}>Live</Text>
            </View>
            <HStack>
              <ActionButton value={"Game Centre"} onPress={handlePress} />
              <ActionButton value={"Watch"} onPress={handleWatchPress} />
              <ActionButton value={"Crowd Canvas"} />
            </HStack>
          </View>

          {/*Upcoming game*/}
          <View key={mockUpcomingGame[0].id} style={styles.mainContainer}>
            {/*Past game*/}
            <View style={styles.itemContainer}>
              {/*Left team*/}
              <View style={styles.teamContainer}>
                <Image
                  source={mockTeams[4].img}
                  style={[styles.image, styles.leftImage]}
                  alt="Team Logo"
                />
              </View>

              {/*Game details*/}
              <View style={styles.details}>
                <Text style={styles.date}>{mockUpcomingGame[0].date}</Text>
                <Text style={styles.time}>{mockUpcomingGame[0].time}</Text>
                <Text style={styles.location}>
                  {mockUpcomingGame[0].location}
                </Text>
              </View>

              {/*Right team*/}
              <View style={styles.teamContainer}>
                <Image
                  source={mockTeams[5].img}
                  style={[styles.image, styles.rightImage]}
                  alt="Team Logo"
                />
              </View>
            </View>
            <HStack>
              <CustomButton btnText="Ticket" routeName="Ticket" />
            </HStack>
          </View>
        </ScrollView>
      </SafeAreaView>
      {/* Pagination dots */}
      <View style={styles.paginationContainer}>
        {[...Array(3).keys()].map((index) => (
          <TouchableOpacity key={index} onPress={() => scrollToIndex(index)}>
            <View
              style={[
                styles.paginationDot,
                { opacity: currentIndex === index ? 1 : 0.3 },
              ]}
            />
          </TouchableOpacity>
        ))}
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: 240,
  },
  mainContainer: {
    flex: 1,
    alignItems: "center",
    // paddingTop: 100,
    width: windowWidth,
    height: "100%",
  },
  itemContainer: {
    flexDirection: "row", // Align children horizontally
    alignItems: "flex-start", // Center items vertically
    justifyContent: "center", // Center items horizontally
  },
  teamContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: windowWidth * 0.15,
    height: windowWidth * 0.15,
    borderRadius: 15,
  },
  leftImage: {
    marginRight: 10,
  },
  rightImage: {
    marginLeft: 10,
  },
  score: {
    fontSize: scaleFontSize(27),
    color: "white",
  },
  details: {
    marginHorizontal: 25,
    alignItems: "center",
  },
  date: {
    color: "white",
    fontSize: scaleFontSize(16),
    textTransform: "uppercase",
  },
  match: {
    color: "white",
    fontSize: scaleFontSize(17),
    paddingTop: 5,
    fontWeight: "800",
  },
  time: {
    color: "white",
    fontWeight: "800",
    paddingTop: 4,
    fontSize: scaleFontSize(16),
  },
  liveStatus: {
    flexDirection: "row",
    alignItems: "center",
    top: 5,
  },
  greenDot: {
    width: windowWidth * 0.015,
    height: windowWidth * 0.015,
    borderRadius: 5,
    marginRight: 10,
    backgroundColor: "#3CD370",
  },
  liveText: {
    color: "white",
    fontWeight: "700",
  },
  location: {
    color: "white",
    paddingTop: 4,
    fontSize: scaleFontSize(14),
  },
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    bottom: 15,
  },
  paginationDot: {
    height: 6,
    width: 6,
    borderRadius: 4,
    backgroundColor: "white",
    marginHorizontal: 4,
  },
});
