import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TabBarIcon from "../components/tabBarIcon";
import ScheduleScreen from "../screens/ScheduleScreen";
import TicketScreen from "../screens/TicketScreen";
import TeamScreen from "../screens/TeamScreen";
import HomeStackScreen from "./HomeStack";
import MoreStackScreen from "./MoreStack";

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Home";

export default function BottomTabNavigator({ navigation, route }) {
  //   useEffect(() => {
  //     navigation.setOptions({ headerTitle: getHeaderTitle(route) });
  //   }, [navigation, route]);

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="home" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Schedule"
        component={ScheduleScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="calendar-outline" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Ticket"
        component={TicketScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="ticket-outline" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Team"
        component={TeamScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="people-outline" />
          ),
        }}
      />
      <BottomTab.Screen
        name="More"
        component={MoreStackScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="ellipsis-horizontal-outline" />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// function getHeaderTitle(route) {
//   return getFocusedRouteNameFromRoute(route) ?? INITIAL_ROUTE_NAME;
// }
