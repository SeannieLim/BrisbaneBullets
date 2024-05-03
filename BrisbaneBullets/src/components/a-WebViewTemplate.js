import React, { useRef, useLayoutEffect } from "react";
import { WebView } from "react-native-webview";
import { View, StyleSheet, TouchableOpacity, Text, Share } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, Entypo } from "@expo/vector-icons";

const A_WebViewTemplate = ({ uri }) => {
  const webviewRef = useRef(null);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: { height: 100, backgroundColor: "#164CA8" },
      headerTitle: "",
      headerTintColor: "#fab81b",
      // headerBackTitle: "Back",
      headerBackTitleVisible: false,
      headerLeftContainerStyle: { paddingLeft: 10 },
      headerRightContainerStyle: { paddingRight: 10 },

      headerRight: () => (
        <View style={styles.headerButtons}>
          <TouchableOpacity onPress={goBack} style={styles.headerButton}>
            <AntDesign name="leftcircle" size={30} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={goForward} style={styles.headerButton}>
            <AntDesign name="rightcircle" size={30} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={onShare} style={styles.headerButton}>
            <Entypo name="share-alternative" size={26} color="white" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  const goBack = () => {
    webviewRef.current.goBack();
  };

  const goForward = () => {
    webviewRef.current.goForward();
  };

  const onShare = async () => {
    try {
      await Share.share({
        url: uri,
      });
    } catch (error) {
      console.error("Error sharing", error);
    }
  };

  return (
    <WebView ref={webviewRef} source={{ uri: uri }} style={styles.webview} />
  );
};

const styles = StyleSheet.create({
  webview: {
    flex: 1,
  },
  headerButtons: {
    flexDirection: "row",
  },
  headerButton: {
    marginHorizontal: 10,
    marginVertical: 5,
  },
});

export default A_WebViewTemplate;
