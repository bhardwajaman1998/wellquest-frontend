import * as React from 'react';
import Splash from '../onboardingFlow/Splash';
import Landing from '../components/onboardingComponents/Landing';
import Landing1 from '../components/onboardingComponents/Landing1';
import Landing2 from '../components/onboardingComponents/Landing2';
import Path from '../components/onboardingComponents/Path';
import SignUp from '../components/onboardingComponents/SignUp';
import Login from '../components/onboardingComponents/Login';
import ForgotPassword from '../components/onboardingComponents/ForgotPassword';

import {Stack} from './Stack';

const OnboardingStack = () => {
  return (
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
    );
};

export default OnboardingStack;
