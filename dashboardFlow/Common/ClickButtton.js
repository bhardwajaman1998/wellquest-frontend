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
      padding: 10,
    },
    image: {
      width: 30,
      height: 30,
      // margin: 10,
    },
    buttonText: {
      fontSize: 20,
      marginLeft: 10,
    },
  });
  export default ClickButtton;