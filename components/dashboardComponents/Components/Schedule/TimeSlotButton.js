import React, { useState, useEffect } from "react";
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const TimeSlotButton = ({ timeSlot, onPress, selected }) => {
    const [isSelected, setIsSelected] = useState(selected);

    useEffect(() => {
        setIsSelected(selected);
    }, [selected]);

    const handlePress = () => {
        setIsSelected(!isSelected);
        onPress(timeSlot);
    };

    return (
        <TouchableOpacity
            style={[
                styles.button,
                isSelected ? styles.selected : null,
            ]}
            onPress={handlePress}
            disabled={!timeSlot.available || isSelected}
        >
            <Text style={styles.buttonText}>{timeSlot.time}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#FFFFFF',
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
