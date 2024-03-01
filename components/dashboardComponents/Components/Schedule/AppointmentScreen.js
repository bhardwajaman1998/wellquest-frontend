import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AppointmentListItem from './AppointmentListItem'; 
import profilePic from "../../.././../assets/Maskgroup.png";

const ToggleSwitch = ({ onToggle }) => {
  const [isNewSelected, setIsNewSelected] = useState(true);
  const [isPreviousSelected, setIsPreviousSelected] = useState(false);

  const handleNewToggle = () => {
    setIsNewSelected(true);
    setIsPreviousSelected(false);
    onToggle(true);
  };

  const handlePreviousToggle = () => {
    setIsNewSelected(false);
    setIsPreviousSelected(true);
    onToggle(false);
  };

  return (
    <View style={styles.toggleContainer}>
      <TouchableOpacity onPress={handleNewToggle} style={isNewSelected ? styles.toggleButtonSelected : styles.toggleButton}>
        <Text style={isNewSelected ? styles.toggleButtonTextSelected : styles.toggleButtonText}>Previous</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePreviousToggle} style={isPreviousSelected ? styles.toggleButtonSelected : styles.toggleButton}>
        <Text style={isPreviousSelected ? styles.toggleButtonTextSelected : styles.toggleButtonText}>New</Text>
      </TouchableOpacity>
    </View>
  );
};

const AppointmentScreen = () => {
  const [showPrevious, setShowPrevious] = useState(false);

  const handleToggle = (isSelected) => {
    setShowPrevious(isSelected);
  };

  return (
    <View style={styles.container}>
      <View style={styles.toggleButtonsContainer}>
        <ToggleSwitch onToggle={handleToggle} />
      </View>
      <View style={styles.appointmentListContainer}>
        {showPrevious ? (
          <>
            <AppointmentListItem
              date="Wed 2024-02-20"
              time="10:00 AM - 11:00 AM"
              coachName="John Doe"
              coachAvatar={profilePic}
            />
            <AppointmentListItem
              date=" Tues 2023-12-20"
              time="10:00 AM - 11:00 AM"
              coachName="John Doe"
              coachAvatar={profilePic}  
            />
          </>
        ) : (
          <AppointmentListItem
            date=" Fri 2024-03-21"
            time="11:00 AM - 12:00 PM"
            coachName="Jane Smith"
            coachAvatar={profilePic}
          />
        )}
      </View>
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
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  toggleContainer: {
    flexDirection: 'row',
  },
  toggleButton: {
    width: 100,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  toggleButtonSelected: {
    width: 100,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  toggleButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  toggleButtonTextSelected: {
    color: 'white',
    fontWeight: 'bold',
  },
  appointmentListContainer: {
    flex: 1,
  },
});

export default AppointmentScreen;
