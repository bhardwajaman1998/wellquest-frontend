import { Image, View } from '@gluestack-ui/themed'
import MealBox from './MealBox'
import { StyleSheet } from "react-native";

const HistoryListView = () => {
    return (
        <View style={styles.container}>
            <MealBox />
            <MealBox />
            <MealBox />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '85%',
        marginTop: 20,
        gap: 20
    }
  });

export default HistoryListView