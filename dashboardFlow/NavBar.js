import React from 'react';
import { StyleSheet, Text, View, Image, Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import ProgressScreen from './ProgressScreen';
import ProfileScreen from './ProfileScreen';
import AddCount from './AddCount';
import addIcon from "../assets/add_icon.png";
import homeIcon from "../assets/home.png";
import progressIcon from "../assets/My_progress_nav.png";
import messageIcon from "../assets/Messages_nav.png";
import profileIcon from "../assets/Profile_nav.png";
import ChatPageStack from '../Stacks/ChatPageStack';
import TabProgressScreen from '../components/progressComponents/TabProgressScreen';
import NavigationBar from '../components/globalComponents/NavigationBar';
import SearchFoodStack from '../Stacks/SearchFoodStack';
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
                    tabBarIcon:({focused})=>{
                        return(
                            <View style={{alignItems:"center",justifyContent:"center"}}>
                                <Image 
                                    source={homeIcon}
                                    style={{ width: 24, height: 24,color:"#000" }}
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
                        return(
                            <View style={{alignItems:"center",justifyContent:"center"}}>
                                <Image 
                                    source={progressIcon}
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
                                    style={{ width: 50, height: 50}}
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
                        return(
                            <View style={{alignItems:"center",justifyContent:"center"}}>
                                <Image 
                                    source={messageIcon}
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
                        return(
                            <View style={{alignItems:"center",justifyContent:"center"}}>
                                <Image 
                                    source={profileIcon}
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
    
    NavStyles:{
        height:50,
        backgroundColor:"#D9D9D9",
    }
});

export default NavBar;