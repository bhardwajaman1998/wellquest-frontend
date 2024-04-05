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
                selected ? styles.selected : null,
            ]}
            onPress={handlePress}
        >
            <Text style={[styles.buttonText, selected ? styles.selectedText : null]}>{timeSlots}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#FFF',
        padding: 10,
        borderRadius: 5,
        marginVertical: 5,
        marginHorizontal: 5,
        alignItems: 'center',
        borderColor: '#7265E3',
        borderWidth: 2,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#7265E3',
        fontWeight: 'bold',
        fontSize: 12,
    },
    selected: {
        backgroundColor: '#7265E3',
    },
    selectedText: {
        color: '#FFF',
    },
});

export default TimeSlotButton;
