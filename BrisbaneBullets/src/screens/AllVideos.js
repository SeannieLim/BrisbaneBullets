import {React, useState } from 'react';
import { StyleSheet, TouchableOpacity, ScrollView, Linking, ImageBackground, Text, Dimensions, SafeAreaView } from 'react-native';
import { Box, View } from "@gluestack-ui/themed";
import {scaleFontSize} from "../constants/Layout";
import { MaterialIcons } from '@expo/vector-icons';

const windowWidth = Dimensions.get("window").width;
const mockVideos=[
{
  id: 6,
  title: 'NBL24 MVP Awards Gala winners announced',
  date: 'Mar 28, 2024',
  img: require('../../assets/News/newsImg2.png'),
  imgAlt: 'newsImage'
},
{
  id: 7,
  title: 'This title has no meaning it is just for testing purpose blah blah blah blah blah blah blah blah blah blah blah blah',
  date: 'Mar 21,2024',
  img: require('../../assets/News/newsImg3.png'),
  imgAlt: 'newsImage'
},
{
  id: 6,
  title: 'Dummy textssssssssss ssssssssssssssssss sssssssssssssssssssssssssss ssssssssssssssssssssssssssssssss',
  date: 'Mar 28, 2024',
  img: require('../../assets/News/newsImg2.png'),
  imgAlt: 'newsImage'
},
{
  id: 6,
  title: 'NBL24 MVP Awards Gala winners announced',
  date: 'Mar 28, 2024',
  img: require('../../assets/News/newsImg2.png'),
  imgAlt: 'newsImage'
},]


const VideoBox = ({video}) =>{
    const [videos, setVideos] =useState([]);
    const onPress={handlePress}
    const handlePress=()=>{
        const url = "https://www.youtube.com/watch?v=KvN8U6cqiu0&ab_channel=PewDiePie"
        Linking.openURL(url)
    }

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
            </TouchableOpacity>
            <View style={styles.description}>
                <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
                    {video.title}
                </Text>
                <Text style={styles.date} numberOfLines={1} ellipsizeMode="tail">
                    {video.date}
                </Text>
            </View>
        </View>
    );

};



const AllVideos = () => {
  return (
    <View style={styles.backGround}>  
    {/*Renders content within the safe area boundaries of a device (only applicable for IOS11 or later) */}
    <SafeAreaView style={{flex: 1}}>
    <Box style={styles.header}>
          {/* Heading of the page */}
          <Text style={styles.heading}>Videos</Text>
        </Box>
    <ScrollView>
      {/* Rendering the data through mocVideos */}
      {mockVideos.map((video, index) => (
        <VideoBox key={index} video={video} />
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
        // justifyContent: "center",
      backgroundColor:"white",
    },
    header: {
      paddingTop: windowWidth * 0.03,
      paddingBottom: windowWidth *0.03,
      flexDirection: 'row',
      justifyContent:'center'
  },
    heading: {
      color: '#113B81',
      fontWeight:'600',
      fontSize:scaleFontSize(29)
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
      width:"95%",
      height:150,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      backgroundColor:"#164CA8",

    },
    description:{
      width:"95%",
      height:70,
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
      fontSize:12,
      color:"#707070",
    },

})