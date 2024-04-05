import React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

const LandingSwiper = ({ navigation }) => {
  return (
    <View style={styles.container}>
    <Swiper style={styles.wrapper} showsButtons={false} loop={false} activeDotColor='#FF6200' dotStyle={styles.dot} activeDotStyle={styles.activeDot}>
      {/* Landing */}
      <View style={styles.slide}>
        <Image
          source={require('../assets/LandingNew.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Maintain Your Calories And Stay Healthy!</Text>
          <Text style={styles.text}>
            Effortlessly maintain balanced calories, track
            consumption, and meet health goals for
            weight loss, muscle gain, or fitness with our
            app.
          </Text>
        </View>
      </View>

      {/* landing1 */}
      <View style={styles.slide}>
        <Image
          source={require('../assets/Landing1New.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Scan Your Food And Know It's Calories!</Text>
          <Text style={styles.text}>
            Scan your meal with our app; get instant calorie/nutrition details. 
            Like a pocket dietitian, ensuring healthier choices with every bite.
          </Text>
        </View>
      </View>

      {/* lnding2 */}
      <View style={styles.slide}>
        <Image
          source={require('../assets/Landing2New.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Stay Connected With Your personal Trainer!</Text>
          <Text style={styles.text}>
            Our app offers personalized fitness guidance, 
            connecting you with your trainer for custom plans 
            and real-time progress updates, anytime, anywhere.
          </Text>
        </View>
      </View>
    </Swiper>
      <TouchableOpacity onPress={() =>
        navigation.navigate('Path', {name: 'Path'})
      } style={styles.button}>
          <Text style={styles.buttonText}>SIGN UP</Text>
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
    paddingBottom: 60,
    fontFamily: 'Helvetica Neue',
  },
  wrapper: {
    marginTop: 50,
  },
  dot: {
    width: 15,  
    height: 15, 
    borderRadius: 10,
    marginHorizontal: 5,
  },
  activeDot: {
    width: 15,  
    height: 15, 
    borderRadius: 10,
  },
  slide: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  logo: {
    width: '100%',
    height: 250,
    marginTop: '10%',
  },  
  button: {
    backgroundColor: '#7265E3', 
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 50,
    height: 53,
    width: 167,
  },
  textContainer: {
    marginTop: 40,
    marginHorizontal: '5%'
  },
  buttonText: {
    color: '#fff', 
    fontSize: 16,
    fontWeight: 'bold',
    textAlign:"center",
    fontFamily: 'Helvetica Neue',
  },
  title: {
    marginVertical: 10,
    fontSize: 35,
    textAlign: 'left',
    color: '#333',
    fontWeight: 'bold',
    paddingLeft: '0%',
    paddingRight: '0%',
    fontFamily: 'Helvetica Neue',
  },
  text: {
    fontSize: 15,
    textAlign: 'left',
    color: '#7A7A7A',
    fontWeight: '300',
    paddingBottom: '20%',
    paddingLeft: '0%',
    paddingRight: '0%',
    fontFamily: 'Helvetica Neue',
  },
});

export default LandingSwiper;
