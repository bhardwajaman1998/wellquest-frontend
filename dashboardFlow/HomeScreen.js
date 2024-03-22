import React,{useState,useEffect} from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView, navigation} from 'react-native';
import AppointmentCard from '../components/dashboardComponents/Components/HomeScreen/AppointmentCard';
import NutritionPlanCard from '../components/dashboardComponents/Components/HomeScreen/NutritionPlanCard';
import GoalCard from '../components/dashboardComponents/Components/HomeScreen/GoalCard';
import { useNavigation } from '@react-navigation/native';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import Target_Card from './Target_Card';

const HomeScreen= ({ route })=>{
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const [userName, setUserName]=useState({ name: '' });
    const [calorieLimit, setCalorieLimit] = useState(2500);
    const [completedCalories, setCompletedCalories] = useState(0);
    const [remainingCalories, setRemainingCalories] = useState(0);

    const [greeting, setGreeting] = useState('');
    const [update, setUpdate] = useState(false)
    const [appointments, setAppointments] = useState([]);

    useEffect(()=>{
        if (isFocused) {
            fetchUserData();
        }
    },[isFocused]);

    const fetchUserData = async () =>{
        try{
            const response = await  axios.get('http://localhost:3000/api/customer/get_user_data?customerId=65cc353cb9be345699d6a69a');
            console.log(response.data);
            setUserName(response.data);
            setCalorieLimit(response.data.dailyCalories)
            updateGreeting();
            setUpdate(true)
            fetchCurrentCalIntake()
            fetchAptData()
        }
        catch(error){
            console.error('Error fetching the User name in dashboard: ',error);
        }
    }

    const fetchCurrentCalIntake = async () => {
        try{
            const response= await axios.get('http://localhost:3000/api/customer/get_calories_consumed?cust_id=65cc353cb9be345699d6a69a');
            const data = response.data;
            setCompletedCalories(data.totalCaloriesConsumed);
            calculateRemaining(data.totalCaloriesConsumed)
        }
        catch(error){
            console.error("not able to fetch calorie card data in dashboard screen: ",error);
        }
    }

    const calculateRemaining = (consumed) => {
        const remainingCalories = parseFloat(calorieLimit).toFixed(2) - parseFloat(consumed).toFixed(2);
        setRemainingCalories(parseFloat(remainingCalories).toFixed(0));
    };


    const fetchAptData = async () => {
        try {
          console.log('fetching appointments')
          const response = await fetch('http://localhost:3000/api/customer/get_scheduled_appointments?customerId=65cc353cb9be345699d6a69a');
          const data = await response.json();
          const upcomingAppointments = data.filter(appointment => {
            const appointmentDate = new Date(appointment.date);
            const today = new Date();
            return appointmentDate >= today;
          });
          setAppointments(upcomingAppointments);
        } catch (error) {
          console.error('Error fetching appointments:', error);
        }
      };

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
                <View style={styles.innerContainer}>

                    <Text style={styles.userNameText}>{greeting} , {userName.name}</Text>

                    <GoalCard update={update} calorieLimit={calorieLimit} calConsumed={completedCalories} remianingCalories={remainingCalories}/>

                    <Target_Card/>
                    
                    <AppointmentCard  appointments={appointments}/>
                    
                    <NutritionPlanCard />

                    <View style={{height:30}}></View>

                </View>
            </ScrollView>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        // flex: 1,
        backgroundColor: '#f0f0f0', 
    },
    container: {
        // flex: 1,
        backgroundColor: '#f0f0f0',
        marginBottom: 60
    },
    innerContainer: {
        gap: 0
    },
    header: {
        paddingTop: 1000, 
        paddingHorizontal: 10,
    },
    userNameText:{
        fontSize:24,
        fontWeight:'bold',
        marginTop:30,
        marginHorizontal:20,
        color:'#7265E3',
    }
});

export default HomeScreen;
