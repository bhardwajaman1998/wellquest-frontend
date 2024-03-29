import StyledText from "../globalComponents/StyledText";
import {Input, InputField, View, CheckIcon} from "@gluestack-ui/themed"
import { Select,  } from "native-base";
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from "react-native";

const LogInputField = ({title, isDropDown, dropdownData, placeholder = "Please enter the value", serviceSelected, useSetNumber = false, changeNumber, extraCals , useExtraCals = false, useMealType}) => {
    
    const [service, setService] = React.useState(serviceSelected);
    const [number, setNumber] = useState(0)

    const serviceCallback  = (value) => {
        setService(value)
        useMealType(value)
    }

    const updateNumber = (value) => {
        if (useSetNumber) {
            const parsedValue = parseFloat(value).toFixed(2);
            if (!isNaN(parsedValue)) { 
                setNumber(parsedValue);
                if (useSetNumber) {
                    changeNumber(parsedValue);
                }
            }else{
                changeNumber(1);
            }
    } else if (useExtraCals){
        extraCals(parseFloat(value).toFixed(2))
    }
}

    return (
        <View style={styles.container}>
            <StyledText style={styles.inputTitle}>{title}</StyledText>
            <View style={styles.inputView}>
                {isDropDown ? (
                    <Select 
                        selectedValue={service} 
                        accessibilityLabel="Choose Service"
                        borderColor="transparent"
                        borderWidth={0}
                        height={26}
                        width="full"
                        _selectedItem={{
                            bg: "#D7C5FF",
                            borderRadius: 15,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center', 
                            endIcon: <CheckIcon size="xl" />
                        }} mt={1} onValueChange={itemValue => serviceCallback(itemValue)}>
                            {dropdownData.map((item) => (
                                <Select.Item label={item} value={item} key={item} />
                                ))
                            }
                            
                    </Select>
                ) : (
                    <Input
                        borderColor="transparent"
                        borderWidth={0}
                        variant="outline"
                        height={30}
                        isDisabled={false}
                        isInvalid={false}
                        isReadOnly={false}
                        onChange={value => updateNumber(value.nativeEvent.text)} 
                    >
                        <InputField placeholder={placeholder}/>
                    </Input>
                )}
            </View>
        </View>
    )};


const styles = StyleSheet.create({
    container: {
        gap: 10,
        alignContent: 'center'
    },
    inputTitle: {
        fontFamily: 'poppins-semibold',
        fontSize: 14
    },
    inputView: {
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
    }
});

export default LogInputField

