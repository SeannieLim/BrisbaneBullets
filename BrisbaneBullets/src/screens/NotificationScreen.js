import React, { useState } from "react";
import { View, VStack, Box, Text, HStack, Image } from "@gluestack-ui/themed";
import {
  Dimensions,
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
      style={[styles.item, item.read ? styles.read : null]}
      onPress={() => handlePress(item.id)}
    >
      <Text>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={notifications}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
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
    backgroundColor: "#eee",
  },
});
