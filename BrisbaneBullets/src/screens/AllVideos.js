import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Box,  VStack, Image } from "@gluestack-ui/themed";

const VideoBox = () =>{
    const [videos, setVideos] =useState([]);
    const handlePress=()=>{
        const url = "https://www.youtube.com/watch?v=KvN8U6cqiu0&ab_channel=PewDiePie"
        Linking.openURL(url)
    }

    return(
    <Box style={styles.box}> 
      <VStack space="none" reversed={false} style={styles.vstack}>
      <TouchableOpacity onPress={handlePress}>
        <Image source={require('../Logo/BB-logo.png')} style={styles.video}/>
      </TouchableOpacity >
        <Box style={styles.description} />
      </VStack>
    </Box>

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
        justifyContent: "center",
        backgroundColor:"pink",
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
        backgroundColor:"yellow",

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