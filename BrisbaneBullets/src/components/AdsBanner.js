import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const adPlaceHolder = require("../../assets/Hostplus_ad.gif");

const AdBox = ({ imageUrl }) => {
  return (
    <View style={styles.container}>
      {imageUrl ? (
        <Image
          source={{ uri: imageUrl }}
          style={styles.image}
          resizeMode="contain"
        />
      ) : (
        <Image
          source={adPlaceHolder}
          style={styles.placeholder}
          resizeMode="cover"
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: windowWidth * 0.85,
    height: windowWidth * 0.09,
    backgroundColor: "#f0f0f0",
    overflow: "hidden",
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  placeholder: {
    backgroundColor: "#cccccc",
    width: "100%",
    height: "100%",
    flex: 1,
  },
});

export default AdBox;
