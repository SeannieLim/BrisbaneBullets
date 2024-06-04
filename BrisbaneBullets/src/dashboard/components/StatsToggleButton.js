import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const StatsToggleButton = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.label);

  const onButtonToggle = (label) => {
    setActiveTab(label);
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab.label}
            onPress={() => onButtonToggle(tab.label)}
            style={[styles.box, { backgroundColor: activeTab === tab.label ? "rgba(22, 76, 168, 0.6)" : "transparent" }]}
          >
            <Text style={styles.text}>{tab.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default StatsToggleButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
  },
  innerContainer: {
    flexDirection: 'row',
    paddingRight: 30,
  },
  box: {
    width: 100,
    height: 40,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: 'white',
    borderBottomWidth: 1.5,
  },
  text: {
    textAlign: 'center',
    color: 'white',
  },
});
