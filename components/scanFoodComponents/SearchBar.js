import React, { useState, useEffect } from "react";

import { View } from "@gluestack-ui/themed"
import { Input, Icon } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity } from "react-native";


const SearchBar = ({navigation, setSearchBarActive, isFromSearchScreen = false, handleQuery, foodSearchCallback}) => {

    const [searchQuery, setSearchQuery] = useState(""); // Add state to store selected filter

    const handleQueryChange = (query) => {
        setSearchQuery(query)
        handleQuery(query)
    }

    const searchPress = () => {
        if (isFromSearchScreen) {
            setSearchBarActive()
        }
    }

    const searchForFood = () => {
       foodSearchCallback()
    }

    return (
        <View style={styles.searchBar}>
            <TouchableOpacity onPress={searchPress}>
            <Input 
                value={searchQuery}
                placeholder="Search for a food" 
                width="100%" 
                borderRadius="15" 
                fontFamily={'poppins-regular'}
                fontSize="14" 
                backgroundColor={'rgb(245, 245, 245)'} 
                InputLeftElement={
                    <Icon 
                        m="2" 
                        ml="3" 
                        size="6" 
                        color="gray.400" 
                        as={<MaterialIcons name="search" />}
                    />
                }
                InputRightElement={
                    isFromSearchScreen ? null : (
                        <Icon 
                            m="2" 
                            ml="3" 
                            size="6" 
                            color="gray.400" 
                            as={<MaterialIcons name="check" />}
                            onPress={searchForFood}
                        />
                    )
                }
                onPressIn={searchPress}
                onChangeText={handleQueryChange}
            />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    searchBar: {
        width: '100%',
        paddingTop: 25,
        paddingHorizontal: 25,
    }
  });

export default SearchBar