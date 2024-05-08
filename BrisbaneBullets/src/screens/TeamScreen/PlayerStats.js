import React from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import MyStyles from './TeamStyles';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const PlayerStats = () => {
  const marginHeight = windowHeight * 0.03; // 3% of window height

  return (
    <ScrollView style={[MyStyles.mainContainer, { marginTop: marginHeight }]}>
      <View style={{ flexDirection: 'row'}}>
        <View style={{ flex: 1 }}>
          <Text style={[MyStyles.statsText, { textAlign: 'center', marginTop: windowHeight * 0.02 }]}>GP</Text>
          <Text style={[MyStyles.statsValueText, { textAlign: 'center', marginTop: 5 }]}>27</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={[MyStyles.statsText, { textAlign: 'center', marginTop: windowHeight * 0.02  }]}>PPG</Text>
          <Text style={[MyStyles.statsValueText, { textAlign: 'center', marginTop: 5 }]}>25.6</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={[MyStyles.statsText, { textAlign: 'center', marginTop: windowHeight * 0.02  }]}>Mins</Text>
          <Text style={[MyStyles.statsValueText, { textAlign: 'center', marginTop: 5 }]}>25.5</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 1 }}>
          <Text style={[MyStyles.statsText, { textAlign: 'center', marginTop: 5 }]}>FGA</Text>
          <Text style={[MyStyles.statsValueText, { textAlign: 'center', marginTop: 5 }]}>15.7</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={[MyStyles.statsText, { textAlign: 'center', marginTop: 5 }]}>FGM</Text>
          <Text style={[MyStyles.statsValueText, { textAlign: 'center', marginTop: 5 }]}>6.8</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={[MyStyles.statsText, { textAlign: 'center', marginTop: 5 }]}>REB</Text>
          <Text style={[MyStyles.statsValueText, { textAlign: 'center', marginTop: 5 }]}>9.2</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 1 }}>
          <Text style={[MyStyles.statsText, { textAlign: 'center', marginTop: windowHeight * 0.02  }]}>FG%</Text>
          <Text style={[MyStyles.statsValueText, { textAlign: 'center', marginTop: 5 }]}>53.5</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={[MyStyles.statsText, { textAlign: 'center', marginTop: windowHeight * 0.02  }]}>3PA</Text>
          <Text style={[MyStyles.statsValueText, { textAlign: 'center', marginTop: 5 }]}>1.7%</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={[MyStyles.statsText, { textAlign: 'center', marginTop: windowHeight * 0.02  }]}>AST</Text>
          <Text style={[MyStyles.statsValueText, { textAlign: 'center', marginTop: 5 }]}>1.5</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default PlayerStats;
