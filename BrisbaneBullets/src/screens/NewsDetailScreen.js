import React from 'react';
import { View, Text, Box, HStack, VStack, Image } from "@gluestack-ui/themed";
import { Dimensions, ScrollView, StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';



const windowWidth = Dimensions.get("window").width;
const mockNewsDetails = [
  {
    id: 1,
    title: 'Brisbane Bullets welcome Deng Adel',
    subTitle: 'We had a clear focus to bring in more athleticism and versatility to our roster',
    date: 'Apr 15, 2024',
    img: require('../../assets/News/newsImg7.png'),
    imgAlt: 'newsImage',
    content: 'The Brisbane Bullets are pleased to announce the signing of Deng Adel on a one year contract for NBL25.Adel is a 6-7 athletic forward with experience both internationally and in the NBL.The 27- year - old is currently playing for Boulazac in France averaging 8.3 points and 3.1 rebounds per game.Following a successful college career at the University of Louisville, Adel had a stint in the NBA with the Cleveland Cavaliers in 2018-19 where he saw playing time across 19 games.Adel spent one season in the NBL with the Illawarra Hawks in 2020/21 before returning overseas playing in the G League, Canada, Denmark and France.Bullets Hostplus Head Coach Justin Schueller welcomed Adel to the Club.“We had a clear focus to bring in more athleticism and versatility to our roster and Deng is the perfect player to help us in these areas.”“He is a talent of the highest level, and we are excited to welcome him back to the NBL.”Adel joins Josh Bannan, Tyrell Harrison, Sam McDaniel, Mitch Norton, Casey Prather, Isaac White and Rocco Zikarsky on the Bullets roster for NBL25.'
  },
  {
    id: 2,
    title: 'Club Statement - Chris Smith',
    subTitle: '',
    date: 'Apr 11, 2024',
    img: require('../../assets/News/newsImg6.png'),
    imgAlt: 'newsImage',
    content: 'The Brisbane Bullets have declined to exercise the option on the final year of Chris Smith’s contract for the NBL25 season.During his lone season at the Bullets, the American guard averaged 11 points, 2.9 rebounds in 27 appearances.The Bullets wish Chris and his family all the best for their future endeavours.'
  },
  {
    id: 3,
    title: 'Rocco Zikarsky named in Boomers Olympic Squad',
    subTitle: 'The 17-year-old centre was named in the 22-strong roster announced on Wednesday morning',
    date: 'Apr 10, 2024',
    img: require('../../assets/News/newsImg5.png'),
    imgAlt: 'newsImage',
    content: 'The 17 year old centre was named in the 22-strong roster announced on Wednesday morning, with his outstanding potential being recognised by Brian Goorjian.Mainstays of the Australian national team, Patty Mills, Joe Ingles, Josh Giddey and Matthew Dellavedova are among a star-studded squad.A Basketball Australia release said "the initial squad will be refined before training camp in July with a final 12 selected to meet the world’s best at the Olympics".“We’ve been actively monitoring the Aussie players across international leagues in USA, Europe and Asia as well as domestically in the NBL and we’re confident in the potential chemistry of this list,” Goorjian said.“The complexity of international tournaments like the Olympics is that you have a relatively short window to train and prepare – so you have to identify and implement a style that works fast and amplifies the collective skill set.'
  },
  {
    id: 4,
    title: 'Bullets Core Locked in for NBL25',
    subTitle: 'It’s an exciting period for our Club as we now build onto the foundation we have laid',
    date: 'Apr 10, 2024',
    img: require('../../assets/News/newsImg4.png'),
    imgAlt: 'newsImage',
    content: 'The Brisbane Bullets have locked in their core roster and will look to build further, with decisions made on the options of multiple players heading into the start of Free Agency on Monday 15 April Mitch Norton, Sam McDaniel, Tyrell Harrison, Josh Bannan, Isaac White, Rocco Zikarsky and American import Casey Prather will all return to the club for the NBL 2024-25 season. After a successful first year with the Bullets, Mitch Norton has not only picked up his player option for NBL25, but the Club has extended his contract by two years through to the end of NBL27.Mitch has a wealth of experience both in the NBL and Internationally and is a valuable addition to the Club both on and off the court.New Zealand representative, Tyrell Harrison will return to the Bullets in NBL25 with the club picking up his player option following a career year. After joining the Bullets mid- way through NBL24, three - time NBL Champion Casey Prather will return for NBL25. The Bullets have also picked up the player option of Isaac White, with the young guard bolstering the Club’s guard stocks.'
  },
  {
    id: 5,
    title: 'The Brisbane Bullets and Nathan Sobey part ways',
    subTitle: '',
    date: 'Mar 28, 2024',
    img: require('../../assets/News/newsImg.png'),
    imgAlt: 'newsImage',
    content: 'The Brisbane Bullets and Nathan Sobey have mutually agreed to part ways ahead of the 2024/25 NBL season. The 33-year - old guard joined the Bullets in 2019 and over the past five seasons has played an integral role within the club.While in Brisbane, Nathan made strong contributions across the board, serving as team captain in NBL24.“Nathan’s a talented athlete, a great person and we would like to thank him for many years of service to the Bullets,” Brisbane Bullets CEO Malcolm Watts said.“We wish Nathan, CC and the family all the best on their future endeavours and thank them for being a valued part of the club.”With a number of positive changes over the past 12 months, the Bullets have a clear sense of direction ahead of the 2024 / 25 NBL season.'
  },
  {
    id: 6,
    title: 'NBL24 MVP Awards Gala winners announced',
    subTitle: '',
    date: 'Mar 28, 2024',
    img: require('../../assets/News/newsImg2.png'),
    imgAlt: 'newsImage',
    content: 'The Brisbane Bullets held their annual MVP Awards Gala celebrating the NBL24 season on Thursday night at The Emporium with 215 guests in attendance. In his fifth year at the club, Nathan Sobey capped off a strong season, taking home the Leroy Loggins MVP Award.Throughout NBL24 his athleticism and offensive firepower was on full display, averaging 20 points, 4.4 rebounds and 2.6 assists per game.Displaying pure effort and determination on both ends of the floor, Sam McDaniel received the Bullets Defensive Player of the Year after being shortlisted for the NBL’s Best Defensive Player award earlier this month.In his first professional season, Josh Bannan was rewarded for his continued growth and professionalism named as the Youth Player of the Year.'
  },
  {
    id: 7,
    title: 'Zikarsky to compete at Albert Schweitzer Tournament..',
    subTitle: '',
    date: 'Mar 21,2024',
    img: require('../../assets/News/newsImg3.png'),
    imgAlt: 'newsImage',
    content: 'A squad of Australia’s brightest basketball talent including Brisbane Bullets Rocco Zikarsky are on their way to Manheim, Germany to compete against the world’s best for the 30th Albert Schweitzer Tournament. Basketball Australia’s Centre of Excellence team led by head coach Robbie McKinlay will kick off their campaign against Turkey on 30 March, before facing Czechia, Japan, Germany U18 and Slovenia in the group stage. McKinlay is taking a contingent of players with previous international tournament experience including Rocco Zikarsky, Roman Siulepa, Jack Whitbourn, Cooper Rowlings, Emmett Adair, Che Brogan and Jacob Furphy. It will be the first time donning the Green and Gold for Queenslander Mason Honeyman, South Australia’s Patrick D’Arcy & Alex Dodson as well as Victorian Luke Fennel.'
  },
];

export default function NewsDetailScreen({ route, navigation }) {
  const { newsId } = route.params; // Extracting newsId from route params
  // Assuming you have a function to fetch news by ID
  const newsItem = mockNewsDetails.find((news) => news.id === newsId); // Find news item by id
  const handleShare = () => {
    // Implement your share functionality here
  };
  return (
    <>
      <View style={styles.imageContainer}>
        <Image source={newsItem.img} style={styles.image} alt={newsItem.imgAlt} />
      </View>
      <ScrollView>
        <View style={styles.container}>
          <Text fontWeight='bold' fontSize={30} mt={10}>{newsItem.title}</Text>
          <HStack space={2} alignItems="center" mt={10} mb={5}>
            <FontAwesome5 name="calendar-alt" size={24} color="#164CA8" />
            <Text pl={10}>{newsItem.date}</Text>
          </HStack>
          <Box borderTopWidth={2} borderBlockColor='#D9D9D9' pt={10}>
            <Text fontWeight='bold' fontSize={20}>{newsItem.subTitle}</Text>
            <Text mt={10}>{newsItem.content}</Text>
          </Box>
          <MoreNews navigation={navigation} />
        </View>
      </ScrollView>
    </>
  )
}

function MoreNews({ navigation }) {
  const mockMoreNews = [
    {
      id: 2,
      title: 'Club Statement - Chris Smith',
      img: require('../../assets/News/newsImg6.png'),
      imgAlt: 'newsImage'
    },
    {
      id: 3,
      title: 'Rocco Zikarsky named in Boomers Olympic Squad',
      img: require('../../assets/News/newsImg5.png'),
      imgAlt: 'newsImage'
    },
    {
      id: 4,
      title: 'Bullets Core Locked in for NBL25',
      img: require('../../assets/News/newsImg4.png'),
      imgAlt: 'newsImage'
    },
    {
      id: 5,
      title: 'The Brisbane Bullets and Nathan Sobey part ways',
      img: require('../../assets/News/newsImg.png'),
      imgAlt: 'newsImage'
    },
  ]
  const handlePress = (id) => {
    // Navigate to the news detail screen with the corresponding id
    navigation.navigate('NewsDetailScreen', { newsId: id });
  };

  return (
    <View py={10}>
      <Box w={'40%'} borderBottomWidth={2} borderBlockColor='gray' pt={10} mb={10}>
        <Text fontWeight='bold' fontSize={20}>More News</Text>
      </Box>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <HStack>
          {mockMoreNews.map((newsItem) => (
            <TouchableOpacity key={newsItem.id} onPress={() => handlePress(newsItem.id)}>
              <View mr={5} styles={styles.moreImgBorder}>
                <Image source={newsItem.img} alt={newsItem.imgAlt} />
              </View>
            </TouchableOpacity>
          ))
          }
        </HStack>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingHorizontal: windowWidth * 0.08,
  },
  box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: windowWidth * 0.8,
    marginHorizontal: 10
  },
  imageContainer: {
    height: '30%',
    marginTop: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  moreImgBorder: {
    borderRadius: 10,
  }
});
