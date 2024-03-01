

import PreferencesScreen from "../preferencesFlow/PreferencesScreen"

import {Stack} from './Stack';

const PreferencesStack = () => {
  return (
        <Stack.Navigator >
            <Stack.Screen
                name="Preferences" 
                component={PreferencesScreen} 
                options={{
                  title:"",
                  headerStyle:{
                },
                headerShown: true,
                headerTitleStyle:{
                },
                headerTintColor: "#fff",
                headerShadowVisible: false,
                }}
            />
        </Stack.Navigator>
  )
}

export default PreferencesStack