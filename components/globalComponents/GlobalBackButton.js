import React from 'react'
import { Image } from '@gluestack-ui/themed'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from "react-native";

const GlobalBackButton = () => {
    const  navigation = useNavigation()
    return (
        <TouchableOpacity onPress={() => navigation.goBack()}  style={{ marginTop: 10 }}>
            <Image
                source={require('../../assets/arrow_back.png')}
                style={{ width: 20, height: 15, marginLeft: 5 }}
                tintColor={'rgba(114, 101, 227, 1)'}
            />
        </TouchableOpacity>
    )
}

export default GlobalBackButton;
