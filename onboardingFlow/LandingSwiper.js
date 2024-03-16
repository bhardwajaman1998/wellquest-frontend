import React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

const LandingSwiper = ({ navigation }) => {
  return (
    <View style={styles.container}>
    <Swiper style={styles.wrapper} showsButtons={false} loop={false}>
      {/* Landing */}
      <View style={styles.slide}>
        <Image
          source={require('../assets/Landing.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>Maintain Your {'\n'}Calories And Stay {'\n'}Healthy!</Text>
        <Text style={styles.text}>
          Effortlessly maintain balanced calories, track
          consumption, and meet health goals for
          weight loss, muscle gain, or fitness with our
          app.
        </Text>
      </View>

      {/* landing1 */}
      <View style={styles.slide}>
        <Image
          source={require('../assets/Landing1.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>Scan Your Food And Know It's Calories!</Text>
        <Text style={styles.text}>
          Scan your meal with our app; get instant calorie/nutrition details. 
          Like a pocket dietitian, ensuring healthier choices with every bite.
        </Text>
      </View>

      {/* lnding2 */}
      <View style={styles.slide}>
        <Image
          source={require('../assets/Landing2.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>Stay Connected With Your Trainer!</Text>
        <Text style={styles.text}>
          Our app offers personalized fitness guidance, 
          connecting you with your trainer for custom plans 
          and real-time progress updates, anytime, anywhere.
        </Text>
      </View>
    </Swiper>
      <TouchableOpacity onPress={() =>
        navigation.navigate('Path', {name: 'Path'})
      } style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', 
    paddingBottom: 60
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  logo: {
    width: '100%',
    height: 300,
    marginTop: '10%',
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
    textAlign:"center"
  },
  title: {
    marginVertical: 10,
    fontSize: 35,
    textAlign: 'left',
    color: '#333',
    fontWeight: 'bold',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  text: {
    fontSize: 15,
    textAlign: 'left',
    color: '#333',
    fontWeight: '300',
    paddingBottom: '20%',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
});

export default LandingSwiper;
