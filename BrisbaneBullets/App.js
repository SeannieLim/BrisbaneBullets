import React from "react";
import {Platform, StyleSheet, View, SafeAreaView} from "react-native";
import {
    NavigationContainer,
    DarkTheme,
    DefaultTheme,
} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import BottomTabNavigator from "./src/navigation/BottomTabNavigator";
import "react-native-gesture-handler";
import {GluestackUIProvider, Text} from "@gluestack-ui/themed";
import {config} from "@gluestack-ui/config"; // Importing configuration object for GlueStack to access styling configurations and theme settings
import {StatusBar} from 'expo-status-bar';

const Stack = createStackNavigator();

export default function App(props) {
    return (
        <GluestackUIProvider config={config}>
            <View style={styles.container}>
                {/*<SafeAreaView style={styles.container} customTheme> // from amber's*/}
                {Platform.OS === "ios" && <StatusBar barStyle="default"/>}
                <NavigationContainer theme={DarkTheme}>
                    {/* <BottomTabNavigator /> */}
                    <Stack.Navigator>
                        <Stack.Screen
                            name="home"
                            component={BottomTabNavigator}
                            options={{headerShown: false}}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
                {/*</SafeAreaView>*/}
            </View>
        </GluestackUIProvider>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})