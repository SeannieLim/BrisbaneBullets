import React from 'react';
import { Dimensions, ImageBackground, View, StyleSheet, Text, Image } from 'react-native';
import {
  Button,
  ButtonText,
} from "@gluestack-ui/themed";


const windowWidth = Dimensions.get("window").width;

export default function App() {
  console.log("ImageBackground source:", require("./assets/BB-logo.png")); // Log the source prop

  return (
    <View style={styles.container}>
      <View style={styles.backgroundImageContainer}>
        <ImageBackground
          source={require("./assets/BB-logo.png")}
          style={styles.backgroundImage}
          resizeMode="contain"
        >
      <View style={[styles.boxContainer, styles.marginBottom]}>
          <View style={[styles.topButton, { backgroundColor: '#164CA8' }]}>
            <Text style={styles.buttonText}>Push Notification </Text>
          </View>
          <Button style={[styles.bottomButton, { backgroundColor: '#164CA8' }]}>
            <ButtonText style={styles.buttonText}>Membership </ButtonText>
          </Button>
      </View>
      <View style={[styles.boxContainer, styles.marginTop]}>
        <Button style={[styles.topButton, { backgroundColor: '#164CA8' }]}>
          <ButtonText style={styles.buttonText}>Privacy Policy</ButtonText>
        </Button>
        <Button style={[styles.midButton, { backgroundColor: '#164CA8' }]}>
          <ButtonText style={styles.buttonText}>Feedback and Support </ButtonText>
        </Button>
        <Button style={[styles.bottomButton, { backgroundColor: '#164CA8' }]}>
          <ButtonText style={styles.buttonText}>Terms and Condition </ButtonText>
        </Button>
      </View>
      <View style={styles.boxContainer}>
        <Button  style={styles.others}>
          <ButtonText style={styles.othersText}>Crowd Canvas </ButtonText>
          <Image source={require('./assets/CrowdCanvas.png')} style={{ width: 80, height: 90 }} resizeMode="contain" />
        </Button>
      </View>  
      </ImageBackground>
      </View>
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',

  },
  backgroundImageContainer: {
    justifyContent: 'center',
    alignItems:1,
    flex: 1,
    width: windowWidth
  },
  backgroundImage:{
    width: '70%',
    height:'70%',
    justifyContent:'center',
    alignItems: 'center',

  },
  boxContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topButton: {
    width: 260,
    height: 30,
    marginVertical: 0.3,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    justifyContent: 'center', 

  },
  midButton:{
    width: 260,
    height: 30,
    marginVertical: 0.3,
  },

  bottomButton: {
    width: 260,
    height: 30,
    marginVertical: 0.3,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  buttonText: {
    color: 'white', 
    fontSize: 16,
    paddingLeft: 15,
  },
  marginTop: {
    marginTop: 10, 
  },
  marginBottom: {
    marginBottom: 10, 
  },
  others: {
    marginTop: 10, 
    width: 60,
    height: 70,
    marginVertical: 0.3,
    borderRadius: 15, 
  },
  othersText: {
    color:"white",
    justifyContent:"flex-end",
    paddingTop: 30,
    paddingLeft: 5,
  },
  
});
