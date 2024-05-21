import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const DashBoardPlayerStats = ({ route }) => {
  const navigation = useNavigation();
  const { player } = route.params;

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#000000', '#858484']} // Dark to grey gradient
        style={styles.gradientBackground}
      />
      <Image source={player.playerDashboard} style={styles.playerImage} />

      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons
            name="chevron-back-outline"
            size={27}
            color="#FAB81B"
          />
        </TouchableOpacity>
        <Text style={styles.playerName}>{player.playerName}</Text>
      </View>

      <View style={styles.statsRow}>
        <View style={styles.statItem}>
          <Text style={styles.statRowValue}>00</Text>
          <Text style={styles.statRowLabel}>MIN</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statRowValue}>00</Text>
          <Text style={styles.statRowLabel}>APG</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statRowValue}>00</Text>
          <Text style={styles.statRowLabel}>RPG</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statRowValue}>00</Text>
          <Text style={styles.statRowLabel}>SPG</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statRowValue}>00</Text>
          <Text style={styles.statRowLabel}>PPG</Text>
        </View>
      </View>

      <View style={styles.detailedStatsContainer}>
        <View style={styles.statColumn}>
          <Text style={styles.statValue}>00</Text>
          <Text style={styles.statLabel}>FGA</Text>
        </View>
        <View style={styles.statColumn}>
          <Text style={styles.statValue}>00</Text>
          <Text style={styles.statLabel}>FG%</Text>
        </View>
        <View style={styles.statColumn}>
          <Text style={styles.statValue}>00</Text>
          <Text style={styles.statLabel}>FGM</Text>
        </View>
        <View style={styles.statColumn}>
          <Text style={styles.statValue}>00</Text>
          <Text style={styles.statLabel}>3PA</Text>
        </View>
        <View style={styles.statColumn}>
          <Text style={styles.statValue}>00</Text>
          <Text style={styles.statLabel}>3P%</Text>
        </View>
        <View style={styles.statColumn}>
          <Text style={styles.statValue}>00</Text>
          <Text style={styles.statLabel}>3PM</Text>
        </View>
        <View style={styles.statColumn}>
          <Text style={styles.statValue}>00</Text>
          <Text style={styles.statLabel}>FTA</Text>
        </View>
        <View style={styles.statColumn}>
          <Text style={styles.statValue}>00</Text>
          <Text style={styles.statLabel}>FT%</Text>
        </View>
        <View style={styles.statColumn}>
          <Text style={styles.statValue}>00</Text>
          <Text style={styles.statLabel}>FTM</Text>
        </View>
      </View>
    </View>
  );
};

export default DashBoardPlayerStats;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradientBackground: {
    ...StyleSheet.absoluteFillObject,
  },
  playerImage: {
    position: 'absolute',
    top: windowHeight * 0.2, // Adjust this value to position the image correctly
    width: windowWidth,
    height: windowHeight * 0.6,
    resizeMode: 'cover',
    transform: [{ translateX: -windowWidth * 0.025 }], // Move the image slightly to the left
    marginTop: windowHeight * 0.12
  },
  header: {
    position: 'absolute',
    top: windowHeight * 0.05, // Adjust top padding as needed
    width: windowWidth,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: windowHeight * 0.02,
    
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    left: 20,
  },
  playerName: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 20,
    marginTop: windowHeight * 0.1,
  },
  statItem: {
    alignItems: 'center',
  },
  statRowValue: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  statRowLabel: {
    color: '#fff',
    fontSize: 20,
  },
  detailedStatsContainer: {
    backgroundColor: 'rgba(22, 76, 168, 0.4)', // blue with transparency
    width: '80%',
    paddingVertical: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: windowHeight * 0.4,
  },
  statColumn: {
    width: '30%',
    alignItems: 'center',
    marginVertical: 10,
  },
  statValue: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  statLabel: {
    color: '#fff',
    fontSize: 20,
  },
});
