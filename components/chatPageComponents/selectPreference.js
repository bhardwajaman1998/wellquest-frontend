import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const SelectPreference = () => {
  const navigation = useNavigation();

  const route = useRoute();

  const { dataToSend } = route.params;

  const handlePreferenceSelection = (preference) => {
    dataToSend.preference = preference
    navigation.navigate('PlanPage', { dataToSend });
  };

  const handleNext = () => {

  }

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
        <View style={{flexDirection: 'row', justifyContent: 'center', alignContent: 'center', width: '100%', gap: 30, marginTop: 60, paddingBottom: 80}}>
          <TouchableOpacity
          style={styles.backbutton}
          onPress={() => navigation.goBack()}
          >
            <Text style={styles.backbuttonText}>Go Back</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.nextbutton}
            onPress={handleNext}
          >
            <Text style={styles.nextbuttonText}>Next</Text>
          </TouchableOpacity>
      </View>
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
    backgroundColor: '#FBF9F6',
  },
  header: {
     marginTop: 60,
     flexDirection: 'column',
     alignItems: 'center',
     justifyContent: 'center',
     paddingLeft:15,
     paddingRight:15,
     gap: 30
   },
  image: {
    width: 150,
    height: 150,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  buttonsContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: 'white',
    borderColor: '#7265E3',
    borderWidth: 1,
    width: 250,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  buttonText: {
    color: '#7265E3',
    fontFamily: 'Helvetica Neue',
    fontSize: 18,
  },
  nextbutton: {
    backgroundColor: '#7265E3',
    borderRadius: 25,
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  nextbuttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Helvetica Neue',
  },
  backbutton: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#7265E3',
    borderRadius: 25,
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  backbuttonText: {
    color: '#7265E3',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Helvetica Neue',
  }
});

export default SelectPreference;
