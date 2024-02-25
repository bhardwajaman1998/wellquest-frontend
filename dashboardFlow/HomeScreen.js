import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView, navigation} from 'react-native';
import AppointmentCard from '../components/dashboardComponents/Components/HomeScreen/AppointmentCard';
import NutritionPlanCard from '../components/dashboardComponents/Components/HomeScreen/NutritionPlanCard';
import GoalCard from '../components/dashboardComponents/Components/HomeScreen/GoalCard';
import { useNavigation } from '@react-navigation/native';

const HomeScreen= ()=>{
    const navigation = useNavigation();

    return(
        <SafeAreaView style={styles.safeArea}>
            <ScrollView style={styles.container}>
                
                    <Text style={styles.userNameText}>Hello , USER</Text>

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
    }
});

export default HomeScreen;
