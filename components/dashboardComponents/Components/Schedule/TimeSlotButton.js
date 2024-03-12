import React, { useState, useEffect } from "react";
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const TimeSlotButton = ({ timeSlots, onPress, selected }) => {
    const handlePress = () => {
        onPress(timeSlots);
    };

    return (
        <TouchableOpacity
            style={[
                styles.button,
                isSelected ? styles.selected : null,
            ]}
            onPress={handlePress}
        >
            <Text style={styles.buttonText}>{timeSlots}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#FFF',
        padding: 10,
        borderRadius: 5,
        marginVertical: 5,
        marginHorizontal: 10,
        alignItems: 'center',
        borderColor: '#000',
        borderWidth: 2,
    },
    buttonText: {
        color: '#000000',
        fontSize: 16,
    },
    selected: {
        backgroundColor: '#7265E3',
    },
});

export default TimeSlotButton;