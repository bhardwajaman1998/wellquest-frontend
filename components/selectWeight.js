import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const SelectHeight = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/Vector.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>Lets confirm  your current weight</Text>
      </View>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="67"
          placeholderTextColor="grey"
        />
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
  textInputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  textInput: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    borderColor: 'grey',
    borderWidth: 1,
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

export default SelectHeight;
