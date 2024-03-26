import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const AiStartedTwo = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/Ai.png')} style={styles.image} />
      <Text style={styles.text}>I can generate a nutrition plan for you</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
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
    backgroundColor: '#7265E3',
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

export default AiStartedTwo;
