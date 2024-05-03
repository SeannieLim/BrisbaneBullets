import React, { useState } from "react";
import { Container, Box, HStack, Button, Text } from "@gluestack-ui/themed-native-base";
import { Linking } from "react-native";
import { useNavigation } from '@react-navigation/native';

//Receive Data from
const ProfileStatsToggle = ({ tabs, style, player}) => {
    // Use the first tab as the default active tab
    const [activeTab, setActiveTab] = useState(tabs[0]?.label);
    const navigation = useNavigation();
    const navigateToStats = () => {
        navigation.navigate('PlayerStats',{player});
    }

    const navigateToPlayersProfile = () => {
        navigation.navigate('PlayerProfile',{player});
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
                                if (tab.label === "Stats") {
                                    navigateToStats();
                                } else if (tab.label === "Profile") {
                                    navigateToPlayersProfile();
                                }


                               setActiveTab(prevTab => prevTab !== tab.label ? tab.label : prevTab);
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

export default ProfileStatsToggle;
