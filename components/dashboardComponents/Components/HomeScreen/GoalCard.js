//This card is shown in the Dashboard screen to show the calories intake
import React from 'react';
import { Text, View, SafeAreaView, StyleSheet, Platform } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';

const GoalCard = () => {
    const totalCaloriesGoal = 5000;
    const completedCalories = 2000;
    const remainingCalories = totalCaloriesGoal - completedCalories;

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
                        shadowColor="#d3d3d3"
                        bgColor="#fff"
                    >
                        <Text style={styles.centerText}>{`${remainingCalories} remaining`}</Text>
                    </ProgressCircle>
                </View>
                <View style={styles.info}>
                    <View style={styles.group}>
                        <Text style={styles.text}>Kcal intake goal</Text>
                        <Text style={styles.boldText}>{`${remainingCalories} remaining`}</Text>
                    </View>
                    <View style={styles.group}>
                        <Text style={styles.text}>Weight goal</Text>
                        <Text style={styles.boldText}>60Kg</Text>
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