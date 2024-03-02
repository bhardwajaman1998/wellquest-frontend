//This card is reuseable at DashBoard in appointment and nutrition cards when user is visting first time
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View,Image,Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function CustomCard({ text, buttonText, onPress, imageName }) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardText}>{text}</Text>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Image style={styles.image} source={imageName} size={25} />
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
    borderLeftColor: '#2A9D5C',
    borderLeftWidth: 5,
    borderRadius: 10,
    borderColor:'grey',
    borderWidth:1,

  },
  cardText: {
    fontSize: 16,
  },
  button: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
    width: 149,
    height: 42,
    borderRadius: 20,
    backgroundColor: '#FF934E',
    overflow:'hidden',
  },
  buttonText: {
    marginLeft: 10,
    fontSize: 16,
    color: 'black',
    
  },
  image: {
    marginLeft: 15,
  },
});