import React,{useState,useEffect} from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import AppointmentCard from '../components/dashboardComponents/Components/HomeScreen/AppointmentCard';
import NutritionPlanCard from '../components/dashboardComponents/Components/HomeScreen/NutritionPlanCard';
import GoalCard from '../components/dashboardComponents/Components/HomeScreen/GoalCard';
import { useNavigation } from '@react-navigation/native';
import { useIsFocused } from '@react-navigation/native';
import { BottomSheet, Button, ListItem } from '@rneui/themed';
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
    const [selectedMeal, setSelectedMeal] = useState(null);
    const [mealType, setMealType] = useState('Breakfast')
    const [meals, setMeals] = useState(null)
    const [isVisible, setBottomVisible] = useState(false);

    useEffect(()=>{
        if (isFocused) {
            fetchUserData();
        }
    },[isFocused]);

    const fetchUserData = async () =>{
        try{
            const response = await  axios.get('http://localhost:3000/api/customer/get_user_data?customerId=65cc353cb9be345699d6a69a');
            console.log(response.data.customerData);
            setUserName(response.data.customerData);
            setCalorieLimit(response.data.customerData.dailyCalories)
            if(response.data.newMealPlan){
                setMeals(response.data.newMealPlan.meals)
            }
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

    const handleMealSelection = (meal, type) => {
        setSelectedMeal(meal);
        setMealType(type);
    }

    const handleBottomView = (visible) => {
        setBottomVisible(visible);
    }

    return(
        <SafeAreaView style={styles.safeArea}>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false} bounces={false}>
                <View style={styles.innerContainer}>

                    <Text style={styles.userNameText}>{greeting}, {userName.name.split(" ")[0]}</Text>

                    <GoalCard update={update} calorieLimit={calorieLimit} calConsumed={completedCalories} remianingCalories={remainingCalories}/>

                    <Target_Card/>
                    
                    <AppointmentCard  appointments={appointments}/>
                    
                    <NutritionPlanCard meals={meals} selectMeal={handleMealSelection} showBottomView={handleBottomView}/>

                    <View style={{height:30}}></View>

                    {selectedMeal != null ? (
                        <BottomSheet modalProps={{}} isVisible={isVisible}>
                            <View style={styles.bottomViewContainer}>
                            <View style={styles.bottomTextContainer}>
                                <Text style={styles.bottomTitle}>{selectedMeal.name}</Text>
                                <View style={{gap: 5}}>
                                <Text style={styles.bottomDescriptionTitle}>Type:</Text>
                                <Text style={styles.bottomCalorie}>{mealType}</Text>
                                </View>
                                <View style={{gap: 5}}>
                                <Text style={styles.bottomDescriptionTitle}>Description:</Text>
                                <Text style={styles.bottomDescription}>{selectedMeal.description}</Text>
                                </View>
                                <View style={{gap: 5}}>
                                <Text style={styles.bottomDescriptionTitle}>Kcal:</Text>
                                <Text style={styles.bottomCalorie}>{selectedMeal.calories}</Text>
                                </View>
                            </View>
                            <TouchableOpacity style={styles.bottomCancelConatiner} onPress={() => {
                                    setBottomVisible(false)
                                    setSelectedMeal(null)
                                }}
                            >
                                <Text style={styles.bottomCancelText}>Got It!</Text>
                            </TouchableOpacity>
                            </View>
                        </BottomSheet>
                    ) : (
                        <></>
                    )}

                </View>
                <View style={{height: 30}}></View>
            </ScrollView>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        // flex: 1,
        backgroundColor: 'rgba(246, 242, 237, 0.5)', 
    },
    container: {
        // flex: 1,
        backgroundColor: 'rgba(246, 242, 237, 0.5)',
        marginBottom: 50
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
        marginTop:20,
        marginHorizontal:20,
        color:'#7265E3',
        fontFamily: 'Helvetica Neue',
    },
    bottomViewContainer:{
        backgroundColor: 'white',
        padding: 30,
        borderTopEndRadius: 30,
        borderTopStartRadius: 30
      },
      bottomTextContainer: {
        gap: 20
      },
      bottomCancelConatiner:{
        backgroundColor: 'blue',
        margin: 30,
        borderRadius: 20,
        width: '50%',
        height: 40,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
      },
      bottomCancelText:{
        fontSize: 20,
        textAlign: 'left',
        fontFamily: 'Helvetica Neue',
        color: 'white'
      },
      bottomTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'Helvetica Neue',
    
      },
      bottomDescriptionTitle: {
        fontSize: 18,
        textAlign: 'left',
        fontFamily: 'Helvetica Neue',
      },
      bottomDescription: {
        fontSize: 16,
        textAlign: 'left',
        fontFamily: 'Helvetica Neue',
        color: 'grey'
      },
      bottomCalorie: {
        fontSize: 16,
        textAlign: 'left',
        fontFamily: 'Helvetica Neue',
        color: 'grey'
      },
});

export default HomeScreen;
