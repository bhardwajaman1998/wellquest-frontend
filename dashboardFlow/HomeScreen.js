import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView, navigation} from 'react-native';
// import {DashBoardCard, GoalCard,HomeScreenHeader,IntakeCard,NutritionPlanCard} from "./Cards";
import AppointmentCard from './Components/HomeScreen/AppointmentCard';
import NutritionPlanCard from './Components/HomeScreen/NutritionPlanCard';
import GoalCard from './Components/HomeScreen/GoalCard';
import HomeScreenHeader from './Components/HomeScreen/HomeScreenHeader';

const HomeScreen= ()=>{
    return(
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <HomeScreenHeader />
                <ScrollView contentContainerStyle={styles.contentContainer}>
                    <GoalCard />
                    <View style={styles.spacing} />
                    <AppointmentCard> 
                    </AppointmentCard>
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
