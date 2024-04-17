import React from "react";
import { VStack } from "@gluestack-ui/themed-native-base";
import EStoreCarousel from "../components/E-storeCarousel";

const HomeScreen = () => {
  return (
    <VStack space={4} alignItems="center">
      <EStoreCarousel />
    </VStack>
  );
};

export default HomeScreen;
