import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Dashboard from "../dashboard/Dashboard";
import DashBoardPlayerStats from "../dashboard/DashBoardPlayerStats";

import { Ionicons } from "@expo/vector-icons";

const DashboardStack = createStackNavigator();

function DashboardStackScreen() {
    return (
      <DashboardStack.Navigator>
        <DashboardStack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ headerShown: false }}
        />
        <DashboardStack.Screen
          name="DashBoardPlayerStats"
          component={DashBoardPlayerStats}
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
      </DashboardStack.Navigator>
    );
  }
  
  export default DashboardStackScreen;
  