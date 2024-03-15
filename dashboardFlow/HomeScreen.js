import React,{useState,useEffect} from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView, navigation} from 'react-native';
import AppointmentCard from '../components/dashboardComponents/Components/HomeScreen/AppointmentCard';
import NutritionPlanCard from '../components/dashboardComponents/Components/HomeScreen/NutritionPlanCard';
import GoalCard from '../components/dashboardComponents/Components/HomeScreen/GoalCard';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const HomeScreen= ({ route })=>{
    const navigation = useNavigation();
    const [userName, setUserName]=useState({ name: '' });
    const [greeting, setGreeting] = useState('');

    useEffect(()=>{
        fetchUserData();
    },[]);

    const fetchUserData = async ()=>{
        try{
            const response = await  axios.get('http://localhost:3000/api/customer/get_user_data?customerId=65cc353cb9be345699d6a69a');
            console.log(response);
            setUserName(response.data);
            updateGreeting();
        }
        catch(error){
            console.error('Error fetching the User name in dashboard: ',error);
        }
    }

    const updateGreeting = () => {
        const currentTime = new Date();
        const currentHour = currentTime.getHours();

        if (currentHour >= 5 && currentHour < 12) {
            setGreeting('Good Morning');
        } else if (currentHour >= 12 && currentHour < 18) {
            setGreeting('Good Afternoon');
        } else if (currentHour >= 18 && currentHour < 22) {
            setGreeting('Good Evening');
        } else {
            setGreeting('Good Night');
        }
        console.log(greeting);
    };

    return(
        <SafeAreaView style={styles.safeArea}>
            <ScrollView style={styles.container}>
                
                    <Text style={styles.userNameText}>{greeting} , {userName.name}</Text>
                    {/* <Text style={styles.userNameText}>Hello , Name</Text> */}

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
        marginBottom: 50
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
