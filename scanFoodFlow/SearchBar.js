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
        <View style={styles.searchBar}>
            <Input 
                value={searchQuery}
                placeholder="Search for a food" 
                width="100%" 
                borderRadius="4" 
                fontFamily={'poppins-regular'}
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
    searchBar: {
        width: '100%',
        paddingTop: 25,
        paddingHorizontal: 25
    }
  });

export default SearchBar