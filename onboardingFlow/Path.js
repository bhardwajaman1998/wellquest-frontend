import React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Path = ({navigation}) => {
   
  return (
    <View style={styles.container}>
       <Image
        source={require('../assets/Path.png')} 
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonE}>
          <Text style={styles.buttonText}>Enthusiast</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonC}>
          <Text style={styles.buttonText}>Coach</Text>
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
    },
    logo: {
      width: 400, 
      height: 500,
    },
    buttonContainer: {
      marginTop: 20,
    },
    buttonE: {
      backgroundColor: '#7265E3', 
      paddingVertical: 15,
      paddingHorizontal: 30,
      borderRadius: 10,
      marginBottom: 10,
    },
    buttonC: {
        backgroundColor: '#40CC7C', 
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
        marginBottom: 10,
      },
    buttonText: {
      color: '#fff', 
      fontSize: 18,
      fontWeight: 'bold',
    },
  });
 

export default Path;
