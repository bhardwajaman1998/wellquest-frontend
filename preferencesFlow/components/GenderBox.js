import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const GenderBox = ({ imageSource, backgroundColor, title }) => {
  return (
    <View style={[styles.box, { backgroundColor }]}>
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 150,
    height: 150,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15
  },
  image: {
    width: 70,
    height: 70,
  },
  title: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'regular',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default GenderBox;
