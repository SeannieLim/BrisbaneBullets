import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PlayerProfileScreen from "../screens/TeamScreen/PlayerProfile";
import PlayerStatsScreen from "../screens/TeamScreen/PlayerStats";
import { Ionicons } from "@expo/vector-icons";

const PlayerStack = createStackNavigator();

function PlayerStackScreen() {
  return (
    <PlayerStack.Navigator>
      <PlayerStack.Screen
        name="PlayerProfileScreen"
        component={PlayerProfileScreen}
        options={{ headerShown: false }}
      />
      <PlayerStack.Screen
        name="PlayerStatsScreen"
        component={PlayerStatsScreen}
        options={{ headerShown: false }}
      />
    </PlayerStack.Navigator>
  );
}

export default PlayerStackScreen;