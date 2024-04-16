import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  HStack,
  Text,
} from "@gluestack-ui/themed-native-base";

const ToggleComponent = () => {
  const [activeTab, setActiveTab] = useState("highlights");

  return (
    <Box width="90%">
      <Box bg="#e1e1e2" width="100%" borderRadius="full" padding="0">
        <HStack space={0}>
          <CustomButton
            active={activeTab === "highlights"}
            onPress={() => setActiveTab("highlights")}
          >
            Highlights
          </CustomButton>
          <CustomButton
            active={activeTab === "pressConferences"}
            onPress={() => setActiveTab("pressConferences")}
          >
            Press Conferences
          </CustomButton>
        </HStack>
      </Box>
      {/* Render content based on active tab */}
      <Content activeTab={activeTab} />
    </Box>
  );
};

const CustomButton = ({ active, onPress, children }) => {
  return (
    <Button
      flex={1}
      bg={active ? "#164CA8" : "transparent"}
      borderRadius="full"
      _text={{
        color: active ? "white" : "#164CA8",
        // fontFamily: "",
        fontWeight: "bold",
        letterSpacing: "lg",
      }}
      _pressed={{ bg: "#164CA8", _text: { color: "white" } }}
      onPress={onPress}
    >
      {children}
    </Button>
  );
};

const Content = ({ activeTab }) => {
  if (activeTab === "highlights") {
    return (
      <Box p={4}>
        <Text>Highlights content</Text>
      </Box>
    );
  } else if (activeTab === "pressConferences") {
    return (
      <Box p={4}>
        <Text>Press Conferences content</Text>
      </Box>
    );
  }
  return null;
};

export default ToggleComponent;
