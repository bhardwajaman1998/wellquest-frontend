
import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
const CalculateCalories = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { dataToSend } = route.params;
  const [calculatedCalories, setCalculatedCalories] = useState(0);
  const [calculatedWeight, setCalculatedWeight] = useState(0);
  const [monthlyCalories, setMonthlyCalories] = useState(0);
  //const [CaloriesToLose, setCaloriesToLose] = useState(0);

  const handleNext = () => {
    dataToSend.caloriesRequired = calculatedCalories
    navigation.navigate('SelectPreference', {
      dataToSend
    });
  };
  useEffect(() => {
    calculateCaloriesAndWeight();
  }, []);

    const calculateCaloriesAndWeight = () => {
    const { goal, height, weight } = dataToSend;
    const heightInches = height * 0.39;
    const weightPounds = weight * 2.20;  
    const maintenance = 10 * weightPounds + 6.25 * heightInches - 5;
    setCalculatedCalories(maintenance);
    const caloriesToLoseWeight = maintenance - 700; 
    setMonthlyCalories(caloriesToLoseWeight);
    const caloriesToGainWeight = maintenance + 500; 
    setMonthlyCalories(caloriesToGainWeight);
    let calculatedCalories = 0;
    let calculatedWeight = 0;
    let monthlyCalories = 0;
    if (goal === 'Lose Weight') {
      calculatedCalories =setCalculatedCalories(maintenance);
      calculatedWeight = parseFloat(weight) - 5; 
      monthlyCalories = setMonthlyCalories(caloriesToLoseWeight);
    } 
    else if (goal === 'Gain Weight') {
      calculatedCalories = setCalculatedCalories(maintenance);
      calculatedWeight = parseFloat(weight) + 5; 
      monthlyCalories = setMonthlyCalories(caloriesToGainWeight);
    } 
    else {
      calculatedCalories = setCalculatedCalories(maintenance);
      calculatedWeight = parseFloat(weight); 
      monthlyCalories = 200;
    }
    setCalculatedWeight(calculatedWeight);   
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/Ai.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>{`According to the milestones you should burn ${calculatedCalories} kcal to reach a weight of ${calculatedWeight} kg. You should burn ${monthlyCalories} kcal / month.`}</Text>
      </View>
     
      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
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
    backgroundColor: '#7265E31A',
  },
  header: {
   // marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: -60,
    marginTop:-70,
    paddingLeft:50,
    paddingRight:50,
  },
  image: {
    width: 100,
    height: 250,
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  nextButton: {
    margin: 60,
    backgroundColor: '#7265E3',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 20,
  },
  nextButtonText: {
    color: 'white',
    fontSize: 20,
  },
});

export default CalculateCalories;