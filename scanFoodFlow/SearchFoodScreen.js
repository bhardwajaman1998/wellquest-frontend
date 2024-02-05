import { useEffect, useState } from "react";
import { useRoute, useNavigation } from '@react-navigation/native';

import SearchFoodLayout from "./SearchFoodLayout";
import { NativeBaseProvider } from "native-base";

const SearchFoodScreen = (params) => {
    const route = useRoute();
    const navigation = useNavigation(); // Get navigation object

    return (
        <NativeBaseProvider>
            <SearchFoodLayout />
        </NativeBaseProvider>
    )
}

export default SearchFoodScreen