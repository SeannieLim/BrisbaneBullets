import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TeamScreen from "../screens/TeamScreen";
import AdvanceStatsWebview from "../screens/AdvanceStatsWebview";
import { Ionicons } from "@expo/vector-icons";

const TeamStack = createStackNavigator();

function TeamStackScreen() {
  return (
    <TeamStack.Navigator>
      <TeamStack.Screen
        name="TeamScreen"
        component={TeamScreen}
        options={{ headerShown: false }}
      />
      <TeamStack.Screen
        name="AdvanceStatsWebview"
        component={AdvanceStatsWebview}
        options={{ headerShown: true }}
      />
    </TeamStack.Navigator>
  );
}

export default TeamStackScreen;