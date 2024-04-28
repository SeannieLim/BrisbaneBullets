import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  Dimensions,
} from "react-native";
import { scaleFontSize } from "../constants/Layout";

const windowWidth = Dimensions.get("window").width;

const ShopNowButton = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>SHOP NOW</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  button: {
    backgroundColor: "#fab81b",
    // padding: 0,
    borderRadius: 13,
    flexDirection: "row",
    width: windowWidth * 0.25,
    height: windowWidth * 0.07,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#000000",
    textAlign: "center",
    //fontFamily: 'Montserrat',
    fontSize: scaleFontSize(12),
    marginRight: 3,
  },
});

export default ShopNowButton;
