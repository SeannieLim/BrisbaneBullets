import React, { useState, useEffect, useContext } from "react";
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
import { NotificationContext } from "./notificationContext";

const AppSettings = () => {
  const { isEnabled, setIsEnabled } = useContext(NotificationContext);
  const [appState, setAppState] = useState(AppState.currentState);

  useEffect(() => {
    const subscription = AppState.addEventListener(
      "change",
      _handleAppStateChange
    );

    return () => {
      subscription.remove();
    };
  }, []);
  useEffect(() => {
    // Initial permission check
    checkNotificationPermission();
  }, [appState]); // Re-run when app state changes

  const _handleAppStateChange = (nextAppState) => {
    if (appState.match(/inactive|background/) && nextAppState === "active") {
      console.log("App has come to the foreground!");
      checkNotificationPermission();
    }
    setAppState(nextAppState);
  };

  const checkNotificationPermission = async () => {
    const settings = await Notifications.getPermissionsAsync();
    const storedSetting = await AsyncStorage.getItem("notificationsEnabled");
    const isEnabledLocally = storedSetting !== "false";
    const enabled = settings.granted && isEnabledLocally;

    setIsEnabled(enabled);

    if (enabled) {
      await getNotificationToken();
      console.log("Notifications enabled and token set.");
    } else {
      console.log("Notifications are disabled based on permissions.");
    }
  };

  async function getNotificationToken() {
    try {
      const tokenData = await Notifications.getExpoPushTokenAsync();
      console.log("Push notification token:", tokenData.data);
    } catch (error) {
      console.error("Error getting a push token:", error);
    }
  }

  const toggleSwitch = async (newValue) => {
    // Save the new value immediately.
    await AsyncStorage.setItem(
      "notificationsEnabled",
      newValue ? "true" : "false"
    );

    // If trying to turn on, check system permissions.
    if (newValue) {
      const settings = await Notifications.getPermissionsAsync();
      if (!settings.granted) {
        // System permissions not granted; show alert.
        showSettingsAlert();
      } else {
        // Permissions granted, enable notifications.
        setIsEnabled(true);
        await getNotificationToken();
      }
    } else {
      // Directly disable without alert.
      setIsEnabled(false);
    }
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
