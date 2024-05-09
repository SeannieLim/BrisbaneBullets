import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import B_StoreScreen from "../screens/B-StoreScreen";
import LiveScreen from "../screens/LiveScreen";
// import StandingsScreen from "../screens/StandingsScreen";
import NewsScreen from "../screens/NewsScreen";
import NewsDetailScreen from "../screens/NewsDetailScreen";
import NotiScreen from "../screens/NotificationScreen";
import AllVideos from "../screens/AllVideos";
import { Ionicons } from "@expo/vector-icons";

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator initialRouteName={"HomeScreen"}>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="Notification"
        component={NotiScreen}
        options={{
          headerStyle: {
            backgroundColor: "white",
          },
          headerTitleStyle: {
            fontSize: 20,
          },
          headerTintColor: "#113B81",
          headerBackTitleVisible: false,
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
      <HomeStack.Screen
        name="LiveScreen"
        component={LiveScreen}
        options={{
          headerShown: true,
          headerBackImage: () => (
            <Ionicons
              name="chevron-back-outline"
              size={27}
              color="#FAB81B"
              pl={4}
            />
          ),
          headerBackTitleVisible: false,
        }}
      />
      <HomeStack.Screen
        name="B-StoreScreen"
        component={B_StoreScreen}
        options={{
          headerShown: true,
          headerBackImage: () => (
            <Ionicons
              name="chevron-back-outline"
              size={27}
              color="#FAB81B"
              pl={4}
            />
          ),
          headerBackTitleVisible: false,
        }}
      />
      <HomeStack.Screen
        name="News"
        component={NewsScreen}
        options={{
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
          headerBackTitleVisible: false,
        }}
      />
      <HomeStack.Screen
        name="NewsDetail"
        component={NewsDetailScreen}
        options={{
          headerStyle: {
            backgroundColor: "#113B81",
          },
          headerTitleStyle: {
            fontSize: 20,
          },
          headerTintColor: "white",
          headerBackImage: () => (
            <Ionicons
              name="chevron-back-outline"
              size={27}
              color="#FAB81B"
              pl={4}
            />
          ),
          headerBackTitleVisible: false,
        }}
      />
      <HomeStack.Screen
        name="Videos"
        component={AllVideos}
        options={{
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
          headerBackTitleVisible: false,
        }}
      />
    </HomeStack.Navigator>
  );
}

export default HomeStackScreen;
