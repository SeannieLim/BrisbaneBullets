import {TopBanner} from "../components/topBanner";
import {View, VStack} from "@gluestack-ui/themed";
import EStoreCarousel from "../components/E-storeCarousel";
import HorizontalScrollContainer from "../components/HorizontalScrollContainer";
import {StyleSheet} from "react-native";
import ToggleComponent from "../components/ToggleButton";

const videoTabs = [
  { label: "Highlights", content: "Highlights content" },
  { label: "Press Conference", content: "Press Conference content" },
];

export default function HomeScreen({navigation}) {
    return (
        <View>
            <TopBanner/>

            {/*<ToggleComponent tabs={videoTabs} />*/}

            {/*<VStack space={4} alignItems="center">*/}
            {/*    <EStoreCarousel />*/}
            {/*</VStack>*/}

            <HorizontalScrollContainer />


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})