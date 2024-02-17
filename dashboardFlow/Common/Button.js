import React from 'react';
import {Text,View,TouchableOpacity, StyleSheet} from 'react-native';
import { Icon } from 'react-native-elements';

const Button =({text,iconUrl,onPress})=>{
    return(
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Icon name={iconUrl} size={20}>
            </Icon>
            <Text style={styles.text}>
                {text}
            </Text>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        borderWidth: 1, 
        padding: 10,
    },
    text: {
        marginLeft: 10, 
    },
});


export default Button;