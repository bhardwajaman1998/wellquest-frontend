import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import clockIcon from "../../.././../assets/clock.png";
import dotIcon from "../../.././../assets/Ellipse.png";

const AppointmentListItem = ({ date, time, coachName, coachAvatar }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Appointment date</Text>
        <TouchableOpacity style={styles.menuButton}>
          <Icon name="ellipsis-v" size={20} color="#2A9D5C" />
        </TouchableOpacity>
      </View>
      <View style={styles.separator} />
      <View style={styles.content}>
        <Image source={clockIcon} style={styles.clockIcon} />
        <Text style={styles.date}>{date}</Text>
        <Image source={dotIcon} style={styles.dotIcon} />
        <Text style={styles.timeSlot}>{time}</Text>
      </View>
      <View style={styles.coachInfo}>
        <Image source={coachAvatar} style={styles.avatar} />
        <Text style={styles.coachName}>{coachName}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'lightgray',
    padding: 15,
    marginBottom: 15,
    borderLeftColor: "#2A9D5C",
    borderLeftWidth: 5,
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
  },
});

export default AppointmentListItem;
