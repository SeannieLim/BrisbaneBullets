import React from "react";
import {scaleFontSize} from "../constants/Layout";
import {StyleSheet, Dimensions, ScrollView} from "react-native";
import {View, Box, Text} from "@gluestack-ui/themed";

const windowWidth = Dimensions.get("window").width;
export function ActionButton({value}) {
    return (
        <View>
            <Box style={styles.box}>
                <Text style={styles.text}>{value}</Text>
            </Box>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        borderColor: 'white',
        borderWidth: 0.5,
        width: windowWidth * 0.24,
        marginHorizontal: 5,
        marginTop: 15,
    },
    text: {
        alignSelf: "center",
        color: 'white',
        paddingVertical: 5,
        fontWeight: '400',
        fontSize: scaleFontSize(13)
    }
})