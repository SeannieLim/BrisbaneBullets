import React, { useEffect } from "react";
import { Platform, StyleSheet, View, Alert } from "react-native";

import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigator from "./src/navigation/BottomTabNavigator";
import "react-native-gesture-handler";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config"; // Importing configuration object for GlueStack to access styling configurations and theme settings
import { StatusBar } from "expo-status-bar";
import StandingsScreen from "./src/screens/StandingsScreen";
import PrivacyPolicyScreen from "./src/screens/PrivacyPolicyScreen";
import { Ionicons } from "@expo/vector-icons";
import { NotificationProvider } from "./src/notifications/notificationContext";
import messaging from "@react-native-firebase/messaging";

export default function App(props) {
  const Stack = createStackNavigator();

  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log("Authorization status:", authStatus);
    }
  };
  useEffect(() => {
    if (requestUserPermission()) {
      // return fcm tocken
      messaging()
        .getToken()
        .then((token) => {
          console.log("FCM Token:", token);
        });
    } else {
      console.log("Failed. No permission to show notifications", authStatus);
    }
    // check whether an initial notification is available
    messaging()
      .getInitialNotification()
      .then(async (remoteMessage) => {
        if (remoteMessage) {
          console.log(
            "Notification caused app to open from from quit state:",
            remoteMessage.notification
          );
        }
      });
    // Assume a message-notification contains a "type" property in the data payload of the screen to open
    messaging().onNotificationOpenedApp((remoteMessage) => {
      console.log(
        "Notification caused app to open from background state:",
        remoteMessage.notification
      );
    });

    // Register background handler
    messaging().setBackgroundMessageHandler(async (remoteMessage) => {
      console.log("Message handled in the background!", remoteMessage);
    });

    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      Alert.alert("A new FCM message arrived!");
      console.log(remoteMessage);
    });
    return unsubscribe;
  }, []);

  return (
    <NotificationProvider>
      <GluestackUIProvider config={config}>
        <View style={styles.container}>
          {/*<SafeAreaView style={styles.container} customTheme> // from amber's*/}
          {Platform.OS === "ios" && <StatusBar barStyle="default" />}
          <NavigationContainer theme={DarkTheme}>
            {/* <BottomTabNavigator /> */}
            <Stack.Navigator>
              <Stack.Screen
                name="home"
                component={BottomTabNavigator}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="PrivacyPolicy"
                component={PrivacyPolicyScreen}
                options={{
                  headerTitle: "Privacy Policy",
                  headerStyle: {
                    backgroundColor: "white",
                  },
                  headerTitleStyle: {
                    fontSize: 20,
                  },
                  headerTintColor: "#113B81",
                  headerBackImage: () => (
                    <Ionicons
                      name="chevron-back-outline"
                      size={27}
                      color="#FAB81B"
                      pl={4}
                    />
                  ),
                }}
              />
              <Stack.Screen name="Standings" component={StandingsScreen} />
            </Stack.Navigator>
          </NavigationContainer>
          {/*</SafeAreaView>*/}
        </View>
      </GluestackUIProvider>
    </NotificationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
