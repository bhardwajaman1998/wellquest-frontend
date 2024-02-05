import React, { useState, useEffect } from "react";

import { View } from "@gluestack-ui/themed"
import { Input, Icon } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";


const SearchBar = ({navigation}) => {

    const [searchQuery, setSearchQuery] = useState(""); // Add state to store selected filter

    const handleQueryChange = (query) => {
        setSearchQuery(query.nativeEvent.text)
    }

    return (
        <View marginVertical={15} marginHorizontal={40}>
            <Input 
                value={searchQuery}
                placeholder="Search for a food" 
                width="100%" 
                borderRadius="4" 
                py="3" 
                px="1" 
                fontSize="14" 
                InputLeftElement={
                    <Icon 
                        m="2" 
                        ml="3" 
                        size="6" 
                        color="gray.400" 
                        as={
                            <MaterialIcons 
                                name="search" 
                            />
                        }
                    />
                }
                onChange={handleQueryChange}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        width: '100%',
        margin: 20,
        height: '65%'
    }
  });


export default SearchBar