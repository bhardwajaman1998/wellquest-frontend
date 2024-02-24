//This needs to be changed acc to the updated mockUps NOT USING IT ANYWHERE FOR NOW
import React from 'react'
import {TouchableOpacity, Image, Text,View,SafeAreaView, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreenHeader = () => {
  return (
    <SafeAreaView style={styles.container}>
      
    </SafeAreaView>
  )
};

const styles=StyleSheet.create({
  container: {
    padding:10,
    height:50,
    paddingTop: 5, 
    paddingBottom:20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
},
welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 0, // Adjust left margin
},
rightContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 100,
},
});

export default HomeScreenHeader;