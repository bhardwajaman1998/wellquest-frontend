import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomCard from './CustomCard';
import AppointmentListItem from '../Schedule/AppointmentListItem'; 
import findCoach from '../../../../assets/findCoach.png';
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
          // style={styles.buttonstyle}
          text="You don't have upcoming appointments."
          buttonText="FIND COACH   "
          onPress={handleSchedulePress}
          imageName={findCoach}
          imgSize={15}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
    marginHorizontal: 5,
  },
  header: {
    flexDirection: 'row',
    marginTop: 30,
    marginLeft: 25,
    marginBottom: 10, 
    justifyContent: 'space-between',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  seeAll: {
    fontSize: 15,
    marginRight: 25,
    marginBottom: 0,  
    color:'#FF6200',  
  },
  
});

export default AppointmentCard;