import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const AiStartedTwo = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/Vector1.png')} style={styles.image} />
      <Text style={styles.text}>I can generate a nutrition plan for you</Text>
      <TouchableOpacity style={styles.button}
      onPress={() =>
        navigation.navigate('ChooseGoal', {name: 'ChooseGoal'})
      }
      
      >
        <Text style={styles.buttonText}>LETS'S GET STARTED</Text>
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
    height: 300,
    marginBottom: 20,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20,
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

export default AiStartedTwo;
