import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ChooseGoal = () => {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/Vector1.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>Choose your goal</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={() => console.log("Lose Weight button pressed")}>
          <Text style={styles.buttonText}>Lose Weight</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => console.log("Gain Weight button pressed")}>
          <Text style={styles.buttonText}>Gain Weight</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => console.log("Build Muscle button pressed")}>
          <Text style={styles.buttonText}>Build Muscle</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => console.log("Get Fitter button pressed")}>
          <Text style={styles.buttonText}>Get Fitter</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => console.log("Improve Endurance button pressed")}>
          <Text style={styles.buttonText}>Improve Endurance</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate('SelectHeight', { name: 'SelectHeight' })}
      >
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate('ChatPage', { name: 'ChatPage' })}
      >
        <Text style={styles.backButtonText}>Back</Text>
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
    width: 100,
    height: 100,
    marginRight: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'column', // Change to column for vertical placement
    alignItems: 'center', // Align items at center horizontally
    marginBottom: 30,
  },
  button: {
    backgroundColor: 'white',
    width: 250, // Set a fixed width
    height: 50, // Set a fixed height
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 10, // Separate buttons vertically
    elevation: 4, // Add elevation for shadow effect on Android
    shadowColor: '#000', // Add shadow color
    shadowOffset: { width: 0, height: 4 }, // Add shadow offset
    shadowOpacity: 0.4, // Add shadow opacity
    shadowRadius: 4, // Add shadow radius
    
},
  buttonText: {
    color: '#7265E3',
    fontSize: 18,
  },
  nextButton: {
    backgroundColor: '#FF934E',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 20,
  },
  nextButtonText: {
    color: 'white',
    fontSize: 20,
  },
  backButton:{
    marginTop:10,
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 20,
    borderColor:'black'
  },
  backButtonText: {
    color: 'black',
    fontSize: 20,
  },
});

export default ChooseGoal;

