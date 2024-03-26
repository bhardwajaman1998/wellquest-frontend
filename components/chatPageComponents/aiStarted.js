import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';

const AiStarted = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/ai-greetings.png')} style={styles.image} />
      <Text style={styles.text}>Hi! I am your AI nutritional assistant</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    //backgroundColor: '#7265E31A',
  },
  image: {
    width: 200,
    height: 300,
    marginBottom: 20,
    resizeMode: 'contain'
  },
  text: {
    fontWeight: 'bold',
    fontSize: 22,
    marginBottom: 20,
    marginHorizontal: 50,
    textAlign: 'center',
    fontFamily: 'Helvetica Neue',
  },
  button: {
    backgroundColor: '#FF934E',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AiStarted;
