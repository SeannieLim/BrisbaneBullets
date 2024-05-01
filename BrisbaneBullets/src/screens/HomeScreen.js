import { TopBanner } from "../components/topBanner";
import { View, VStack, Box, Text, Heading } from "@gluestack-ui/themed";
import EStoreCarousel from "../components/E-storeCarousel";
import HorizontalScrollContainer from "../components/HorizontalScrollContainer";
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
} from "react-native";
import ToggleComponent from "../components/ToggleButton";
import CustomButton from "../components/CustomButton";
import NewsCard from "../components/NewsCard";
import { PartnersStack } from "../components/PartnersStack";
import SocialMediaStack from "../components/SocialMediaStack";
import AdsBanner from "../components/AdsBanner";
import AllButton from "../components/AllButton";
import { scaleFontSize } from "../constants/Layout";

const videoTabs = [{ label: "Highlights" }, { label: "Press Conference" }];

const windowWidth = Dimensions.get("window").width;

export default function HomeScreen({ navigation }) {
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
              <AdsBanner imageUrl="https://www.interprint-services.co.uk/wp-content/uploads/2019/04/placeholder-banner.png" />
              <Box style={styles.headingContainer}>
                <Heading style={styles.heading}>Latest News</Heading>
                <AllButton />
              </Box>

              <NewsCard />

              <Box style={styles.headingContainer}>
                <Heading style={styles.heading}>Latest Videos</Heading>
                <AllButton />
              </Box>

              <ToggleComponent tabs={videoTabs} />

              <Box style={styles.spacing}>
                <HorizontalScrollContainer />
              </Box>
            </Box>

            <VStack space={4} alignItems="center">
              <EStoreCarousel />
            </VStack>

            <Box style={styles.lowerBox}>
              <Box style={styles.headingContainer}>
                <Heading style={styles.heading}>Follow Us</Heading>
              </Box>
              <Box style={styles.socialMedia}>
                <SocialMediaStack />
              </Box>
              <AdsBanner imageUrl="https://www.interprint-services.co.uk/wp-content/uploads/2019/04/placeholder-banner.png" />
              <Box style={styles.headingContainer}>
                <Heading style={styles.heading}>Partners</Heading>
              </Box>
              <PartnersStack />
            </Box>

                        {/*//add to test components*/}
                        {/*<><NewsCard /><Box>*/}
                        {/*    <CustomButton btnText='Shop Now' />*/}
                        {/*</Box></>*/}

                    </ScrollView>
                </ImageBackground>
            </View>
        </View>

    )
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
    marginLeft: windowWidth * 0.08,
    marginTop: windowWidth * 0.05,
  },
  headingContainer: {
    flexDirection: "row",
    marginVertical: windowWidth * 0.04,
    alignContent: "center",
  },
  heading: {
    color: "#1E1E1E",
    paddingRight: windowWidth * 0.03,
    fontSize: scaleFontSize(20),
  },
  lowerBox: {
    marginLeft: windowWidth * 0.08,
    marginBottom: windowWidth * 0.05,
  },
  socialMedia: {
    marginBottom: windowWidth * 0.05,
  },
  spacing: {
    marginTop: windowWidth * 0.04,
  },
});