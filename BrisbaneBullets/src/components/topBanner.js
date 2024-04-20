import React from "react";
import {scaleFontSize} from "../constants/Layout";
import {StyleSheet, Dimensions, ScrollView} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {View, Text, Image} from "@gluestack-ui/themed";

const windowWidth = Dimensions.get("window").width;

const mockTeams = [
    {img: require('../../assets/teamImages/BB.png'), score: '103'}, {
        img: require('../../assets/teamImages/ade.png'),
        score: '87'
    }, {img: require('../../assets/teamImages/BB.png'), score: '32'}, {
        img: require('../../assets/teamImages/nz.png'),
        score: '24'
    }, {img: require('../../assets/teamImages/BB.png'), score: ''}, {
        img: require('../../assets/teamImages/syd.png'),
        score: ''
    }
]

const mockPastGame = [
    {date: 'Fri, Feb 19', match: 'Final'}
]

const mockCurrentGame = [
    {match: '2nd', time: '7:01'}
]

const mockUpcomingGame = [
    {date: 'Fri, May 27', time: '10:00 AM GMT+10', location: 'Spark Arena'}
]

function compareScore(one, two) {
    const scoreOne = parseInt(one);
    const scoreTwo = parseInt(two);

    if (scoreOne > scoreTwo) {
        return 1;
    } else if (scoreOne < scoreTwo) {
        return -1;
    } else {
        return 0;
    }
}

export function TopBanner() {

    // Need to update after getting data access
    const comparisonResult = compareScore(mockTeams[0].score, mockTeams[1].score);

    const boldTextStyle = {
        fontWeight: 'bold',
    };

    return (
        <View>
            <LinearGradient colors={['#164CA8', '#091E42']} style={styles.container}>
                <ScrollView horizontal>

                    {/*Past Game*/}
                    <View style={styles.itemContainer}>
                        {/*Left team*/}
                        <View style={styles.teamContainer}>
                            <Image source={mockTeams[0].img} style={[styles.image, styles.leftImage]}
                                   accessibilityLabel="Team Logo"/>
                            <Text
                                style={[styles.score, (comparisonResult === 1 || comparisonResult === 0) && boldTextStyle]}>
                                {mockTeams[0].score}
                            </Text>
                        </View>

                        {/*Game details*/}
                        <View style={styles.details}>
                            <Text style={styles.date}>{mockPastGame[0].date}</Text>
                            <Text style={styles.match}>{mockPastGame[0].match}</Text>
                        </View>

                        {/*Right team*/}
                        <View style={styles.teamContainer}>
                            <Text
                                style={[styles.score, (comparisonResult === -1 || comparisonResult === 0) && boldTextStyle]}>
                                {mockTeams[1].score}
                            </Text>
                            <Image source={mockTeams[1].img} style={[styles.image, styles.rightImage]}
                                   accessibilityLabel="Team Logo"/>
                        </View>

                    </View>
                </ScrollView>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: windowWidth,
        height: 230,
    },
    itemContainer: {
        flex: 1,
        flexDirection: 'row', // Align children horizontally
        alignItems: 'flex-start', // Center items vertically
        justifyContent: 'center', // Center items horizontally
        paddingBottom: 70,
        paddingTop: 80,
        width: windowWidth,
    },
    teamContainer: {
        flexDirection: 'row', // Align score and image horizontally
        alignItems: 'center',
    },
    image: {
        width: windowWidth * 0.15,
        height: windowWidth * 0.15,
        borderRadius: 15,
    },
    leftImage: {
        marginRight: 10,
    },
    rightImage: {
        marginLeft: 10,
    },
    score: {
        fontSize: scaleFontSize(27),
        color: 'white',
    },
    details: {
        paddingLeft: 22,
        paddingRight: 22,
        alignItems: 'center',
    },
    date: {
        color: 'white',
        fontSize: scaleFontSize(20),
        textTransform: 'uppercase',
    },
    match: {
        color: 'white',
        fontSize: scaleFontSize(17),
        paddingTop: 5,
    },
    // matchCur: {
    //     color: 'white',
    //     fontSize: scaleFontSize(17),
    //     fontWeight: '700',
    // },
    time: {
        fontWeight: '800',
    },
});
