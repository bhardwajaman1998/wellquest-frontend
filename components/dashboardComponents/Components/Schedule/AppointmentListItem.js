import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // You may need to install this package

const AppointmentListItem = ({ date, time, coachName, coachAvatar }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.date}>{date}</Text>
        <TouchableOpacity style={styles.menuButton}>
          <Icon name="ellipsis-v" size={20} color="gray" />
        </TouchableOpacity>
      </View>
      <View style={styles.separator} />
      <View style={styles.content}>
        <Text style={styles.time}>{time}</Text>
        <View style={styles.coachInfo}>
          <Image source={{ uri: coachAvatar }} style={styles.avatar} />
          <Text style={styles.coachName}>{coachName}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal:20,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'lightgray',
    padding: 15,
    marginBottom: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  date: {
    fontSize: 18,
    fontWeight: 'bold',
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
  time: {
    fontSize: 16,
    marginRight: 10,
  },
  coachInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  coachName: {
    fontSize: 16,
  },
});

export default AppointmentListItem;
