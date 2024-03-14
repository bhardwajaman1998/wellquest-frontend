import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ChooseGoal = () => {
  const navigation = useNavigation();

  const handleGoalSelection = (goal) => {
    const dataToSend = {goal: goal}
    navigation.navigate('SelectHeight', { dataToSend });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/Ai.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>Choose your goal</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={() => handleGoalSelection("Lose Weight")}>
          <Text style={styles.buttonText}>Lose Weight</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleGoalSelection("Gain Weight")}>
          <Text style={styles.buttonText}>Gain Weight</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleGoalSelection("Build Muscle")}>
          <Text style={styles.buttonText}>Build Muscle</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleGoalSelection("Get Fitter")}>
          <Text style={styles.buttonText}>Get Fitter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleGoalSelection("Improve Endurance")}>
          <Text style={styles.buttonText}>Improve Endurance</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity
         style={styles.nextButton}
        onPress={() => navigation.navigate('SelectHeight', { name: 'SelectHeight' })}
       >
         <Text style={styles.nextButtonText}>Next</Text>
       </TouchableOpacity> */}
       
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
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
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
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 10,
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

export default ChooseGoal;
