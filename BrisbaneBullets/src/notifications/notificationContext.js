import React, {createContext, useState, useContext, useEffect} from 'react';
import messaging from '@react-native-firebase/messaging';
import uuid from 'react-native-uuid';
import {isYesterday, formatDistanceToNow} from 'date-fns';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const NotificationContext = createContext();

export const useNotifications = () => useContext(NotificationContext);

export const NotificationProvider = ({children}) => {
    const [notifications, setNotifications] = useState([]);
    const [isEnabled, setIsEnabled] = useState(false);
    const [pushToken, setPushToken] = useState(null);

    useEffect(() => {
        loadInitialSettings();
    }, []);

    useEffect(() => {
        const unsubscribe = messaging().onMessage(async remoteMessage => {
            handleNotificationReceived(remoteMessage);
        });

        return unsubscribe;
    }, [isEnabled]);

    async function loadInitialSettings() {
        const localSetting = await AsyncStorage.getItem('notificationsEnabled');
        const storedNotifications = await AsyncStorage.getItem('notifications');
        const isNotificationsEnabled = localSetting !== 'false';
        setIsEnabled(isNotificationsEnabled);
        setNotifications(storedNotifications ? JSON.parse(storedNotifications) : []);
        if (isNotificationsEnabled) {
            registerForPushNotificationsAsync();
        }
    }

    const handleNotificationReceived = (notification) => {
        if (isEnabled) {
            console.log('Processing notification.');
            addNotification(
                notification.notification.title,
                notification.sentTime || Date.now()
            );
        } else {
            console.log('Ignoring notification due to disabled state.');
        }
    };

    const addNotification = async (title, rawTimeStamp) => {
        console.log('Received raw timeStamp:', rawTimeStamp);

        const timeStamp =
            rawTimeStamp > 1000000000000 ? rawTimeStamp : rawTimeStamp * 1000;

        const actualDate = new Date(timeStamp);
        console.log('Normalized Date:', actualDate);

        const newNotification = {
            id: uuid.v4(),
            title,
            actualDate,
            read: false,
        };

        await AsyncStorage.getItem('notifications').then((data) => {
            const notifications = data ? JSON.parse(data) : [];
            const updatedNotifications = [newNotification, ...notifications];
            AsyncStorage.setItem('notifications', JSON.stringify(updatedNotifications)).then(() => {
                console.log('Notification added and AsyncStorage updated.');
                setNotifications(updatedNotifications);
            });
        });
    };

    const registerForPushNotificationsAsync = async () => {
        const authStatus = await messaging().requestPermission();
        const enabled =
            authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
            authStatus === messaging.AuthorizationStatus.PROVISIONAL;

        if (enabled) {
            const token = await messaging().getToken();
            setPushToken(token);
            console.log('Push notification token:', token);
        } else {
            console.log('Push notifications permission not granted');
            setIsEnabled(false);
        }
    };

    const markAsRead = async (ids) => {
        if (!Array.isArray(ids)) {
            ids = [ids];
        }

        console.log('Attempting to mark notifications as read with IDs:', ids);

        setNotifications((currentNotifications) => {
            const updatedNotifications = currentNotifications.map((notification) => {
                if (ids.includes(notification.id)) {
                    console.log('Found notification with ID, updating read status:', notification.id);
                    return {...notification, read: true};
                }
                return notification;
            });

            AsyncStorage.setItem('notifications', JSON.stringify(updatedNotifications))
                .then(() => {
                    console.log('AsyncStorage successfully updated with new read status.');
                })
                .catch((error) => {
                    console.error('Failed to update AsyncStorage:', error);
                });

            return updatedNotifications;
        });
    };

    const deleteNotifications = async (ids) => {
        if (!Array.isArray(ids)) {
            ids = [ids];
        }

        console.log('Attempting to delete notification with ID:', ids);

        setNotifications((currentNotifications) => {
            const filteredNotifications = currentNotifications.filter(
                (notification) => !ids.includes(notification.id)
            );

            AsyncStorage.setItem('notifications', JSON.stringify(filteredNotifications))
                .then(() => {
                    console.log('AsyncStorage successfully updated after deletion.');
                })
                .catch((error) => {
                    console.error('Failed to update AsyncStorage after deletion:', error);
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

        const pluralize = (count, noun, suffix = 's') => {
            ${count} ${noun}${count !== 1 ? suffix : ''};

        if (diffSec < 60) {
            return 'Just now';
        } else if (diffMin < 60) {
            return pluralize(Math.floor(diffMin), 'minute') + ' ago';
        } else if (diffHour < 24) {
            return pluralize(Math.floor(diffHour), 'hour') + ' ago';
        } else if (isYesterday(actualDate)) {
            return 'Yesterday';
        } else {
            return formatDistanceToNow(actualDate, {addSuffix: true});
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
            }}
        >
            {children}
        </NotificationContext.Provider>
    );
};

export default NotificationProvider;