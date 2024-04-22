import {TopBanner} from "../components/topBanner";
import {View, VStack} from "@gluestack-ui/themed";
import EStoreCarousel from "../components/E-storeCarousel";
export default function HomeScreen({navigation}) {
    return (
        <View>
            <TopBanner/>

            <VStack space={4} alignItems="center">
                <EStoreCarousel />
            </VStack>

        </View>
    )
}
