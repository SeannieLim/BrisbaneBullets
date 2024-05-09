import React from 'react';
import { View, Box, Image, VStack, Text, HStack } from "@gluestack-ui/themed";
import { Dimensions, StyleSheet, FlatList, TouchableOpacity, Share } from "react-native";
import AdsBanner from "../components/AdsBanner";
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

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
  const handleCardPress = (id) => {
    navigation.navigate('NewsDetail', { newsId: id });
  };
  const handleShare = async (news) => {
    try {
      // Base URL
      const baseUrl = 'https://www.brisbanebullets.com.au/news/';
      // Replace spaces in the news title with hyphens (-)
      const formattedTitle = news.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      // Construct the final URL
      const url = `${baseUrl}${formattedTitle}`;
      // Share the URL
      await Share.share({
        url: url,
      });

    } catch (error) {
      console.error("Error sharing", error);
    }
  };

  const renderNewsItem = ({ item, index }) => (
    <React.Fragment key={item.id}>
      {/* Render NewsCard */}
      <TouchableOpacity onPress={() => handleCardPress(item.id)}>
        <View mt={10} mb={15} style={styles.newsContainer}>
          <Box style={styles.newsImg}>
            <Image
              source={item.img}
              alt={item.imgAlt}
              w={'100%'}
              h={'100%'}
              overflow='hidden'
              borderTopRightRadius={15}
              borderTopLeftRadius={15}
              position='relative'
            />
            <HStack alignItems='flex-end' justifyContent='space-between' px={10} mb={5} position='absolute' bottom={0} left={0} right={0}>
              <HStack alignItems="center" borderRadius={15} px={10} py={5} backgroundColor='rgba(60, 60, 60, .7)'>
                <FontAwesome5 name="calendar-alt" size={14} color="white" />
                <Text pl={5} color='white' fontSize={12}>{item.date}</Text>
              </HStack>
              <TouchableOpacity style={styles.shareIcon} onPress={() => handleShare(item)}>
                <Entypo name="share-alternative" size={18} color="white" />
              </TouchableOpacity>
            </HStack>
          </Box>
          <VStack style={styles.description} py={10} px={15}>
            <Text fontWeight='bold' numberOfLines={2} ellipsizeMode="tail">
              {item.title}
            </Text>
          </VStack>
        </View>
      </TouchableOpacity>

      {
        index > 0 && (index + 1) % 3 === 0 && (
          <AdsBanner
            imageUrl="https://www.interprint-services.co.uk/wp-content/uploads/2019/04/placeholder-banner.png"
          />
        )
      }
    </React.Fragment >
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={mockNews}
        renderItem={renderNewsItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.flatListContent}
        showsVerticalScrollIndicator={false}
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
  },
  newsImg: {
    width: "100%",
    height: windowWidth * 0.38,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  description: {
    width: "100%",
    height: windowWidth * 0.15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: "#F5F5F5",
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 5,
  },
  shareIcon: {
    borderRadius: 20,
    backgroundColor: 'rgba(60, 60, 60, .7)',
    padding: 8,
  },

});
