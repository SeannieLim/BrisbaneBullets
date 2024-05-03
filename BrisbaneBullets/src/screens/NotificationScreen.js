import React, { useState } from "react";
import { View, VStack, Box, Text, HStack, Image } from "@gluestack-ui/themed";
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useNotifications } from "../notifications/notificationContext";

const windowWidth = Dimensions.get("window").width;
export default function NotiScreen() {
  const { notifications, markAsRead } = useNotifications();

  const handlePress = (id) => {
    markAsRead(id);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.item, item.read ? styles.read : styles.unread]}
      onPress={() => handlePress(item.id)}
    >
      <View style={styles.titleContainer}>
        <View
          style={[styles.unreadIndicator, { opacity: item.read ? 0 : 1 }]}
        />
        <Text style={[styles.title, { color: item.read ? "#999" : "#000" }]}>
          {item.title}
        </Text>
      </View>
      <Text style={styles.timeStamp}>{item.timeStamp || "Now"}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.backgroundImageContainer}>
      <ImageBackground
        source={require("../../assets/Logo/BB-logo.png")}
        resizeMode="center"
        opacity={0.5}
      >
        <Box style={styles.container}>
          <FlatList
            data={notifications}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContainer}
          />
        </Box>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  backgroundImageContainer: {
    flex: 1,
    width: windowWidth,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  read: {
    backgroundColor: "white",
    color: "grey",
  },
  unread: {
    backgroundColor: "#eee",
  },
  item: {
    backgroundColor: "white",
    paddingVertical: 8,
    // paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    flexDirection: "column",
  },
  titleContainer: {
    flex: 1,
    // justifyContent: "center",/
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: windowWidth * 0.03,
  },
  // listContainer: {
  //   padding: 10,
  // },
  title: {
    fontSize: 16,
    color: "#333",
    flexShrink: 1,
  },
  timeStamp: {
    fontSize: 14,
    color: "#999",
    marginHorizontal: windowWidth * 0.03,
    textAlign: "right",
  },
  unreadIndicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "orange",
    marginRight: 10,
  },
});
