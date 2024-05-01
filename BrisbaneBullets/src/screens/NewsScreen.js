import React from 'react';
import { View, VStack, Box, Text, HStack, Image } from "@gluestack-ui/themed";
import { Dimensions, ImageBackground, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import NewsCard from "../components/NewsCard";
import AdsBanner from "../components/AdsBanner";

const windowWidth = Dimensions.get("window").width;
const mockNews = [
  {
    id: 1,
    title: 'Brisbane Bullets welcome Deng Adel',
    date: 'Apr 15, 2024',
    img: require('../../assets/News/newsImg7.png'),
    imgAlt: 'newsImage'
  },
  {
    id: 2,
    title: 'Club Statement - Chris Smith',
    date: 'Apr 11, 2024',
    img: require('../../assets/News/newsImg6.png'),
    imgAlt: 'newsImage'
  },
  {
    id: 3,
    title: 'Rocco Zikarsky named in Boomers Olympic Squad',
    date: 'Apr 10, 2024',
    img: require('../../assets/News/newsImg5.png'),
    imgAlt: 'newsImage'
  },
  {
    id: 4,
    title: 'Bullets Core Locked in for NBL25',
    date: 'Apr 10, 2024',
    img: require('../../assets/News/newsImg4.png'),
    imgAlt: 'newsImage'
  },
  {
    id: 5,
    title: 'The Brisbane Bullets and Nathan Sobey part ways',
    date: 'Mar 28, 2024',
    img: require('../../assets/News/newsImg.png'),
    imgAlt: 'newsImage'
  },
  {
    id: 6,
    title: 'NBL24 MVP Awards Gala winners announced',
    date: 'Mar 28, 2024',
    img: require('../../assets/News/newsImg2.png'),
    imgAlt: 'newsImage'
  },
  {
    id: 7,
    title: 'Zikarsky to compete at Albert Schweitzer Tournament..',
    date: 'Mar 21,2024',
    img: require('../../assets/News/newsImg3.png'),
    imgAlt: 'newsImage'
  },
];
export default function NewsScreen({ navigation }) {
  const handleCardPress = (newsId) => {
    navigation.navigate('NewsDetailScreen', { newsId }); // Pass the newsId to NewsDetailScreen
  };
  const handleShare = () => {
    // Implement share functionality here
  };
  return (
    <View style={styles.container}>
      <View style={styles.backgroundImageContainer}>
        <ScrollView>
          {mockNews.map((newsItem, index) => (
            <React.Fragment key={newsItem.id}>
              {/* Render NewsCard */}
              <Box my={10}>
                <NewsCard news={newsItem} onPress={() => handleCardPress(newsItem.id)} />
              </Box>
              {/* Display AdsBanner after every 3rd NewsCard */}
              {index > 0 && (index + 1) % 3 === 0 && (
                <AdsBanner
                  imageUrl="https://www.interprint-services.co.uk/wp-content/uploads/2019/04/placeholder-banner.png"
                />
              )}
            </React.Fragment>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  backgroundImageContainer: {
    flex: 1,
    width: windowWidth,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center'
  },
});
