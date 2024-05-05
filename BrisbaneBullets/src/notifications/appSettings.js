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

const AppSettings = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [appState, setAppState] = useState(AppState.currentState);

  useEffect(() => {
    const subscription = AppState.addEventListener(
      "change",
      handleAppStateChange
    );
    // Initial check
    checkNotificationPermission();
    // Cleanup
    return () => {
      subscription.remove();
    };
  }, []);

  const handleAppStateChange = (nextAppState) => {
    if (nextAppState === "active") {
      console.log("App has come to the foreground!");
      checkNotificationPermission();
    }
  };

  //   useEffect(() => {
  //     checkNotificationPermission();
  //   }, []);
  const checkNotificationPermission = async () => {
    const settings = await Notifications.getPermissionsAsync();
    const isGranted =
      settings.granted ||
      settings.ios?.status === Notifications.IosAuthorizationStatus.PROVISIONAL;
    setIsEnabled(isGranted);
    if (isGranted) {
      getNotificationToken();
    }
  };
  const getNotificationToken = async () => {
    const { data: token } = await Notifications.getExpoPushTokenAsync();
    console.log("Push notification token:", token);
  };

  const toggleSwitch = async () => {
    if (!isEnabled) {
      const { status } = await Notifications.requestPermissionsAsync({
        ios: { allowAlert: true, allowBadge: true, allowSound: true },
      });
      if (status === "granted") {
        setIsEnabled(true);
        getNotificationToken();
      } else {
        showSettingsAlert();
      }
    } else {
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
