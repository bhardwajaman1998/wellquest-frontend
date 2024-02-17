import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '@gluestack-ui/themed';
const AiStarted = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/Vector.png')} style={styles.image} />
      <Text style={styles.text}>Hi! I am your AI nutritional assistant</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Continue</Text>
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
