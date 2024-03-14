import React from 'react'
import { Text, View } from 'react-native'
import Swiper from 'react-native-swiper'
import AiStarted from './aiStarted';
import AiStartedTwo from './aiStartedtwo'; 

const getStarted = () => {
  return(
  <Swiper style={styles.wrapper} showsButtons loop={false}>
    <View testID="Hello" style={styles.slide1}>
    <AiStarted /> 
    </View>
    <View testID="Beautiful" style={styles.slide2}>
    <AiStartedTwo /> 
    </View>
    
  </Swiper>
  )
}

var styles = {
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  
}
 export default getStarted;
