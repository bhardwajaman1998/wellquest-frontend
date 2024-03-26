
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
  const { goal, height, weight } = dataToSend;

  const handleNext = () => {
    dataToSend.caloriesRequired = calculatedCalories
    navigation.navigate('SelectPreference', {
      dataToSend
    });
  };
  useEffect(() => {
    calculateCalories();
  }, []);

  const calculateCalories = () => {
    let weight_kg = weight.includes('Lb') ? parseFloat(weight.split(' ')[0]) * 0.453592 : parseFloat(weight.split(' ')[0]);
    let height_cm = height.includes('Feet') ? parseFloat(height.split(' ')[0]) * 30.48 : parseFloat(height.split(' ')[0]);

    let bmr;
    if (goal === 'Lose Weight') {
        bmr = 10 * weight_kg + 6.25 * height_cm - 5 * 25 - 161;
    } else if (goal === 'Gain Weight') {
        bmr = 10 * weight_kg + 6.25 * height_cm - 5 * 25 + 5;
    } else {
        bmr = 10 * weight_kg + 6.25 * height_cm - 5 * 25;
    }

    // Adjust BMR based on activity level
    let activityFactor;
    switch (goal) {
        case 'Build Muscle':
            activityFactor = 1.3;
            break;
        case 'Get Fitter':
            activityFactor = 1.5;
            break;
        case 'Improve Endurance':
            activityFactor = 1.7;
            break;
        default:
            activityFactor = 1.2;
    }

    const dailyCalories = bmr * activityFactor;
    setCalculatedCalories(dailyCalories.toFixed(2));
};
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/Ai.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>{`According to the milestones you should maintain ${calculatedCalories} kcal/day to reach your goal of ${goal}`}</Text>
      </View>
     
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
   // marginBottom: 20,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft:15,
    paddingRight:15,
    gap: 30
  },
  image: {
    width: 200,
    height: 200,
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
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

export default CalculateCalories;