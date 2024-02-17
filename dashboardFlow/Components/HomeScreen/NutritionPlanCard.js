import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function NutritionPlanCard() {
  return (
    <SafeAreaView style={styles.container}>
        {/* header part  */}
        <View style={styles.header}>
            <Text style={styles.heading}>My Nutrition Plan</Text>
        </View>
        {/* Nutrition Plan Card */}
        <View style={[styles.card, Platform.OS === 'ios' ? styles.shadowProp : null]}>
            <Text style={styles.cardText}>You don't have any nutrition plans yet.</Text>
            <TouchableOpacity style={styles.button}>
                <Icon style={styles.icon} name="user" size={25}/>
                <Text style={styles.buttonText}>Ask me</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    header: {
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    card: {
        width: 323,
        marginLeft: 10,
        borderRadius: 8,
        backgroundColor: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 25,
        marginVertical: 10,
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
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    cardText: {
        fontSize: 16,
    },
    button: {
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center',
        width: 149,
        height: 42,
        borderRadius: 20,
        backgroundColor: 'lightgrey',
    },
    buttonText: {
        marginLeft: 15,
        fontSize: 16,
        color: 'black',
    },
    icon: {
        marginLeft: 15,
    },
});