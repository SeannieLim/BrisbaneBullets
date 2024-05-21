import React from "react";
import {Platform, StyleSheet, View} from "react-native";

import {
    NavigationContainer,
    DarkTheme,
    DefaultTheme,
} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import BottomTabNavigator from "./src/navigation/BottomTabNavigator";
import "react-native-gesture-handler";
import {GluestackUIProvider} from "@gluestack-ui/themed";
import {config} from "@gluestack-ui/config"; // Importing configuration object for GlueStack to access styling configurations and theme settings
import {StatusBar} from "expo-status-bar";
import StandingsScreen from "./src/screens/StandingsScreen";
import PrivacyPolicyScreen from "./src/screens/PrivacyPolicyScreen";
import { Ionicons } from "@expo/vector-icons";
import { NotificationProvider } from "./src/notifications/notificationContext";
import Dashboard from "./src/dashboard/Dashboard";
import DashBoardPlayerList from './src/components/DashBoardPlayerList';
import DashBoardPlayerStats from './src/components/DashBoardPlayerStats';

export default function App(props) {
  const Stack = createStackNavigator();

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
                <Stack.Screen name="Dashboard" component={Dashboard} />
                <Stack.Screen name="DashBoardPlayerList" component={DashBoardPlayerList}  options={{ headerShown: false }}/>
               <Stack.Screen name="DashBoardPlayerStats" component={DashBoardPlayerStats} options={{ headerShown: false }} />
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
