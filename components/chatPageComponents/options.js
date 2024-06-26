import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Options = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/Vector.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>Here is your plan according to your goals.</Text>
      </View>
      <View style={styles.cardContainer}>
        <View style={[styles.card, styles.cardMarginRight]}>
          <Image
            source={require('../../assets/breakfast.png')}
            style={styles.cardImage}
            resizeMode="cover"
          />
          <Text style={styles.cardTitle}>Tofu</Text>
          <Text style={styles.cardTitle1}>Tofu with lettuce and tomato ch</Text>
        </View>
        
        <View style={[styles.card, styles.cardMarginRight]}>
          <Image
            source={require('../../assets/breakfast.png')}
            style={styles.cardImage}
            resizeMode="cover"
          />
          <Text style={styles.cardTitle}>Roti</Text>
          <Text style={styles.cardTitle1}>Tofu with lettuce and tomato ch</Text>
        </View>
      </View>
      
      <View style={styles.cardContainer}>
        <View style={[styles.card, styles.cardMarginRight]}>
          <Image
            source={require('../../assets/lunch.png')}
            style={styles.cardImage}
            resizeMode="cover"
          />
          <Text style={styles.cardTitle}>Curd</Text>
          <Text style={styles.cardTitle1}>Tofu with lettuce and tomato ch</Text>
        </View>
        <View style={[styles.card, styles.cardMarginRight]}>
          <Image
            source={require('../../assets/breakfast.png')}
            style={styles.cardImage}
            resizeMode="cover"
          />
          <Text style={styles.cardTitle}>Tofu</Text>
          <Text style={styles.cardTitle1}>Tofu with lettuce and tomato ch</Text>
        </View>
      </View>
      <View style={styles.cardContainer}>
        <View style={[styles.card, styles.cardMarginRight]}>
          <Image
            source={require('../../assets/lunch.png')}
            style={styles.cardImage}
            resizeMode="cover"
          />
          <Text style={styles.cardTitle}>Curd</Text>
          <Text style={styles.cardTitle1}>Tofu with lettuce and tomato ch</Text>
        </View>
        <View style={[styles.card, styles.cardMarginRight]}>
          <Image
            source={require('../../assets/breakfast.png')}
            style={styles.cardImage}
            resizeMode="cover"
          />
          <Text style={styles.cardTitle}>Tofu</Text>
          <Text style={styles.cardTitle1}>Tofu with lettuce and tomato ch</Text>
        </View>
      </View>
      
      <TouchableOpacity style={styles.nextButton}
      onPress={() =>
        navigation.navigate('ChatPage', {name: 'ChatPage'})
      }>
        <Text style={styles.nextButtonText}>CONFIRM</Text>
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
  cardTitle1:{
color:'grey',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 15,
    height: 5,
    marginRight: 10,
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
    width: '40%',
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
    textAlign: 'center',
    fontWeight: 'bold'
  },
  cardMarginRight: {
    marginRight: 20,
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

export default Options;
