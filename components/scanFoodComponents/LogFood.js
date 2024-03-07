// import {RNFS} from 'react-native-fs';
import React, { useState } from 'react';
import { InputField, CheckIcon} from "@gluestack-ui/themed"

import { View, StyleSheet, TouchableOpacity } from 'react-native';
import StyledText from "../globalComponents/StyledText";
import LogInputField from "./LogInputField";
import { IconButton, NativeBaseProvider } from "native-base";
import NutritionalContent from "./NutritionalContent";
import LogButtons from "./LogButtons";

import { Input, Icon } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";


import { useRoute } from '@react-navigation/native';

import { submitToGoogle, uploadImageAsync } from './services/services';
import InputAndPickerView from './InputAndPickerView';

const LogFood = () => {
    const route = useRoute();
    const scannedImage = route.params?.image;

    const [isTitleEditing, setIsTitleEditing] = useState(false);

    const [title, setTitle] = useState('Ground Chicken');

    const [servingSize, setServingSize] = useState('');
    const [servingUnit, setServingUnit] = useState('ounce');
    const [numberOfServings, setNumberOfServings] = useState('');
    const [mealType, setMealType] = useState('breakfast');
    const [extraCalories, setExtraCalories] = useState('');
    const [service, setService] = React.useState("");

    const mealArray = ['Breakfast', 'Lunch', 'Dinner', 'Snack']
    const unitArray = ['ounce', 'gram', 'milligram', 'kg', 'pound']

    


    const getImageData  = () => {
      getNutritionalInfo()
    }
    
    const getNutritionalInfo = async () => {
      try {
          // const imageUrl = await uploadImageAsync(scannedImage); // Call the function to upload image and get URL
          // console.log('Image URL:', imageUrl);
          await submitToGoogle(scannedImage); // Send the URL to the submitToGoogle function
      } catch (error) {
          console.error('Error getting image data:', error);
          // Handle error
      }
  }

    const titleEditingToggle = () => {
      setIsTitleEditing(true)
    }
    const onTitleChange = () => {
      setIsTitleEditing(false); // Close title editing mode after changing the title
    }


    return (
        <NativeBaseProvider>
            <View style={styles.container}>
                <StyledText style={styles.screenTitle}>Log Food</StyledText>
                {isTitleEditing ? (
                  <TouchableOpacity onPress={titleEditingToggle}>
                    <Input 
                      value={title}
                      onChangeText={setTitle}
                      width="100%" 
                      borderRadius="10" 
                      fontFamily={'poppins-regular'}
                      fontSize="14" 
                      backgroundColor={'rgb(250, 250, 250)'} 
                      rightElement={
                        <Icon 
                          m="2" 
                          ml="3" 
                          size="6" 
                          color="gray.400" 
                          as={
                            <MaterialIcons 
                              name="check" 
                            />
                          }
                          onPress={onTitleChange}
                      />
                      }
                  />
                </TouchableOpacity>
                ) : (
                <View style={{flexDirection: 'row', gap: 5, justifyContent: 'flex-start', alignItems: 'center'}}>
                  <TouchableOpacity onPress={titleEditingToggle}>
                    <Icon 
                        m="2" 
                        ml="0" 
                        size="6" 
                        color="gray.400" 
                        as={
                        <MaterialIcons 
                          name="edit" 
                        />
                      }
                    />
                  </TouchableOpacity>
                    <StyledText style={styles.foodName}>{title}</StyledText>
                  </View>
                )}
                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: StyleSheet.hairlineWidth,
                    }}
                />
                <InputAndPickerView title={'Serving size'} dropdownData={unitArray}/> 
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
        flexDirection: "row",
        width: '100%',
        justifyContent: 'center',
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

