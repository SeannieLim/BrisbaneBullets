import React, { useState } from "react";
import { Container, Box, HStack, Button, Text } from "@gluestack-ui/themed-native-base";
import { Linking } from "react-native";
import { useNavigation } from '@react-navigation/native';

const ToggleComponent = ({ tabs, style }) => {
    // Use the first tab as the default active tab
    const [activeTab, setActiveTab] = useState(tabs[0]?.label);

    const navigation = useNavigation();
    const navigateToStats = () => {
        navigation.navigate('PlayerStats');
    };

    const navigateToAdvanceStats = () => {
        navigation.navigate('AdvanceStatistics');
    };

    const navigateToPlayersProfile = () => {
        navigation.navigate('TeamScreen');
    };


    return (
        <Container width="80%" key={activeTab} style={style}> {/* Apply style here */}
            <Box bg="#FCFDFF" width="100%" borderRadius="full" padding="0">
                <HStack space={0}>
                    {tabs.map((tab) => (
                        <CustomButton
                            key={tab.label}
                            active={activeTab === tab.label}
                            onPress={() => {
                                if (tab.label === "AdvanceStatistics") {
                                    navigateToAdvanceStats();
                                } else if (tab.label === "Stats") {
                                    navigateToStats();
                                } else if (tab.label === "Players"){
                                    navigateToPlayersProfile();
                                }
                                else {
                                    setActiveTab(tab.label);
                                }
                            }}
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
    return activeContent ? (
        <Box p={4}>
            <Text>{activeContent}</Text>
        </Box>
    ) : null;
};

export default ToggleComponent;
