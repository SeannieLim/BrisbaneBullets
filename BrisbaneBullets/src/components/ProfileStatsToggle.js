import React, { useState } from "react";
import { Container, Box, HStack, Button } from "@gluestack-ui/themed-native-base";
import { useNavigation } from "@react-navigation/native";

const ProfileStatsToggle = ({ tabs, style }) => {
  // Use the first tab as the default active tab
  const [activeTab, setActiveTab] = useState(tabs[0]?.label);
  const navigation = useNavigation();

  const navigateToStats = () => {
    setActiveTab("Stats"); // Update activeTab to "Stats"
  };

  const navigateToPlayersProfile = () => {
    setActiveTab("Profile"); // Update activeTab to "Profile"
  };

  const handleTabPress = (tabLabel) => {
    if (tabLabel === "Stats") {
      navigateToStats();
    } else if (tabLabel === "Profile") {
      navigateToPlayersProfile();
    }
  };

  return (
    <Container key={activeTab} style={style}>
      <Box bg="#FCFDFF" width="100%" borderRadius="full" padding="0">
        <HStack space={0}>
          {tabs.map((tab) => (
            <CustomButton
              key={tab.label}
              active={activeTab === tab.label}
              onPress={() => handleTabPress(tab.label)}
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
        letterSpacing: "sm",
      }}
      onPress={onPress}
      width="auto"
      py={2}
      px={4}
    >
      {children}
    </Button>
  );
};

const Content = ({ activeTab, tabs }) => {
  const activeContent = tabs.find((tab) => tab.label === activeTab)?.content;
  return activeContent ? <>{activeContent}</> : null;
};

export default ProfileStatsToggle;
