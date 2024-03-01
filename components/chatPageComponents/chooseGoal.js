import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ChooseGoal = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/Vector.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>Choose your goal</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Lose Weight</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.buttonsContainer}>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Gain Weight</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Build Muscle</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Get Fitter</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Improve Endurance</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.nextButton}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap', // Allow buttons to wrap to the next line if needed
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    margin: 5,
  },
  buttonText: {
    color: 'grey',
    fontSize: 18,
  },
  nextButton: {
    backgroundColor: 'green',
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 8,
  },
  nextButtonText: {
    color: 'white',
    fontSize: 20,
  },
});

export default ChooseGoal;
