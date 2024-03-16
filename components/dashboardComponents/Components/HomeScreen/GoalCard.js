//This card is shown in the Dashboard screen to show the calories intake
import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, StyleSheet, Platform } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import axios from 'axios';
import { lighten } from 'polished';


const GoalCard = ({update, calorieLimit, calConsumed, remianingCalories}) => {

    const [userGoal,setUserGoal] = useState([]);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.heading}>Calories</Text>
            </View>
            <View style={styles.card}>
                <View style={styles.progressContainer}>
                    <ProgressCircle
                        percent={(calConsumed / calorieLimit) * 100}
                        radius={55}
                        borderWidth={8}
                        color="#FF934E"
                        shadowColor={lighten(0.2,'#FF934E')}
                        bgColor="#fff"
                    >
                        <Text style={styles.centerText}>{remianingCalories} remaining</Text>
                    </ProgressCircle>
                </View>
                <View style={styles.info}>
                    <View style={styles.group}>
                        <Text style={styles.text}>Intake goal</Text>
                        <Text style={styles.boldText}>{parseFloat(calorieLimit).toFixed(0)} kcal</Text>
                    </View>
                    <View style={styles.group}>
                        <Text style={styles.text}>Consumed</Text>
                        <Text style={styles.boldText}>{parseFloat(calConsumed).toFixed(0)} kcal</Text>
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