import {Input, InputField, HStack} from "@gluestack-ui/themed"
import React, { useState } from 'react';
import { Select, CheckIcon } from "native-base";

import { View, StyleSheet } from 'react-native';
import StyledText from "../globalComponents/StyledText";
import LogInputField from "./LogInputField";
import { NativeBaseProvider } from "native-base";
import NutritionalContent from "./NutritionalContent";
import LogButtons from "./LogButtons";

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
                </View>
                <LogInputField title={'Number of serving'}/>
                <LogInputField title={'Meal'} isDropDown={true} dropdownData={mealArray}/>
                <LogInputField title={'Extra calories'}/>
                <View style={{flexDirection: 'row', justifyContent:'space-between', alignContent: 'center'}}>
                  <NutritionalContent isCircleView={true}/>
                  <NutritionalContent/>
                  <NutritionalContent/>
                  <NutritionalContent/>
                </View>
                <View style={{flexDirection: 'row', justifyContent:'space-between', alignContent: 'center', gap: 40}}>
                  <LogButtons isForCancel={true}/>
                  <LogButtons/>
                </View>
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
        flexDirection: "column",
        width: '100%',
        justifyContent: 'flex-start',
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

