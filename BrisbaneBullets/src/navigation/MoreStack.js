import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MoreScreen from "../screens/MoreScreen";
import MembershipScreen from "../screens/MembershipScreen";

const MoreStack = createStackNavigator();

function MoreStackScreen() {
  return (
    <MoreStack.Navigator initialRouteName={"MoreScreen"}>
      <MoreStack.Screen
        name="MoreScreen"
        component={MoreScreen}
        options={{ headerShown: false }}
      />
      <MoreStack.Screen
        name="MembershipScreen"
        component={MembershipScreen}
        options={{ headerShown: true }}
      />
    </MoreStack.Navigator>
  );
}

export default MoreStackScreen;
