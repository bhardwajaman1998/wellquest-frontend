import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
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
