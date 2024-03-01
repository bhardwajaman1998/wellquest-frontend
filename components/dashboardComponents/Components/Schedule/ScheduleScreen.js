import React,{useState} from "react";
import { View, Text, Button, StyleSheet,Alert ,navigation} from 'react-native';
import {Calendar, LocaleConfig} from 'react-native-calendars';

import { useNavigation } from '@react-navigation/native';

const ScheduleScreen = ({ onClose }) => {

    const [selected, setSelected] = useState('');
    const navigation=useNavigation();

    const handleSchedule = () => {
        // Show confirmation popup
        Alert.alert(
            "Confirmation",
            "Are you sure you want to schedule?",
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                {
                    text: "Go to Dashboard",
                    onPress: () => {
                        // Navigate to Dashboard or perform desired action
                        navigation.navigate('HomeScreen');
                    }
                }
            ]
        );
    };

  return (
    <View style={styles.modalContainer}>
      <View style={styles.contentContainer}>
        <Calendar
            onDayPress={day => {
                setSelected(day.dateString);
            }}
            markedDates={{
                [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
            }}
        />
        
        <Button title="Schedule" onPress={handleSchedule} />
        <Button title="Cancel" onPress={onClose} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  contentContainer: {
    backgroundColor: '#fff', 
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
});

export default ScheduleScreen;
