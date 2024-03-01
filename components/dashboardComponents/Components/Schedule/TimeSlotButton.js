import React from "react";
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const TimeSlotButton = ({ timeSlot, onPress, selected }) => {
    return (
        <TouchableOpacity
            style={[
                styles.button,
                selected ? styles.selected : null,
            ]}
            onPress={() => onPress(timeSlot)}
            disabled={!timeSlot.available}
        >
            <Text style={styles.buttonText}>{timeSlot.time}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#7265E3',
        padding: 10,
        borderRadius: 5,
        marginVertical: 5,
        marginHorizontal:10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    selected: {
        backgroundColor: '#FF934E',
    },
});

export default TimeSlotButton;
