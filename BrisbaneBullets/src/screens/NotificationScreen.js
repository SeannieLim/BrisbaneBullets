import React, { useState, useEffect } from "react";
import {
  View,
  VStack,
  Box,
  Text,
  HStack,
  Image,
  Button,
  ButtonText,
} from "@gluestack-ui/themed";
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useNotifications } from "../notifications/notificationContext";
import NotificationItem from "../notifications/notificationItem";
import {
  TopButtonControl,
  BottomButtonControl,
} from "../notifications/editControl";
const windowWidth = Dimensions.get("window").width;

export default function NotiScreen() {
  const { notifications, markAsRead, deleteNotifications } = useNotifications();
  const [editMode, setEditMode] = useState(false);
  const [selectedIds, setSelectedIds] = useState([]);

  useEffect(() => {
    if (!editMode) {
      setSelectedIds([]); // Clear selections only when exiting edit mode
    }
  }, [editMode]);

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
    <NotificationItem
      item={item}
      editMode={editMode}
      toggleSelect={toggleSelect}
      markAsRead={markAsRead}
      selectedIds={selectedIds}
    />
  );

  return (
    <Box style={styles.container}>
      <TopButtonControl
        editMode={editMode}
        toggleEditMode={toggleEditMode}
        notifications={notifications}
        selectedIds={selectedIds}
        setSelectedIds={setSelectedIds}
      />
      <ImageBackground
        source={require("../../assets/Logo/BB-logo.png")}
        resizeMode="center"
        opacity={0.5}
        style={styles.backgroundImageContainer}
      >
        <Box style={styles.container}>
          <FlatList
            data={notifications}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContainer}
            ListEmptyComponent={
              <Text style={styles.emptyMessage}>
                No notifications to display
              </Text>
            }
          />
        </Box>
        <BottomButtonControl
          editMode={editMode}
          handleDelete={handleDelete}
          handleMarkAsRead={handleMarkAsRead}
        />
      </ImageBackground>
    </Box>
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
  emptyMessage: {
    textAlign: "center",
    color: "#999",
    fontSize: 16,
    marginTop: 30,
  },
});
