import React from 'react';
import { View, Box } from "@gluestack-ui/themed";
import { Dimensions, StyleSheet, FlatList } from "react-native";
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
    navigation.navigate('NewsDetail', { newsId: id });
  };

  const renderNewsItem = ({ item, index }) => (
    <React.Fragment key={item.id}>
      {/* Render NewsCard */}
      <Box my={10}>
        <NewsCard key={item.id} news={item} onPress={() => handleCardPress(item.id)} />
      </Box>
      {index > 0 && (index + 1) % 3 === 0 && (
        <AdsBanner
          imageUrl="https://www.interprint-services.co.uk/wp-content/uploads/2019/04/placeholder-banner.png"
        />
      )}
    </React.Fragment>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={mockNews}
        renderItem={renderNewsItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: windowWidth * 0.08,
    backgroundColor: 'white',
  },
  flatListContent: {
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
});
