import React from 'react';
// import Landing2 from './Landing2';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Landing1 = ({navigation}) => {
   
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/Landing1New.png')} 
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Scan Your Food And Know It's Calories!</Text>
      <Text style={styles.text}>
      Scan your meal with our app; get instant calorie/nutrition details. 
      Like a pocket dietitian, ensuring healthier choices with every bite.</Text>
      <View style={styles.bottomContainer}>
      <View style={styles.eclipsesContainer}>
        <View style={styles.eclipse} />
          <View style={styles.eclipse1} />
          <View style={styles.eclipse2} />
        </View>
        <TouchableOpacity onPress={() =>
        navigation.navigate('Landing2', {name: 'Landing2'})
      } style={styles.button}>
          <Text style={styles.buttonText}>NEXT</Text>
        </TouchableOpacity>
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
    fontFamily: 'Helvetica Neue',
  },
  logo: {
    width: "100%", 
    height: 420,
    marginTop:"10%"
     },
  title: {
    marginVertical: 10,
    fontSize: 35,
    textAlign: 'left',
    color: '#333',
    fontWeight: "bold",
    marginTop:"-15%",
    paddingLeft: "5%",
    paddingRight: "5%",
    fontFamily: 'Helvetica Neue',
    
  },
  text: {
    fontSize: 15,
    textAlign: 'left',
    color: '#7A7A7A',
     fontWeight: "300",
     paddingBottom: "50%",
     paddingLeft: "5%",
    paddingRight: "5%",
    fontFamily: 'Helvetica Neue',
    
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
    borderRadius: 50,
    height: 53,
    width: 147,
  },
  buttonText: {
    color: '#fff', 
    fontSize: 16,
    fontWeight: 'bold',
    textAlign:"center",
    fontFamily: 'Helvetica Neue',
  },
  eclipsesContainer: {
    flexDirection: 'row',
  },
  eclipse: {
    width: 20,
    height: 20,
    borderRadius: 25,
    backgroundColor: '#D9D9D9',
    marginHorizontal: 10,
    marginVertical: 10
  },
  eclipse1: {
    width: 20,
    height: 20,
    borderRadius: 25,
    backgroundColor: '#FF6200',
    marginHorizontal: 10,
    marginVertical: 10
  },
  eclipse2: {
    width: 20,
    height: 20,
    borderRadius: 25,
    backgroundColor: '#D9D9D9',
    marginHorizontal: 10,
    marginVertical: 10,
  },
});

export default Landing1;
