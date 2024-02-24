import React from 'react';
import { StyleSheet, Text,View,Image, Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import ProgressScreen from './ProgressScreen';
import ProfileScreen from './ProfileScreen';
import ChatPage from './ChatPage';
import AddCount from './AddCount';
import AddIcon from "../assets/add-icon.png";
import {FontAwesome} from '@expo/vector-icons';

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
        height:50,
        background:'grey',

    }
}

// Home, MyProgress, Messages, Profile , + button
// HomeScreen, ProgressScreen , ChatPage, ProfileScreen
// HomeScreen, chatScreen, 
const NavBar =()=>{
    return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen 
                name="Home" 
                component={HomeScreen}
                options={{
                    tabBarIcon:({focused})=>{
                        return(
                            <View style={{alignItems:"center",justifyContent:"center"}}>
                                <Image 
                                    source={focused ? require('../assets/add-icon.png') : require('../assets/add-icon.png')}
                                    style={{ width: 24, height: 24, tintColor: focused ? "#808080" : "#000" }}
                                />
                                <Text style={{fontSize:12,color:"#000"}}>Home</Text>
                            </View>
                        )
                    }
                }}
                />
            <Tab.Screen 
                name="MyProgress" 
                component={ProgressScreen}
                options={{
                    tabBarIcon:({focused})=>{
                        return(
                            <View style={{alignItems:"center",justifyContent:"center"}}>
                                <Image 
                                    source={focused ? require('../assets/add-icon.png') : require('../assets/add-icon.png')}
                                    style={{ width: 24, height: 24, tintColor: focused ? "#808080" : "#000" }}
                                />
                                <Text style={{fontSize:12,color:"#000"}}>My Progress</Text>
                            </View>
                        )
                    }
                }}/>
            <Tab.Screen 
                name="Add" 
                component={AddCount}
                options={{
                    tabBarIcon:({focused})=>{
                        return(
                            <View
                                style={{
                                    top:Platform.OS=="ios"?-30:-20,
                                    width:Platform.OS=="ios"?60:80,
                                    height:Platform.OS=="ios"?50:80,
                                    borderRadius:Platform.OS=="ios"?30:40,
                                    alignItems:"center",
                                    justifyContent:"center",
                                    backgroundColor:"#16247d",
                                }}
                            >  
                            <FontAwesome name='plus' size={24} color="#fff"/>
                                {/* <Image 
                                    source={require('../assets/add-icon.png')}
                                    style={{ width: 20, height: 20, tintColor: focused ? "#000" : "#808080" }}
                                /> */}
                            </View>
                        )
                    }
                }}
                />
            <Tab.Screen 
                name="Messages" 
                component={ChatPage}
                options={{
                    tabBarIcon:({focused})=>{
                        return(
                            <View style={{alignItems:"center",justifyContent:"center"}}>
                                <Image 
                                    source={focused ? require('../assets/add-icon.png') : require('../assets/add-icon.png')}
                                    style={{ width: 24, height: 24, tintColor: focused ? "#808080" : "#000" }}
                                />
                                <Text style={{fontSize:12,color:"#000"}}>Messages</Text>
                            </View>
                        )
                    }
                }}/>
            <Tab.Screen 
                name="Profile" 
                component={ProfileScreen}
                options={{
                    tabBarIcon:({focused})=>{
                        return(
                            <View style={{alignItems:"center",justifyContent:"center"}}>
                                <Image 
                                    source={focused ? require('../assets/add-icon.png') : require('../assets/add-icon.png')}
                                    style={{ width: 24, height: 24, tintColor: focused ? "#808080" : "#000" }}
                                />
                                <Text style={{fontSize:12,color:"#000"}}>Profile</Text>
                            </View>
                        )
                    }
                }}/>
        </Tab.Navigator>
    );
}

const Styles= StyleSheet.create({
    tabBar:{
        showLabel:false,
        backgroundColor:'#000',
    },
});

export default NavBar;