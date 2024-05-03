import React, { createContext, useState, useContext } from "react";

const NotificationContext = createContext();

export const useNotifications = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }) => {
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

  const markAsRead = (ids) => {
    setNotifications(
      notifications.map((notification) =>
        ids.includes(notification.id)
          ? { ...notification, read: true }
          : notification
      )
    );
  };

  const deleteNotifications = (ids) => {
    setNotifications(
      notifications.filter((notification) => !ids.includes(notification.id))
    );
  };

  const getUnreadCount = () =>
    notifications.filter((notification) => !notification.read).length;

  return (
    <NotificationContext.Provider
      value={{ notifications, markAsRead, deleteNotifications, getUnreadCount }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
