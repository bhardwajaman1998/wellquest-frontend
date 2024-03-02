import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import crossIcon from "../../../../assets/cross_icon.png";
import confirmationIcon from "../../../../assets/Confirmation_positive_icon.png";

const ConfirmationWindow = ({ onClose, onConfirm }) => {
    return (
        <View style={styles.overlay}>
            <Text style={styles.heading}>Confirmation</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                <Image source={crossIcon} style={styles.closeIcon} />
            </TouchableOpacity>
            <Text style={styles.description}>Are you sure you want to schedule?</Text>
            <TouchableOpacity style={styles.button} onPress={onConfirm}>
                <Text style={styles.buttonText}>Confirm</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    overlay: {
        position: 'absolute',
        top: '30%',
        left: '10%',
        right: '10%',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    closeButton: {
        position: 'absolute',
        top: 5,
        right: 5,
    },
    closeIcon: {
        width: 20,
        height: 20,
    },
    description: {
        textAlign: 'center',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#FF934E',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
});

export default ConfirmationWindow;
