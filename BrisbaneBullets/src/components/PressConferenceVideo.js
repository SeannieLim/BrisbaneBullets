import React from 'react';
import {StyleSheet, TouchableOpacity, Text, Share, Dimensions, FlatList} from 'react-native';
import {HStack, VStack, Box, Image} from "@gluestack-ui/themed";
import {Entypo} from '@expo/vector-icons';
import {AntDesign} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import {LinearGradient} from "expo-linear-gradient";

const windowWidth = Dimensions.get("window").width;

const mockVideo = [
    {
        id: 1,
        title: "Press Conference vs Adelaide 36ers",
        time: "Mar 13, 2024",
        img: require("../../assets/Videos/PressC1.png"),
        imgAlt: "newsImage",
    },
    {
        id: 2,
        title: "Post Training Media: Mitch Norton",
        time: "Feb 18, 2024",
        img: require("../../assets/Videos/PressC2.png"),
        imgAlt: "newsImage",
    },
];

const HighlightVideo = () => {
    const navigation = useNavigation();

    const handleVideoCardPress = () => {
        // Uncomment and provide the appropriate screen name or route
        // navigation.navigate('VideoDetailScreen');
    };

    const handleShare = async (videos) => {
        try {
            // Base URL
            const baseUrl = 'https://www.brisbanebullets.com.au/videos/';
            // Replace spaces in the news title with hyphens (-)
            const formattedTitle = videos.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
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

    const renderItem = ({item}) => (
        <TouchableOpacity onPress={handleVideoCardPress}>
            <Box style={{...styles.box, ...styles.videoCardContainer}} bg='#164CA8' rounded={15}>
                <Box position='relative'>
                    <Image style={styles.videoImg} source={item.img} alt={item.imgAlt}/>
                    <AntDesign name="playcircleo" size={40} color="white" position='absolute' bottom={'45%'}
                               right={'45%'}/>
                    <LinearGradient colors={['rgba(0, 0, 0, 0)', 'rgba(22, 76, 168, 0.9)']} position='absolute' bottom={0}
                                    left={0} right={0} style={styles.gradientContainer}>
                        <HStack pl={15} pr={15} justifyContent='space-between'>
                            <Box pb={5} maxWidth={'90%'}>
                                <Text style={styles.textTitle} numberOfLines={3} ellipsizeMode="tail">
                                    {item.title}
                                </Text>
                                <Text style={styles.textTime}>
                                    {item.time}
                                </Text>
                            </Box>
                            <VStack pt={5} justifyContent='flex-end' pb={15} pr={5}>
                                <TouchableOpacity onPress={() => handleShare(item)}>
                                    <Entypo name="share-alternative" size={20} color="white"/>
                                </TouchableOpacity>
                            </VStack>
                        </HStack>
                    </LinearGradient>
                </Box>
            </Box>
        </TouchableOpacity>
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
    gradientContainer: {
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        height: 80,
        justifyContent: 'flex-end',
    },
    videoImg: {
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
    videoCardContainer: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.25,
        shadowRadius: 2,
        elevation: 5,
    },
});

export default HighlightVideo;
