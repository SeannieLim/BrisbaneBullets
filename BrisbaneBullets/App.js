import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {
  Button,
  ButtonText,
  ButtonIcon,
  ButtonSpinner,
  ButtonGroup,
} from "@gluestack-ui/themed"





export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.boxContainer, styles.marginBottom]}>
          <Button style={[styles.topButton, { backgroundColor: '#164CA8' }]}>
            <ButtonText style={styles.buttonText}>Push Notification </ButtonText>
          </Button>
          <Button style={[styles.bottomButton, { backgroundColor: '#164CA8' }]}>
            <ButtonText style={styles.buttonText}>Membership </ButtonText>
          </Button>
      </View>
      <View style={[styles.boxContainer, styles.marginTop]}>
        <Button style={[styles.topButton, { backgroundColor: '#164CA8' }]}>
          <ButtonText style={styles.buttonText}>Privacy Policy</ButtonText>
          <ButtonIcon
          as={}
          />
        </Button>
        <Button style={[styles.midButton, { backgroundColor: '#164CA8' }]}>
          <ButtonText style={styles.buttonText}>Feedback and Support </ButtonText>
        </Button>
        <Button style={[styles.bottomButton, { backgroundColor: '#164CA8' }]}>
          <ButtonText style={styles.buttonText}>Terms and Condition </ButtonText>
        </Button>
      </View>
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
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
});
