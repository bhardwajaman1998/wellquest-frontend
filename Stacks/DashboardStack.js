
import Icon from 'react-native-vector-icons/FontAwesome';

import { Image } from '@gluestack-ui/themed'

import HomeScreen from "../dashboardFlow/HomeScreen";
import FindCoach from "../dashboardFlow/Components/CoachScreen/FindCoach";
import CoachProfile from "../dashboardFlow/Components/CoachScreen/CoachProfile";
import NavBar from "../dashboardFlow/NavBar";
import ScheduleScreen from "../dashboardFlow/Components/Schedule/ScheduleScreen";
import ChatPage from "../dashboardFlow/ChatPage";
import NotificationScreen from "../dashboardFlow/NotificationScreen";
import AppointmentScreen from "../dashboardFlow/Components/Schedule/AppointmentScreen";

import {Stack} from './Stack';

const DashboardStack = () => {
  return (
        <Stack.Navigator >
            <Stack.Screen
                name="Back"
                component={NavBar}
                options={({ navigation }) => ({
                    title: "WellQuest",
                    headerStyle: {
                      backgroundColor: '#7265E3'
                    },
                    headerTitleStyle: {
                      color: '#fff'
                    },
                    headerShown:true,
                    headerLeft: () => (
                        <Image
                            source={require('../assets/logo_white.png')} // Replace with the path to your PNG file
                            style={{ width: 45, height: 25, resizeMode: 'contain'}} // Adjust width and height as needed
                        />
                    ),
                    headerRight: () => (
                      <Icon.Button
                        name="bell"
                        size={25}
                        backgroundColor="transparent"
                        onPress={() => navigation.navigate("Notification Screen")}
                      />
                    )
                  })}
              
            />
           <Stack.Screen
                name="Home Screen"
                component={HomeScreen}
                options={({ navigation }) => ({
                  title: "WellQuest",
                  headerStyle: {
                    backgroundColor: '#2c3e50'
                  },
                  headerTitleStyle: {
                    color: '#fff'
                  },
                  headerShown:false,
                  headerLeft: () => (
                    <Icon.Button
                      name="home"
                      size={25}
                      backgroundColor="transparent"
                      onPress={() => navigation.navigate("Home Screen")}
                    />
                  ),
                  headerRight: () => (
                    <Icon.Button
                      name="bell"
                      size={25}
                      backgroundColor="transparent"
                      onPress={() => navigation.navigate("Notification Screen")}
                    />
                  )
                })}
            />
            <Stack.Screen
                name="NotifyScreen"
                component={NotificationScreen} 
            />
            <Stack.Screen
              name="AppointmentScreen"
              component={AppointmentScreen}
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
            {/* Coach full Profile Screen  */}
            <Stack.Screen name="chat page" component={ChatPage} />
            {/* to show the schdeule  screen  over coach profile*/}
            <Stack.Screen name="Schedule" component={ScheduleScreen} /> 
        </Stack.Navigator>
  )
}

export default DashboardStack