import React from "react";
import { View, Button, ButtonText, Box } from "@gluestack-ui/themed";
import { StyleSheet } from "react-native";

export const TopButtonControl = ({
  editMode,
  toggleEditMode,
  notifications,
  selectedIds,
  setSelectedIds,
}) => {
  return (
    <Box style={styles.topButtonContainer}>
      <View style={styles.editModeActions}>
        {editMode && (
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
        )}
      </View>
      {notifications.length > 0 && (
        <Button style={styles.topButton} onPress={toggleEditMode} color="grey">
          <ButtonText style={styles.topButtonText}>
            {editMode ? "Done" : "Edit"}
          </ButtonText>
        </Button>
      )}
    </Box>
  );
};
export const BottomButtonControl = ({
  editMode,
  handleDelete,
  handleMarkAsRead,
}) => {
  return (
    <>
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
    </>
  );
};

const styles = StyleSheet.create({
  topButtonContainer: {
    backgroundColor: "white",
    height: 50,
    flexDirection: "row",
    padding: 10,
    justifyContent: "flex-end",
    alignContent: "center",
  },
  editModeActions: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
  },
  topButton: {
    flexDirection: "row",
    backgroundColor: "lightgrey",
    borderRadius: 15,
    height: 30,
  },
  topButtonText: {
    color: "grey",
    fontSize: 14,
  },
  bottomButtonContainer: {
    backgroundColor: "lightgrey",
    height: 50,
    flexDirection: "row",
    padding: 10,
    alignContent: "center",
  },
  bottomButton: {
    flexDirection: "row",
    backgroundColor: "transparent",
    borderRadius: 15,
    height: 30,
  },
  bottomButtonText: {
    color: "grey",
    fontSize: 14,
  },
});
