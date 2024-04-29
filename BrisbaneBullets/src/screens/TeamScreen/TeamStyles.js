import React from "react";
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import { scaleFontSize } from "../../constants/Layout";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const MyStyles = StyleSheet.create({

    backgroundImageContainer: {
        flex: 1,
        width: windowWidth,
    },
    mainContainer : {
        flex : 1,
        backgroundColor : 'white',

    },

    Heading : {
        marginLeft: windowWidth * 0.09,
        marginTop : windowHeight * 0.05,
        fontSize : scaleFontSize(30),
        fontWeight : 'bold',
        letterSpacing : 1,
        color: '#113B81'

    },
    teamPageToggle :{
        marginLeft: windowWidth * 0.09,
        shadowColor: '#000', // Shadow color
        shadowOffset: { width: 0, height: 2 }, // Shadow offset
        shadowOpacity: 0.25, // Shadow opacity
        shadowRadius: 4, // Shadow radius
        elevation: 5, // Elevation for Android
    },

  
    
    


  

  
});