import React from "react";
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import { scaleFontSize } from "../../constants/Layout";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const MyStyles = StyleSheet.create({

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
    // teamPageToggle :{
    //     marginLeft: windowWidth * 0.09,
    //     shadowColor: '#000', // Shadow color
    //     shadowOffset: { width: 0, height: 4 }, // Shadow offset
    //     shadowOpacity: 0.25, // Shadow opacity
    //     shadowRadius: 4, // Shadow radius
    //     elevation: 5, // Elevation for Android
    // },
    toggleContainer: {
      marginHorizontal: windowWidth * 0.08,
      marginTop: windowHeight * 0.02
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: windowWidth * 0.02,
        marginTop: windowHeight * 0.07,
    },

    BackArrow: {
        color: '#FAB81B',
    },

    playerName: {
        flex: 1,
        fontSize: scaleFontSize(22),
        fontWeight: 'bold',
        color: '#113B81',
        textAlign : 'center',
        letterSpacing : 1,
        marginRight: windowWidth * 0.08

    },
    
    imageBox:{
    width: windowWidth * 0.9,  // Width of the box
    height: windowHeight * 0.3, // Height of the box
    backgroundColor: '#164CA7', // Background color of the box
    borderRadius: 15, // Border radius (optional)
    marginLeft: windowWidth * 0.05,
    marginTop: windowHeight * 0.06,
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 3, height: 6 }, // Shadow offset
    shadowOpacity: 0.25, // Shadow opacity
    shadowRadius: 4, // Shadow radius
    elevation: 5, // Elevation for Android
    position: 'relative', // Add relative positioning to the square container
    overflow: 'visible'
    },
     textContainer: {
    position: 'absolute', // Position the text container absolutely within the container
    top: 10, 
    left: 15, 
    alignItems: 'center',
  },
  jerseyNumber: {
    fontWeight: 'bold',
    fontSize: scaleFontSize(32),
    color: '#FFFFFF'
  },
  playerProfileImage:{
    left: 60,
    width: '70%',
    height: '83%',
    overflow: 'visible',
  },

  ProfileStatsToggle:{
    marginLeft: windowWidth * 0.11,
    marginTop: windowHeight * 0.03,
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: 4 }, // Shadow offset
    shadowOpacity: 0.25, // Shadow opacity
    shadowRadius: 4, // Shadow radius
    elevation: 5, // Elevation for Android
},
scrollViewContent: {
    flexGrow: 1,
    flexDirection: 'row', // Arrange containers horizontally
  },
  container: {
    width: 107, // Set a fixed width for each container
    justifyContent: 'center', // Align items vertically at the center
    alignItems: 'center', // Align items horizontally at the center
    backgroundColor: '#FFFFFF',
    marginHorizontal: 10,
    height: 107, // Set a fixed height for each container
    borderRadius: 15,
    marginTop: windowHeight * 0.03,
    marginRight: windowWidth * 0.01,
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 2, height: 1 }, // Shadow offset
    shadowOpacity: 0.25, // Shadow opacity
    shadowRadius: 4, // Shadow radius
    elevation: 5, // Elevation for Android
    position: 'relative', // Add relative positioning to the square container
    marginBottom: windowHeight * 0.01
  },
  playerDetailsText: {
    fontSize: scaleFontSize(12),
    fontWeight: 'bold',
    color: '#113B81',
    letterSpacing: 1,
    marginTop : windowHeight * 0.002,
    

  }, countryIconContainer: {
    alignItems: 'center', // Center the icon horizontally

  },

  countryIcon:{
    marginTop : windowHeight * 0.009,
    marginBottom: windowHeight * 0.009,
    borderRadius:3
  },
  Country: {
    alignItems: 'center', // Center the icon horizontally
    color: '#686060',
    fontSize: scaleFontSize(9),
    fontWeight: 'bold',
    letterSpacing: 1
  },

  circle: {
  width: 45, // Set the width of the circle
  height: 45, // Set the height of the circle
  borderRadius: 25, // Half of the width and height to create a perfect circle
  justifyContent: 'center', // Center the content vertically
  alignItems: 'center', // Center the content horizontally
  backgroundColor: '#164CA7',
  marginTop: windowHeight * 0.008,
  marginBottom: windowHeight * 0.006
  },

  positionCode:{
    color: '#FFFFFF',
    fontSize: scaleFontSize(23),
    fontWeight: 'bold'
  },
  positionText:{
    alignItems: 'center', // Center the icon horizontally
    color: '#686060',
    fontSize: scaleFontSize(9),
    fontWeight: 'bold',
    letterSpacing: 1,
    marginTop: windowHeight * 0.001
  },
  playerTextContainer: {
    flex: 1,
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
    marginTop: windowHeight * 0.012,
    color: '#113B81',
    fontSize: scaleFontSize(12),
    fontWeight: 'bold',
    letterSpacing: 1
  },
  PlayerText: {
    fontSize: scaleFontSize(18), // Adjust font size as needed
    color: '#000000',
    fontWeight: 'bold',
    letterSpacing: 1,
    marginBottom: windowHeight * 0.04,
  },
buttonContainer : {
    flexDirection: 'row', // Arrange items horizontally
    alignItems: 'center', // Align items vertically
    backgroundColor: '#164CA8', // Transparent background
    borderRadius: 25, // Round border
    paddingVertical: 8, // Vertical padding
    paddingHorizontal: 10, // Horizontal padding
    height: 35,
    marginTop: windowHeight * 0.015,
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 2, height: 1 }, // Shadow offset
    shadowOpacity: 0.25, // Shadow opacity
    shadowRadius: 4, // Shadow radius
    elevation: 5, // Elevation for Android
    position: 'relative', // Add relative positioning to the square container
  },
  buttonText: {
    fontSize: scaleFontSize(10),
    color: '#FFFFFF', // Text color
    fontWeight: 'bold',
  },
  icon: {
    width: 13, // Set width of the icon
    height: 13, // Set height of the icon
    marginLeft: 2, // Add some space between icon and text
    
  },
  socialMedia : {
    fontSize: scaleFontSize(17),
    fontWeight: 'bold',
    letterSpacing: 1,
    marginTop: windowHeight * 0.02

  },
  bio: {
    fontSize: scaleFontSize(17),
    letterSpacing: 1,
    marginLeft: windowWidth * 0.01,
    marginTop: windowHeight * 0.0
  },
  statsText: {
    fontSize: scaleFontSize(18), // Adjust font size as needed
    color: '#000000',
    fontWeight: 'bold',
    letterSpacing: 1,
    alignItems: 'center',
    
  },
  statsValueText: {
    fontSize: scaleFontSize(18), // Adjust font size as needed
    color: '#000000',
    letterSpacing: 1,
    alignItems: 'center',
    left: 3,
    marginBottom: windowHeight * 0.04
  },

  statsContainer:{
    MarginLeft: windowWidth * 0.02
  }
  
  

  
  
  

  
});

export default MyStyles