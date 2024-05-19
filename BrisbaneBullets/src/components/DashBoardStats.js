import React from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const DashBoardStatsRound1 = () => {
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
                    <Text style={[MyStyles.bannerNumber, { textAlign: 'center', marginTop: windowHeight * 0.02 }]}>20</Text>
                    <Text style={[MyStyles.bannerText, { textAlign: 'center', marginTop: 5 }]}>Rebounds</Text>                
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={[MyStyles.bannerNumber, { textAlign: 'center', marginTop: windowHeight * 0.02 }]}>30</Text>
                    <Text style={[MyStyles.bannerText, { textAlign: 'center', marginTop: 5 }]}>Assists</Text>                
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={[MyStyles.bannerNumber, { textAlign: 'center', marginTop: windowHeight * 0.02 }]}>10</Text>
                    <Text style={[MyStyles.bannerText, { textAlign: 'center', marginTop: 5 }]}>Steals</Text>                
                </View>
            </View>
            <View style={[styles.circleRow, {flexDirection: 'row'}]}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    DashBoardBox: {
        marginLeft: windowWidth * 0.08,
        marginTop: windowWidth * 0.05,
    },
    statsText: {
        fontSize: scaleFontSize(18),
        color: "#000000",
        fontWeight: "bold",
        letterSpacing: 1,
        alignItems: "center",
    },
    statsNumber: {
        fontSize: scaleFontSize(18),
        color: "#000000",
        fontWeight: "bold",
        letterSpacing: 1,
        alignItems: "center",
    },
    teamIcon: {
        width: 13, // Set width of the icon
        height: 13, // Set height of the icon
        marginLeft: 2, // Add some space between icon and text
    },
    bigStatsBanner: {
        width: windowWidth,
        marginTop: 150,
    },
    bannerNumber: {
        fontSize: scaleFontSize(22),
    },
    bannerText: {
        fontSize: scaleFontSize(22),
    },
})

export default DashBoardStatsRound1;