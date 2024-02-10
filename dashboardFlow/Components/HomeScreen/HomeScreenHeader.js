import React from 'react'
import {TouchableOpacity, Image, Text,View,SafeAreaView, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreenHeader = () => {

  let user="Jessica";
  const searchIcon = <Icon name="search" size={25} color="#999" />;
  const notifyIcon = <Icon name="bell" size={25} color="#999" />;
  const profileIcon = <Icon name="user" size={25} color="#999" />;

  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.leftContent}></View> */}
      <Text style={styles.welcomeText}>Welcome {user}</Text>

      <View style={styles.rightContent}>
        {searchIcon}
        {notifyIcon}
        {profileIcon}
      </View>
    </SafeAreaView>
  )
};

const styles=StyleSheet.create({
  container: {
    paddingTop: 50, 
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