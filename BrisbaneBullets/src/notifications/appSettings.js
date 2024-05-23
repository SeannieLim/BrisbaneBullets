import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Switch,
  Alert,
  Linking,
  StyleSheet,
  AppState,
} from "react-native";
import messaging from "@react-native-firebase/messaging";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NotificationContext } from "./notificationContext";

const AppSettings = () => {
  const { isEnabled, setIsEnabled } = useContext(NotificationContext);
  const [appState, setAppState] = useState(AppState.currentState);

  useEffect(() => {
    const handleAppStateChange = (nextAppState) => {
      if (appState.match(/inactive|background/) && nextAppState === "active") {
        // console.log("App has come to the foreground!");
        checkNotificationPermission();
      }
      setAppState(nextAppState);
    };

    const subscription = AppState.addEventListener(
      "change",
      handleAppStateChange
    );
    checkNotificationPermission(); // Initial permission check

    return () => subscription.remove();
  }, [appState]);

  const checkNotificationPermission = async () => {
    const authStatus = await messaging().hasPermission();
    const storedSetting = await AsyncStorage.getItem("notificationsEnabled");
    const isEnabledLocally = storedSetting !== "false";
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED &&
      isEnabledLocally;

    setIsEnabled(enabled);

    if (enabled) {
      await getNotificationToken();
      // console.log("Notifications enabled and token set.");
    } else {
      // console.log("Notifications are disabled based on permissions.");
    }
  };

  const getNotificationToken = async () => {
    try {
      const token = await messaging().getToken();
    } catch (error) {
      console.error("Error getting a push token:", error);
    }
  };

  const toggleSwitch = async (newValue) => {
    await AsyncStorage.setItem(
      "notificationsEnabled",
      newValue ? "true" : "false"
    );

    // If trying to turn on, check system permissions.
    if (newValue) {
      const authStatus = await messaging().hasPermission();
      if (authStatus !== messaging.AuthorizationStatus.AUTHORIZED) {
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
