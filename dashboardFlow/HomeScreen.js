import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
// import {DashBoardCard, GoalCard,HomeScreenHeader,IntakeCard,NutritionPlanCard} from "./Cards";
import AppointmentCard from './Cards/AppointmentCard';
import NutritionPlanCard from './Cards/NutritionPlanCard';
import GoalCard from './Cards/GoalCard';
import HomeScreenHeader from './Cards/HomeScreenHeader';

const HomeScreen= ()=>{
    return(
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <HomeScreenHeader />
                <ScrollView contentContainerStyle={styles.contentContainer}>
                    <GoalCard />
                    <View style={styles.spacing} />
                    <AppointmentCard />
                    <View style={styles.spacing} />
                    <NutritionPlanCard />
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
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
    contentContainer: {
        // flexGrow: 1,
        paddingVertical: 10,
    },
    spacing: {
        height: 20,
    },
  });

export default HomeScreen;
