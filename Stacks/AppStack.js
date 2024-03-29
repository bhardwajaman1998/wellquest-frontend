import { NavigationContainer } from "@react-navigation/native"

import OnboardingStack from "./OnboardingStack"
import PreferencesStack from "./PreferencesStack"

import {Stack} from './Stack';
import DashboardStack from "./DashboardStack";
import ChatPageStack from "./ChatPageStack";
import SearchFoodStack from "./SearchFoodStack";
// import Splash from "../onboardingFlow/Splash";


const AppStack = () => {

  return (
  <NavigationContainer>
    <Stack.Navigator >

        <Stack.Screen
          name="Onboarding"
          component={OnboardingStack}
          options = {{headerShown: false}}
        />
        <Stack.Screen
          name="PreferencesStack"
          component={PreferencesStack}
          options = {{headerShown: false}}
        />
        <Stack.Screen
          name="Dashboard"
          component={DashboardStack}
          options = {{headerShown: false}}
        />
        {/* <Stack.Screen
          name="AiChat"
          component={ChatPageStack}
          options = {{headerShown: false}}
        />
        <Stack.Screen
          name="SearchFoodStack"
          component={SearchFoodStack}
          options = {{headerShown: false}}
        />  */}
    </Stack.Navigator>
  </NavigationContainer>

  )
}

export default AppStack