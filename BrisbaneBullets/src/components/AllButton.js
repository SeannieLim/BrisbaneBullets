import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

const AllButton = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>All</Text>
            <Text style={[styles.icon]}>{'>'}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#fab81b',
        padding: 0,
        borderRadius: 10,
        flexDirection: 'row',
        width: 44,
        height: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#000000',
        textAlign: 'center',
        //fontFamily: 'Montserrat',
        fontSize: 10,
        marginRight: 3,
    },
    icon: {
        fontSize: 11,
        color: '#000000',
        marginBottom: 2
    },
});

export default AllButton;