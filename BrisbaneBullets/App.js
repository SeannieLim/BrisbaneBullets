import React from "react";
import { Platform, StyleSheet, View, SafeAreaView } from "react-native";
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigator from "./src/navigation/BottomTabNavigator";
import "react-native-gesture-handler";
import { GluestackUIProvider, Text } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config"; // Importing configuration object for GlueStack to access styling configurations and theme settings
import { StatusBar } from 'expo-status-bar';
import HomeScreen from "./src/screens/HomeScreen";
import NewsScreen from "./src/screens/NewsScreen";
import NewsDetailScreen from "./src/screens/NewsDetailScreen";
import { Ionicons } from '@expo/vector-icons';


const Stack = createStackNavigator();

export default function App(props) {
  return (
    <GluestackUIProvider config={config}>
      <View style={styles.container}>
        {/*<SafeAreaView style={styles.container} customTheme> // from amber's*/}
        {Platform.OS === "ios" && <StatusBar barStyle="default" />}
        <NavigationContainer theme={DarkTheme}>
          {/* <BottomTabNavigator /> */}
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="News"
              component={NewsScreen}
              options={{
                headerStyle: {
                  backgroundColor: 'white',
                },
                headerTitleStyle: {
                  fontSize: 20,
                },
                headerTintColor: '#113B81',
                headerBackImage: () => (
                  <Ionicons name="chevron-back-outline" size={27} color="#FAB81B" pl={4} />
                ),
              }}
            />
            <Stack.Screen
              name="NewsDetailScreen"
              component={NewsDetailScreen}
              options={{ headerShown: true }} />
            <Stack.Screen
              name=" "
              component={BottomTabNavigator}
              options={{ headerShown: false }}
            />
            {/*<Stack.Screen name="Stock Details" component={DetailScreen} />*/}
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
