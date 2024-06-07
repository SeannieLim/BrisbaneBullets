import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { View, Image, Box } from '@gluestack-ui/themed';

export function PartnersStack() {
    const partners = [{ img: require('../../assets/partners/carn.png') }, {
        img: require('../../assets/partners/hostplus.png')
    }, { img: require('../../assets/partners/qld.png') }, { img: require('../../assets/partners/csq.png') }, { img: require('../../assets/partners/all.png') }, { img: require('../../assets/partners/poly.png') },]

    return (
        <View style={styles.container}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {partners.map((partner, index) => (
                    <Box key={index} style={styles.box}><Image source={partner.img} style={styles.img}
                        resizeMode="contain" alt="logos"></Image></Box>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    box: {
        backgroundColor: 'white',
        width: 110,
        height: 80,
        borderRadius: 15,
        marginBottom: 20,
        marginLeft: 1,
        marginRight: 14,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 3,
            height: 5,
        },
        shadowOpacity: 0.20,
        shadowRadius: 5,
        elevation: 4,
    },
    img: {
        flex: 1,
        width: 90,
        height: 70,
    }
})
