import React from 'react';
import { StyleSheet, TouchableOpacity, Text, Dimensions, Share } from 'react-native';
import { HStack, VStack, Box, Image } from "@gluestack-ui/themed";
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from "expo-linear-gradient";

const windowWidth = Dimensions.get("window").width;

const NewsCard = (props) => {
  const navigation = useNavigation();
  const { news } = props
  const handleCardPress = () => {
    navigation.navigate('NewsDetail', { newsId: news.id })
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
  return (
    <TouchableOpacity onPress={() => handleCardPress(news)}>
      <Box style={{ ...styles.box, ...styles.newsCardContainer }} bg='#164CA8' rounded={15}>
        <Box position='relative'>
          <Image style={styles.newsImg} source={news.img} alt={news.imgAlt} />
          <LinearGradient colors={['rgba(0, 0, 0, 0)', '#164CA8']} position='absolute' bottom={0}
            left={0} right={0} style={styles.gradientContainer}>
            <HStack pl={15} pr={15} justifyContent='space-between'>
              <Box pb={5} maxWidth={'90%'}>
                <Text style={styles.textTitle} numberOfLines={3} ellipsizeMode="tail">
                  {news.title}
                </Text>
                <Text style={styles.textTime}>
                  {news.date}
                </Text>
              </Box>
              <VStack pt={5} justifyContent='flex-end' pb={15} pr={5}>
                <TouchableOpacity onPress={() => handleShare(news)}>
                  <Entypo name="share-alternative" size={20} color="white" />
                </TouchableOpacity>
              </VStack>
            </HStack>
          </LinearGradient>
        </Box>
      </Box>
    </TouchableOpacity >
  );
};


const styles = StyleSheet.create({
  box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: windowWidth * 0.8,
    height: windowWidth * 0.4,
    marginHorizontal: 3,
  },
  gradientContainer: {
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    height: 80,
    justifyContent: 'flex-end',
  },
  newsImg: {
    width: windowWidth * 0.8,
    height: windowWidth * 0.4,
    borderRadius: 15,
    objectFit: 'cover'
  },
  textTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  textTime: {
    color: '#DCDADA',
    fontWeight: '500',
    fontSize: 13,
    paddingVertical: 2,
  },
  newsCardContainer: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 5,
  },
});

export default NewsCard;
