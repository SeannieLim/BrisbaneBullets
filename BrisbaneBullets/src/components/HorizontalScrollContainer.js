import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';


export default function HorizontalScrollContainer() {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.box}>
          <View style={styles.videoPlaceHolder}></View>
          <View style={styles.content}>
            <Text style={styles.text}>Highlights vs{'\n'}Melbourne {'\n'}United</Text>
            <View style={styles.dateContainer}>
              <Text style={styles.time}>9 hrs ago</Text>
              <Entypo style={styles.shareButton} name="share-alternative" size={19} color="#FFFFFF" />
            </View>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.videoPlaceHolder}></View>
          <View style={styles.content}>
            <Text style={styles.text}>Press Conference{'\n'}vs {'\n'}Adelaide 36ers</Text>
            <View style={styles.dateContainer}>
              <Text style={styles.time}>9 hrs ago</Text>
              <Entypo style={styles.shareButton} name="share-alternative" size={19} color="#FFFFFF" />
            </View>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.videoPlaceHolder}></View>
          <View style={styles.content}>
            <Text style={styles.text}>Booya{'\n'}Hello{'\n'}Test</Text>
            <View style={styles.dateContainer}>
              <Text style={styles.time}>9 hrs ago</Text>
              <Entypo style={styles.shareButton} name="share-alternative" size={19} color="#FFFFFF" />
            </View>
          </View>
        </View>
        {/* Add more View components as needed */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 20,
    marginLeft: 10,
    marginTop: 50,
  },
  box: {
    flexDirection: 'row',
    width: 330,
    height: 170,
    marginRight: 10,
    backgroundColor: '#164CA8',
    borderRadius: 15,
  },
  content: {
    justifyContent: 'center',
    paddingRight: 10,
  },
  videoPlaceHolder: {
    width: 130,
    height: 130,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginLeft: 15,
    marginTop: 20,
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginLeft: 13,
    marginBottom: 38,
    letterSpacing: 1,
    lineHeight: 24,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  time: {
    fontSize: 13,
    color: '#FFFFFF',
    letterSpacing: 1,
    lineHeight: 24,
    marginLeft: 13,
    marginRight: 5,
  },
  shareButton:{
    marginLeft:50,
    marginBottom: 3
  }
});
