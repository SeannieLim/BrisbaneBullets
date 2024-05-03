import {React, useState } from 'react';
import { StyleSheet, TouchableOpacity, Linking, ImageBackground, Text, Dimensions } from 'react-native';
import { Box,  VStack, View } from "@gluestack-ui/themed";
import {scaleFontSize} from "../constants/Layout";

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
  title: 'Zikarsky to compete at Albert Schweitzer Tournament..',
  date: 'Mar 21,2024',
  img: require('../../assets/News/newsImg3.png'),
  imgAlt: 'newsImage'
},]


const VideoBox = () =>{
    const [videos, setVideos] =useState([]);
    const onPress={handlePress}
    const handlePress=()=>{
        const url = "https://www.youtube.com/watch?v=KvN8U6cqiu0&ab_channel=PewDiePie"
        Linking.openURL(url)
    }

    return(
    <View style={styles.box}> 
        <Box style={styles.header}>
          <Text style={styles.heading}>Videos</Text>
        </Box>
      <VStack space="none" reversed={false} style={styles.vstack}>
      <TouchableOpacity onPress={handlePress} style={styles.video}>
      <ImageBackground
        source={require('../../assets/News/newsImg7.png')}
        style={styles.imageBackground}
      />
      </TouchableOpacity >
        <Box style={styles.description} />
      </VStack>
    </View>

    );


};



const AllVideos = () => {
  return (
    <VideoBox/>
  );
};

export default AllVideos;

const styles = StyleSheet.create({

    box:{
        height:"100%",
        // justifyContent: "center",
        backgroundColor:"pink",
    },
    header: {
      paddingTop: windowWidth * 0.1,
      paddingBottom: windowWidth *0.08,
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
        width:"85%",
        height:"35%",
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        backgroundColor:"#164CA8",

    },
    description:{
        width:"85%",
        height:"20%",
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        backgroundColor:"white",
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.05,
        shadowRadius: 1,
        elevation: 1,
    },

})