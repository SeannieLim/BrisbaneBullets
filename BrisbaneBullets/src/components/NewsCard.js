import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { HStack, VStack, Box, Image, Text } from "@gluestack-ui/themed";
import { Entypo } from '@expo/vector-icons';

const mockNews = [
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
  },
];



const NewsCard = () => {
  const handleShare = () => {
    // Implement your share functionality here
  };
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {mockNews.map((news, index) => ( // Iterate over mockNews array
        <Box key={index} style={styles.box} bg='#164CA8' rounded={15}>
          <HStack maxWidth={'100%'} p={8}>
            <Image style={styles.newsImg} source={news.img} alt={news.imgAlt} rounded={15} />
            <VStack justifyContent='space-between' pl={7} flexBasis="60%">
              <Text color='white' numberOfLines={3} ellipsizeMode="tail">
                {news.title}
              </Text>
              <HStack justifyContent='space-between' mr={10}>
                <Text color='white' pb='5'>
                  {news.date}
                </Text>
                <TouchableOpacity onPress={handleShare}>
                  <Entypo name="share-alternative" size={20} color="white" />
                </TouchableOpacity>
              </HStack>
            </VStack>
          </HStack>
        </Box>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 350,
    height: 170,
    marginRight: 10
  },
  newsImg: {
    width: 130,
    height: 140,
  }
});

export default NewsCard;
