import {View, Text, Box, HStack} from "@gluestack-ui/themed";
import {Dimensions, SafeAreaView, StyleSheet, TouchableOpacity} from "react-native";
import {scaleFontSize} from "../constants/Layout";
import {Ionicons} from '@expo/vector-icons';
import {Entypo} from '@expo/vector-icons';
import ToggleComponent from "../components/ToggleButton";

const windowWidth = Dimensions.get("window").width;

const videoTabs = [
    {label: "Upcoming Games"},
    {label: "Past Games"},
];

const data = [
    {date: 'Fri, May 19', time: '8:30pm AEDT'}, {date: 'Fri, May 26', time: '4:30pm AEDT'}, {
        date: 'Fri, Jun 02',
        time: '6:30pm AEDT'
    }
]


export default function ScheduleScreen({navigation}) {

    const navigateStandings = () => {
        // Implement your share functionality here
    };

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <Box style={styles.header}>
                    <Text style={styles.heading}>Schedule</Text>
                    <Box style={styles.iconContainer}>
                        <Box style={styles.circleBackground}>
                            <TouchableOpacity onPress={navigateStandings}>
                                <Ionicons name="podium" size={23} color="white" style={{paddingBottom: 2,}}/>
                            </TouchableOpacity>
                        </Box>
                        <Box style={styles.circleBackground}>
                            <TouchableOpacity onPress={navigateStandings}>
                                <Entypo name="ticket" size={26} color="white"/>
                            </TouchableOpacity>
                        </Box>
                    </Box>
                </Box>

                <Box style={{paddingVertical: windowWidth * 0.05}}>
                    <ToggleComponent tabs={videoTabs}/>
                </Box>

                <HStack justifyContent='center'>
                    <Box flex={1}>
                        <Text style={styles.details}>{data[0].date}</Text>
                    </Box>
                    <Box style={styles.boxBackground}>
                        <Text style={styles.title}>ROUND 20</Text>
                    </Box>
                    <Box flex={1} alignItems='flex-end'>
                        <Text style={styles.details}>{data[0].time}</Text>
                    </Box>
                </HStack>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal:
            windowWidth * 0.08,
        backgroundColor:
            'white',
    }
    ,
    header: {
        paddingTop: windowWidth * 0.03,
        flexDirection:
            'row',
        justifyContent:
            'space-between'
    }
    ,
    iconContainer: {
        flexDirection: 'row',
    }
    ,
    heading: {
        color: '#113B81',
        fontWeight:
            '600',
        fontSize:
            scaleFontSize(33)
    }
    ,
    circleBackground: {
        alignItems: 'center',
        justifyContent:
            'center',
        width:
            45,
        height:
            45,
        borderRadius:
            25,
        backgroundColor:
            '#113B81',
        marginLeft:
            windowWidth * 0.02,
    }
    ,
    boxBackground: {
        alignItems: 'center',
        justifyContent:
            'center',
        width:
            130,
        height:
            40,
        borderRadius:
            15,
        backgroundColor:
            '#113B81',
    }
    ,
    title: {
        color: 'white',
        fontWeight:
            '800',
        fontSize:
            scaleFontSize(16)
    }
    ,
    details: {
        fontWeight:
            '500',
        fontSize: scaleFontSize(13),
    }
})