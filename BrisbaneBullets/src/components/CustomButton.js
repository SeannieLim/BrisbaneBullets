import React from "react";
import { Button, ButtonText } from "@gluestack-ui/themed";
import { scaleFontSize } from "../constants/Layout";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CustomButton = ({ btnText, routeName }) => {
  const navigation = useNavigation();
  const handleBtn = () => {
    navigation.navigate(routeName);
  };

  return (
    <Button
      variant="solid"
      bgColor="#FAB81B"
      borderRadius={50}
      isDisabled={false}
      style={styles.button}
      onPress={handleBtn}
    >
      <ButtonText
        fontSize={scaleFontSize(15)}
        color="$textDark900"
        textAlign="center"
      >
        {btnText}
      </ButtonText>
    </Button>
  );
};

export default CustomButton;
const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
    marginTop: 15,
    marginBottom: 15,
    height: "70%",
  },
});
