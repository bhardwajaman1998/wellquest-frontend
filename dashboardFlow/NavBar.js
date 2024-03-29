import React from 'react';
import { StyleSheet, Text, View, Image, Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import ProgressScreen from './ProgressScreen';
import ProfileScreen from './ProfileScreen';
import AddCount from './AddCount';
import addIconSelected from "../assets/Plus_button_nav.png";
import addIcon from "../assets/add.png";
import homeIconSelected from "../assets/homeSelected.png";
import homeIcon from "../assets/home.png";
import progressIcon from "../assets/progress.png";
import progressSelected from "../assets/progressSelected.png";
import messageIcon from "../assets/messages.png";
import messageSelected from "../assets/messagesSelected.png";
import profileSelected from "../assets/personSelected.png";
import profileIcon from "../assets/person.png";
import ChatPageStack from '../Stacks/ChatPageStack';
import TabProgressScreen from '../components/progressComponents/TabProgressScreen';
import NavigationBar from '../components/globalComponents/NavigationBar';
import SearchFoodStack from '../Stacks/SearchFoodStack';
import CustomTabBarButton from "./CustomTabBarButton";
import CustomTabBar from "./CustomTabBar";

const Tab = createBottomTabNavigator();


const NavBar =()=>{
    return (
        <Tab.Navigator 
        tabBar={props=><CustomTabBar {...props}/>}
        screenOptions={
            ({
                tabBarShowLabel:false,
                headerShown:false,
                tabBarStyle: styles.tabBarStyle,
            })
        }>
            <Tab.Screen 
                name="Home" 
                component={HomeScreen}
                options={{
                    headerShown:true,
                    header: () => (
                      <NavigationBar
                        title="WellQuest"
                        leftIcon={
                          <Image
                            source={require('../assets/logo-header.png')} 
                            style={{ width: 45, height: 40, resizeMode: 'contain'}} 
                          />
                        }
                        rightIcon={
                          <Image
                            source={require('../assets/notification-header.png')} 
                            style={{ width: 45, height: 35, resizeMode: 'contain'}}
                          />
                        }
                      />
                    ),
                    tabBarIcon:({focused})=>{
                        const homeScreenIcon = focused ? homeIconSelected : homeIcon;
                        return(
                                <Image 
                                    source={homeScreenIcon}
                                    // style={{ width: 25, height: 25 }}
                                />
                        )
                    },
                    tabBarButton: props => <CustomTabBarButton {... props}/>,
                    tabBarLabel:'Home',
                }}
                />
            <Tab.Screen 
                name="TabProgress" 
                component={TabProgressScreen}
                options={{
                    headerShown: true,
                    header: () => (
                        <NavigationBar
                          title="Tab Progress"
                        />
                    ),
                    tabBarIcon:({focused})=>{
                        const myProgressScreenIcon = focused ? progressSelected : progressIcon;
                        return(
                                <Image 
                                    source={myProgressScreenIcon}
                                    // style={{ width: 24, height: 24}}
                                />
                        )
                    },
                    tabBarButton: props => <CustomTabBarButton {... props}/>,
                    tabBarLabel:'Progress',
                }}/>
            <Tab.Screen 
                name="Search Food" 
                component={SearchFoodStack}
                options={{
                    headerShown: false,
                    tabBarIcon:({focused})=>{
                        const addFood = focused ? addIconSelected : addIcon;
                        return(
                                <Image 
                                    source={addFood}
                                    // style={{ width:64, height:64, marginBottom:30}}
                                />
                        )
                    },
                    tabBarButton: props => <CustomTabBarButton {... props}/>,
                    tabBarLabel:'add food',
                }}
                />
            <Tab.Screen 
                name="Messages" 
                component={ChatPageStack}
                options={{
                    tabBarIcon:({focused})=>{
                        const messageScreenIcon = focused ? messageSelected : messageIcon;
                        return(
                                <Image 
                                    source={messageScreenIcon}
                                    // style={{ width: 24, height: 24}}
                                />
                        )
                    },
                    tabBarButton: props => <CustomTabBarButton {... props}/>,
                    tabBarLabel:'messages',
                }}/>
            <Tab.Screen 
                name="Profile" 
                component={ProfileScreen}
                options={{
                    headerShown:true,
                    tabBarIcon:({focused})=>{
                        const profileScreenIcon = focused ? profileSelected : profileIcon;
                        return(
                                <Image 
                                    source={profileScreenIcon}
                                    // style={{ width: 24, height: 24}}
                                />
                                )
                    },
                    headerShown: false,
                    tabBarButton: props => <CustomTabBarButton {... props}/>,
                    tabBarLabel:'profile',
                }}/>
        </Tab.Navigator>
    );
}

const styles= StyleSheet.create({
    tabBarStyle: {
        position: 'absolute',
        backgroundColor: '#00000000',
        borderTopWidth: 0,
        // bottom: 15,
        right: 10,
        left: 10,
        height: 95,
    },
});

export default NavBar;