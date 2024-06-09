import { Dimensions, StyleSheet, SafeAreaView, } from "react-native";
import { HStack, Image, Text, View, VStack } from "@gluestack-ui/themed";
import { GlobalStyles } from "../../constants/GlobalStyles";
import { scaleFontSize } from "../../constants/Layout";

const windowWidth = Dimensions.get("window").width;

const mockTeams = [
    {
        img: require("../../../assets/teamImages/BB.png"),
        score: "96",
        team: 'Brisbane Bullets',
        alt: "team logo",
    },
    {
        img: require("../../../assets/teamImages/melb.png"),
        score: "80",
        team: 'Melbourne United',
        alt: "team logo",
    }]

export function DashboardBanner() {

    return (
        <SafeAreaView style={GlobalStyles.safeArea}>
            <View style={styles.container}>
                <VStack justifyContent='center' pt={10}>
                    <HStack alignItems='center' justifyContent='center'>
                        <View style={styles.redDot}></View>
                        <Text style={styles.liveText}>Live</Text>
                    </HStack>
                    <HStack justifyContent='center' pt={6}>
                        <VStack alignItems='center'>
                            <Image
                                source={mockTeams[0].img}
                                style={[styles.image, styles.leftImage]}
                                alt="Team Logo"
                            />
                            <Text style={styles.teamName}>{mockTeams[0].team}</Text>
                        </VStack>
                        <VStack width={'30%'} justifyContent='center' alignItems='center'>
                            <Text style={styles.score}>96 - 80</Text>
                            <Text style={styles.duration}>20:15</Text>
                        </VStack>
                        <VStack alignItems='center'>
                            <Image
                                source={mockTeams[1].img}
                                style={[styles.image, styles.leftImage]}
                                alt="Team Logo"
                            />
                            <Text style={styles.teamName}>{mockTeams[1].team}</Text>
                        </VStack>
                    </HStack>
                </VStack>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: windowWidth,
        backgroundColor: 'white',
        height: 150,
    },
    redDot: {
        width: windowWidth * 0.015,
        height: windowWidth * 0.015,
        borderRadius: 5,
        marginRight: 10,
        backgroundColor: "red",
    },
    liveText: {
        color: "black",
        fontWeight: "500",
    },
    image: {
        width: windowWidth * 0.15,
        height: windowWidth * 0.15,
        borderRadius: 15,
    },
    teamName: {
        fontSize: scaleFontSize(13),
        fontWeight: "400",
        width: 100,
        textAlign: 'center',
        paddingTop: windowWidth * 0.015,
        color: 'black',
    },
    score: {
        fontSize: scaleFontSize(22),
        paddingBottom: windowWidth * 0.05,
        fontWeight: "600",
        color: 'black',
        letterSpacing: 1,
    },
    duration: {
        color: 'black',
        fontSize: scaleFontSize(14),
    }
})

