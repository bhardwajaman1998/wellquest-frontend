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
      <View>
        <Text style={styles.pathText}>Choose Your Path</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonE}>
          <Text style={styles.buttonText}>Enthusiast</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>
        navigation.navigate('SignUp', {name: 'SignUp'})
      } style={styles.buttonC}>
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
      height: 380,
      borderRadius: 200,
    },
    pathText:{
          fontSize: 20,
          fontWeight: "bold",
          marginTop:20,
    },
    buttonContainer: {
      marginTop: 50,
    },
    buttonE: {
      backgroundColor: '#7265E3', 
      paddingVertical: 15,
      paddingHorizontal: 30,
      borderRadius: 50,
      marginBottom: 10,
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      width:160,
      height:52,
    },
    buttonC: {
        backgroundColor: '#40CC7C', 
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 50,
        marginBottom: 10,
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        width:160,
        height:52,
      },
    buttonText: {
      color: '#fff', 
      fontSize: 18,
      fontWeight: 'bold',
    },
  });
 

export default Path;
