import { HStack, VStack, View, Text, ButtonIcon, GripVerticalIcon } from "@gluestack-ui/themed"
import { StyleSheet, TouchableOpacity } from "react-native";
import StyledText from "../components/StyledText";

import SearchBar from "./SearchBar"
import ScanButton from "./ScanButton"
import MealTypeButton from "./MealTypeButton"
import HistoryListView from "./HistoryListView"

const SearchFoodLayout = () => {
    return (
        <View style={styles.container}>
            <SearchBar style={styles.search}/>
            <View style={styles.scan}>
                <ScanButton />
                <ScanButton />
            </View>
            <View style={styles.meals}>
                <StyledText style={styles.mealtext}>Select a meal</StyledText>
                <View style={styles.mealTab}>
                    <MealTypeButton source={require('../assets/breakfast_icon.png')} />
                    <MealTypeButton source={require('../assets/lunch_icon.png')} />
                    <MealTypeButton source={require('../assets/dinner_icon.png')} />
                    <MealTypeButton source={require('../assets/snack_icon.png')} />
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
            <View style={styles.historyList}>
                <HistoryListView />
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: '100%'
    },
    search: {
        width: '100%'
    },
    scan: {
        justifyContent: 'space-between',
        flexDirection: 'row',
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
        fontSize: 16,
        marginLeft: 25
    },
    history: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '85%',
        marginTop: 30
    },
    hStack: {
        flexDirection: "row",
        justifyContent: 'space-around',
        justifyContent:'space-evenly',
    },
    historyText: {
        fontFamily: 'poppins-semibold',
        fontSize: 16
    },
    meals: {
        width: '100%',
        marginTop: 10,
        gap: 10,
        justifyContent: 'center',
        marginHorizontal: 25
    },
    historyList: {
        width: '100%',
        alignItems: 'center',
    }
  });

export default SearchFoodLayout

