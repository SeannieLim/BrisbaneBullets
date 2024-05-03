import React, { createContext, useState, useContext } from "react";

const NotificationContext = createContext();

export const useNotifications = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([
    //mock notifications
    { id: 1, title: "Brisbane v.s Sydney @ 8 p.m. tonight!", read: false },
    {
      id: 2,
      title: "Season tickets on sale from Mar 25 to April 2! ",
      read: false,
    },
    {
      id: 3,
      title:
        "Welcome to Brisbane Bullets app! Don’t forget to turn on notifications~",
      read: false,
    },
  ]);

  const markAsRead = (id) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const getUnreadCount = () => {
    return notifications.filter((notification) => !notification.read).length;
  };

  return (
    <NotificationContext.Provider
      value={{ notifications, markAsRead, getUnreadCount }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
