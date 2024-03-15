import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import Swiper from 'react-native-swiper'
import AiStarted from './aiStarted';
import AiStartedTwo from './aiStartedtwo'; 
import { NativeBaseProvider } from 'native-base';
import { useNavigation } from '@react-navigation/native';

const GetStarted = () => {
  const navigation = useNavigation();

  return(
    <View style={styles.container}>
        <Swiper style={styles.wrapper} showsButtons={false} loop={false}>
            <AiStarted /> 
            <AiStartedTwo /> 
        </Swiper>
        <TouchableOpacity style={styles.button}
          onPress={() =>
            navigation.navigate('ChooseGoal', {name: 'ChooseGoal'})
          }
            >
          <Text style={styles.buttonText}>CONTINUE</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 20,
    height: '80%',
   // backgroundColor: '#7265E31A',
  },
  wrapper:{
    //backgroundColor: '#7265E31A',
    
  },
  button: {
    backgroundColor: '#FF934E',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
})
 export default GetStarted;
