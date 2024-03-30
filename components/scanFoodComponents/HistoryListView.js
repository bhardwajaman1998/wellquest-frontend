import React, { useState } from 'react';

import { Image, View } from '@gluestack-ui/themed'
import MealBox from './MealBox'
import { StyleSheet, TouchableOpacity } from "react-native";
import StyledText from '../globalComponents/StyledText';
import { useNavigation } from '@react-navigation/native';

const HistoryListView = ({navigation, data, closeModal}) => {


    const [selectedItemIndex, setSelectedItemIndex] = useState(null);

    const selectFood = (index) => {
        setSelectedItemIndex((prevIndex) => (prevIndex === index ? null : index));
        selectFoodItem(index);
    };

    const selectFoodItem = (index) => {
        if (closeModal){
            closeModal()
        }
        navigation.navigate('SearchFoodStack', {
            screen: 'LogFood',
            params: {
                foodName: data[index].name,
                passedData: data[index],
                dataFromSearch: true
            }
        });
        console.log('Item logged:', data[index]);
    }

    return (
        <View style={styles.container}>
            {data.map((item, index) => (
                <MealBox 
                key={index} 
                item={item} 
                isSelected={index === selectedItemIndex}
                onSelect={() => selectFood(index)}
                
                />
                ))}
                {/* {selectedItemIndex !== null && (
                    <TouchableOpacity onPress={selectFoodItem} style={styles.buttonContainer}>
                        <StyledText style={styles.buttonLog}>Log Item</StyledText>
                    </TouchableOpacity>
                )} */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '85%',
        marginTop: 20,
        gap: 20
    },
    buttonContainer: {
        backgroundColor: 'rgb(114, 101, 227)',
        height: 40,
        width: '100%',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
    },
    buttonLog: {
        color: 'white',
        fontFamily: 'poppins-semibold',
        fontSize: 14,
    }
  });

export default HistoryListView