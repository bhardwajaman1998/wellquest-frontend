import React from 'react';
import { StyleSheet, Text, View, Image, Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import ProgressScreen from './ProgressScreen';
import ProfileScreen from './ProfileScreen';
import AddCount from './AddCount';
import addIcon from "../assets/Plus_button_nav.png";
import homeIconSelected from "../assets/home.png";
import homeIcon from "../assets/home_nav_icon.png";
import progressIcon from "../assets/progress.png";
import progressSelected from "../assets/progress_selected.png";
import messageIcon from "../assets/message.png";
import messageSelected from "../assets/message_selected.png";
import profileSelected from "../assets/person_filled.png";
import profileIcon from "../assets/person.png";
import ChatPageStack from '../Stacks/ChatPageStack';
import TabProgressScreen from '../components/progressComponents/TabProgressScreen';
import NavigationBar from '../components/globalComponents/NavigationBar';
import SearchFoodStack from '../Stacks/SearchFoodStack';
import navBG from "../assets/bg.png";

const Tab = createBottomTabNavigator();
const screenOptions={
    tabBarShowLabel:false,
    headerShown:false,
    tabBarStyle:{
            position:'absolute',
            bottom:0,
            left:0,
            right:0,
            elevation:0,
            height: Platform.OS === 'ios' ? 90 : 60,
            backgroundColor:'#FFF',
    }   
}

const NavBar =()=>{
    return (
        <Tab.Navigator screenOptions={screenOptions} style={Styles.NavStyle}>
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
                            <View style={{alignItems:"center",justifyContent:"center"}}>
                                <Image 
                                    source={homeScreenIcon}
                                    style={{ width: 25, height: 25 }}
                                />
                                <Text style={{fontSize:13,color:"#000"}}>Home</Text>
                            </View>
                        )
                    },
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
                            <View style={{alignItems:"center",justifyContent:"center"}}>
                                <Image 
                                    source={myProgressScreenIcon}
                                    style={{ width: 24, height: 24}}
                                />
                                <Text style={{fontSize:13,color:"#000"}}>My Progress</Text>
                            </View>
                        )
                    }
                }}/>
            <Tab.Screen 
                name="Search Food" 
                component={SearchFoodStack}
                options={{
                    headerShown: false,
                    tabBarIcon:({focused})=>{
                        return(
                            <View
                                style={{
                                    top:Platform.OS=="ios"?-30:-20,
                                    width:Platform.OS=="ios"?50:50,
                                    height:Platform.OS=="ios"?40:50,
                                    borderRadius:Platform.OS=="ios"?30:40,
                                    alignItems:"center",
                                    justifyContent:"center",
                                    backgroundColor:"#D9D9D9",
                                }}
                            >  
                            {/* <FontAwesome name='plus' size={24} color="#fff"/> */}
                                <Image 
                                    source={addIcon}
                                    style={{ width:64, height:64, marginBottom:30}}
                                />
                            </View>
                        )
                    }
                }}
                />
            <Tab.Screen 
                name="Messages" 
                component={ChatPageStack}
                options={{
                    tabBarIcon:({focused})=>{
                        const messageScreenIcon = focused ? messageSelected : messageIcon;
                        return(
                            <View style={{alignItems:"center",justifyContent:"center"}}>
                                <Image 
                                    source={messageScreenIcon}
                                    style={{ width: 24, height: 24}}
                                />
                                <Text style={{fontSize:13,color:"#000"}}>Messages</Text>
                            </View>
                        )
                    }
                }}/>
            <Tab.Screen 
                name="Profile" 
                component={ProfileScreen}
                options={{
                    tabBarIcon:({focused})=>{
                        const profileScreenIcon = focused ? profileSelected : profileIcon;
                        return(
                            <View style={{alignItems:"center",justifyContent:"center"}}>
                                <Image 
                                    source={profileScreenIcon}
                                    style={{ width: 24, height: 24}}
                                />
                                <Text style={{fontSize:13,color:"#000"}}>Profile</Text>
                            </View>
                        )
                    },
                    headerShown: false
                }}/>
        </Tab.Navigator>
    );
}

const Styles= StyleSheet.create({
    
    NavStyle:{
        height:50,
        backgroundColor:"#D9D9D9",
    }
});

export default NavBar;