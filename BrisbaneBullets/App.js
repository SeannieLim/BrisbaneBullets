<<<<<<< HEAD
import * as React from "react";
import { Platform, StyleSheet, View, StatusBar } from "react-native";
import {
    NavigationContainer,
    DarkTheme,
    DefaultTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigator from "./src/navigation/BottomTabNavigator";
import "react-native-gesture-handler";

const Stack = createStackNavigator();

export default function App(props) {
    return (
        <View style={styles.container}>
                {Platform.OS === "ios" && <StatusBar barStyle="default" />}
                <NavigationContainer theme={DarkTheme}>
                    {/* <BottomTabNavigator /> */}
                    <Stack.Navigator>
                        <Stack.Screen
                            name=" "
                            component={BottomTabNavigator}
                            options={{ headerShown: false }}
                        />
                        {/*<Stack.Screen name="Stock Details" component={DetailScreen} />*/}
                    </Stack.Navigator>
                </NavigationContainer>
        </View>
    );
=======
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {PartnersStack} from "./src/components/PartnersStack";

export default function App() {
  return (
    <View style={styles.container}>

    </View>
  );
>>>>>>> origin/feature/partners
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
