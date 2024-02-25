//This card is reuseable at DashBoard in appointment and nutrition cards when user is visting first time
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function CustomCard({ text, buttonText, onPress, iconName }) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardText}>{text}</Text>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Icon style={styles.icon} name={iconName} size={25} />
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
    borderLeftColor: 'grey',
    borderLeftWidth: 5,
    borderRadius: 10,
    backgroundColor: '#fff',
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
    backgroundColor: 'lightgrey',
  },
  buttonText: {
    marginLeft: 20,
    fontSize: 16,
    color: 'black',
  },
  icon: {
    marginLeft: 15,
  },
});



// card: {
//   width: 323,
//   marginLeft: 10,
//   borderRadius: 8,
//   backgroundColor: '#fff',
//   paddingVertical: 20,
//   paddingHorizontal: 25,
//   marginVertical: 10,
//   ...Platform.select({
//       ios: {
//           shadowColor: '#000',
//           shadowOffset: { width: 0, height: 2 },
//           shadowOpacity: 0.23,
//           shadowRadius: 2,
//       },
//       android: {
//           elevation: 4,
//       },
//   }),
// },
// shadowProp: {
//   shadowColor: '#171717',
//   shadowOffset: { width: -2, height: 4 },
//   shadowOpacity: 0.2,
//   shadowRadius: 3,
// },
// cardText: {
//   fontSize: 16,
// },
// button: {
//   flexDirection: 'row',
//   marginTop: 10,
//   alignItems: 'center',
//   width: 149,
//   height: 42,
//   borderRadius: 20,
//   backgroundColor: 'lightgrey',
// },
// buttonText: {
//   marginLeft: 15,
//   fontSize: 16,
//   color: 'black',
// },
// icon: {
//   marginLeft: 15,
// },