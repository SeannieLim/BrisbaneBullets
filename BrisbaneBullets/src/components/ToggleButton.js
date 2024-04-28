import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  HStack,
  Text,
} from "@gluestack-ui/themed-native-base";

const ToggleComponent = ({ tabs }) => {
  // Use the first tab as the default active tab
  const [activeTab, setActiveTab] = useState(tabs[0]?.label);

  return (
    <Container width="90%" key={activeTab}>
      <Box bg="#e1e1e2" width="100%" borderRadius="full" padding="0">
        <HStack space={0}>
          {tabs.map((tab) => (
            <CustomButton
              key={tab.label}
              active={activeTab === tab.label}
              onPress={() => setActiveTab(tab.label)}
            >
              {tab.label}
            </CustomButton>
          ))}
        </HStack>
      </Box>
      {/* Render content based on active tab */}
      <Content activeTab={activeTab} tabs={tabs} />
    </Container>
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
        fontWeight: "bold",
        letterSpacing: "lg",
        textAlign: "center",
      }}
      onPress={onPress}
      style={{ height: "auto", alignItems: "center", justifyContent: "center" }}
    >
      {children}
    </Button>
  );
};

const Content = ({ activeTab, tabs }) => {
  const activeContent = tabs.find((tab) => tab.label === activeTab)?.content;
  return activeContent ? (
    <Box p={4}>
      <Text>{activeContent}</Text>
    </Box>
  ) : null;
};

export default ToggleComponent;
