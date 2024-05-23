import messaging from "@react-native-firebase/messaging";
import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid";

// Register background handler
messaging().setBackgroundMessageHandler(async (remoteMessage) => {
  console.log("Message handled in the background!", remoteMessage);

  const isEnabled = await AsyncStorage.getItem("notificationsEnabled");
  if (isEnabled === "false") {
    console.log("Notifications are disabled locally. Ignoring the message.");
    return;
  }

  const notification = remoteMessage.notification;
  if (notification) {
    const newNotification = {
      id: uuid.v4(),
      title: notification.title,
      body: notification.body,
      actualDate: new Date(remoteMessage.sentTime || Date.now()),
      read: false,
    };

    const storedNotifications = await AsyncStorage.getItem("notifications");
    const notifications = storedNotifications
      ? JSON.parse(storedNotifications)
      : [];
    const updatedNotifications = [newNotification, ...notifications];
    await AsyncStorage.setItem(
      "notifications",
      JSON.stringify(updatedNotifications)
    );
    console.log(
      "Notification added and AsyncStorage updated in the background."
    );
  }
});
