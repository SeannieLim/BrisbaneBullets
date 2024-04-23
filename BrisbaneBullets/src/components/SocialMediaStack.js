import React from 'react';
import { StyleSheet, ScrollView, View, Image, TouchableOpacity, Linking } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function SocialMediaStack() {

    const socials = [
        { img: require('../../assets/social-media/facebook.png'), url:'fb://page/283400235032395', webUrl: 'https://www.facebook.com/BrisbaneBullets/'},
        { img: require('../../assets/social-media/X.png'),  url:'twitter://user?screen_name=BrisbaneBullets', webUrl:'https://twitter.com/BrisbaneBullets'},
        { img: require('../../assets/social-media/Instagram.png'),  url:'instagram://user?username=brisbanebullets', webUrl:'https://www.instagram.com/brisbanebullets/'},
        { img: require('../../assets/social-media/Youtube.png'), url:'youtube://www.youtube.com/channel/UCJaGGZG2kamXywgks_xWx0A', webUrl:'https://www.youtube.com/channel/UCJaGGZG2kamXywgks_xWx0A'}]

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
                        <LinearGradient
                            colors={['#164CA8', '#091E42']}
                            style={styles.button}
                            start={{ x: 0.5, y: 0 }}
                            end={{ x: 0.5, y: 1 }}
                        >
                            <Image source={social.img} style={styles.img} resizeMode="contain" />
                        </LinearGradient>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    button: {
        width: 87,
        height: 57,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: "center",
        marginRight: 10,
    },

    img: {
        flex: 0.7,
        width: 90,
        height: 60,
    }
});