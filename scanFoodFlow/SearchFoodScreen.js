import { useEffect, useState } from "react";
import { View } from "@gluestack-ui/themed"
import { Image } from "react-native";

import SearchFoodLayout from "./SearchFoodLayout";
import { NativeBaseProvider } from "native-base";

import { historyMeals } from "../components/scanFoodComponents/services/services";

const SearchFoodScreen = (params) => {
    const [loading, setLoading] = useState(false)
    const  [historyList, setHistoryList] = useState([])

    useEffect(() => {
        (async () => {
            setLoading(true)
            const historyData = await historyMeals();
            if (historyData) {
                setHistoryList(historyData)
            }
            setLoading(false)}
        )();
    }, []);


    return (
        <NativeBaseProvider>
            {loading ? (
                <View>
                    <View style={{width: '100%', height:'90%', justifyContent: 'center', alignItems: 'center'}}>
                        <Image 
                            source={require('../assets/loadingGif.gif')}
                            style={{"width":"30%", "height":'10%'}}
                        />
                    </View>
                </View>
            ) : (
                <SearchFoodLayout historyList={historyList}/>
            )} 
            
        </NativeBaseProvider>
    )
}

export default SearchFoodScreen