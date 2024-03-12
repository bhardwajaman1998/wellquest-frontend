import { Image, View, CloseCircleIcon, ButtonIcon, HStack, VStack } from '@gluestack-ui/themed'
import { StyleSheet, TouchableOpacity } from "react-native";

import StyledText from '../globalComponents/StyledText'

const MealBox = ({isSelected=false, item, onSelect}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onSelect}>
            <HStack paddingTop={5} paddingBottom={10} justifyContent='space-between' marginRight={20}>
                <VStack gap={4} paddingLeft={5}>
                    <StyledText style={styles.heading}>{item.name}</StyledText>
                    <StyledText style={styles.description}>{item.info.calories} cal, {item.serving_size}, carbs {item.info.carbs}gm ,fats {item.info.fats}gm, protien {item.info.proteins}gm</StyledText>
                </VStack>

            </HStack>
            <Image
                    style={{marginRight: 10}}
                    size="2xs"
                    source={ isSelected ? (
                        require('../../assets/icon-tick.png')
                    ) : (
                        require('../../assets/icon-plus.png')
                    )}
            />
        </TouchableOpacity>
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
        flexDirection:'row',
        alignItems:"flex-start",
        justifyContent:'space-around',
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