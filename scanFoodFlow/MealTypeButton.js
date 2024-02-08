import { View, Image } from '@gluestack-ui/themed'
import StyledText from '../components/StyledText'
import { StyleSheet, TouchableOpacity } from "react-native";

const MealTypeButton = ({source}) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                size='xs'
                source={source}
            />
            <StyledText>Lunch</StyledText>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        padding: 10,
        borderRadius: 15,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
          width: 3,
          height: 8, // Adjusted to remove upper shadow
        },
        shadowOpacity: 0.17,
        shadowRadius: 4.65,
        elevation: 2,
        gap: 10,
        flex: 1
      },
      image:{
        aspectRatio: 1 / 1,
        padding: 15
      }
  });
export default MealTypeButton