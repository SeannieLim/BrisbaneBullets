import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBarIcon from "../components/tabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import ScheduleScreen from "../screens/ScheduleScreen";
import TicketScreen from "../screens/TicketScreen";
import MoreScreen from "../screens/MoreScreen";
import PlayerProfileScreen from "../screens/TeamScreen/PlayerProfile";
import PlayerStatsScreen from "../screens/TeamScreen/PlayerStats";
import TeamStackScreen from "./TeamStackScreen";

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
                component={HomeScreen}
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
                name="Team"
                component={TeamStackScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabBarIcon focused={focused} name="people-outline" />
                    ),
                }}
            />
            <BottomTab.Screen
                name="Team"
                component={TeamStackScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabBarIcon focused={focused} name="people-outline" />
                    ),
                }}
            />
            <BottomTab.Screen
                name="More"
                component={MoreScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabBarIcon focused={focused} name="ellipsis-horizontal-outline" />
                    ),
                }}
            />
            <BottomTab.Screen
                name="PlayerProfile"
                component={PlayerProfileScreen}
                options={{
                    headerShown: false,
                    tabBarButton: () => null,
                    tabBarVisible: true
                }}
            />
            <BottomTab.Screen
                name="PlayerStats"
                component={PlayerStatsScreen}
                options={{
                    headerShown: false,
                    tabBarButton: () => null,
                    tabBarVisible: true
                }}
            />
        </BottomTab.Navigator>
    );
}

// function getHeaderTitle(route) {
//   return getFocusedRouteNameFromRoute(route) ?? INITIAL_ROUTE_NAME;
// }
