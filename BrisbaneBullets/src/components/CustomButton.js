import React from "react";
import { Button, ButtonText } from "@gluestack-ui/themed";
import { scaleFontSize } from "../constants/Layout";
import { StyleSheet, TouchableOpacity } from "react-native";

const CustomButton = ({ btnText }) => {
    const handleBtn = () => {
        // Implement your share functionality here
    };
    return (
        <TouchableOpacity onPress={handleBtn}>
            <Button
                variant="solid"
                bgColor='#FAB81B'
                width='65%'
                height={'43%'}
                borderRadius={50}
                isDisabled={false}
                style={styles.button}
            >
                <ButtonText fontSize={15} color='$textDark900' textAlign='center'>{btnText}</ButtonText>
            </Button>
        </TouchableOpacity>
    );
};

export default CustomButton;
const styles = StyleSheet.create({
    button: {
        alignSelf: 'center',
        marginTop: 15,
    },
});
