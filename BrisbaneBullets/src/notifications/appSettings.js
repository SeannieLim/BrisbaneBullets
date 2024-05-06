import React, { useState, useEffect } from "react";
import {
  View,
  Switch,
  Alert,
  Linking,
  StyleSheet,
  Text,
  AppState,
} from "react-native";
import * as Notifications from "expo-notifications";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { NotificationContext } from "./notificationContext";

const AppSettings = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [appState, setAppState] = useState(AppState.currentState);

  useEffect(() => {
    const subscription = AppState.addEventListener(
      "change",
      handleAppStateChange
    );
    checkNotificationPermission(); // Initial permission check on mount
    return () => {
      subscription.remove(); // Clean up listener when the component unmounts
    };
  }, []);

  async function handleAppStateChange(nextAppState) {
    console.log("App state changed from", appState, "to", nextAppState);
    setAppState(nextAppState);
    if (nextAppState === "active") {
      // Only check permissions when app comes to the foreground, without showing alerts
      checkNotificationPermission(false);
    }
  }

  async function checkNotificationPermission(showAlert) {
    const settings = await Notifications.getPermissionsAsync();
    const localSetting = await AsyncStorage.getItem("notificationsEnabled");
    const isEnabledLocally = localSetting !== "false";
    const enabled = settings.granted && isEnabledLocally;

    setIsEnabled(enabled);

    if (enabled) {
      await getNotificationToken();
      console.log("Notifications enabled and token set.");
    } else {
      if (showAlert && isEnabledLocally) {
        console.log("Notifications are disabled based on permissions.");
        showSettingsAlert();
      } else {
        console.log("Notifications are disabled based on local settings.");
      }
    }
  }

  async function getNotificationToken() {
    try {
      const tokenData = await Notifications.getExpoPushTokenAsync();
      console.log("Push notification token:", tokenData.data);
    } catch (error) {
      console.error("Error getting a push token:", error);
    }
  }

  const toggleSwitch = async (newValue) => {
    await AsyncStorage.setItem(
      "notificationsEnabled",
      newValue ? "true" : "false"
    );
    checkNotificationPermission(true); // Recheck permissions with potential to show alert
  };

  const showSettingsAlert = () => {
    Alert.alert(
      "Enable Notifications",
      "Notifications are disabled. Please enable them in Settings.",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Settings", onPress: () => Linking.openSettings() },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.switchContainer}>
      <Switch
        trackColor={{ false: "white", true: "#fab81b" }}
        thumbColor={isEnabled ? "white" : "#164CA8"}
        ios_backgroundColor="white"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  switchContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
});

export default AppSettings;
