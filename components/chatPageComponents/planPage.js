import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const PlanPage = () => {
  const navigation = useNavigation();

  const route = useRoute();

  const { dataToSend } = route.params;

  const handleMealSelection = (mealType) => {

    dataToSend.mealType  = mealType;
    navigation.navigate('AiOptions', { dataToSend });
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
        <Text style={styles.title}>Here is your plan according to your goals</Text>
      </View>

      <View style={styles.cardContainer}>
        <TouchableOpacity style={styles.card} onPress={() => handleMealSelection('Breakfast')}
>
          <Image
            source={require('../../assets/breakfast.png')}
            style={styles.cardImage}
            resizeMode="cover"
          />
          <Text style={styles.cardTitle}>Breakfast</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => handleMealSelection('Lunch')}>
          <Image
            source={require('../../assets/lunch.png')}
            style={styles.cardImage}
            resizeMode="cover"
          />
          <Text style={styles.cardTitle}>Lunch</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => handleMealSelection('Dinner')}>
          <Image
            source={require('../../assets/dinner.png')}
            style={styles.cardImage}
            resizeMode="cover"
          />
          <Text style={styles.cardTitle}>Dinner</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'center', alignContent: 'center', width: '100%', gap: 10, marginTop: 30, paddingBottom: 80}}>
          <TouchableOpacity
          style={styles.backbutton}
          onPress={() => navigation.goBack()}
          >
            <Text style={styles.backbuttonText}>TRY AGAIN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.nextbutton}
            onPress={handleNext}
          >
            <Text style={styles.nextbuttonText}>I''ll TAKE IT</Text>
          </TouchableOpacity>
      </View>



      {/* <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('AiOptions')}>
        <Text style={styles.nextButtonText}>I WILL TAKE IT</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tryButton} onPress={() => navigation.navigate('AiOptions')}>
        <Text style={styles.tryButtonText}>TRY AGAIN</Text>
      </TouchableOpacity> */}
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
    gap: 30
  },
  header: {
    marginTop: 10,
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
    textAlign: 'center'
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    justifyContent: 'space-between',
    marginBottom: 0,
    marginTop: 30,
    width: '100%',
    backgroundColor: '#FBF9F6'
  },
  card: {
    width: '30%',
    backgroundColor: 'white',
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#7265E3',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  cardImage: {
    width: '100%',
    height: 100,
    resizeMode: 'contain'
  },
  cardTitle: {
    fontSize: 18,
    padding: 10,
    textAlign: 'center',
    color: '#7265E3',
  },
  nextbutton: {
    backgroundColor: '#7265E3',
    borderRadius: 25,
    width: 170,
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
    width: 170,
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

export default PlanPage;
