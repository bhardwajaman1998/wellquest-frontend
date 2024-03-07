import React,{useState,useEffect} from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView, navigation} from 'react-native';
import AppointmentCard from '../components/dashboardComponents/Components/HomeScreen/AppointmentCard';
import NutritionPlanCard from '../components/dashboardComponents/Components/HomeScreen/NutritionPlanCard';
import GoalCard from '../components/dashboardComponents/Components/HomeScreen/GoalCard';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const HomeScreen= ({ route })=>{
    const navigation = useNavigation();
    const [userName, setUserName]=useState(null);

    useEffect(()=>{
        fetchUserData();
    },[]);

    const fetchUserData = async ()=>{
        try{
            const response = await  axios.get('http://localhost:3000/api/customer/get_user_data/');
            console.log(response);
            setUserName(response.data.coaches);
        }
        catch(error){
            console.error('Error fetching the User name in dashboard: ',error);
        }
    }

    return(
        <SafeAreaView style={styles.safeArea}>
            <ScrollView style={styles.container}>
                
                    {/* <Text style={styles.userNameText}>Hello , {userName.name}</Text> */}
                    <Text style={styles.userNameText}>Hello , Name</Text>

                    <GoalCard />

                    <AppointmentCard />
                    
                    <NutritionPlanCard />
                
                </ScrollView>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        // flex: 1,
        backgroundColor: '#fff', 
    },
    container: {
        // flex: 1,
        backgroundColor: '#f0f0f0',
    },
    header: {
        paddingTop: 1000, 
        paddingHorizontal: 10,
    },
    userNameText:{
        fontSize:24,
        fontWeight:'bold',
        marginTop:20,
        marginHorizontal:20,
        color:'#7265E3',
    }
});

export default HomeScreen;
