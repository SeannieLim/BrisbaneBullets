import React from "react";
import { View, StyleSheet } from 'react-native';

const MyBox = () => {
    return (
        <View style={styles.box}></View>
    );
};

const styles = StyleSheet.create({
    box: {
        width: 100, // Width of the box
        height: 100, // Height of the box
        backgroundColor: 'red', // Background color of the box
    },
});

export default MyBox;
