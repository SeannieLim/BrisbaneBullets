import React, { createContext, useState, useContext, useEffect } from "react";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";
import uuid from "react-native-uuid"; // Import the UUID generator
import { isToday, isYesterday, formatDistanceToNow } from "date-fns";
import moment from "moment";
import { Button } from "react-native";

const NotificationContext = createContext();

export const useNotifications = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }) => {
  // Environment variables
  const { expoUsername } = Constants.expoConfig.extra;
  const { projectId } = Constants.expoConfig.extra.eas;

  const [notifications, setNotifications] = useState([]);

  // Function to add a notification
  const addNotification = (title, timeStamp) => {
    console.log("Received timeStamp:", timeStamp);

    let parsedDate = moment(timeStamp, [
      "YYYY-MM-DDTHH:mm:ss.SSSZ", // ISO format
      "M/D/YYYY, h:mm:ss A", // U.S. format with AM/PM
      "M/D/YYYY, h:mm:ss a", // U.S. format with am/pm
    ]);

    // Check if the date is valid using moment's isValid() method
    if (!parsedDate.isValid()) {
      console.error("Failed to parse date, using current date as fallback");
      parsedDate = moment(); // Fallback to current date if parsing fails
    }

    console.log("Parsed Date : ", parsedDate);
    const actualDate = parsedDate.toDate();

    let displayTimeStamp;
    if (isToday(actualDate)) {
      displayTimeStamp = "Today";
    } else if (isYesterday(actualDate)) {
      displayTimeStamp = "Yesterday";
    } else {
      displayTimeStamp = formatDistanceToNow(actualDate, {
        addSuffix: true,
      });
    }
    console.log("Current Date: ", new Date());

    const newNotification = {
      id: uuid.v4(), // Use current timestamp as a unique ID
      title,
      timeStamp: displayTimeStamp,
      actualDate: actualDate,
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
    const testData = [
      { title: "Test Today", date: new Date() },
      { title: "Test Yesterday", date: new Date(Date.now() - 86400000) }, // 24 hours ago
      { title: "Test Two Days Ago", date: new Date(Date.now() - 172800000) }, // 48 hours ago
      { title: "Test 1 month ago", date: "2024-04-01T18:12:49Z" },
      {
        title: "Brisbane v.s Sydney @ 8 p.m. tonight!",
        date: "5/1/2024, 6:54:29 PM",
      },
      {
        title: "Season tickets on sale from Mar 25 to April 2!",
        date: "2024-02-25T00:00:00Z",
      },
      {
        title:
          "Welcome to Brisbane Bullets app! Don’t forget to turn on notifications~",
        date: "1/2/2024, 6:54:29 pm",
      },
    ];

    testData.forEach((test) => {
      const timeStamp =
        test.date instanceof Date ? test.date.toISOString() : test.date;
      addNotification(test.title, timeStamp);
    });
  };

  // Register for push notifications and handle received notifications
  useEffect(() => {
    async function setup() {
      const token = await registerForPushNotificationsAsync();
      console.log("Received token for push notifications:", token);

      const subscription = Notifications.addNotificationReceivedListener(
        (notification) => {
          console.log("Notification received!", notification);
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
      value={{ notifications, markAsRead, deleteNotifications, getUnreadCount }}
    >
      {children}
      <Button title="Test Date Notifications" onPress={testAddNotification} />
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
