import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import ViewMoreText from 'react-native-view-more-text';
import { scaleFontSize } from '../constants/Layout';

const windowWidth = Dimensions.get('window').width;

const TextTruncate = ({ text, numberOfLines = 3 }) => {
  const [containerHeight, setContainerHeight] = useState(null);

  const renderViewMore = (onPress) => (
    <Text onPress={onPress} style={styles.viewMore}>
      View more
    </Text>
  );

  const renderViewLess = (onPress) => (
    <Text onPress={onPress} style={styles.viewMore}>
      View less
    </Text>
  );

  const onTextLayout = (event) => {
    const { height } = event.nativeEvent.layout;
    setContainerHeight(height);
  };

  return (
    <View style={[styles.container, { height: containerHeight }]}>
      <ViewMoreText
        numberOfLines={numberOfLines}
        renderViewMore={renderViewMore}
        renderViewLess={renderViewLess}
        textStyle={styles.textStyle}
      >
        <Text onTextLayout={onTextLayout}>{text}</Text>
      </ViewMoreText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(240, 240, 240, 0.5)', // Background color with opacity,
    padding: 10,
    borderRadius: 12,
    marginVertical: 10,
    width: windowWidth * 0.8,
    marginLeft: windowWidth * 0.09
  },
  textStyle: {
    textAlign: 'center',
    fontSize: scaleFontSize(11),
    letterSpacing: 1
  },
  viewMore: {
    color: 'blue',
  },
});

export default TextTruncate;
