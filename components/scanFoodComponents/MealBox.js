import { Image, View, CloseCircleIcon, ButtonIcon, HStack, VStack } from '@gluestack-ui/themed'
import { StyleSheet, TouchableOpacity } from "react-native";

import StyledText from '../globalComponents/StyledText'

const MealBox = ({isSelected=true}) => {
    return (
        <View style={styles.container}>
            <HStack paddingTop={5} paddingBottom={10} justifyContent='space-between'>
                <VStack gap={4} paddingLeft={10}>
                    <StyledText style={styles.heading}>Sandwich</StyledText>
                    <StyledText style={styles.description}>604 cal, 2 sandwiches, Turkey & vegetable sa...</StyledText>
                </VStack>
                <Image
                    size="2xs"
                    source={ isSelected ? (
                        require('../../assets/icon-tick.png')
                    ) : (
                        require('../../assets/icon-plus.png')
                    )}
                />
            </HStack>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.17,
        shadowRadius: 4.65,
        elevation: 3,
      },
    heading: {
        fontSize: 14,
        fontFamily: 'poppins-semibold'
    },
    description: {
        fontSize: 10,
        fontFamily: 'poppins-regular'
    }
  });


export default MealBox