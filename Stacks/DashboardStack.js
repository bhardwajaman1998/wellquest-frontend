import Icon from 'react-native-vector-icons/FontAwesome';

import { Image } from '@gluestack-ui/themed'

import HomeScreen from "../dashboardFlow/HomeScreen";
import FindCoach from "../components/dashboardComponents/Components/CoachScreen/FindCoach";
import CoachProfile from "../components/dashboardComponents/Components/CoachScreen/CoachProfile";
import NavBar from "../dashboardFlow/NavBar";
import ScheduleScreen from "../components/dashboardComponents/Components/Schedule/ScheduleScreen";
import ChatPage from "../dashboardFlow/ChatPage";
import NotificationScreen from "../dashboardFlow/NotificationScreen";
import AppointmentScreen from "../components/dashboardComponents/Components/Schedule/AppointmentScreen";
import NavigationBar from '../components/globalComponents/NavigationBar';
import { Stack } from './Stack';
import TabProgressScreen from '../components/progressComponents/TabProgressScreen';

const DashboardStack = () => {
  return (
        <Stack.Navigator >
            <Stack.Screen
                name="Back"
                component={NavBar}
                options={({ navigation }) => ({
                    headerShown:false,
                    header: () => (
                      <NavigationBar
                        title="WellQuest"
                        leftIcon={
                          <Image
                            source={require('../assets/logo-header.png')} // Replace with the path to your PNG file
                            style={{ width: 45, height: 40, resizeMode: 'contain'}} // Adjust width and height as needed
                          />
                        }
                        rightIcon={
                          <Image
                            source={require('../assets/notification-header.png')} // Replace with the path to your PNG file
                            style={{ width: 45, height: 35, resizeMode: 'contain'}} // Adjust width and height as needed
                          />
                        }
                      />
                    ),
                  })}
            />
           <Stack.Screen
                name="DashboardScreen"
                component={HomeScreen}
                options={({ navigation }) => ({
                  title: "WellQuest",
                  headerStyle: {
                    backgroundColor: '#2c3e50'
                  },
                  headerTitleStyle: {
                    color: '#7265E3'
                  },
                  headerShown:false,
                })}
            />

            <Stack.Screen
                name="NotifyScreen"
                component={NotificationScreen} 
            />

            <Stack.Screen
              name="AppointmentScreen"
              component={AppointmentScreen}
              options={({ navigation }) => ({
                title: 'Appointments',
                header: () => (
                  <NavigationBar
                    title="Appointments"
                  />
                )
              })}
            />

            <Stack.Screen
                name="Find Coach"
                component={FindCoach}
                options={({ navigation }) => ({
                  header: () => (
                    <NavigationBar
                      title="Find my coach"
                    />
                  )
              })}
            />

            <Stack.Screen
              name="Select Coach"
              component={CoachProfile}
              options={({ navigation }) => ({
                title: 'Profile',
                header: () => (
                  <NavigationBar
                    title="Profile"
                  />
                )
            })}
            />

             <Stack.Screen
              name="Progress"
              component={TabProgressScreen}
              options={({ navigation }) => ({
                header: () => (
                  <NavigationBar
                    title="Tab Progress"
                  />
                )
            })}
            />

            {/* Coach full Profile Screen  */}
            <Stack.Screen name="chat page" component={ChatPage} />
            {/* to show the schdeule  screen  over coach profile*/}
            <Stack.Screen 
            name="Schedule" 
            component={ScheduleScreen} 
            options={({ navigation }) => ({
              title: 'Schedule',
              header: () => (
                <NavigationBar
                  title="Schedule"
                />
              )
            })}
            /> 
        </Stack.Navigator>
  )
}

export default DashboardStack