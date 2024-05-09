import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, ScrollView, Linking, ImageBackground, Text, Dimensions, SafeAreaView, Share  } from 'react-native';
import { Box, View } from "@gluestack-ui/themed";
import { MaterialIcons, Entypo  } from '@expo/vector-icons';
import AdsBanner from "../components/AdsBanner";

const windowWidth = Dimensions.get("window").width;
const mockVideos=[
{
  id: 1,
  title: 'New Zealand Breakers vs. Brisbane Bullets - Game Highlights - Round 20, NBL24',
  date: 'Feb 16, 2024',
  img: require('../../assets/Videos/video1.jpg'),
  imgAlt: 'videoImage',
  url:'https://www.youtube.com/watch?v=rKmiRRfW1PA&ab_channel=BrisbaneBullets',
  length:'02:58',
},
{
  id: 2,
  title: 'Press Conference vs Adelaide 36ers',
  date: 'Feb 09,2024',
  img: require('../../assets/Videos/video2.jpg'),
  imgAlt: 'videoImage',
  url:'https://www.youtube.com/watch?v=BbgCIOvQAJE&ab_channel=BrisbaneBullets',
  length:'09:40',
},
{
  id: 3,
  title: 'Brisbane Bullets vs. Adelaide 36ers - Game Highlights - Round 19, NBL24',
  date: 'Feb 09, 2024',
  img: require('../../assets/Videos/video3.jpg'),
  imgAlt: 'videoImage',
  url:'https://www.youtube.com/watch?v=KulBiky4lqY&ab_channel=BrisbaneBullets',
  length:'03:00',
},
{
  id: 4,
  title: 'NBL24 with Brian Kerle',
  date: 'Feb 08, 2024',
  img: require('../../assets/Videos/video4.jpg'),
  imgAlt: 'videoImage',
  url:'https://www.youtube.com/watch?v=eJVIvfmmTCk&ab_channel=BrisbaneBullets',
  length:'01:53',
},
{
  id: 5,
  title: 'Illawarra Hawks vs. Brisbane Bullets - Game Highlights - Round 18, NBL24',
  date: 'Feb 03, 2024',
  img: require('../../assets/Videos/video5.jpg'),
  imgAlt: 'videoImage',
  url:'https://www.youtube.com/watch?v=kvtxECsp2GU&ab_channel=BrisbaneBullets',
  length:'02:59',
},
{
  id: 6,
  title: 'Post Training Media: Mitch Norton',
  date: 'Feb 02, 2024',
  img: require('../../assets/Videos/video6.jpg'),
  imgAlt: 'videoImage',
  url:'https://www.youtube.com/watch?v=9j9tXzd35D0&ab_channel=BrisbaneBullets',
  length:'01:17',
},
{
  id: 7,
  title: 'Press Conference vs Melbourne United',
  date: 'Jan 26, 2024',
  img: require('../../assets/Videos/video7.jpg'),
  imgAlt: 'videoImage',
  url:'https://www.youtube.com/watch?v=0jhxCHlLXho&ab_channel=BrisbaneBullets',
  length:'06:44',
},]


const VideoBox = ({video}) =>{
    const [videos, setVideos] =useState([]);
    const onPress={handlePress}
    const handlePress=()=>{
        const url = video.url
        Linking.openURL(url)
    }
    const handleShare = async () => {
      try {
        const url = `${video.url}`;
        await Share.share({
          url: url,
        });
  
      } catch (error) {
        console.error("Error sharing", error);
      }
    };

    return(
        <View style={styles.videoContainer}>
            <TouchableOpacity onPress={handlePress} style={styles.video}>
                <ImageBackground
                    source={video.img}
                    style={styles.imageBackground}
                />
                 <View style={styles.iconContainer}>
                 <MaterialIcons name="play-circle-filled" size={48} color="#FAB81B" />

            </View>
            <View style={styles.length}>
              <Text style={styles.lengthText}>{video.length}</Text>
              </View>

            <View style={styles.description}>
                <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
                    {video.title}
                </Text>
                <Text style={styles.date} numberOfLines={1} ellipsizeMode="tail">
                    {video.date}
                </Text>
                <TouchableOpacity style={styles.shareIcon} onPress={() => handleShare(videos)}>
                  <Entypo name="share-alternative" size={18} color="black" />
                 </TouchableOpacity>
            </View>
                        
            </TouchableOpacity>
        </View>
    );

};



const AllVideos = () => {
  return (
    <View style={styles.backGround} pt={20}>  
    {/*Renders content within the safe area boundaries of a device (only applicable for IOS11 or later) */}
    <SafeAreaView style={{flex: 1}}>
    <ScrollView showsVerticalScrollIndicator={false}>
      {/* Rendering the data through mocVideos */}
      {mockVideos.map((video, index) => (
        <React.Fragment key={index}>
        <VideoBox key={index} video={video} />
        {/* Display AdsBanner after every 3rd NewsCard */}
        {index > 0 && (index + 1) % 3 === 0 && (
          <View style={styles.ad}>
          <AdsBanner 
            imageUrl="https://www.interprint-services.co.uk/wp-content/uploads/2019/04/placeholder-banner.png"
          />
          </View>
        )}
        </React.Fragment>
      ))}
    </ScrollView>
    </SafeAreaView>
    </View>
  );
};

export default AllVideos;

const styles = StyleSheet.create({
    videoContainer:{
      marginBottom: 20,
      justifyContent: "center",
      alignItems: 'center',
      paddingHorizontal:windowWidth * 0.08,    
    },
    length:{
      position: 'absolute',
      bottom: 6, 
      left: 15,
      backgroundColor:"rgba(60, 60, 60, 0.7)",
      borderRadius:10,
    },
    lengthText:{
      fontSize:13,
      padding:2,
      color:"white",
    },
    ad:{
      justifyContent: "center",
      alignItems: 'center',
      marginBottom: 20,

    },
    iconContainer:{
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
    },
    backGround:{
      flex:1,
      justifyContent:"center",
      alignItems: 'center',
      backgroundColor:"white",
    },
    imageBackground: {
      width: "100%",
      height: "100%",
      overflow: 'hidden',
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
    },
    vstack: {
      alignItems: "center", 
      display:"block",
    },
    video:{
      width:"100%",
      height:150,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      backgroundColor:"#164CA8",

    },
    description:{
      width:"100%",
      height:60,
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
      backgroundColor:"#F5F5F5",
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.25,
      shadowRadius: 2,
      elevation: 5,
      
    },
    title:{
      paddingLeft:15,
      paddingRight:15,
      paddingTop:5,
    },
    date:{
      position: 'absolute',
      bottom: 4, 
      left: 15,
      fontSize:11,
      color:"#707070",
    },
    shareIcon: {
      position: 'absolute',
      bottom: 4, 
      right: 5,
      padding: 8,
    },

})