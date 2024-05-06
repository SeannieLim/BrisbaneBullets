import React, { createContext, useState, useContext, useEffect } from "react";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";
import uuid from "react-native-uuid"; // Import the UUID generator
import { isToday, isYesterday, formatDistanceToNow } from "date-fns";
import { Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const NotificationContext = createContext();

export const useNotifications = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }) => {
  // Environment variables
  const { expoUsername } = Constants.expoConfig.extra;
  const { projectId } = Constants.expoConfig.extra.eas;

  const [notifications, setNotifications] = useState([]);
  const [isEnabled, setIsEnabled] = useState(false);
  const [pushToken, setPushToken] = useState(null);

  // Register for push notifications and handle received notifications
  useEffect(() => {
    const fetchSettingsAndRegister = async () => {
      const localSetting = await AsyncStorage.getItem("notificationsEnabled");
      const isEnabledLocally = localSetting !== "false";
      setIsEnabled(isEnabledLocally);
      if (isEnabledLocally) {
        await registerForPushNotificationsAsync();
      }
    };
    fetchSettingsAndRegister();
  }, []);

  // Notification listener with direct check to `AsyncStorage`
  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(
      async (notification) => {
        const localSetting = await AsyncStorage.getItem("notificationsEnabled");
        const isEnabledLocally = localSetting !== "false";

        if (!isEnabledLocally) {
          console.log(
            "Notification received but notifications are disabled locally"
          );
          return;
        }

        console.log("Notification received!", notification);
        addNotification(notification.request.content.title, notification.date);
      }
    );

    return () => {
      Notifications.removeNotificationSubscription(subscription);
    };
  }, []);

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

  // Function to add a notification
  const addNotification = (title, rawTimeStamp) => {
    console.log("Received raw timeStamp:", rawTimeStamp);

    // Determine if the timestamp is in seconds (iOS) or milliseconds (Android), ensure the timestamp is in milliseconds
    const timeStamp =
      rawTimeStamp > 1000000000000 ? rawTimeStamp : rawTimeStamp * 1000;

    const actualDate = new Date(timeStamp);
    console.log("Normalized Date:", actualDate);

    const displayTimeStamp = isToday(actualDate)
      ? "Today"
      : isYesterday(actualDate)
      ? "Yesterday"
      : formatDistanceToNow(actualDate, { addSuffix: true });

    console.log("Current Date: ", new Date());

    const newNotification = {
      id: uuid.v4(), // Use current timestamp as a unique ID
      title,
      timeStamp: displayTimeStamp,
      actualDate,
      read: false,
    };

    setNotifications((prevNotifications) => {
      const updatedNotifications = [newNotification, ...prevNotifications];
      //for testData
      return updatedNotifications.sort((a, b) => b.actualDate - a.actualDate); // Sort by date descending
    });
  };

  // // Test function to add notifications for different time scenarios
  const testAddNotification = () => {
    console.log("Testing notification addition");
    const currentTimestamp = new Date().getTime(); // Get current timestamp for "today"
    const testData = [
      { title: "Test Today", date: currentTimestamp },
      { title: "Test Yesterday", date: currentTimestamp - 86400000 }, // 24 hours ago
      { title: "Test Two Days Ago", date: currentTimestamp - 172800000 }, // 48 hours ago
      {
        title: "Test 1 month ago",
        date: new Date("2024-04-01T18:12:49Z").getTime(),
      },
      {
        title: "Brisbane v.s Sydney @ 8 p.m. tonight!",
        date: new Date("2024-03-01T18:12:49Z").getTime(),
      },
      {
        title: "Season tickets on sale from Mar 25 to April 2!",
        date: new Date("2024-02-25T00:00:00Z").getTime(),
      },
      {
        title:
          "Welcome to Brisbane Bullets app! Don’t forget to turn on notifications~",
        date: new Date("2024-01-25T00:00:00Z").getTime(),
      },
    ];

    testData.forEach((test) => {
      const timeStamp =
        test.date instanceof Date ? test.date.toISOString() : test.date;
      addNotification(test.title, timeStamp);
    });
  };

  // Function to mark notifications as read
  const markAsRead = (ids) => {
    setNotifications(
      notifications.map((notification) =>
        ids.includes(notification.id)
          ? { ...notification, read: true }
          : notification
      )
    );
  };
  // Function to delete notifications
  const deleteNotifications = (ids) => {
    setNotifications(
      notifications.filter((notification) => !ids.includes(notification.id))
    );
  };
  // Function to get the count of unread notifications
  const getUnreadCount = () =>
    notifications.filter((notification) => !notification.read).length;

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        isEnabled,
        pushToken,
        markAsRead,
        deleteNotifications,
        getUnreadCount,
      }}
    >
      {children}
      <Button title="Test Date Notifications" onPress={testAddNotification} />
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
