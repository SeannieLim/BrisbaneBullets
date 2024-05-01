import React, { useState } from "react";
import {
    Box,
    Button,
    Container,
    HStack,
    Text,
} from "@gluestack-ui/themed-native-base";
import { Linking } from "react-native";
import { useNavigation } from '@react-navigation/native';

const ToggleComponent = ({ tabs, style }) => {
    // Use the first tab as the default active tab
    const [activeTab, setActiveTab] = useState(tabs[0]?.label);

    const navigation = useNavigation();
    const navigateToStats = () => {
        navigation.navigate('PlayerStats');
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
                                if (tab.label === "Advance Statistics") {
                                    Linking.openURL("https://www.brisbanebullets.com.au/Statistics");
                                } else if (tab.label === "Stats") {
                                    navigateToStats();
                                } else {
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
                //Adjusted letter-spacing
                letterSpacing: "sm", // Adjust letter spacing here,
            }}
            
            onPress={onPress}
            width="auto"
            // Optionally, you can add padding to the button to provide some space around the text
            py={2} // Adjust the vertical padding as needed
            px={4} // Adjust the horizontal padding as needed
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
