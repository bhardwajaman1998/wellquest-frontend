import * as React from 'react';
import Splash from '../onboardingFlow/Splash';
import Landing from '../onboardingFlow/Landing';
import Landing1 from '../onboardingFlow/Landing1';
import Landing2 from '../onboardingFlow/Landing2';
import Path from '../onboardingFlow/Path';
import SignUp from '../onboardingFlow/SignUp';
import Login from '../onboardingFlow/Login';
import ForgotPassword from '../onboardingFlow/ForgotPassword';

import {Stack} from './Stack';
import LandingSwiper from '../onboardingFlow/LandingSwiper';

const OnboardingStack = () => {
  return (
    <Stack.Navigator screenOptions = {{headerShown: false}}>
      <Stack.Screen
        name="Splash"
        component={Splash}
        // options={{ title: 'Welcome' }}
      />
      <Stack.Screen
        name="LandingSwiper"
        component={LandingSwiper}
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
