import React from 'react';
import Landing1 from './Landing1';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Landing = ({navigation}) => {
   
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/Landing.png')} 
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.text}>Maintain your calories and stay healthy!</Text>
      <View style={styles.bottomContainer}>
      <TouchableOpacity onPress={() =>
        navigation.navigate('Landing1', {name: 'Landing1'})
      } style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <View style={styles.eclipsesContainer}>
          <View style={styles.eclipse} />
          <View style={styles.eclipse1} />
          <View style={styles.eclipse2} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', 
  },
  logo: {
    width: 400, 
    height: 500,
  },
  text: {
    marginVertical: 10,
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 20,
    width: '100%',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#7265E3', 
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff', 
    fontSize: 18,
    fontWeight: 'bold',
  },
  eclipsesContainer: {
    flexDirection: 'row',
  },
  eclipse: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#40CC7C',
    marginHorizontal: 5,
  },
  eclipse1: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#333',
    marginHorizontal: 5,
  },
  eclipse2: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#333',
    marginHorizontal: 5,
  },
});

export default Landing;
