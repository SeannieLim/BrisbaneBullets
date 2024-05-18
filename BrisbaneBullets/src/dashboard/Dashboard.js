import React, {useLayoutEffect} from 'react';
import {View, Text} from "@gluestack-ui/themed";
import {StyleSheet,} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default function Dashboard({navigation}) {

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
        <View><Text style={styles.text}>HI DASHBOARD </Text></View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: 'white',
    },
})





