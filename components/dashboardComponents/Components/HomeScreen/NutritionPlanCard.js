import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomCard from './CustomCard';
import { useNavigation } from '@react-navigation/native';
import aiIcon from "../../../../assets/ai_icon.png";

export default function NutritionPlanCard() {

    const navigation=useNavigation();
    const handleSchedulePress = () => {
        navigation.navigate('AiChat', { screen: 'ChatPage' })
      };
  return (
    <SafeAreaView style={styles.container}>
        {/* header part  */}
        <View style={styles.header}>
            <Text style={styles.heading}>My Nutrition Plan</Text>
        </View>
        {/* Nutrition Plan Card */}
            <CustomCard
                text="You don't have a nutrition plan."
                buttonText="ASK ME"
                onPress={handleSchedulePress}
                imageName={aiIcon}
            />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        margin:20,
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
});