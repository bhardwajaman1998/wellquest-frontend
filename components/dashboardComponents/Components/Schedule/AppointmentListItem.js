import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity,Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import clockIcon from "../../.././../assets/clock.png";
import dotIcon from "../../.././../assets/Ellipse.png";

const AppointmentListItem = ({ date, time, coachName, coachAvatar }) => {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleReschedule = () => {
    // Handle reschedule action
    setShowOptions(false);
  };

  const handleCancel = () => {
    // Handle cancel action
    setShowOptions(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Appointment date</Text>
        <TouchableOpacity style={styles.menuButton} onPress={toggleOptions}>
          <Icon name="ellipsis-v" size={20} color="#7265E3" />
        </TouchableOpacity>
      </View>
      
      <View style={styles.content}>
        <Image source={clockIcon} style={styles.clockIcon} />
        <Text style={styles.date}>{date}</Text>
        <Image source={dotIcon} style={styles.dotIcon} />
        <Text style={styles.timeSlot}>{time}</Text>
      </View>
      <View style={styles.separator} />
      <View style={styles.coachInfo}>
        <Image source={coachAvatar} style={styles.avatar} />
        <Text style={styles.coachName}>{coachName}</Text>
      </View>
      {showOptions && (
        <View style={styles.optionsContainer}>
          <TouchableOpacity style={styles.optionButton} onPress={handleReschedule}>
            <Text style={styles.optionText}>Reschedule</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton} onPress={handleCancel}>
            <Text style={styles.optionText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
margin:20,
    // marginHorizontal: 0,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'lightgray',
    padding: 15,
    marginBottom: 0,
    borderLeftColor: "#7265E3",
    borderLeftWidth: 5,
    position: 'relative',
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
  borderRadius: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heading: {
    fontSize: 14,
    // fontWeight: 'bold',
  },
  menuButton: {
    padding: 5,
  },
  separator: {
    height: 1,
    backgroundColor: 'lightgray',
    marginVertical: 10,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  clockIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  date: {
    marginRight: 5,
  },
  dotIcon: {
    width: 5,
    height: 5,
    marginRight: 5,
  },
  timeSlot: {
    marginRight: 10,
  },
  coachInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 15,
    marginRight: 10,
  },
  coachName: {
    fontSize: 16,
    fontWeight:'bold',
  },
  optionsContainer: {
    position: 'absolute',
    top: 40, 
    right: 10,  
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'lightgray',
    padding: 10,
    zIndex: 1,
  },
  optionButton: {
    paddingVertical: 5,
  },
  optionText: {
    fontSize: 16,
    color: '#000',
  },
});

export default AppointmentListItem;