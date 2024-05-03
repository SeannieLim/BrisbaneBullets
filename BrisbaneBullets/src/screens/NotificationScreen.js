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

  // const handlePress = (id) => {
  //   markAsRead(id);
  // };

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

  return (
    <Box style={styles.container}>
      <Box style={styles.topButtonContainer}>
        <View style={styles.editModeActions}>
          {editMode && (
            <>
              <Button
                style={styles.topButton}
                onPress={() => {
                  const allIds = notifications.map((n) => n.id);
                  const areAllSelected =
                    allIds.length === selectedIds.length &&
                    allIds.every((id) => selectedIds.includes(id));
                  setSelectedIds(areAllSelected ? [] : allIds);
                }}
              >
                <ButtonText style={styles.topButtonText}>All</ButtonText>
              </Button>

              <Button
                style={styles.topButton}
                onPress={toggleEditMode}
                color="grey"
              >
                <ButtonText style={styles.topButtonText}>Done</ButtonText>
              </Button>
            </>
          )}

          {!editMode && notifications.length > 0 && (
            <Button
              style={styles.topButton}
              onPress={toggleEditMode}
              color="grey"
            >
              <ButtonText style={styles.topButtonText}>Edit</ButtonText>
            </Button>
          )}
        </View>
      </Box>
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
        {editMode && (
          <Box style={styles.bottomButtonContainer}>
            <View style={styles.editModeActions}>
              <Button style={styles.bottomButton} onPress={handleMarkAsRead}>
                <ButtonText style={styles.bottomButtonText}>
                  Mark as Read
                </ButtonText>
              </Button>
              <Button style={styles.bottomButton} onPress={handleDelete}>
                <ButtonText style={styles.bottomButtonText}>Delete</ButtonText>
              </Button>
            </View>
          </Box>
        )}
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
  topButtonContainer: {
    backgroundColor: "white",
    height: 50,
    flexDirection: "row",
    padding: 10,
    // justifyContent: "space-between",
    alignContent: "center",
  },
  bottomButtonContainer: {
    backgroundColor: "lightgrey",
    height: 50,
    flexDirection: "row",
    padding: 10,
    // justifyContent: "space-between",
    alignContent: "center",
  },
  editModeActions: {
    flexDirection: "row",
    flex: 1, // Take available space
    justifyContent: "space-between", // Space out buttons evenly
  },
  topButton: {
    flexDirection: "row",
    backgroundColor: "lightgrey",
    borderRadius: 15,
    height: 30,
  },
  bottomButton: {
    flexDirection: "row",
    backgroundColor: "transparent",
    borderRadius: 15,
    height: 30,
  },
  topButtonText: {
    color: "grey",
    fontSize: 14,
  },
  bottomButtonText: {
    color: "grey",
    fontSize: 14,
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
  emptyMessage: {
    textAlign: "center",
    color: "#999",
    fontSize: 16,
    marginTop: 30,
  },
});
