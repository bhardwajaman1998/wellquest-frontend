import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import crossIcon from "../../../../assets/cross_icon.png";
import confirmationIcon from "../../../../assets/Confirmation_positive_icon.png";

const ConfirmationWindow = ({ onClose, onConfirm }) => {
    const navigation = useNavigation();

    const handleUpdate = () => {
        onConfirm();
    };

    return (
        <View style={styles.container}>
            <View style={styles.overlay}>
                <Image source={confirmationIcon} style={styles.icon} />
                <Text style={styles.heading}>Confirmation</Text>
                
                <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                    <Image source={crossIcon} style={styles.closeIcon} />
                </TouchableOpacity>
                <Text style={styles.description}>You have scheduled an appointment.</Text>
                
                <TouchableOpacity style={styles.button} onPress={handleUpdate}>
                    <Text style={styles.buttonText}>Check your dashboard</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlay: {
        backgroundColor: '#FFF',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
    },
    icon: {
        width: 50,
        height: 50,
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
        backgroundColor: '#7265E3',
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