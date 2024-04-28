import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import B_StoreScreen from "../screens/B-StoreScreen";

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
        name="B-StoreScreen"
        component={B_StoreScreen}
        options={{ headerShown: true }}
      />
    </HomeStack.Navigator>
  );
}

export default HomeStackScreen;
