import React, { createContext, useState, useContext, useEffect } from "react";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";

const NotificationContext = createContext();

export const useNotifications = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }) => {
  // Environment variables
  const { expoUsername, owner } = Constants.expoConfig.extra;
  const { projectId } = Constants.expoConfig.extra.eas;

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Brisbane v.s Sydney @ 8 p.m. tonight!",
      timeStamp: "Now",
      read: false,
    },
    {
      id: 2,
      title: "Season tickets on sale from Mar 25 to April 2!",
      timeStamp: "Yesterday",
      read: false,
    },
    {
      id: 3,
      title:
        "Welcome to Brisbane Bullets app! Don’t forget to turn on notifications~",
      timeStamp: "Yesterday",
      read: false,
    },
  ]);

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

  // Function to add a notification
  const addNotification = (title, timeStamp) => {
    const newNotification = {
      id: Date.now(), // Use current timestamp as a unique ID
      title,
      timeStamp,
      read: false,
    };
    setNotifications((currentNotifications) => [
      newNotification,
      ...currentNotifications,
    ]);
  };

  // Register for push notifications and handle received notifications
  useEffect(() => {
    async function setup() {
      const token = await registerForPushNotificationsAsync();
      console.log("Received token for push notifications:", token);

      const subscription = Notifications.addNotificationReceivedListener(
        (notification) => {
          addNotification(
            notification.request.content.title,
            new Date(notification.date).toLocaleString()
          );
        }
      );

      return () => Notifications.removeNotificationSubscription(subscription);
    }

    setup();
  }, []);

  // Function to register for push notifications
  async function registerForPushNotificationsAsync() {
    const { status } = await Notifications.requestPermissionsAsync();
    if (status !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    const token = await Notifications.getExpoPushTokenAsync({
      experienceId: `@${expoUsername}/BrisbaneBullets`,
      projectId: projectId,
    });

    return token.data;
  }

  return (
    <NotificationContext.Provider
      value={{ notifications, markAsRead, deleteNotifications, getUnreadCount }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
