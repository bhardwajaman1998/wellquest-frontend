import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const AiStarted = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/Vector.png')} style={styles.image} />
      <Text style={styles.text}>I can generate a nutrition plan for you</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Let's get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'grey',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AiStarted;
