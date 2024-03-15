import React, { useEffect, useRef } from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet, Animated, Easing } from 'react-native';


const Splash = ({navigation}) => {
  //splash effect and animation
  const scaleAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Scale animation
    Animated.timing(scaleAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    // Fade in animation
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    const timer = setTimeout(() => {
      navigation.replace('Landing');
    }, 5000);

    return () => {
      clearTimeout(timer);
      scaleAnim.setValue(0);
      fadeAnim.setValue(0);
    };
  }, [scaleAnim, fadeAnim, navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/Logo.png')} 
        style={styles.logo}
        resizeMode="contain"
      />
      <TouchableOpacity onPress={() =>
        navigation.navigate('Landing', {name: 'Landing'})
      } style={styles.button} >
        <Text style={styles.buttonText}>GET STARTED</Text>
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
  },
  logo: {
    width: "75%", 
    height: "75%",
    padding:"10%"
  },
  button: {
    marginTop: 20,
    backgroundColor: '#7265E3', 
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 50,
    width: 322,
    height: 52,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
  },
  
});

export default Splash;
