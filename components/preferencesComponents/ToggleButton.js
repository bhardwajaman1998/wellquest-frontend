import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const ToggleButton = ({ labels, onChange, selectedWeightUnit, selectedHeightUnit, currentState, isForAppointments = false }) => {
  const [selectedButton, setSelectedButton] = useState(labels[0]);

  const renderButton = (label) => (
    <TouchableOpacity
      key={label}
      style={[styles.button, selectedButton === label && styles.buttonSelected]}
      onPress={() => handlePress(label) }
    >
      <Text style={styles.title}>{label}</Text>
    </TouchableOpacity>
  );

  const handlePress = (label) => {
    const newState = label;
    setSelectedButton(newState);
    if (isForAppointments){
      onChange(!currentState); 
      return
    }
    // console.log(label);
    if (label == "Kg" || label == "Lb"){
      selectedWeightUnit = label;
    }else if (label == "CM" || label == "Feet"){
      selectedHeightUnit = label;
    }
    if (onChange){
      onChange(newState); 
    }
    
  }

  return (
    <View style={styles.container}>
      {labels.map(renderButton)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '85%',
    backgroundColor: 'rgba(114, 101, 227, 0.45)',
    borderRadius: 20,
  },
  button: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 20,
  },
  buttonSelected: {
    backgroundColor: 'rgba(114, 101, 227, 1)',
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    color: 'white',
  },
});

export default ToggleButton;

