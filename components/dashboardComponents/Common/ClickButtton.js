import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';

  
  const ClickButtton = ({ btntext, iconUrl, onPress }) => {
    return (
      <TouchableOpacity onPress={onPress} style={ btntext == "Message" ? (buttonStyles.buttonMessage) : (buttonStyles.button)}>
        <Image source={iconUrl} style={ btntext == "Message" ? (buttonStyles.image) : (buttonStyles.scheduleImage)} />
        <Text style={ btntext == "Message" ? (buttonStyles.messageButtonText) : (buttonStyles.buttonText) }>
          {btntext}
        </Text>
      </TouchableOpacity>
    );
  };
  const buttonStyles = StyleSheet.create({
    button: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 25,
      borderWidth: 0,
      width: '50%',
      padding: 10,
      backgroundColor:"#7265E3",
    },
    buttonMessage: {
      width: '50%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 25,
      borderWidth: 0.2,
      borderColor: '#7265E3',
      padding: 10,
      backgroundColor:"white",
    },
    image: {
      width: 25,
      height: 25,
      resizeMode: 'contain'
    },
    scheduleImage: {
      width: 35,
      height: 25,
      resizeMode: ''
    },
    buttonText: {
      fontSize: 17,
      marginLeft: 5,
      color:'#FFF',
      fontWeight:'bold',
    },
    messageButtonText: {
      fontSize: 17,
      marginLeft: 10,
      color:'#7265E3',
      fontWeight:'bold',
    },
  });
  export default ClickButtton;