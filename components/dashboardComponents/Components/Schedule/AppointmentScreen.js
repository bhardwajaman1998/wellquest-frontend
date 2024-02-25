import React, { useState } from "react";
import { View, Text, TouchableOpacity ,styles} from 'react-native';
import AppointmentListItem from './AppointmentListItem'; 

const ToggleSwitch = ({ onToggle }) => {
  const [isSelected, setIsSelected] = useState(true);

  const handleToggle = () => {
    setIsSelected(!isSelected);
    onToggle(!isSelected);
  };

  return (
    <View >
            <TouchableOpacity onPress={handleToggle} style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ width: 50, height: 30, borderRadius: 15, backgroundColor: isSelected ? 'blue' : 'lightgray', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: isSelected ? 'white' : 'black', fontWeight: 'bold' }}>{isSelected ? 'New' : 'Previous'}</Text>
            </View>
            <View style={{ width: 30, height: 30, borderRadius: 15, backgroundColor: isSelected ? 'lightgray' : 'blue', justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
                <Text style={{ color: isSelected ? 'black' : 'white', fontWeight: 'bold' }}>{isSelected ? 'P' : 'N'}</Text>
            </View>
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
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
        <ToggleSwitch onToggle={handleToggle} />
      </View>
      {showPrevious ? (
        <>
          <AppointmentListItem
            date="2024-02-20"
            time="10:00 AM - 11:00 AM"
            coachName="John Doe"
            coachAvatar="https://example.com/avatar.jpg"
          />
          <AppointmentListItem
            date="2024-02-20"
            time="10:00 AM - 11:00 AM"
            coachName="John Doe"
            coachAvatar="https://example.com/avatar.jpg"
          />
        </>
      ) : (
        <AppointmentListItem
          date="2024-02-21"
          time="11:00 AM - 12:00 PM"
          coachName="Jane Smith"
          coachAvatar="https://example.com/avatar.jpg"
        />
      )}
    </View>
  );
};

export default AppointmentScreen;