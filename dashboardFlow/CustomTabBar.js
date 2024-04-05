import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BottomTabBar} from '@react-navigation/bottom-tabs';

const CustomTabBar = (props) => {
  return (
    <View style={{width: '100%'}}>
      <View style={styles.tabBar} />
      <BottomTabBar {...props} />
    </View>
  );
};

export default CustomTabBar;

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 0,
    height: 95,
    backgroundColor: '#fff',
    borderRadius: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 3,
  },
});