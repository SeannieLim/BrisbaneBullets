import React from 'react';
import { StyleSheet, ScrollView, View, Image, TouchableOpacity, Linking } from 'react-native';
//import { Button, ButtonText, ButtonIcon,} from "@gluestack-ui/themed"


export default function App() {

  const socials = [
    { img: require('./assets/facebook.png'), url:'https://www.facebook.com/BrisbaneBullets/', webUrl: 'https://www.facebook.com/BrisbaneBullets/'}, 
    { img: require('./assets/X.png'),  url:'https://twitter.com/BrisbaneBullets', webUrl:'https://twitter.com/BrisbaneBullets'}, 
    { img: require('./assets/Instagram.png'),  url:'https://www.instagram.com/brisbanebullets/', webUrl:'https://www.instagram.com/brisbanebullets/'}, 
    { img: require('./assets/Youtube.png'), url:'https://www.youtube.com/channel/UCJaGGZG2kamXywgks_xWx0A', webUrl:'https://www.youtube.com/channel/UCJaGGZG2kamXywgks_xWx0A'}]

    const handleClick = async (social) => {
      const supported = await Linking.canOpenURL(social.url);
      if (supported) {
        Linking.openURL(social.url)
          .catch(err => console.error('An error occurred', err));
      } else {
        Linking.openURL(social.webUrl)
          .catch(err => console.error('An error occurred', err));
      }

    }

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {socials.map((social, index) => (
          <TouchableOpacity key={index} style={styles.button} onPress={() => handleClick(social)}>
            {/*<Button size="lg"
              variant="solid"
              action="primary"
              isDisabled={false}
              isFocusVisible={false}
              >*/}
              <Image source={social.img} style={styles.img} resizeMode="contain" />
            {/*</Button>*/}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  button: {
    width: 95,
    height: 95,
  },

  img: {
    flex: 1,
    width: 90,
    height: 70,
}
});
