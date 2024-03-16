import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomCard from './CustomCard';
import AppointmentListItem from '../Schedule/AppointmentListItem'; 
import findCoach from '../../../../assets/find_coach.png';
import profilePic from '../../../../assets/Maskgroup.png';

const AppointmentCard = ({appointments}) => {
  
  const navigation = useNavigation();

  const handleSchedulePress = () => {
    navigation.navigate('Find Coach'); 
  };

  const handleSeeAll = () => {
    navigation.navigate('AppointmentScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* header part  */}
      <View style={styles.header}>
        <Text style={styles.heading}>Appointments</Text>
        <TouchableOpacity onPress={handleSeeAll}>
          <Text style={styles.seeAll}>See All{' >'}</Text>
        </TouchableOpacity>
      </View>
      {/* Conditional rendering based on appointments */}
      {appointments.length > 0 ? (
        <AppointmentListItem
          date={new Date(appointments[0].date).toISOString().split('T')[0]}
          time={appointments[0].timeSlot}
          coachName={appointments[0].coach_name}
          coachAvatar={profilePic}
        />
      ) : (
        <CustomCard
          style={styles.buttonstyle}
          text="You don't have upcoming appointments."
          buttonText="FIND COACH"
          onPress={handleSchedulePress}
          imageName={findCoach}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    margin: 20,
  },
  header: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  seeAll: {
    fontSize: 15,
  },
  buttonstyle: {
    marginLeft: 20,
  
  },
});

export default AppointmentCard;