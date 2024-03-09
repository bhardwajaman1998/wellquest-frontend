import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView } from 'react-native';
import AppointmentListItem from './AppointmentListItem'; 
import profilePic from "../../.././../assets/Maskgroup.png";
import ToggleButton from '../../../preferencesComponents/ToggleButton';

const AppointmentScreen = () => {
  const [showPrevious, setShowPrevious] = useState(false);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/customer/get_scheduled_appointments?customerId=65cc353cb9be345699d6a69a');
        const data = await response.json();
        setAppointments(data);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchData();
  }, []);

  // the below function will filter the appointments based on current date with the data in db to show in upcoming and previous appointmnets.
  const filterAppointments = () => {
    const today = new Date();
    const filteredAppointments = appointments.filter(appointment => {
      const appointmentDate = new Date(appointment.date);
      if (showPrevious) {
        //show the past appointments
        return appointmentDate < today;
      } else {
        // Show appointments for today and future dates
        return appointmentDate >= today;
      }
    });
    return filteredAppointments;
  };

  const handleToggle = (isSelected) => {
    setShowPrevious(isSelected);
  };

  return (
    <View style={styles.container}>
      <View style={styles.toggleButtonsContainer}>
        <ToggleButton 
          labels={["Upcoming", "Previous"]} 
          onPress={handleToggle}
        />
      </View>
      <ScrollView style={styles.appointmentListContainer}>
        {filterAppointments().map((appointment, index) => (
          <AppointmentListItem
            key={index}
            date={new Date(appointment.date).toISOString().split('T')[0]} // in the db its showing with timestamp so need to do like this so just to show the date only 
            // time={appointment.time} 
            time="09:00AM - 09:30AM" // for now its hardcoded need to update after updating the model of the appointment
            coachName={appointment.coach_name} 
            coachAvatar={profilePic}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  toggleButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  appointmentListContainer: {
    flex: 1,
  },
});

export default AppointmentScreen;