import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  Dimensions,
} from "react-native";
import { useNotifications } from "../notifications/notificationContext";

const windowWidth = Dimensions.get("window").width;

export default function NotiScreen() {
  const { notifications, markAsRead, deleteNotifications } = useNotifications();
  const [editMode, setEditMode] = useState(false);
  const [selectedIds, setSelectedIds] = useState([]);

  const toggleEditMode = () => setEditMode(!editMode);

  const toggleSelect = (id) => {
    setSelectedIds((ids) =>
      ids.includes(id) ? ids.filter((x) => x !== id) : [...ids, id]
    );
  };

  const handleDelete = () => {
    deleteNotifications(selectedIds);
    setSelectedIds([]);
    setEditMode(false);
  };

  const handleMarkAsRead = () => {
    markAsRead(selectedIds);
    setSelectedIds([]);
    setEditMode(false);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.item, item.read ? styles.read : styles.unread]}
      onPress={() => (editMode ? toggleSelect(item.id) : markAsRead([item.id]))}
    >
      <View style={styles.titleContainer}>
        {editMode && (
          <View
            style={[
              styles.selectionIndicator,
              selectedIds.includes(item.id) && styles.selectedStyle,
            ]}
          >
            {selectedIds.includes(item.id) && <Text>✓</Text>}
          </View>
        )}
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
    <View style={styles.container}>
      <View style={styles.topButtonContainer}>
        <Button onPress={toggleEditMode} title={editMode ? "Done" : "Edit"} />
      </View>
      <ImageBackground
        style={styles.backgroundImageContainer}
        source={require("../../assets/Logo/BB-logo.png")}
        resizeMode="center"
        opacity={0.5}
      >
        <FlatList
          data={notifications}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.listContainer}
        />
        {editMode && (
          <View style={styles.editModeActions}>
            <Button
              title="Select All"
              onPress={() => setSelectedIds(notifications.map((n) => n.id))}
            />
            <Button title="Mark as Read" onPress={handleMarkAsRead} />
            <Button title="Delete" onPress={handleDelete} />
          </View>
        )}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImageContainer: {
    flex: 1,
    width: windowWidth,
    justifyContent: "center",
    alignItems: "center",
  },
  topButtonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: 10,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    backgroundColor: "white",
  },
  read: {
    color: "grey",
  },
  unread: {
    backgroundColor: "#e0e0e0",
  },
  title: {
    fontSize: 16,
    flex: 1,
    marginRight: 10,
  },
  timeStamp: {
    fontSize: 14,
    color: "#999",
  },
  unreadIndicator: {
    width: 20,
    height: 20,
    marginRight: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1,
  },
  editModeActions: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    backgroundColor: "#f0f0f0",
  },
});
