import React, { useState } from "react";
import { Container, Box, HStack, Button, Text } from "@gluestack-ui/themed-native-base";
import { Linking } from "react-native";
import PlayerStatsBox from '../screens/TeamScreen/PlayerStatsBox'; // Import PlayerStatsBox component

const ToggleComponent = ({ tabs, style }) => {
    // Use the first tab as the default active tab
    const [activeTab, setActiveTab] = useState(tabs[0]?.label);

    const handleTabPress = (tabLabel) => {
        if (tabLabel === "Advance Statistics") {
            Linking.openURL("https://www.brisbanebullets.com.au/Statistics");
        } else {
            setActiveTab(tabLabel);
        }
    };

    return (
        <Container width="80%" key={activeTab} style={style}>
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
            {/* Render PlayerStatsBox component only if "Stats" tab is active */}
            {activeTab === "Stats" && <PlayerStatsBox />}
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

export default ToggleComponent;
