import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBarIcon from "../components/tabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import ScheduleScreen from "../screens/ScheduleScreen";
import TicketScreen from "../screens/TicketScreen";
import TeamScreen from "../screens/TeamScreen";
import MoreScreen from "../screens/MoreScreen";

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
                        <TabBarIcon focused={focused} library='Feather' name="home" />
                    ),
                }}
            />
            <BottomTab.Screen
                name="Schedule"
                component={ScheduleScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabBarIcon focused={focused} library='Feather' name="calendar" />
                    ),
                }}
            />
            <BottomTab.Screen
                name="Ticket"
                component={TicketScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabBarIcon focused={focused} library='FontAwesome' name="ticket" />
                    ),
                }}
            />
            <BottomTab.Screen
                name="Team"
                component={TeamScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabBarIcon focused={focused} library='FontAwesome' name="group" />
                    ),
                }}
            />
            <BottomTab.Screen
                name="More"
                component={MoreScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabBarIcon focused={focused} library='Feather' size={30} name="more-horizontal" />
                    ),
                }}
            />
        </BottomTab.Navigator>
    );
}

// function getHeaderTitle(route) {
//   return getFocusedRouteNameFromRoute(route) ?? INITIAL_ROUTE_NAME;
// }
