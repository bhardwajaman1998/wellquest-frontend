//This card is reuseable at DashBoard in appointment and nutrition cards when user is visting first time
import React from 'react';

import { Text, View, SafeAreaView, StyleSheet, Platform, Image } from 'react-native';

export default function FlipCard({ isForIntake = false, titleText, descriptionText, rotate }) {

  return (
    <View style={styles.card}>
        <Image source={isForIntake ? (require('../../../../assets/intake-icon.png')) : (require('../../../../assets/consumption-icon.png'))} style={styles.cardImage} />
        <Text style={styles.cardText}>{titleText}</Text>
        <Text style={styles.cardTextDescription}>{descriptionText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 130,
    marginTop: 10,
    padding: 10,
    borderRadius: 20,
    borderColor:'grey',
    borderWidth:0,
    backgroundColor:'#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, // For Android shadow
    shadowColor: '#7265E3', // For iOS shadow
    shadowOffset: {
        width: 0,
        height: 4,
    },
    shadowOpacity: 0.65,
    shadowRadius: 3.84,
  },
  cardText: {
    fontSize: 14,
    marginTop: 15,
    textAlign: "center",
    fontWeight: 'bold'
  },
  cardTextDescription:{
    fontSize: 14,
    marginTop: 10,
    textAlign: "center",
    color: 'grey'
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
    justifyContent:'space-around',
  },
  buttonText: {
    fontSize: 14,
    color: '#FFF',
    fontWeight:'bold',
    marginLeft:0,
  },
  cardImage: {
    marginTop: 5,
    width: 35,
    height: 35,
    resizeMode: 'contain'
  },
});