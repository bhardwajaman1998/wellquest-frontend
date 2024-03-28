// ScheduleScreen.js

import React, { useState, useEffect } from "react";
import { View, StyleSheet, Alert, FlatList, TouchableOpacity, Text, Image, TextStyle } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { useNavigation } from '@react-navigation/native';
import TimeSlotButton from './TimeSlotButton'; 
import ConfirmationWindow from './ConfirmationWindow';
import axios from 'axios';
import moment from 'moment';


const ScheduleScreen = ({ onClose, coachId, coachData, closeAfterScheduled }) => {
    const [selected, setSelected] = useState('');
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [showOverlay, setShowOverlay] = useState(false);
    const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
    const [isDateSelected, setIsDateSelected] = useState(false); // to Track whether a date is selected
    const [selectedDate, setSelectedDate] = useState(null);

    const navigation = useNavigation();

    useEffect(() => {
        fetchAvailableSlots();
    }, []);

    const fetchAvailableSlots = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/api/customer/get_selected_coach?coach_id=${coachId}`);
            console.log("API Response:", response.data);
            const availableSlots = response.data.coachData.available_slots;
            console.log("Available Slots:", availableSlots);
            // setAvailableTimeSlots(availableSlots);
        } catch (error) {
            console.error('Error fetching available slots:', error);
        }
    };

 
    const handleTimeSlotSelection = (timeSlot) => {
        setSelectedSlot(prevSlot => prevSlot === timeSlot ? null : timeSlot);
        setIsDateSelected(true); // Date is selected , hide the text
        setSelected(prevSlot => prevSlot === timeSlot ? null : timeSlot); // Update the selected state
    };
    
    

    const handleCloseOverlay = () => {
        setShowOverlay(false);
    };

    const handleDayPress = (day) => {
        setSelectedDate(day.dateString); // Store selected date in state
        setIsDateSelected(true); // Date is selected, hide the text

        const selectedDayOfWeek = moment(day.dateString).format('dddd');
        console.log('Selected day:', selectedDayOfWeek);

        // Find the available slots for the selected day
        const selectedDaySlots = coachData.available_slots.find(slot => slot[0] === selectedDayOfWeek);
        console.log('Selected day slots:', selectedDaySlots);

        if (selectedDaySlots) {
            // Extract only the time slots for rendering
            const timeSlots = selectedDaySlots.slice(1); // Exclude the day of the week
            console.log('Time slots for rendering:', timeSlots);
            setAvailableTimeSlots(timeSlots);
        } else {
            // If no slots available for the selected day, set a string indicating no slots available
            setAvailableTimeSlots(['No slots available for this day']);
        }
    };


    const handleSchedule = async () => {
        if (selectedSlot && selectedDate) { // Use selectedDate instead of day.dateString so the selected date from the calender can be fetched
            try {
                // Fetching the  coach details
                const coachResponse = await axios.get(`http://localhost:3000/api/customer/get_selected_coach?coach_id=${coachId}`);
                const coachData = coachResponse.data.coachData;
                const { coach_id, coach_name } = coachData;

                
                const appointmentData = {
                    cust_id: '65cc353cb9be345699d6a69a', 
                    coach_id: coachId,
                    date: selectedDate, 
                    timeSlot: selectedSlot
                };

                //POST request to schedule appointment
                const response = await axios.post('http://localhost:3000/api/customer/schedule_appointment', appointmentData);
                console.log("Appointment scheduled successfully:", response.data);
                setShowOverlay(true); // Showing the  confirmation window
            } catch (error) {
                console.error('Error scheduling appointment:', error);
                // Show an error message if scheduling fails
                Alert.alert(
                    "Error",
                    "Failed to schedule appointment. Please try again later."
                );
            }
        } else {
            // Alert to select both date and time slot before scheduling
            Alert.alert(
                "Select Date and Time Slot",
                "Please select both a date and a time slot before scheduling."
            );
        }
    };

    const handleConfirmation = () => {
        setShowOverlay(false);
        closeAfterScheduled()
    };


    return (
        <View style={styles.container}>
            <View style={styles.content}>

            <Calendar
                onDayPress={handleDayPress} 
                markingType={'dot'}
                markedDates={{
                    [selectedDate]: { selected: true}
                }}
                minDate={moment().format("YYYY-MM-DD")} // user will not be able to select the past days
                style={styles.calendar}
                theme={{
                    backgroundColor: '#ffffff',
                    calendarBackground: '#ffffff',
                    textSectionTitleColor: '#000000', 
                    selectedDayBackgroundColor: '#7265E3',
                    selectedDayTextColor: '#fff',
                    todayTextColor: 'blue',
                    dayTextColor: 'black',
                    textDisabledColor: 'grey', 
                    textDayFontFamily: 'Helvetica Neue',
                    textMonthFontFamily: 'Helvetica Neue',
                    textDayHeaderFontFamily: 'Helvetica Neue',
                    textDayFontWeight: 'bold',
                    textMonthFontWeight: 'bold',
                    textDayHeaderFontWeight: 'bold'
                }}
            />

                <View style={styles.shadowView}></View>

                {!isDateSelected && <Text style={{marginBottom:20}}>Select the date to see available slots!</Text>}
                {isDateSelected && <>
                    <FlatList
                    data={availableTimeSlots}
                    numColumns={1}
                    renderItem={({ item }) => (
                        <TimeSlotButton
                            timeSlots={item}
                            onPress={handleTimeSlotSelection}
                            selected={selected === item} 
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
                        <Text style={styles.submitButtonText}>SCHEDULE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, styles.cancelBtn]}
                        onPress={onClose}
                    >
                        <Text style={styles.buttonText}>CANCEL</Text>
                    </TouchableOpacity>
                </View>
                </>}
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
    shadowView:{
        height: 30,
        width: '100%',
        backgroundColor: '#fff',
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20, 
        shadowColor: '#7265E3',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 5,
        marginTop: -30,
        marginBottom: 20
      },
    timeSlotContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 5,
    },
    buttonContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        gap: 10,
        marginVertical: 10,
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%'
    },
    submitBtn: {
        backgroundColor: '#7265E3',
    },
    cancelBtn: {
        backgroundColor: '#FFF',
        borderColor:'#000',
        borderWidth:'1',
    },
    buttonText: {
        color: '#000',
        fontSize: 16,
    },
    submitButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default ScheduleScreen;