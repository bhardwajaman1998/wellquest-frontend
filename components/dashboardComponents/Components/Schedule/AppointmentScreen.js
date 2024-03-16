import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView } from 'react-native';
import AppointmentListItem from './AppointmentListItem'; 
import profilePic from "../../.././../assets/Maskgroup.png";
import ToggleButton from '../../../preferencesComponents/ToggleButton';

const AppointmentScreen = ({update}) => {
  const [showPrevious, setShowPrevious] = useState(false);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchData();
  }, [update]);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/customer/get_scheduled_appointments?customerId=65cc353cb9be345699d6a69a');
      const data = await response.json();
      setAppointments(data);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  const filterAppointments = () => {
    const today = new Date();
    return appointments.filter(appointment => {
      const appointmentDate = new Date(appointment.date);
      if (showPrevious) {
        return appointmentDate < today;
      } else {
        return appointmentDate >= today;
      }
    });
  };

  const handleToggle = (isSelected) => {
    console.log("TEXTTTTTTT ",isSelected);
    if (isSelected) {
      setShowPrevious(true); // Show previous appointments
    } else {
      setShowPrevious(false); // Show upcoming appointments
    }
  };
  

  return (
    <View style={styles.container}>
      <View style={styles.toggleButtonsContainer}>
        <ToggleButton 
          labels={["Upcoming", "Previous"]} 
          currentState={showPrevious}
          isForAppointments={true}
          onChange={handleToggle}
        /> 
      </View>
      <ScrollView style={styles.appointmentListContainer}>
        {filterAppointments().map((appointment, index) => (
          <AppointmentListItem
            key={index}
            date={new Date(appointment.date).toISOString().split('T')[0]}
            time={appointment.timeSlot} 
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