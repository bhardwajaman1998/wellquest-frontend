import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './Splash';
import Landing from './Landing';
import Landing1 from './Landing1';
import Landing2 from './Landing2';
import Path from './Path';
import SignUp from './SignUp';
import Login from './Login';
import ForgotPassword from './ForgotPassword';



const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions = {{headerShown: false}}>
      <Stack.Screen
        name="Splash"
        component={Splash}
        // options={{ title: 'Welcome' }}
      />
      <Stack.Screen
        name="Landing"
        component={Landing}
      />
      <Stack.Screen
        name="Landing1"
        component={Landing1}
      />
      <Stack.Screen
        name="Landing2"
        component={Landing2}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
      />
      <Stack.Screen
        name="Login"
        component={Login}
      />
        <Stack.Screen
      name="ForgotPassword"
      component={ForgotPassword}
      />
       <Stack.Screen
       name="Path"
      component={Path}
       />
    </Stack.Navigator>
    </NavigationContainer>
    );
};

export default MyStack;
