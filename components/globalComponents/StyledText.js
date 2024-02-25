import React from 'react';
import { Text, StyleSheet } from 'react-native';

const StyledText = ({ style, ...props }) => {
  return <Text style={[styles.defaultFont, style]} {...props} />;
};

const styles = StyleSheet.create({
  defaultFont: {
    fontFamily: 'poppins-regular',
    fontSize: 12
  },
});

export default StyledText;
