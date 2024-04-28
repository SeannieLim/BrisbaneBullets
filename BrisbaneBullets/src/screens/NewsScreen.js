import React from 'react';
import { View, VStack, Box, Text, HStack, Image } from "@gluestack-ui/themed";
import { Dimensions, ImageBackground, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import AdsBanner from "../components/AdsBanner";
import { Entypo } from '@expo/vector-icons';

const windowWidth = Dimensions.get("window").width;
const mockNews = [
  {
    title: 'Brisbane Bullets welcome Deng Adel',
    date: 'Apr 15, 2024',
    img: require('../../assets/News/newsImg7.png'),
    imgAlt: 'newsImage'
  },
  {
    title: 'Club Statement - Chris Smith',
    date: 'Apr 11, 2024',
    img: require('../../assets/News/newsImg6.png'),
    imgAlt: 'newsImage'
  },
  {
    title: 'Rocco Zikarsky named in Boomers Olympic Squad',
    date: 'Apr 10, 2024',
    img: require('../../assets/News/newsImg5.png'),
    imgAlt: 'newsImage'
  },
  {
    title: 'Bullets Core Locked in for NBL25',
    date: 'Apr 10, 2024',
    img: require('../../assets/News/newsImg4.png'),
    imgAlt: 'newsImage'
  },
  {
    title: 'The Brisbane Bullets and Nathan Sobey part ways',
    date: 'Mar 28, 2024',
    img: require('../../assets/News/newsImg.png'),
    imgAlt: 'newsImage'
  },
  {
    title: 'NBL24 MVP Awards Gala winners announced',
    date: 'Mar 28, 2024',
    img: require('../../assets/News/newsImg2.png'),
    imgAlt: 'newsImage'
  }, {
    title: 'Zikarsky to compete at Albert Schweitzer Tournament..',
    date: 'Mar 21,2024',
    img: require('../../assets/News/newsImg3.png'),
    imgAlt: 'newsImage'
  },
];
export default function NewsScreen({ navigation }) {
  const handleShare = () => {
    // Implement share functionality here
  };
  return (
    <View style={styles.container}>
      <View style={styles.backgroundImageContainer}>
        <ImageBackground source={require('../../assets/Logo/BB-logo.png')} resizeMode="center" opacity={'0.5'}>
          <ScrollView>
            <Box m={30}>
              {mockNews.map((news, index) => ( // Iterate over mockNews array
                <React.Fragment key={index}>
                  {/* Render NewsCard */}
                  <Box bg='#164CA8' rounded={15} my={5}>
                    <HStack p={8}>
                      <Image style={styles.newsImg} source={news.img} alt={news.imgAlt} rounded={15} />
                      <VStack justifyContent='space-between' pl={7} flexBasis="60%">
                        <Text color='white' numberOfLines={3} ellipsizeMode="tail">
                          {news.title}
                        </Text>
                        <HStack justifyContent='space-between'>
                          <Text color='white' pb={5}>
                            {news.date}
                          </Text>
                          <TouchableOpacity onPress={handleShare}>
                            <Entypo name="share-alternative" size={20} color="white" />
                          </TouchableOpacity>
                        </HStack>
                      </VStack>
                    </HStack>
                  </Box>
                  {/* Display AdsBanner after every 3rd NewsCard */}
                  {index % 3 === 2 && <AdsBanner
                    imageUrl="https://www.interprint-services.co.uk/wp-content/uploads/2019/04/placeholder-banner.png" />}
                </React.Fragment>
              ))}
            </Box>
          </ScrollView>
        </ImageBackground>
      </View >
    </View >

  )
}

const styles = StyleSheet.create({
  backgroundImageContainer: {
    flex: 1,
    width: windowWidth,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    position: 'relative',
  },
  box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: windowWidth * 0.8,
    marginHorizontal: 10
  },
  newsImg: {
    width: windowWidth * 0.3,
    height: windowWidth * 0.35,
  }

});
