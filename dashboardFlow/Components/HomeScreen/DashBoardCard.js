import React from 'react';
import {View, Text, TextInput, TouchableOpacity } from 'react-native';

const DashBoardCard =({headerText, buttonText, iconPath})=>{
    return(
        <View>
            <Text>{headerText}</Text>
            <View>
                <TouchableOpacity>
                    <View>
                        <Text>{buttonText}</Text>
                        <Icon name={iconPath} size={20} color="black" />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default DashBoardCard;