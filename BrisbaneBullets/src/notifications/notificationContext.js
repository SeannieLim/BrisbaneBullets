import React, { createContext, useState, useContext, useEffect } from "react";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";
import uuid from "react-native-uuid"; // Import the UUID generator
import { isYesterday, formatDistanceToNow } from "date-fns";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const NotificationContext = createContext();

export const useNotifications = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }) => {
  // Environment variables
  const { expoUsername } = Constants.expoConfig.extra;
  const { projectId } = Constants.expoConfig.extra.eas;

  const [notifications, setNotifications] = useState([]);
  const [isEnabled, setIsEnabled] = useState(false);
  const [pushToken, setPushToken] = useState(null);

  useEffect(() => {
    loadInitialSettings().then(() => {
      console.log(
        `Initial load: Notifications are ${isEnabled ? "enabled" : "disabled"}.`
      );
    });
  }, []);

  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(
      handleNotificationReceived
    );
    return () => subscription.remove();
  }, [isEnabled]);

  async function loadInitialSettings() {
    const localSetting = await AsyncStorage.getItem("notificationsEnabled");
    const storedNotifications = await AsyncStorage.getItem("notifications");
    const isNotificationsEnabled = localSetting !== "false";
    setIsEnabled(isNotificationsEnabled);
    setNotifications(
      storedNotifications ? JSON.parse(storedNotifications) : []
    );
    console.log(
      `Notifications enabled state from storage: ${isNotificationsEnabled}`
    );
    if (isNotificationsEnabled) {
      await registerForPushNotificationsAsync();
    }
  }

  const handleNotificationReceived = (notification) => {
    if (isEnabled) {
      console.log("Processing notification.");
      addNotification(
        notification.request.content.title,
        notification.date || Date.now()
      );
    } else {
      console.log("Ignoring notification due to disabled state.");
    }
  };

  const addNotification = async (title, rawTimeStamp) => {
    console.log("Received raw timeStamp:", rawTimeStamp);

    // Determine if the timestamp is in seconds (iOS) or milliseconds (Android), ensure the timestamp is in milliseconds
    const timeStamp =
      rawTimeStamp > 1000000000000 ? rawTimeStamp : rawTimeStamp * 1000;

    const actualDate = new Date(timeStamp);
    console.log("Normalized Date:", actualDate);

    const newNotification = {
      id: uuid.v4(), // Use current timestamp as a unique ID
      title,
      actualDate,
      read: false,
    };

    // Update state by adding the new notification to the start of the list
    await AsyncStorage.getItem("notifications").then((data) => {
      const notifications = data ? JSON.parse(data) : [];
      const updatedNotifications = [newNotification, ...notifications]; // Prepend new notification
      AsyncStorage.setItem(
        "notifications",
        JSON.stringify(updatedNotifications)
      ).then(() => {
        console.log("Notification added and AsyncStorage updated.");
        setNotifications(updatedNotifications);
      });
    });
  };

  // Function to register for push notifications
  async function registerForPushNotificationsAsync() {
    let { status } = await Notifications.getPermissionsAsync();
    if (status !== "granted") {
      status = (await Notifications.requestPermissionsAsync()).status;
    }
    if (status === "granted") {
      const token = await Notifications.getExpoPushTokenAsync({
        experienceId: `@${expoUsername}/${projectId}`,
      });
      setPushToken(token.data);
      console.log("Push notification token:", token.data);
    } else {
      console.log("Push notifications permission not granted");
      setIsEnabled(false);
    }
  }

  const markAsRead = async (ids) => {
    // Ensure ids is always an array even if a single id is passed
    if (!Array.isArray(ids)) {
      ids = [ids];
    }

    console.log("Attempting to mark notifications as read with IDs:", ids);

    setNotifications((currentNotifications) => {
      const updatedNotifications = currentNotifications.map((notification) => {
        if (ids.includes(notification.id)) {
          console.log(
            "Found notification with ID, updating read status:",
            notification.id
          );
          return { ...notification, read: true };
        }
        return notification;
      });

      AsyncStorage.setItem(
        "notifications",
        JSON.stringify(updatedNotifications)
      )
        .then(() => {
          console.log(
            "AsyncStorage successfully updated with new read status."
          );
        })
        .catch((error) => {
          console.error("Failed to update AsyncStorage:", error);
        });

      return updatedNotifications;
    });
  };

  const deleteNotifications = async (ids) => {
    // If the ID is in an array, extract it to ensure proper comparison.
    if (!Array.isArray(ids)) {
      ids = [ids];
    }

    console.log("Attempting to delete notification with ID:", ids);

    setNotifications((currentNotifications) => {
      const filteredNotifications = currentNotifications.filter(
        (notification) => !ids.includes(notification.id)
      );

      AsyncStorage.setItem(
        "notifications",
        JSON.stringify(filteredNotifications)
      )
        .then(() => {
          console.log("AsyncStorage successfully updated after deletion.");
        })
        .catch((error) => {
          console.error("Failed to update AsyncStorage after deletion:", error);
        });

      return filteredNotifications;
    });
  };

  const getUnreadCount = () => notifications.filter((n) => !n.read).length;
  const displayTimeStamp = (actualDate) => {
    const now = Date.now();
    const diffMs = now - actualDate.getTime();
    const diffSec = diffMs / 1000;
    const diffMin = diffSec / 60;
    const diffHour = diffMin / 60;

    const pluralize = (count, noun, suffix = "s") =>
      `${count} ${noun}${count !== 1 ? suffix : ""}`;

    if (diffSec < 60) {
      return "Just now";
    } else if (diffMin < 60) {
      return pluralize(Math.floor(diffMin), "minute") + " ago";
    } else if (diffHour < 24) {
      return pluralize(Math.floor(diffHour), "hour") + " ago";
    } else if (isYesterday(actualDate)) {
      return "Yesterday";
    } else {
      return formatDistanceToNow(actualDate, { addSuffix: true });
    }
  };

  // // Test function to add notifications for different time scenarios
  const testAddNotification = async () => {
    console.log("Testing notification addition");
    const currentTimestamp = new Date().getTime(); // Get current timestamp for "today"
    const testData = [
      { title: "Test Just now", date: currentTimestamp },
      {
        title: "Test 1 min ago",
        date: currentTimestamp - 60000,
      },
      {
        title: "Test 2 mins ago",
        date: currentTimestamp - 120000,
      },
      {
        title: "Test 59 mins ago",
        date: currentTimestamp - 3550000,
      },
      {
        title: "Test 1 hour ago",
        date: currentTimestamp - 3600000,
      },
      {
        title: "Test 23 hours ago",
        date: currentTimestamp - 82800000,
      },
      { title: "Test Yesterday", date: currentTimestamp - 86400000 }, // 24 hours ago
      { title: "Test Two Days Ago", date: currentTimestamp - 172800000 }, // 48 hours ago
      {
        title: "Brisbane v.s Sydney @ 8 p.m. tonight!",
        date: new Date("2024-03-05T18:12:49Z").getTime(),
      },
      {
        title: "Season tickets on sale from Mar 25 to April 2!",
        date: new Date("2024-02-1T00:00:00Z").getTime(),
      },
      {
        title:
          "Welcome to Brisbane Bullets app! Don’t forget to turn on notifications~",
        date: new Date("2024-01-01T00:00:00Z").getTime(),
      },
    ];

    //sort test data by date
    testData.sort((a, b) => a.date - b.date);

    for (const item of testData) {
      await addNotification(item.title, item.date);
    }
  };

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        isEnabled,
        setIsEnabled,
        pushToken,
        markAsRead,
        deleteNotifications,
        getUnreadCount,
        displayTimeStamp,
        testAddNotification,
      }}
    >
      {children}

    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
