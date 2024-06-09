import React, { useState } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { Box, Button, Container, HStack } from "@gluestack-ui/themed-native-base";

const windowWidth = Dimensions.get("window").width;
const ToggleComponent = ({ tabs }) => {
  // Use the first tab as the default active tab
  const [activeTab, setActiveTab] = useState(tabs[0]?.label);

  return (
    <View>
      <View style={styles.tabContainer}>
        <Container width="100%" key={activeTab}>
          <Box
            bg="#FCFDFF"
            width="100%"
            borderRadius={50}
            padding="0"
            style={styles.shadow}
          >
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
        </Container>
      </View>
      <View style={styles.contentContainer}>
        {/* Render content based on active tab */}
        <Content activeTab={activeTab} tabs={tabs} />
      </View>
    </View>
  );
};

const CustomButton = ({ active, onPress, children }) => {
  return (
    <Button
      flex={1}
      bg={active ? "#164CA8" : "transparent"}
      borderRadius="20"
      _text={{
        color: active ? "white" : "#164CA8",
        fontWeight: "bold",
        letterSpacing: "sm",
        textAlign: "center",
      }}
      onPress={onPress}
      width="auto" py={2} px={2}
    >
      {children}
    </Button>
  );
};

const Content = ({ activeTab, tabs }) => {
  const activeContent = tabs.find((tab) => tab.label === activeTab)?.content;
  return activeContent ? <>{activeContent}</> : null;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabContainer: {
    marginHorizontal: windowWidth * 0.08,
  },
  shadow: {
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 3, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5, // Elevation for Android
  },
});

export default ToggleComponent;
