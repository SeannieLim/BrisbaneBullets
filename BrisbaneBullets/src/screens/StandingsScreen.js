import React, { useLayoutEffect } from 'react';
import {View} from "@gluestack-ui/themed";
import {StyleSheet,} from 'react-native';
import {WebView} from 'react-native-webview';
import { Ionicons } from '@expo/vector-icons';

export default function StandingsScreen({navigation}) {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle: {
                backgroundColor: 'white',
            },
            headerTitleStyle: {
                fontSize: 20,
            },
            headerTintColor: '#113B81',
            headerBackImage: () => (
                <Ionicons name="chevron-back-outline" size={27} color="#FAB81B" pl={4}/>
            ),
            headerBackTitleVisible: false,
        });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <WebView source={{uri:'https://www.brisbanebullets.com.au/stats/standings'}} style={{flex: 1}}></WebView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
       flex: 1,
    },
})