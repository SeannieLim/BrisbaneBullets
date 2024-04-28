import React, { useState, useRef, useEffect } from "react";
import {
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import ShopNowButton from "../components/ShopNowButton";

const WindowWidth = Dimensions.get("window").width;

// Mockup data for carousel items
const carouselItems = [
  {
    title: "End of Season Sale",
    imageUrl: require("../../assets/E-store/endofseason.webp"),
  },
  {
    title: "Bullets Black T-Shirt",
    imageUrl: require("../../assets/E-store/officialkit.webp"),
  },
  {
    title: "Bullets Black T-Shirt",
    imageUrl: require("../../assets/E-store/supporters.webp"),
  },
];

const EStoreCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef();
  const intervalRef = useRef();
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("B-StoreScreen", {
      uri: "https://store.brisbanebullets.com.au/",
    });
  };

  const onScroll = (event) => {
    //determine the horizontal scroll position
    const scrollX = event.nativeEvent.contentOffset.x;
    //calculates the index of the current slide (rounded)
    const index = Math.round(scrollX / WindowWidth);
    setCurrentIndex(index);
  };
  const scrollToIndex = (index) => {
    scrollViewRef.current?.scrollTo({
      x: index * WindowWidth,
      animated: true,
    });
  };
  const updateIndex = (index) => {
    if (index >= carouselItems.length) {
      index = 0; // Loop back to the first index
    }
    setCurrentIndex(index);
    scrollToIndex(index);
  };
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      updateIndex(currentIndex + 1);
    }, 4000); // Change slide every 4000ms (4 seconds)

    return () => clearInterval(intervalRef.current); // Cleanup interval on component unmount
  }, [currentIndex]);

  return (
    <View style={styles.carouselContainer}>
      <View style={styles.imageContainer}>
        <ScrollView
          ref={scrollViewRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={onScroll}
          scrollEventThrottle={16}
        >
          {carouselItems.map((item, index) => (
            <View key={index} style={styles.itemContainer}>
              <Image
                source={
                  typeof item.imageUrl === "number"
                    ? item.imageUrl
                    : { uri: item.imageUrl }
                }
                style={styles.itemImage}
              />
              <View style={styles.buttonOverlay}>
                <ShopNowButton onPress={handlePress} />
              </View>
            </View>
          ))}
        </ScrollView>
        <View style={styles.paginationContainer}>
          {carouselItems.map((_, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.paginationDot,
                { opacity: currentIndex === index ? 1 : 0.6 },
              ]}
              onPress={() => scrollToIndex(index)} //click on dots to change image
            />
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    paddingTop: 20,
  },
  imageContainer: {
    height: 200, // Set height to match the image height
  },
  itemContainer: {
    width: WindowWidth,
  },
  itemImage: {
    width: WindowWidth,
    height: 200,
    resizeMode: "cover",
  },
  buttonOverlay: {
    position: "absolute",
    bottom: 30,
    width: "100%",
    zIndex: 1,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    bottom: 10, // position of the dots from the bottom
    width: "100%",
    zIndex: 1,
  },
  paginationDot: {
    height: 6,
    width: 6,
    borderRadius: 4,
    backgroundColor: "white",
    marginHorizontal: 4,
  },
});

export default EStoreCarousel;
