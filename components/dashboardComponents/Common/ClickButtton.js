import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';

  
  const ClickButtton = ({ btntext, iconUrl, onPress }) => {
    return (
      <TouchableOpacity onPress={onPress} style={buttonStyles.button}>
        <Image source={iconUrl} style={buttonStyles.image} />
        <Text style={buttonStyles.buttonText}>
  
  
          {btntext}
        </Text>
      </TouchableOpacity>
    );
  };
  const buttonStyles = StyleSheet.create({
    button: {
      margin: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 25,
      borderWidth: 1,
      padding: 8,
      backgroundColor:"#7265E3",
    },
    image: {
      width: 30,
      height: 30,
      // margin: 10,
    },
    buttonText: {
      fontSize: 17,
      marginLeft: 10,
      color:'#FFF',
      fontWeight:'bold',
    },
  });
  export default ClickButtton;