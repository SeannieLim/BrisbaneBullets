import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Dimensions } from 'react-native';
import { HStack, VStack, Box, Image } from "@gluestack-ui/themed";
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get("window").width;

const NewsCard = (props, style) => {
  const navigation = useNavigation();
  const { news } = props
  const handleCardPress = () => {
    navigation.navigate('NewsDetailScreen');
  };

  const handleShare = () => {
    // Implement your share functionality here
  };

  return (
    <TouchableOpacity onPress={() => navigation.navigate('NewsDetailScreen', { newsId: news.id })}>
      <Box style={{ style, ...styles.box, ...styles.newsCardContainer }} bg='#164CA8' rounded={15}>
        <HStack maxWidth={'100%'} p={10}>
          <Image style={styles.newsImg} source={news.img} alt={news.imgAlt} />
          <VStack justifyContent='space-between' pl={15} flexBasis="60%">
            <Text style={styles.textColor} numberOfLines={3} ellipsizeMode="tail">
              {news.title}
            </Text>
            <HStack justifyContent='space-between' mr={10}>
              <Text style={styles.textColor} pb='5'>
                {news.date}
              </Text>
              <TouchableOpacity onPress={handleShare}>
                <Entypo name="share-alternative" size={20} color="white" />
              </TouchableOpacity>
            </HStack>
          </VStack>
        </HStack>
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
    marginHorizontal: 3
  },
  newsImg: {
    width: windowWidth * 0.3,
    height: windowWidth * 0.33,
    borderRadius: 15,
  },
  textColor: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
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
