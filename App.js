import { StyleSheet, Text, View } from 'react-native';
import { GluestackUIProvider } from '@gluestack-ui/themed'
import { config } from '@gluestack-ui/config'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import AppStack from './Stacks/AppStack';

import * as Font from 'expo-font'
import MyStack from './onboardingFlow/MyStack';
import AppLoading from 'expo-app-loading'
import { useState } from 'react';

const getFonts = () => Font.loadAsync({
  'poppins-light': require('./assets/fonts/Poppins-Light.ttf'),
  'poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
  'poppins-semibold': require('./assets/fonts/Poppins-SemiBold.ttf'),
  'poppins-bold': require('./assets/fonts/Poppins-Bold.ttf'),
})

export default function App() {

  const [fonstLoaded, setFontsLoaded] = useState(false)

  if (fonstLoaded){
    return (
      <SafeAreaProvider>
          <GluestackUIProvider config={config}>
            <MyStack style={styles.container}/>
          </GluestackUIProvider>
      </SafeAreaProvider>
    );
  }else{
    return (
      <AppLoading 
        startUpdatingChannels={true}
        startAsync={getFonts}
        onError={
          getFonts
        }
        onFinish={()=> setFontsLoaded(true)}
    />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'poppins-regular'
  },
});
