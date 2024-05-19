import React, {useLayoutEffect} from 'react';
import {View, Box} from "@gluestack-ui/themed";
import {Ionicons} from '@expo/vector-icons';
import {DashboardBanner} from "./components/DashboardBanner";
import {GlobalStyles} from "../constants/GlobalStyles";
import ToggleComponent from "../components/ToggleButton";
import DashBoardStatsRound1 from '../components/DashBoardStats';

import {
    Dimensions,
    ScrollView,
    StyleSheet,
    ImageBackground
} from "react-native";
import EStoreCarousel from "../components/E-storeCarousel";
import HighlightVideo from "../components/HighlightVideo";
import SocialMediaStack from "../components/SocialMediaStack";
import {PartnersStack} from "../components/PartnersStack";

const windowWidth = Dimensions.get("window").width;

export default function Dashboard({navigation}) {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle: {
                backgroundColor: 'white',
            },
            headerTitleStyle: {
                fontSize: 20,
            },
            headerTintColor: '#113B81',
            headerBackImage: () => (
                <Ionicons name="chevron-back-outline" size={27} color="#FAB81B" pl={4}/>
            ),
            headerBackTitleVisible: false,
        });
    }, [navigation]);

    const dashBoardTabs = [
        {label: "Box Score", content: ''},
        {label: "Statistics", content: <DashBoardStatsRound1/>},
    ];

    return (
        <View>
            <DashboardBanner style={styles.banner}/>
                <View style={styles.backgroundImageContainer}>
                    <ImageBackground
                        source={require("../../assets/dashboard-bg.png")}
                        resizeMode="cover"
                    >
                        <ScrollView style={styles.scrollView}>
                            <Box style={styles.box}>
                                <ToggleComponent tabs={dashBoardTabs}/>
                            </Box>

                            {/*placeholder to test scrollview - please remove*/}
                            <EStoreCarousel/>
                            <EStoreCarousel/>
                            <EStoreCarousel/>

                        </ScrollView>
                    </ImageBackground>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundImageContainer: {
        width: windowWidth,
        marginTop: 150,
        // backgroundColor: "white",
        // position: 'relative',
    },
    banner: {
        position: "absolute",
        top: 0,
    },
    box: {
        marginLeft: windowWidth * 0.08,
        marginTop: windowWidth * 0.05,
    },
})





