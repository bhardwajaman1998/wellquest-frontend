import { useEffect, useState } from "react";
import { View } from "@gluestack-ui/themed"
import { Image } from "react-native";

import SearchFoodLayout from "./SearchFoodLayout";
import { NativeBaseProvider } from "native-base";

import { historyMeals } from "../components/scanFoodComponents/services/services";
import { useNavigation } from '@react-navigation/native';
import { useIsFocused } from '@react-navigation/native';

const SearchFoodScreen = (params) => {
    const [loading, setLoading] = useState(false)
    const  [historyList, setHistoryList] = useState([])
    const isFocused = useIsFocused();

    const navigation = useNavigation();

    useEffect(() => {
        if (isFocused) {
        (async () => {
            setLoading(true)
            const historyData = await historyMeals();
            if (historyData) {
                setHistoryList(historyData)
            }
            setLoading(false)}
        )();
    }}, [isFocused]);


    return (
        <NativeBaseProvider>
            {loading ? (
                <View>
                    <View style={{width: '100%', height:'90%', justifyContent: 'center', alignItems: 'center'}}>
                        <Image
                            source={require('../assets/loadingGif.gif')}
                            style={{"width":"20%", "height":'10%', padding: 10}}
                        />
                    </View>
                </View>
            ) : (
                <SearchFoodLayout navigation={navigation} historyList={historyList}/>
            )} 
            
        </NativeBaseProvider>
    )
}

export default SearchFoodScreen