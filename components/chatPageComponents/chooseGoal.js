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
       </View>
       <View style={{flexDirection: 'row', justifyContent: 'center', alignContent: 'center', width: '100%', gap: 30, marginTop: 10}}>
          <TouchableOpacity
          style={styles.backbutton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backbuttonText}>Go Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.nextbutton}
          onPress={() => navigation.navigate('SelectHeight', { name: 'SelectHeight' })}
        >
          <Text style={styles.nextbuttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#FBF9F6',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 90,
    marginBottom: 20,
  },
  image: {
    width: 120,
    height: 120,
    marginRight: 0,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'Helvetica Neue',
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

export default ChooseGoal;
