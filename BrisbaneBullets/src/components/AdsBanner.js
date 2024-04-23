import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const AdsBanner = ({ imageUrl }) => {
    return (
        <View style={styles.container}>
            {imageUrl ? (
                <Image source={{ uri: imageUrl }} style={styles.image} resizeMode="contain" />
            ) : (
                <View style={styles.placeholder} />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 280,
        height: 32,
        backgroundColor: '#f0f0f0',
        overflow: 'hidden',
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    placeholder: {
        backgroundColor: '#cccccc',
        flex: 1,
    },
});

export default AdsBanner;