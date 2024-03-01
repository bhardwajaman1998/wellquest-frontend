import React from 'react'
import { Image } from '@gluestack-ui/themed'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from "react-native";

const GlobalBackButton = () => {
    const  navigation = useNavigation()
    return (
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
                source={require('../../assets/arrow_back.png')}
                style={{ width: 20, height: 15, marginLeft: 5 }}
            />
        </TouchableOpacity>
    )
}

export default GlobalBackButton;
