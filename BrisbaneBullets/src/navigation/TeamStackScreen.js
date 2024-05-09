import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TeamScreen from "../screens/TeamScreen";
import PlayerProfile from "../screens/TeamScreens/PlayerProfile.js";
import AdvanceStatsWebview from "../screens/AdvanceStatsWebview.js";
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
        name="PlayerProfile"
        component={PlayerProfile}
        options={({ route }) => ({
          headerShown: true,
          headerTitle: route.params.player.playerName,
          headerStyle: {
            backgroundColor: "white",
          },
          headerTitleStyle: {
            fontSize: 20,
          },
          headerTitleAlign: "center",
          headerTintColor: "#164CA8",
          headerBackImage: () => (
            <Ionicons
              name="chevron-back-outline"
              size={27}
              color="#FAB81B"
              pl={4}
            />
          ),
          headerBackTitleVisible: false,
        })}
      />
      <TeamStack.Screen
        name="AdvanceStatsWebview"
        component={AdvanceStatsWebview}
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
    </TeamStack.Navigator>
  );
}

export default TeamStackScreen;
