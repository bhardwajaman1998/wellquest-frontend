import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Icon from 'react-native-vector-icons/FontAwesome';

import PreferencesScreen from "../preferencesFlow/PreferencesScreen"
import SearchFoodScreen from "../scanFoodFlow/SearchFoodScreen"
import LogFood from "../scanFoodFlow/LogFood"
import HomeScreen from "../dashboardFlow/HomeScreen";
import FindCoach from "../dashboardFlow/Components/CoachScreen/FindCoach";
import CoachProfile from "../dashboardFlow/Components/CoachScreen/CoachProfile";
import NavBar from "../dashboardFlow/NavBar";

const Stack = createNativeStackNavigator()

const AppStack = () => {
  return (
    <NavigationContainer>
     
        <Stack.Navigator>
          <Stack.Screen
            name="NavBar"
            component={NavBar}
            options={{
              headerShown:false,
            } 
          }
          />
            {/* For HomeScreen navigation */}
            <Stack.Screen
                name="Home Screen" // give it a unique name
                component={HomeScreen} // use that component here by replacing IndexScreen
                options={{
                    title:"WellQuest", 
                    headerStyle:{
                        backgroundColor:'#2c3e50'
                    },
                    headerTitleStyle:{
                        color:'#fff'
                    }
                }}
            />
            
            <Stack.Screen
                name="LogFood" // give it a unique name
                component={LogFood}
                options={{
                    title:"Log Food", 
                    headerStyle:{
                        backgroundColor:'#2c3e50'
                    },
                    headerTitleStyle:{
                        color:'#fff'
                    }
                }}
            />        

                {/* for finding the coach in the ddashboard navigation */}
            <Stack.Screen
              name="Find Coach"
              component={FindCoach}
              options={({ navigation }) => ({
                title: 'Find Coach',
                headerStyle: {
                  backgroundColor: '#fff'
                },
                headerTintColor: '#fff',
                headerLeft: () => (
                  <Icon
                    name="arrow-left"
                    size={25}
                    style={{ marginLeft: 10 }}
                    onPress={() => navigation.goBack()}
                  />
                ),
                headerRight: () => (
                  <Icon
                    name="bell"
                    size={25}
                    style={{ marginRight: 10 }}
                    onPress={() => {
                      // Add your functionality here
                    }}
                  />
              )
            })}
        />
        {/* for checking the coach profile */}
             <Stack.Screen
              name="Select Coach"
              component={CoachProfile}
              options={({ navigation }) => ({
                title: '',
                headerStyle: {
                  backgroundColor: '#fff'
                },
                headerTintColor: '#fff',
                headerLeft: () => (
                  <Icon
                    name="arrow-left"
                    size={25}
                    style={{ marginLeft: 10 }}
                    onPress={() => navigation.goBack()}
                  />
                )
            })}
        />
            
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppStack

 {/* <Stack.Screen
                name="Index" // give it a unique name
                component={SearchFoodScreen} // use that component here by replacing IndexScreen
                options={{
                    title:"Search Food", 
                    headerStyle:{
                        backgroundColor:'#2c3e50'
                    },
                    headerTitleStyle:{
                        color:'#fff'
                    }
                }}
            /> */}

{/* <Stack.Screen
                name="Preferences" // give it a unique name
                component={PreferencesScreen} // use that component here by replacing IndexScreen
                options={{
                    title:"Preferences", 
                    headerStyle:{
                        backgroundColor:'#2c3e50'
                    },
                    headerTitleStyle:{
                        color:'#fff'
                    }
                }}
            /> */}