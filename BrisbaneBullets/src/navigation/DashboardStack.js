import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Dashboard from "../dashboard/Dashboard";
import DashBoardPlayerStats from "../dashboard/DashBoardPlayerStats";

const DashboardStack = createStackNavigator();

const CustomBackButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()} style={{ paddingLeft: 10 }}>
      <Ionicons
        name="chevron-back-outline"
        size={27}
        color="#FAB81B"
      />
    </TouchableOpacity>
  );
};

function DashboardStackScreen() {
  return (
    <DashboardStack.Navigator>
      <DashboardStack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "white",
          },
          headerTitleStyle: {
            fontSize: 20,
          },
          headerTitleAlign: "center",
          headerTintColor: "#164CA8",
          headerLeft: () => <CustomBackButton />, // Use headerLeft instead of headerBackImage
          headerBackTitleVisible: false,
        }}
      />
      <DashboardStack.Screen
        name="DashBoardPlayerStats"
        component={DashBoardPlayerStats}
        options={{
          headerShown: false,
        }}
      />
    </DashboardStack.Navigator>
  );
}

export default DashboardStackScreen;
