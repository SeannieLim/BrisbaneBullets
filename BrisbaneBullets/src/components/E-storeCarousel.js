import React, { useState, useRef, useEffect } from "react";
import { ScrollView, View, Image, StyleSheet, Dimensions } from "react-native";

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

  const onScroll = (event) => {
    const scrollX = event.nativeEvent.contentOffset.x;
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
    }, 4000); // Change slide every 3000ms (3 seconds)

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
            </View>
          ))}
        </ScrollView>
        <View style={styles.paginationContainer}>
          {carouselItems.map((_, index) => (
            <View
              key={index}
              style={[
                styles.paginationDot,
                { opacity: currentIndex === index ? 1 : 0.3 },
              ]}
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
    paddingBottom: 10,
  },
  imageContainer: {
    height: 300, // Set height to match the image height
  },
  itemContainer: {
    width: WindowWidth,
  },
  itemImage: {
    width: WindowWidth,
    height: 300,
    resizeMode: "cover",
  },
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    bottom: 10, // Adjust this to position the dots properly
    width: "100%",
    zIndex: 1,
  },
  paginationDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: "#1e1e1e",
    marginHorizontal: 4,
  },
});

export default EStoreCarousel;
