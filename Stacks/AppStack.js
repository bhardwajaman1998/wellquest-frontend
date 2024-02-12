import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Gender from "../preferencesFlow/Gender"
import Age from "../preferencesFlow/Age"
import Height from '../preferencesFlow/Height'
import Goal from '../preferencesFlow/Goal'
import ActivityLevel from "../preferencesFlow/ActivityLevel"
import Success from "../preferencesFlow/Success"

 // import your main screen component here
import SearchFoodScreen from "../scanFoodFlow/SearchFoodScreen"
import LogFood from "../scanFoodFlow/LogFood"

import HomeScreen from "../dashboardFlow/HomeScreen";
import Icon from 'react-native-vector-icons/FontAwesome';

// import AppointmentCard from "../dashboardFlow/Components/HomeScreen/AppointmentCard";
import FindCoach from "../dashboardFlow/Components/CoachScreen/FindCoach";
import CoachProfile from "../dashboardFlow/Components/CoachScreen/CoachProfile";
// import your main screen component here

const Stack = createNativeStackNavigator()

// DO NOT PUSH THIS FILE TO GIT, IT IS FOR TESTING YOUR FLOW


const AppStack = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
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
                name="Preferences" // give it a unique name
                component={Gender} // use that component here by replacing IndexScreen
                options={{
                    title:"Search Food", 
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

            <Stack.Screen
                name="Age" // give it a unique name
                component={Age}
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
                name="Height" // give it a unique name
                component={Height} // use that component here by replacing IndexScreen
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
                name="Goal" // give it a unique name
                component={Goal} // use that component here by replacing IndexScreen
                options={{
                    title:"Goals", 
                    headerStyle:{
                        backgroundColor:'#2c3e50'
                    },
                    headerTitleStyle:{
                        color:'#fff'
                    }
                }}
            />
            <Stack.Screen
                name="ActivityLevel" // give it a unique name
                component={ActivityLevel} // use that component here by replacing IndexScreen
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
                name="Success" // give it a unique name
                component={Success} // use that component here by replacing IndexScreen
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
            
            {/* <Stack.Screen name="Media" component={MediaScreen} />  //imprt the other screens here like above, same as above but with different names and components */}
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
