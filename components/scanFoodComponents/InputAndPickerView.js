import StyledText from "../globalComponents/StyledText";
import {Input, InputField, View, CheckIcon} from "@gluestack-ui/themed"
import { Select,  } from "native-base";
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from "react-native";

const InputAndPickerView = ({title , dropdownData, size, unit, changeSize, changeUnit}) => {

    const setUnitFromPicker = (unit) => {
        changeUnit(unit)
    }

    return (
        <View style={styles.container}>
            <StyledText style={styles.inputTitle}>{title}</StyledText>
            <View style={styles.inputView}>
                <View style={styles.input}>
                <Input
                    borderColor="red"
                    borderWidth={0}
                    variant="outline"
                    height={30}
                    isDisabled={false}
                    isInvalid={false}
                    isReadOnly={false}
                >
                        <InputField textAlign="center" placeholder="Serving size" value={size} onChange={value => changeSize(value.nativeEvent.text)}/>
                </Input>
                </View>
                <View
                    style={{
                        width: 0.4,
                        height: '100%',
                        backgroundColor: 'gray',
                    }}
                />
                <View style={styles.picker}>
                <Select
                    selectedValue={unit}
                    borderColor="black"
                    borderWidth={0}
                    height={30}
                    size={"lg"}
                    textAlign={'center'}
                    _selectedItem={{
                        bg: "#D7C5FF",
                        endIcon: <CheckIcon size="xs" />
                    }}
                    mt={1}
                    onValueChange={itemValue => setUnitFromPicker(itemValue)}
                >
                    {dropdownData.map((item) => (
                        <Select.Item label={item} value={item} key={item} />
                    ))}
                </Select>
                </View>
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
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
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
        },
        input: {
            flex: 1,
            marginRight: 10 // Add some margin between input and picker
        },
        picker: {
            marginLeft: 5,
            flex: 1,
        }
    });
export default InputAndPickerView

