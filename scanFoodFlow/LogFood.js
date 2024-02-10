import {Input, InputField, HStack} from "@gluestack-ui/themed"
import React, { useState } from 'react';
import { Select, CheckIcon } from "native-base";

import { View, StyleSheet } from 'react-native';
import StyledText from "../components/StyledText";
import LogInputField from "./LogInputField";
import { NativeBaseProvider } from "native-base";

const LogFood = () => {
    const [servingSize, setServingSize] = useState('');
    const [servingUnit, setServingUnit] = useState('ounce');
    const [numberOfServings, setNumberOfServings] = useState('');
    const [mealType, setMealType] = useState('breakfast');
    const [extraCalories, setExtraCalories] = useState('');
    const [service, setService] = React.useState("");


    const mealArray = ['Breakfast', 'Lunch', 'Dinner', 'Snack']
    const unitArray = ['ounce', 'gram', 'milligram', 'kg', 'pound']



    return (
        <NativeBaseProvider>
            <View style={styles.container}>
                <StyledText style={styles.screenTitle}>Log Food</StyledText>
                <StyledText style={styles.foodName}>Ground Chicken</StyledText>
                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: StyleSheet.hairlineWidth,
                    }}
                />
                <View style={styles.fieldContainer}>
                    <LogInputField style={styles.servingSize} title={'Serving size'}/>
                    <View style={styles.dropDown}>
                        <Select
                            selectedValue={unitArray[0]} 
                            accessibilityLabel="Choose Service"
                            borderColor="transparent"
                            borderWidth={0}
                            width='100%'
                            _selectedItem={{
                                bg: "teal.600",
                                endIcon: <CheckIcon size="sm" />
                            }} mt={1} onValueChange={itemValue => setService(itemValue)}>
                                {unitArray.map((item) => (
                                    <Select.Item label={item} value={item} key={item} />
                                ))
                                }
                        </Select>
                    </View>
                </View>

                <LogInputField title={'Number of serving'}/>
                <LogInputField title={'Meal'} isDropDown={true} dropdownData={mealArray}/>
                <LogInputField title={'Extra calories'}/>
            </View>
        </NativeBaseProvider>
      )
    };
    
    const styles = StyleSheet.create({
      container: {
        backgroundColor: 'white',
        height: '100%',
        paddingHorizontal: 20,
        paddingVertical: 10,
        gap: 15
      },
      screenTitle:{
        fontFamily: 'poppins-bold',
        fontSize: 30
      },
      foodName:{
        fontFamily: 'poppins-bold',
        fontSize: 20
      },
      fieldContainer: {
        gap: 10,
        flexDirection: "row",
        justifyContent: 'space-between'
      },
      dropDown: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.17,
        shadowRadius: 4.65,
        elevation: 3,
        width: '80%'
      }
    });

export default LogFood

