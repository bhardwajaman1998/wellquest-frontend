//This card is reuseable at DashBoard in appointment and nutrition cards when user is visting first time
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View,Image,Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function CustomCard({ text, buttonText, onPress, imageName, imgSize }) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardText}>{text}</Text>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Image style={styles.image} source={imageName} size={imgSize} />
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 323,
    marginLeft: 10,
    padding: 15,
    borderLeftColor: '#7265E3',
    borderLeftWidth: 5,
    borderRadius: 10,
    borderColor:'grey',
    borderWidth:1,
  },
  cardText: {
    fontSize: 16,
  },
  button: {
    display:'flex',
    flexDirection:'row',
    marginTop: 10,
    alignItems: 'center',
    width: '50%',
    height: 50,
    borderRadius: 18,
    backgroundColor: '#7265E3',
    // overflow:'hidden',
  },
  buttonText: {
    marginLeft: 0,
    fontSize: 14,
    color: '#FFF',
    fontWeight:'bold',
    
  },
  image: {
    marginLeft: 10,
  },
});