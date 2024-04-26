import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View, Dimensions} from 'react-native';
import {scaleFontSize} from "../constants/Layout";

const windowWidth = Dimensions.get("window").width;

const AllButton = ({onPress}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.text}>All</Text>
                <Text style={[styles.icon]}>{'>'}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
    },
    button: {
        backgroundColor: '#fab81b',
        // padding: 0,
        borderRadius: 13,
        flexDirection: 'row',
        width: windowWidth * 0.12,
        height: windowWidth * 0.05,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#000000',
        textAlign: 'center',
        //fontFamily: 'Montserrat',
        fontSize: scaleFontSize(12),
        marginRight: 3,
    },
    icon: {
        fontSize: 11,
        color: '#000000',
        marginBottom: 2
    },
});

export default AllButton;