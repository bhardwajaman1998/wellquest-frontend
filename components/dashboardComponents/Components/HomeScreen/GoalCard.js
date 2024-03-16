import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, StyleSheet, Platform } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import axios from 'axios';
import { lighten } from 'polished';

const GoalCard = () => {
    const [totalCaloriesGoal, setTotalCaloriesGoal] = useState(0);
    const [completedCalories, setCompletedCalories] = useState(0);
    const [remainingCalories, setRemainingCalories] = useState(0);
    const [weightGoal, setWeightGoal] = useState(0);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const [userDataResponse, milestoneResponse, caloriesConsumedResponse] = await Promise.all([
                axios.get('http://localhost:3000/api/customer/get_user_data?customerId=65cc353cb9be345699d6a69a'),
                axios.get('http://localhost:3000/api/customer/get_milestone?customerId=65cc353cb9be345699d6a69a'),
                axios.get('http://localhost:3000/api/customer/get_calories_consumed?cust_id=65cc353cb9be345699d6a69a')
            ]);

            const userData = userDataResponse.data;
            const milestoneData = milestoneResponse.data[0];
            const caloriesConsumedData = caloriesConsumedResponse.data;

            setTotalCaloriesGoal(userData.dailyCalories);
            setCompletedCalories(caloriesConsumedData.totalCaloriesConsumed);
            setWeightGoal(milestoneData.weight_goal);
        } catch (error) {
            console.error("Unable to fetch data:", error);
        }
    };

    useEffect(() => {
        const remainingCalories = totalCaloriesGoal - completedCalories;
        setRemainingCalories(remainingCalories);
    }, [totalCaloriesGoal, completedCalories]);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.heading}>Calories</Text>
            </View>
            <View style={styles.card}>
                <View style={styles.progressContainer}>
                    <ProgressCircle
                        percent={(completedCalories / totalCaloriesGoal) * 100}
                        radius={55}
                        borderWidth={8}
                        color="#FF934E"
                        shadowColor={lighten(0.2,'#FF934E')}
                        bgColor="#fff"
                    >
                        <Text style={styles.centerText}>{`${remainingCalories} remaining`}</Text>
                    </ProgressCircle>
                </View>
                <View style={styles.info}>
                    <View style={styles.group}>
                        <Text style={styles.text}>Kcal intake goal</Text>
                        <Text style={styles.boldText}>{totalCaloriesGoal}</Text>
                    </View>
                    <View style={styles.group}>
                        <Text style={styles.text}>Weight goal</Text>
                        <Text style={styles.boldText}>{weightGoal}</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        margin:20,
        backgroundColor: '#fff',
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.23,
                shadowRadius: 2,
            },
            android: {
                elevation: 4,
            },
        }),
        borderRadius: 8,
    },
    header: {
        margin: 20,
        marginBottom:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    progressContainer: {
        padding: 20,
    },
    centerText: {
        fontSize: 16,
        textAlign: 'center',
    },
    info: {
        flex: 1,
        marginLeft: 25,
        justifyContent:'center',
    },
    group: {
        marginBottom: 10,
        fontSize:20,
    },
    text:{
        fontSize:18,
    },
    boldText: {
        fontWeight: 'bold',
        fontSize:18,
    },
});

export default GoalCard;
