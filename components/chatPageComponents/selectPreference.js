import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SelectPreference = () => {
  const navigation = useNavigation();

  const handlePreferenceSelection = (preference) => {
    navigation.navigate('PlanPage', { preference });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/Ai.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>Choose your Preference</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={() => handlePreferenceSelection('vegetarian')}>
          <Text style={styles.buttonText}>Vegetarian</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handlePreferenceSelection('non-vegetarian')}>
          <Text style={styles.buttonText}>Non Vegetarian</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handlePreferenceSelection('vegan')}>
          <Text style={styles.buttonText}>Vegan</Text>
        </TouchableOpacity>
      </View>
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
    
    paddingLeft:40,
    paddingRight:40,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: 'white',
    width: 250,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  buttonText: {
    color: '#7265E3',
    fontSize: 18,
  },
});

export default SelectPreference;
