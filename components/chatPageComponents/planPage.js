import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const PlanPage = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/Vector1.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>Here is your plan according to your goals</Text>
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Image
            source={require('../../assets/breakfast.png')}
            style={styles.cardImage}
            resizeMode="cover"
          />
          <Text style={styles.cardTitle}>Breakfast</Text>
        </View>
        </View>
        <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Image
            source={require('../../assets/lunch.png')}
            style={styles.cardImage}
            resizeMode="cover"
          />
          <Text style={styles.cardTitle}>Lunch</Text>
        </View>
        </View>
        <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Image
            source={require('../../assets/lunch.png')}
            style={styles.cardImage}
            resizeMode="cover"
          />
          <Text style={styles.cardTitle}>Dinner</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.nextButton}
      onPress={() =>
        navigation.navigate('Options', {name: 'Options'})
      }
      >
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
    paddingLeft:30,
    paddingRight:50,
  },
  image: {
    
    width: 100,
    height: 105,
    marginRight:0,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    width: '30%',
    backgroundColor: 'white',
    borderRadius: 8,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: 100,
  },
  cardTitle: {
    fontSize: 18,
    padding: 10,
    textAlign: 'center',
    color:'#7265E3'
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
