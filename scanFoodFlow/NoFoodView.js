import { Image, View , HStack, VStack } from '@gluestack-ui/themed'
import { StyleSheet } from "react-native";

import StyledText from '../components/StyledText'

const NoFoodView = () => {
    return (
        <View style={styles.container}>
            <Image
                size="lg"
                tintColor={'rgb(255, 147, 78)'}
                source={require('../assets/icon-no-food.png')
                }
            />
            <StyledText style={{fontFamily: 'poppins-semibold', fontSize: 20, color:'rgb(255, 147, 78)' }}>No food logged yet!</StyledText>
            <StyledText>Search or scan your first food to log</StyledText>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        margin: 40,
        padding: 10,
        alignItems: 'center',
        textAlign: 'center',
        gap: 10
    },
  });


export default NoFoodView