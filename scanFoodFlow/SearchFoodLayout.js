import React, { useState, useEffect } from 'react';

import { HStack, VStack, View, Text, ButtonIcon, GripVerticalIcon } from "@gluestack-ui/themed"
import { StyleSheet, TouchableOpacity, Modal, Image, ScrollView } from "react-native";
import StyledText from "../components/globalComponents/StyledText";

import SearchBar from "../components/scanFoodComponents/SearchBar"
import ScanButton from "../components/scanFoodComponents/ScanButton"
import MealTypeButton from "../components/scanFoodComponents/MealTypeButton"
import HistoryListView from "../components/scanFoodComponents/HistoryListView"
import NoFoodView from "../components/scanFoodComponents/NoFoodView";
import SearchModal from "../components/scanFoodComponents/SearchModal";


const SearchFoodLayout = ({navigation, historyList}) => {
    const [loading, setLoading] = useState(false)

    const [searchScreen, setSearchScreen] = useState(false)
    const [selectedMeal, setSelectedMeal] = useState('');

    const mealTypeArray = [
        ['Breakfast', require('../assets/breakfast_icon.png')],
        ['Lunch', require('../assets/lunch_icon.png')],
        ['Dinner', require('../assets/dinner_icon.png')],
        ['Snack', require('../assets/snack_icon.png')]
    ]

    const handleMealTypeSelect = meal => {
        setSelectedMeal(meal);
    };


    const setSearchBarActive = () => {
        setSearchScreen(!searchScreen)
    }

    return (
        <ScrollView>
            <View style={styles.container}>
        {
            searchScreen ? (
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={searchScreen}
                    onRequestClose={() => {
                        setSearchScreen(!searchScreen);
                    }}
                >
                    <SearchModal navigation={navigation} setSearchBarActive={setSearchBarActive}/>
              </Modal>
            ) : (
                <>
                    <SearchBar style={styles.search} setSearchBarActive={setSearchBarActive} isFromSearchScreen={true} />
                    <View style={styles.scan}>
                        <ScanButton
                            navigation={navigation}
                        />
                        <ScanButton 
                        text='Search'
                            navigation={navigation} 
                            isForCamera={false}
                        />
                    </View>
                    <View style={styles.meals}>
                        <StyledText style={styles.mealtext}>Select a meal</StyledText>
                        <View style={styles.mealTab}>
                            {mealTypeArray.map((meal, index) => (
                                <MealTypeButton
                                    key={index}
                                    text={meal[0]}
                                    source={meal[1]}
                                    isSelected={meal[0] === selectedMeal}
                                    onSelect={() => handleMealTypeSelect(meal[0])}
                                />
                            ))}
                        </View>
                    </View>
                    <View style={styles.history}>
                        <StyledText style={styles.historyText}>History</StyledText>
                        <TouchableOpacity>
                            <HStack gap={5}>
                                <ButtonIcon as={GripVerticalIcon} />
                                <StyledText>Most recent</StyledText>
                            </HStack>
                        </TouchableOpacity>
                    </View>
                        {loading ? (
                            <View style={styles.historyList}>
                                <View style={{width: '100%', height:'90%', justifyContent: 'center', alignItems: 'center'}}>
                                    <Image 
                                    source={require('../assets/loadingGif.gif')}
                                    style={{"width":"30%", "height":'10%'}}
                                    />
                                </View>
                           </View>
                        ) : (
                            <View style={styles.historyList}>
                                {historyList.length > 0 ? (
                                    <HistoryListView navigation={navigation} data={historyList}/>
                                ) : (
                                    <NoFoodView/> 
                                )}
                            </View>
                        )}                        
                </>
            )
        }
        </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: '100%',
        marginBottom: 200
    },
    search: {
        width: '100%'
    },
    scan: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 10,
        padding: 25,
        gap: 30,
        marginHorizontal: 15
    },
    mealTab: {
        flexDirection: 'row',
        gap: 7,
        marginHorizontal: 25,
    },
    mealtext: {
        fontFamily: 'poppins-semibold',
        fontSize: 18,
        marginLeft: 25
    },
    history: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '85%',
        marginTop: 35
    },
    hStack: {
        flexDirection: "row",
        justifyContent: 'space-around',
        justifyContent:'space-evenly',
    },
    historyText: {
        fontFamily: 'poppins-semibold',
        fontSize: 18,
    },
    meals: {
        width: '100%',
        marginTop: 10,
        gap: 20,
        justifyContent: 'center',
        marginHorizontal: 25
    },
    historyList: {
        width: '100%',
        alignItems: 'center',
    }
  });

export default SearchFoodLayout

