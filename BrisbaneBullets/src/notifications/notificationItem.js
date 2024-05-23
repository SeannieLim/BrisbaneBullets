import React from "react";
import {
  Dimensions,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { useNotifications } from "./notificationContext";
const windowWidth = Dimensions.get("window").width;

const NotificationItem = ({
  item,
  editMode,
  toggleSelect,
  markAsRead,
  selectedIds,
}) => {
  const { displayTimeStamp } = useNotifications(); // Access the function from context

  return (
    <TouchableOpacity
      style={[
        styles.item,
        item.read ? styles.read : styles.unread,
        editMode && styles.editModeBackground,
      ]}
      onPress={() => (editMode ? toggleSelect(item.id) : markAsRead([item.id]))}
    >
      <View style={styles.msgContainer}>
        {editMode ? (
          <View style={styles.indicatorContainer}>
            <View
              style={[
                styles.selectionIndicator,
                selectedIds.includes(item.id) && styles.selectedStyle,
              ]}
            >
              {selectedIds.includes(item.id) && (
                <Ionicons name="checkmark" color="white" size={20} />
              )}
            </View>
          </View>
        ) : (
          <View style={styles.indicatorContainer}>
            <View
              style={[styles.unreadIndicator, { opacity: item.read ? 0 : 1 }]}
            />
          </View>
        )}
        <View style={styles.textContainer}>
          <Text style={[styles.title, { color: item.read ? "#999" : "#000" }]}>
            {item.title}
          </Text>
          <Text style={[styles.body, { color: item.read ? "#999" : "#000" }]}>
            {item.body}
          </Text>
        </View>
      </View>

      <Text style={styles.timeStamp}>
        {displayTimeStamp(new Date(item.actualDate))}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "white",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
  },
  read: {
    backgroundColor: "white",
  },
  unread: {
    backgroundColor: "#e1e1e2",
  },
  editModeBackground: { backgroundColor: "white" },
  item: {
    backgroundColor: "white",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
  },
  msgContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: windowWidth * 0.03,
  },
  indicatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 25,
    height: 20,
    marginRight: 10,
  },
  selectionIndicator: {
    width: 25,
    height: 25,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 12.5, // Making it circular
    alignItems: "center",
    justifyContent: "center",
  },
  selectedStyle: {
    backgroundColor: "#164CA8",
  },
  textContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    color: "#333",
    flexShrink: 1,
    marginVertical: 2,
  },
  body: {
    fontSize: 12,
    color: "#333",
    flexShrink: 1,
    marginVertical: 2,
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
    backgroundColor: "#fab81b",
    // marginRight: 10,
  },
});

export default NotificationItem;
