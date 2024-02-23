import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const ToggleButton = () => {
  const [selectedButton, setSelectedButton] = useState('Kg');

  const renderButton = (label) => (
    <TouchableOpacity
      style={[styles.button, selectedButton === label && styles.buttonSelected]}
      onPress={() => setSelectedButton(label)}
    >
      <Text style={styles.title}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {renderButton('Kg')}
      {renderButton('Lb')}
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
