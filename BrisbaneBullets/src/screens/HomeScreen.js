import React from "react";
import { VStack } from "@gluestack-ui/themed-native-base";
import ToggleButton from "../components/ToggleButton";

const HomeScreen = () => {
  return (
    <VStack space={4} alignItems="center">
      <ToggleButton />
    </VStack>
  );
};

export default HomeScreen;
