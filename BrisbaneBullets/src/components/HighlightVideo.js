import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Dimensions, FlatList } from 'react-native';
import { HStack, VStack, Box, Image } from "@gluestack-ui/themed";
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get("window").width;

const mockVideo = [
  {
    id: 1,
    title: "Highlights vs Melbourne United",
    time: "02:59",
    img: require("../../assets/Videos/highlight1.png"),
    imgAlt: "newsImage",
  },
  {
    id: 2,
    title: "Highlights vs Cairns Taipans",
    time: "02:56",
    img: require("../../assets/Videos/highlight2.png"),
    imgAlt: "newsImage",
  },
];

const HighlightVideo = () => {
  const navigation = useNavigation();

  const handleVideoCardPress = () => {
    // Uncomment and provide the appropriate screen name or route
    // navigation.navigate('VideoDetailScreen');
  };

  const handleShare = () => {
    // Implement your share functionality here
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={handleVideoCardPress}>
      <Box style={{ ...styles.box, ...styles.videoCardContainer }} bg='#164CA8' rounded={15}>
        <HStack maxWidth={'100%'} p={10}>
          <Box position='relative'>
            <Image style={styles.videoImg} source={item.img} alt={item.imgAlt} />
            <AntDesign name="playcircleo" size={24} color="white" position='absolute' bottom={'40%'} right={'40%'} />
          </Box>
          <VStack justifyContent='space-between' pl={15} flexBasis="60%">
            <Text style={styles.textColor} numberOfLines={3} ellipsizeMode="tail">
              {item.title}
            </Text>
            <HStack justifyContent='space-between' mr={10}>
              <Text style={styles.textColor} pb='5'>
                {item.time}
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

  return (
    <FlatList
      horizontal
      data={mockVideo}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      showsHorizontalScrollIndicator={false}
    />
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
    marginTop: windowWidth * 0.04,
  },
  videoImg: {
    width: windowWidth * 0.3,
    height: windowWidth * 0.33,
    borderRadius: 15,
    objectFit: 'cover'
  },
  textColor: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  videoCardContainer: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 5,
  },
});

export default HighlightVideo;
