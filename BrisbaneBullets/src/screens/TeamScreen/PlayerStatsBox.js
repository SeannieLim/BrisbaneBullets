import React from 'react';
import { View, Text } from 'react-native';
import MyStyles from './TeamStyles';

const PlayerStatsBox = () => {
  return (
    <View style={{ 
      backgroundColor: '#fff', 
      padding: 20, 
      top:20,
      bottom: 20,
      borderWidth: 0, // Set border width to zero to remove outer border
    }}>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 1 }}>
          <Text style={MyStyles.statsText}>GP</Text>
          <Text style={MyStyles.statsValueText}>27</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={MyStyles.statsText}>PPG</Text>
          <Text style={MyStyles.statsValueText}>25.6</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={MyStyles.statsText}>Mins</Text>
          <Text style={MyStyles.statsValueText}>25.5</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 1 }}>
          <Text style={MyStyles.statsText}>FGA</Text>
          <Text style={MyStyles.statsValueText}>15.7</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={MyStyles.statsText}>FGM</Text>
          <Text style={MyStyles.statsValueText}>6.8</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={MyStyles.statsText}>REB</Text>
          <Text style={MyStyles.statsValueText}>9.2</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 1 }}>
          <Text style={MyStyles.statsText}>FG%</Text>
          <Text style={MyStyles.statsValueText}>53.5</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={MyStyles.statsText}>3PA</Text>
          <Text style={MyStyles.statsValueText}>1.7%</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={MyStyles.statsText}>AST</Text>
          <Text style={MyStyles.statsValueText}>1.5</Text>
        </View>
      </View>
    </View>
  );
};

export default PlayerStatsBox;
