import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '@gluestack-ui/themed';

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/loading-icon.png')} style={styles.image} />
      <Text style={styles.text}>Generating nutritional plan</Text>
      <Text style={styles.text}>.....</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
    },
    image: {
      width: 200,
      height: 300,
      marginBottom: 20,
      resizeMode: 'contain'
    },
    text: {
      fontWeight: 'bold',
      fontSize: 22,
      marginBottom: 20,
      marginHorizontal: 50,
      textAlign: 'center',
      fontFamily: 'Helvetica Neue',
    }
  });


export default LoadingScreen;