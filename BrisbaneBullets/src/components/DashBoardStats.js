import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { scaleFontSize } from "../constants/Layout";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const DashBoardStats = () => {
    return (
        <View>
            <View style = {styles.DashBoardBox}>
                <View style={{ flexDirection: 'row'}}>
                    <View style={{ flex: 1 }}>
                        <Text style={[styles.statsText, { textAlign: 'center', marginTop: windowHeight * 0.02 }]}></Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={[styles.statsText, { textAlign: 'center', marginTop: windowHeight * 0.02 }]}>Q1</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={[styles.statsText, { textAlign: 'center', marginTop: windowHeight * 0.02 }]}>Q2</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={[styles.statsText, { textAlign: 'center', marginTop: windowHeight * 0.02 }]}>Q3</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={[styles.statsText, { textAlign: 'center', marginTop: windowHeight * 0.02 }]}>Q4</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={[styles.statsText, { textAlign: 'center', marginTop: windowHeight * 0.02 }]}>Total</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row'}}>
                    <View style={{ flex: 1 }}>
                        <Image
                        source={require("../../assets/teamImages/BB.png")}
                        style={styles.teamIcon}
                        />                
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={[styles.statsNumber, { textAlign: 'center', marginTop: windowHeight * 0.02 }]}>20</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={[styles.statsNumber, { textAlign: 'center', marginTop: windowHeight * 0.02 }]}>20</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={[styles.statsNumber, { textAlign: 'center', marginTop: windowHeight * 0.02 }]}>30</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={[styles.statsNumber, { textAlign: 'center', marginTop: windowHeight * 0.02 }]}>26</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={[styles.statsText, { textAlign: 'center', marginTop: windowHeight * 0.02 }]}>96</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row'}}>
                    <View style={{ flex: 1 }}>
                        <Image
                            source={require("../../assets/teamImages/melb.png")}
                            style={styles.teamIcon}
                        />    
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={[styles.statsNumber, { textAlign: 'center', marginTop: windowHeight * 0.02 }]}>10</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={[styles.statsNumber, { textAlign: 'center', marginTop: windowHeight * 0.02 }]}>22</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={[styles.statsNumber, { textAlign: 'center', marginTop: windowHeight * 0.02 }]}>22</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={[styles.statsNumber, { textAlign: 'center', marginTop: windowHeight * 0.02 }]}>26</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={[styles.statsText, { textAlign: 'center', marginTop: windowHeight * 0.02 }]}>80</Text>
                    </View>
                </View>
            </View>
            <View style={[styles.bigStatsBanner, {flexDirection: 'row'}]}>
                <View style={{ flex: 1 }}>
                    <Text style={[styles.bannerNumber, { marginTop: windowHeight * 0.02 }]}>20</Text>
                    <Text style={[styles.bannerText]}>Rebounds</Text>                
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={[styles.bannerNumber, {marginTop: windowHeight * 0.02 }]}>30</Text>
                    <Text style={[styles.bannerText]}>Assists</Text>                
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={[styles.bannerNumber, { marginTop: windowHeight * 0.02 }]}>10</Text>
                    <Text style={[styles.bannerText]}>Steals</Text>                
                </View>
            </View>
            <View style={[styles.circleRow, {flexDirection: 'row'}]}>
                <View style={styles.circleContainer}>
                    <View style={styles.circle}>
                        <Text style={styles.circleText}>90.0</Text>
                    </View>
                    <Text style={styles.circleLabel}>FG%</Text>
                </View>
                <View style={styles.circleContainer}>
                    <View style={styles.circle}>
                        <Text style={styles.circleText}>90.0</Text>
                    </View>
                    <Text style={styles.circleLabel}>3PTS%</Text>
                </View>
                <View style={styles.circleContainer}>
                    <View style={styles.circle}>
                        <Text style={styles.circleText}>100.0</Text>
                    </View>
                    <Text style={styles.circleLabel}>2PTS%</Text>
                </View>
                <View style={styles.circleContainer}>
                    <View style={styles.circle}>
                        <Text style={styles.circleText}>90.0</Text>
                    </View>
                    <Text style={styles.circleLabel}>FT%</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    DashBoardBox: {
        flexGrow: 1,
        marginLeft: -windowWidth * 0.03,
        marginRight: windowWidth * 0.04,
        marginTop: windowWidth * 0.06,
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
    },
    statsText: {
        fontSize: scaleFontSize(18),
        color: "#164CA8",
        fontWeight: "bold",
        letterSpacing: 1,
        alignItems: "center",
        marginLeft: -windowWidth * 0.03
    },
    statsNumber: {
        fontSize: scaleFontSize(16),
        color: "#164CA8",
        letterSpacing: 1,
        alignItems: "center",
        marginLeft: -windowWidth * 0.03
    },
    teamIcon: {
        width: 35, // Set width of the icon
        height: 35, // Set height of the icon
        marginTop: windowHeight * 0.013,
        marginLeft: windowWidth * 0.05,
        marginBottom: windowHeight *0.01,
        alignItems: "center",
    },
    bigStatsBanner: {
        width: windowWidth,
        flexGrow: 1,
        marginLeft: -windowWidth * 0.08,
        marginRight: windowWidth * 0.04,
        marginTop: windowWidth * 0.1,
        backgroundColor: "#164CA8",
    },
    bannerNumber: {
        marginBottom: -windowHeight * 0.0019,
        fontSize: scaleFontSize(30),
        color: "#FFFFFF",
        textAlign: 'center',
        letterSpacing: 1,
    },
    bannerText: {
        fontSize: scaleFontSize(16),
        textAlign: "center",
        color: "#FFFFFF",
        marginTop: windowHeight * 0.0001,
        textAlign: 'center',
        letterSpacing: 1.1,
        marginBottom: windowHeight *0.02,
    },
    circleRow: {
        marginTop: 20,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexGrow: 1,
        marginLeft: -windowWidth * 0.08,
        marginBottom: windowHeight * 0.15
    },
    circleContainer: {
        alignItems: 'center',
    },
    circle: {
        width: windowWidth * 0.18,
        height: windowHeight * 0.08,
        borderRadius: 100,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: windowHeight * 0.02,
    },
    circleText: {
        fontSize: scaleFontSize(18),
        color: '#000000',
        fontWeight: 'bold',
    },
    circleLabel: {
        marginTop: windowHeight * 0.014,
        marginLeft: windowWidth * 0.02,
        fontSize: scaleFontSize(14),
        color: '#FFFFFF',
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default DashBoardStats;