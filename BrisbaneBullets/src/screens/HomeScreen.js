import {TopBanner} from "../components/topBanner";
import {View, VStack, Box} from "@gluestack-ui/themed";
import EStoreCarousel from "../components/E-storeCarousel";
import HorizontalScrollContainer from "../components/HorizontalScrollContainer";
import {StyleSheet} from "react-native";
import ToggleComponent from "../components/ToggleButton";
import CustomButton from "../components/CustomButton";
import NewsCard from "../components/NewsCard";
import {PartnersStack} from "../components/PartnersStack";
import SocialMediaStack from "../components/SocialMediaStack";
import AdsBanner from "../components/AdsBanner";
import AllButton from "../components/AllButton";

const videoTabs = [
  { label: "Highlights", content: "Highlights content" },
  { label: "Press Conference", content: "Press Conference content" },
];

export default function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <TopBanner/>

            {/*<VStack space={4} alignItems="center">*/}
            {/*    <EStoreCarousel />*/}
            {/*</VStack>*/}

            <HorizontalScrollContainer style={styles.scroll}/>

            <ToggleComponent tabs={videoTabs} style={styles.toggle}/>

            {/*//add to test components*/}
            {/*<><NewsCard /><Box>*/}
            {/*    <CustomButton btnText='Ticket' />*/}
            {/*    <CustomButton btnText='Shop Now' />*/}
            {/*</Box></>*/}

            <PartnersStack />
            <SocialMediaStack />
            <AdsBanner imageUrl="https://www.interprint-services.co.uk/wp-content/uploads/2019/04/placeholder-banner.png" />
            <AllButton />


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})