import {useState} from 'react';
import {Text, Box, HStack, VStack, Image} from "@gluestack-ui/themed";
import {Dimensions, ScrollView, StyleSheet} from "react-native";
import {scaleFontSize} from "../constants/Layout";

const windowWidth = Dimensions.get("window").width;

const data = [
    {date: 'Fri, Jan 19', time: '8:30pm AEDT', match: 'ROUND 17', location: ''},
    {date: 'Fri, Jan 26', time: '4:30pm AEDT', match: 'ROUND 16', location: ''},
    {date: 'Sat, Feb 03', time: '8:30pm AEDT', match: 'ROUND 15', location: ''},
    {date: 'Sun, Feb 04', time: '4:30pm AEDT', match: 'ROUND 14', location: ''}
]

const mockTeams = [
    {
        imgLeft: require('../../assets/teamImages/BB.png'),
        teamLeft: 'Brisbane Bullets',
        scoreLeft: '118',
        imgRight: require('../../assets/teamImages/hawks.png'),
        teamRight: 'Illawarra Hawks',
        scoreRight: '86'
    }, {
        imgLeft: require('../../assets/teamImages/melb.png'),
        teamLeft: 'Melbourne United',
        scoreLeft: '93',
        imgRight: require('../../assets/teamImages/syd.png'),
        teamRight: 'Sydney Kings',
        scoreRight: '86'
    }, {
        imgLeft: require('../../assets/teamImages/BB.png'),
        teamLeft: 'Brisbane Bullets',
        scoreLeft: '75',
        imgRight: require('../../assets/teamImages/perth.png'),
        teamRight: 'Perth Wildcats',
        scoreRight: '89'
    }, {
        imgLeft: require('../../assets/teamImages/melb.png'),
        teamLeft: 'Brisbane Bullets',
        scoreLeft: '95',
        imgRight: require('../../assets/teamImages/hawks.png'),
        teamRight: 'Illawarra Hawks',
        scoreRight: '101'
    }]

export default function PastGames({navigation}) {

    return (
        <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false}>
            <VStack pt={25}>
                {data.map((item, index) => (
                    <Box key={index} pb={20}>
                        <HStack justifyContent='center'>
                            <Box flex={1}>
                                <Text style={styles.details}>{data[index].date}</Text>
                            </Box>
                            <Box style={styles.matchBackground}>
                                <Text style={styles.title}>{data[index].match}</Text>
                            </Box>
                            <Box flex={1} alignItems='flex-end'>
                                <Text style={styles.details}>{data[index].time}</Text>
                            </Box>
                        </HStack>

                        <Box style={styles.gameBackground}>
                            <HStack alignItems='center' pt={5}>
                                <VStack flex={1} maxWidth='95%' pl={10}>
                                    <HStack alignItems='center' space='lg' maxWidth='70%' pb={10}>
                                        <HStack width={200} alignItems='center'>
                                            <Image source={mockTeams[index].imgLeft} style={styles.image}
                                                   alt="Team Logo"/>
                                            <Text style={styles.teamName}>{mockTeams[index].teamLeft}</Text>
                                        </HStack>
                                        <VStack flexBasis="33%">

                                            {parseInt(mockTeams[index].scoreLeft) > parseInt(mockTeams[index].scoreRight) ? (
                                                <Text
                                                    style={[styles.score, styles.scoreBold]}>{mockTeams[index].scoreLeft}</Text>
                                            ) : (
                                                <Text style={styles.score}>{mockTeams[index].scoreLeft}</Text>
                                            )}

                                        </VStack>
                                    </HStack>
                                    <HStack alignItems='center' space='lg' maxWidth='70%'>
                                        <HStack width={200} alignItems='center'>
                                            <Image source={mockTeams[index].imgRight} style={styles.image}
                                                   alt="Team Logo"/>
                                            <Text style={styles.teamName}>{mockTeams[index].teamRight}</Text>
                                        </HStack>
                                        <VStack flexBasis="33%">

                                            {parseInt(mockTeams[index].scoreRight) > parseInt(mockTeams[index].scoreLeft) ? (
                                                <Text
                                                    style={[styles.score, styles.scoreBold]}>{mockTeams[index].scoreRight}</Text>
                                            ) : (
                                                <Text style={styles.score}>{mockTeams[index].scoreRight}</Text>
                                            )}

                                        </VStack>
                                    </HStack>
                                </VStack>
                            </HStack>
                        </Box>
                    </Box>
                ))}
            </VStack>
        < /ScrollView>
    )
}

const styles = StyleSheet.create({
    matchBackground: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 130,
        height: 40,
        borderRadius: 15,
        backgroundColor: '#113B81',
    },
    title: {
        color: 'white',
        fontWeight: '800',
        fontSize: scaleFontSize(16)
    },
    details: {
        fontWeight: '500',
        fontSize: scaleFontSize(13),
    },
    gameBackground: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 'auto',
        height: 140,
        marginTop: -19,
        zIndex: -1,
        borderRadius: 13,
        backgroundColor: '#F5F5F5',
    },
    image: {
        width: windowWidth * 0.11,
        height: windowWidth * 0.11,
    },
    teamName: {
        color: '#113B81',
        fontWeight: '600',
        fontSize: scaleFontSize(14),
        justifyContent: 'center',
        alignContent: 'center',
        marginLeft: 25,
    },
    score: {
        color: '#113B81',
        fontWeight: '600',
        fontSize: scaleFontSize(18),
        textAlign: 'right'
    },
    scoreBold: {
        fontWeight: '800',
    }
})