// NotificationItem.js
import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const NotificationItem = ({ item, editMode, toggleSelect, markAsRead }) => (
  <TouchableOpacity
    style={[styles.item, item.read ? styles.read : styles.unread]}
    onPress={() => (editMode ? toggleSelect(item.id) : markAsRead(item.id))}
  >
    <View style={styles.titleContainer}>
      {editMode && (
        <View
          style={[
            styles.selectionIndicator,
            item.selected && styles.selectedStyle,
          ]}
        >
          {item.selected && <Text>✓</Text>}
        </View>
      )}
      {!editMode && (
        <View
          style={[styles.unreadIndicator, { opacity: item.read ? 0 : 1 }]}
        />
      )}
      <Text style={[styles.title, { color: item.read ? "#999" : "#000" }]}>
        {item.title}
      </Text>
    </View>
    <Text style={styles.timeStamp}>{item.timeStamp}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  item: {
    backgroundColor: "white",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
  },
  read: {
    backgroundColor: "white",
    color: "grey",
  },
  unread: {
    backgroundColor: "#e0e0e0",
  },
  item: {
    backgroundColor: "white",
    paddingVertical: 8,
    // paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
    // flexDirection: "column",
  },
  titleContainer: {
    flex: 1,
    // justifyContent: "center",/
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: windowWidth * 0.03,
  },
  selectionIndicator: {
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10, // Making it circular
  },
  selectedStyle: {
    backgroundColor: "#007bff", // Or any color that fits your design
  },
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
    padding: 1,
  },
  unreadIndicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "orange",
    marginRight: 10,
  },
});

export default NotificationItem;
