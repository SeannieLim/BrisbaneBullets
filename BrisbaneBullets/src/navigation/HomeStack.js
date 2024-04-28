import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import WebViewScreen from "../screens/WebViewScreen";

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="WebViewScreen"
        component={WebViewScreen}
        options={{ headerShown: true }}
      />
    </HomeStack.Navigator>
  );
}

export default HomeStackScreen;
