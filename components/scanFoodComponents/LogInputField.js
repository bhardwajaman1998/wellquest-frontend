import StyledText from "../globalComponents/StyledText";
import {Input, InputField, View, CheckIcon} from "@gluestack-ui/themed"
import { Select,  } from "native-base";
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from "react-native";

const LogInputField = ({title, isDropDown, dropdownData}) => {
    const [service, setService] = React.useState("");

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
                            bg: "teal.600",
                            endIcon: <CheckIcon size="xs" />
                        }} mt={1} onValueChange={itemValue => setService(itemValue)}>
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
                    >
                        <InputField placeholder="" />
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

