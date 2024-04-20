import {useEffect, useRef, useState} from 'react';
import {scaleFontSize} from "../constants/Layout";
import {Dimensions, ScrollView, StyleSheet} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import {Image, Text, View} from "@gluestack-ui/themed";
import {ActionButton} from "./actionButton";

const windowWidth = Dimensions.get("window").width;

const mockTeams = [
    {img: require('../../assets/teamImages/BB.png'), score: '97', alt: 'team logo'}, {
        img: require('../../assets/teamImages/ade.png'),
        score: '87', alt: 'team logo'
    }, {img: require('../../assets/teamImages/BB.png'), score: '32', alt: 'team logo'},  {
        img: require('../../assets/teamImages/nz.png'),
        score: '24', alt: 'team logo'
    }, {img: require('../../assets/teamImages/BB.png'), score: '', alt: 'team logo'}, {
        img: require('../../assets/teamImages/syd.png'),
        score: '', alt: 'team logo'
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

    // Scrolling
    const [contWidth, setContWidth] = useState(0);
    const scrollViewRef = useRef();

    useEffect(() => {
        setContWidth(windowWidth);
    }, []);

    // Pagination
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleScroll = (event) => {
        const {contentOffset, layoutMeasurement, contentSize} = event.nativeEvent;
        const currentIndex = Math.round(contentOffset.x / layoutMeasurement.width);
        setCurrentIndex(currentIndex);
    };

    return (
        <View style={styles.top}>
            <LinearGradient colors={['#164CA8', '#091E42']} style={styles.container}>
                <ScrollView horizontal snapToInterval={contWidth} ref={scrollViewRef} onScroll={handleScroll}
                            pagingEnabled showsHorizontalScrollIndicator={false} scrollEventThrottle={16}>
                    {/*Past game*/}
                    <View style={styles.mainContainer}>
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
                        <View style={styles.actionButton}>
                            <ActionButton value={'Recap'}/>
                        </View>
                    </View>

                    {/*Current game*/}
                    <View style={styles.mainContainer}>
                        {/*Past game*/}
                        <View style={styles.itemContainer}>
                            {/*Left team*/}
                            <View style={styles.teamContainer}>
                                <Image source={mockTeams[3].img} style={[styles.image, styles.leftImage]}
                                       accessibilityLabel="Team Logo"/>
                                <Text
                                    style={[styles.score, (comparisonResult === 1 || comparisonResult === 0) && boldTextStyle]}>
                                    {mockTeams[3].score}
                                </Text>
                            </View>

                            {/*Game details*/}
                            <View style={styles.details}>
                                <Text style={styles.match}>{mockCurrentGame[0].match}</Text>
                                <Text style={styles.time}>{mockCurrentGame[0].time}</Text>
                            </View>

                            {/*Right team*/}
                            <View style={styles.teamContainer}>
                                <Text
                                    style={[styles.score, (comparisonResult === -1 || comparisonResult === 0) && boldTextStyle]}>
                                    {mockTeams[2].score}
                                </Text>
                                <Image source={mockTeams[2].img} style={[styles.image, styles.rightImage]}
                                       accessibilityLabel="Team Logo"/>
                            </View>
                        </View>
                        <View style={styles.liveStatus}>
                            <View style={styles.greenDot}></View>
                            <Text style={styles.liveText}>Live</Text>
                        </View>
                        <View style={styles.actionContainer}>
                            <View style={styles.actionButton}>
                                <ActionButton value={'Game Centre'}/>
                                <ActionButton value={'Watch'}/>
                                <ActionButton value={'Crowd Canvas'}/>
                            </View>
                        </View>
                    </View>

                    {/*Upcoming game*/}
                    <View style={styles.mainContainer}>
                        {/*Past game*/}
                        <View style={styles.itemContainer}>
                            {/*Left team*/}
                            <View style={styles.teamContainer}>
                                <Image source={mockTeams[4].img} style={[styles.image, styles.leftImage]}
                                       accessibilityLabel="Team Logo"/>
                            </View>

                            {/*Game details*/}
                            <View style={styles.details}>
                                <Text style={styles.date}>{mockUpcomingGame[0].date}</Text>
                                <Text style={styles.time}>{mockUpcomingGame[0].time}</Text>
                                <Text style={styles.location}>{mockUpcomingGame[0].location}</Text>
                            </View>

                            {/*Right team*/}
                            <View style={styles.teamContainer}>
                                <Image source={mockTeams[5].img} style={[styles.image, styles.rightImage]}
                                       accessibilityLabel="Team Logo"/>
                            </View>
                        </View>
                        <View style={styles.actionButton}>
                            <ActionButton value={'Ticket'}/>
                        </View>
                    </View>

                </ScrollView>
                {/* Pagination dots */}
                <View style={styles.paginationContainer}>
                    {[...Array(3).keys()].map((index) => (
                        <View
                            key={index}
                            style={[
                                styles.paginationDot,
                                {opacity: currentIndex === index ? 1 : 0.3},
                            ]}
                        />
                    ))}
                </View>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    top: {
        position: 'absolute',
        top: 0,
    },
    container: {
        width: windowWidth,
        height: 250,
    },
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 100,
        width: windowWidth,
    },
    actionContainer: {
        justifyContent: "center",
    },
    actionButton: {
        flexDirection: 'row',
    },
    itemContainer: {
        flexDirection: 'row', // Align children horizontally
        alignItems: 'flex-start', // Center items vertically
        justifyContent: 'center', // Center items horizontally
    },
    teamContainer: {
        flexDirection: 'row',
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
        marginHorizontal: 25,
        alignItems: 'center',
    },
    date: {
        color: 'white',
        fontSize: scaleFontSize(16),
        textTransform: 'uppercase',
    },
    match: {
        color: 'white',
        fontSize: scaleFontSize(17),
        paddingTop: 5,
        fontWeight: '800',
    },
    time: {
        color: 'white',
        fontWeight: '800',
        paddingTop: 4,
        fontSize: scaleFontSize(16),
    },
    liveStatus: {
        flexDirection: 'row',
        alignItems: 'center',
        top: 5,
    },
    greenDot: {
        width: windowWidth * 0.015,
        height: windowWidth * 0.015,
        borderRadius: 5,
        marginRight: 10,
        backgroundColor: '#3CD370',
    },
    liveText: {
        color: 'white',
        fontWeight: '700',
    },
    location: {
        color: 'white',
        paddingTop: 4,
        fontSize: scaleFontSize(14)
    },
    paginationContainer: {
        flexDirection: "row",
        justifyContent: "center",
        bottom: 15,
    },
    paginationDot: {
        height: 6,
        width: 6,
        borderRadius: 4,
        backgroundColor: "white",
        marginHorizontal: 4,
    },
});
