import React from "react";
import { VStack } from "@gluestack-ui/themed-native-base";
import ToggleButton from "../components/ToggleButton";

const videoTabs = [
  { label: "Highlights", content: "Highlights content" },
  { label: "Press Conference", content: "Press Conference content" },
];

const HomeScreen = () => {
  return (
    <VStack space={4} alignItems="center">
      <ToggleButton tabs={videoTabs} />
    </VStack>
  );
};

export default HomeScreen;
