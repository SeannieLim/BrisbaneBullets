import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const DashBoardPlayerStats = ({ route }) => {
  const { player } = route.params;

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#000000', '#858484']} // Dark to grey gradient
        style={styles.gradientBackground}
      />
      <Image source={player.playerDashboard} style={styles.playerImage} />

      <View style={styles.header}>
        <Text style={styles.playerName}>{player.playerName}</Text>
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
    marginTop: windowHeight * 0.1
  },
  header: {
    position: 'absolute',
    top: windowHeight * 0.05, // Adjust top padding as needed
    width: windowWidth,
    alignItems: 'center',
  },
  playerName: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: windowHeight * 0.01
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  statLabel: {
    color: '#fff',
    fontSize: 12,
  },
  detailedStatsContainer: {
    backgroundColor: 'rgba(22, 76, 168, 0.4)', // blue with transparency
    width: '80%',
    paddingVertical: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: windowHeight * 0.6,
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
  statRowValue:{
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },

  statRowLabel: {
    color: '#fff',
    fontSize: 17,
  },

});