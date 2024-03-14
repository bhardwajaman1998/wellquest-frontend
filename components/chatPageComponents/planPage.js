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
        <TouchableOpacity style={styles.card} onPress={() => handleMealSelection('breakfast')}
>
          <Image
            source={require('../../assets/breakfast.png')}
            style={styles.cardImage}
            resizeMode="cover"
          />
          <Text style={styles.cardTitle}>Breakfast</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => handleMealSelection('lunch')}>
          <Image
            source={require('../../assets/lunch.png')}
            style={styles.cardImage}
            resizeMode="cover"
          />
          <Text style={styles.cardTitle}>Lunch</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => handleMealSelection('dinner')}>
          <Image
            source={require('../../assets/dinner.png')}
            style={styles.cardImage}
            resizeMode="cover"
          />
          <Text style={styles.cardTitle}>Dinner</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('AiOptions')}>
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
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: '100%',
  },
  card: {
    width: '30%',
    backgroundColor: 'white',
    borderRadius: 8,
    overflow: 'hidden',
    alignItems: 'center',
  },
  cardImage: {
    width: '100%',
    height: 100,
  },
  cardTitle: {
    fontSize: 18,
    padding: 10,
    textAlign: 'center',
    color: '#7265E3',
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
});

export default PlanPage;
