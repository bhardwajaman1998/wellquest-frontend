import { VStack, View } from "@gluestack-ui/themed"

import SearchBar from "./SearchBar"

const SearchFoodLayout = () => {
    return (
        <VStack p={4} w="100%" h="full">
            <SearchBar />
        </VStack>
    )
}

export default SearchFoodLayout

