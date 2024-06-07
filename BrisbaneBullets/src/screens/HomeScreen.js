import { TopBanner } from "../components/TopBanner";
import { View, Box, Heading } from "@gluestack-ui/themed";
import EStoreCarousel from "../components/E-storeCarousel";
import { Dimensions, ImageBackground, ScrollView, StyleSheet } from "react-native";
import ToggleComponent from "../components/HomeToggleButton";
import NewsCard from "../components/NewsCard";
import { PartnersStack } from "../components/PartnersStack";
import SocialMediaStack from "../components/SocialMediaStack";
import AdsBanner from "../components/AdsBanner";
import AllButton from "../components/AllButton";
import { scaleFontSize } from "../constants/Layout";
import HighlightVideo from "../components/HighlightVideo";
import PressConferenceVideo from "../components/PressConferenceVideo";

const mockNews = [
  {
    id: 1,
    title: "Brisbane Bullets welcome Deng Adel",
    date: "Apr 15, 2024",
    img: require("../../assets/News/newsImg7.png"),
    imgAlt: "newsImage",
  },
  {
    id: 2,
    title: "Club Statement - Chris Smith",
    date: "Apr 11, 2024",
    img: require("../../assets/News/newsImg6.png"),
    imgAlt: "newsImage",
  },
];

const videoTabs = [
  { label: "Highlights", content: <HighlightVideo /> },
  { label: "Press Conference", content: <PressConferenceVideo /> },
];
const windowWidth = Dimensions.get("window").width;

export default function HomeScreen({ navigation }) {
  const handleAllPress = () => {
    // Navigate to the All News screen when the All button is pressed
    navigation.navigate("News");
  };
  const handleAllVideoPress = () => {
    // Navigate to the All News screen when the All button is pressed
    navigation.navigate("Videos");
  };
  return (
    <View style={styles.container}>
      <TopBanner style={styles.banner} />

      <View style={styles.backgroundImageContainer}>
        <ImageBackground
          source={require("../../assets/Logo/BB-logo.png")}
          resizeMode="center"
          opacity={0.5}
        >
          <ScrollView>
            <Box style={styles.box}>
              <AdsBanner
              />
            </Box>
            <Box style={styles.headingContainer}>
              <Heading style={styles.heading}>Latest News</Heading>
              <AllButton onPress={handleAllPress} />
            </Box>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.slideContainer}
            >
              {mockNews.map((newsItem) => (
                <NewsCard key={newsItem.id} news={newsItem} />
              ))}
            </ScrollView>
            <Box style={styles.headingContainer}>
              <Heading style={styles.heading}>Latest Videos</Heading>
              <AllButton onPress={handleAllVideoPress} />
            </Box>
            <ToggleComponent tabs={videoTabs} />

            <EStoreCarousel />

            <Box style={styles.headingContainer}>
              <Heading style={styles.heading}>Follow Us</Heading>
            </Box>
            <SocialMediaStack />
            <Box style={styles.box}>
              <AdsBanner
              />
            </Box>
            <Box style={styles.headingContainer}>
              <Heading style={styles.heading}>Partners</Heading>
            </Box>
            <Box style={styles.box}>
              <PartnersStack />
            </Box>
          </ScrollView>
        </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundImageContainer: {
    flex: 1,
    width: windowWidth,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    position: "relative",
  },
  banner: {
    position: "absolute",
    top: 0,
  },
  box: {
    marginHorizontal: windowWidth * 0.08,
    marginTop: windowWidth * 0.05,
  },
  headingContainer: {
    flexDirection: "row",
    marginVertical: windowWidth * 0.04,
    marginHorizontal: windowWidth * 0.08,
    alignContent: "center",
  },
  heading: {
    color: "#1E1E1E",
    paddingRight: windowWidth * 0.03,
    fontSize: scaleFontSize(20),
  },
  slideContainer: {
    marginLeft: windowWidth * 0.08,
  },
});
