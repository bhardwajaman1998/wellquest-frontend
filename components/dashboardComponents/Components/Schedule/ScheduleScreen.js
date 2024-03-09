import React, { useState } from "react";
import { View, StyleSheet, Alert, FlatList, TouchableOpacity, Text, Image } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { useNavigation } from '@react-navigation/native';
import TimeSlotButton from './TimeSlotButton'; // Import the custom button component
import ConfirmationWindow from './ConfirmationWindow'; // Import the overlay component

const ScheduleScreen = ({ onClose }) => {
    const [selected, setSelected] = useState('');
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [showOverlay, setShowOverlay] = useState(false);
    const navigation = useNavigation();

    const handleSchedule = () => {
      if (selectedSlot) {
          setShowOverlay(true);
      } else {
          // Alert to select a time slot first
          Alert.alert(
              "Select Time Slot",
              "Please select a time slot before scheduling."
          );
      }
     };
  
    const handleConfirmation = () => {
      setShowOverlay(false);
      navigation.navigate('HomeScreen');
    };

  
    const handleTimeSlotSelection = (timeSlot) => {
        setSelectedSlot(prevSlot => prevSlot === timeSlot ? null : timeSlot);
    };

    const handleCloseOverlay = () => {
        setShowOverlay(false);
    };

    // Sample time slot data
    const timeSlots = [
        { time: "9 - 9:30 AM", available: true },
        { time: "10 - 10:30 AM", available: true },
        { time: "11 - 11:30 AM", available: true },
        { time: "12 - 12:30 AM", available: true }
    ];

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                {/* Calendar */}
                <Calendar
                    onDayPress={day => {
                        setSelected(day.dateString);
                    }}
                    markedDates={{
                        [selected]: { selected: true }
                    }}
                    markingType={'multi-dot'}
                    theme={{
                        dotColor: '#7265E3',
                        selectedDotColor: '#7265E3',
                    }}
                    style={styles.calendar}
                />

                {/* Time slots */}
                <FlatList
                    data={timeSlots}
                    renderItem={({ item }) => (
                        <TimeSlotButton
                            timeSlot={item}
                            onPress={handleTimeSlotSelection}
                            selected={selectedSlot === item}
                        />
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    contentContainerStyle={styles.timeSlotContainer}
                />

                {/* Schedule and Cancel Buttons */}
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={[styles.button, styles.submitBtn]}
                        onPress={handleSchedule}
                        disabled={!selectedSlot}
                    >
                        <Text style={styles.buttonText}>Schedule</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, styles.cancelBtn]}
                        onPress={onClose}
                    >
                        <Text style={styles.buttonText}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {showOverlay && <ConfirmationWindow onClose={handleCloseOverlay} onConfirm={handleConfirmation} />}

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        padding: 30,
    },
    content: {
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
    },
    calendar: {
        width: '100%',
        marginBottom: 20,
    },
    timeSlotContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        marginVertical: 10,
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    submitBtn: {
        backgroundColor: '#FF934E',
    },
    cancelBtn: {
        backgroundColor: '#FF934E',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
});

export default ScheduleScreen;