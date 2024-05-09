import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import B_StoreScreen from "../screens/B-StoreScreen";
import LiveScreen from "../screens/LiveScreen";
import StandingsScreen from "../screens/StandingsScreen";
import NewsScreen from "../screens/NewsScreen";
import NewsDetailScreen from "../screens/NewsDetailScreen";
import AllVideos from "../screens/AllVideos";
import { Ionicons } from '@expo/vector-icons';

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="LiveScreen"
        component={LiveScreen}
        options={{ headerShown: true }}
      />
      <HomeStack.Screen
        name="B-StoreScreen"
        component={B_StoreScreen}
        options={{ headerShown: true }}
      />
      <HomeStack.Screen
        name="News"
        component={NewsScreen}
        options={{
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTitleStyle: {
            fontSize: 20,
          },
          headerTintColor: '#113B81',
          headerBackImage: () => (
            <Ionicons name="chevron-back-outline" size={27} color="#FAB81B" pl={4} />
          ),
        }}
      />
      <HomeStack.Screen
        name="NewsDetailScreen"
        component={NewsDetailScreen}
        options={{ headerShown: true }}
      />
      <HomeStack.Screen
        name="Videos"
        component={AllVideos}
        options={{
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTitleStyle: {
            fontSize: 20,
          },
          headerTintColor: '#113B81',
          headerBackImage: () => (
            <Ionicons name="chevron-back-outline" size={27} color="#FAB81B" pl={4} />
          ),
        }}
      />
    </HomeStack.Navigator>
  );
}

export default HomeStackScreen;
