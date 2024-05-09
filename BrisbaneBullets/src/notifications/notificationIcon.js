import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const NotificationIcon = ({ unreadCount, navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => navigation.navigate("Notification")}
      >
        {unreadCount > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{unreadCount}</Text>
          </View>
        )}
        <Ionicons name="notifications" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-end",
    padding: 10,
  },
  iconContainer: {
    position: "relative",
    alignItems: "center",
    marginHorizontal: 10,
  },
  badge: {
    position: "absolute",
    right: -5,
    top: -3,
    backgroundColor: "#fab81b",
    borderRadius: 10,
    width: 15,
    height: 15,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  badgeText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 10,
  },
});

export default NotificationIcon;
