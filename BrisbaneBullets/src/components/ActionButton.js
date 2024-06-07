import React from "react";
import { scaleFontSize } from "../constants/Layout";
import { StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { View, Box, Text } from "@gluestack-ui/themed";

const windowWidth = Dimensions.get("window").width;
export function ActionButton({ value, onPress }) {
  return (
    <View>
      <Box style={styles.box}>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.text}>{value}</Text>
        </TouchableOpacity>
      </Box>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    borderColor: "white",
    borderWidth: 0.5,
    width: windowWidth * 0.26,
    marginHorizontal: 5,
    marginTop: 15,
  },
  text: {
    alignSelf: "center",
    color: "white",
    paddingVertical: 5,
    fontWeight: "400",
    fontSize: scaleFontSize(12),
  },
});
