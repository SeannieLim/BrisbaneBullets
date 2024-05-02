import React from "react";
import { Button, ButtonText } from "@gluestack-ui/themed";
import { scaleFontSize } from "../constants/Layout";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CustomButton = ({ btnText, routeName }) => {
  const navigation = useNavigation();
  const handleBtn = () => {
    navigation.navigate(routeName);
  };
  // Implement your share functionality here

  return (
    // <TouchableOpacity>
    <Button
      variant="solid"
      bgColor="#FAB81B"
      // width="65%"
      // height={"43%"}
      borderRadius={50}
      isDisabled={false}
      style={styles.button}
      onPress={handleBtn}
    >
      <ButtonText fontSize={15} color="$textDark900" textAlign="center">
        {btnText}
      </ButtonText>
    </Button>
    // </TouchableOpacity>
  );
};

export default CustomButton;
const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
    marginTop: 15,
  },
});
