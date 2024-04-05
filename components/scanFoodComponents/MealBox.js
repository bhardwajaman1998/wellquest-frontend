import { Image, View, CloseCircleIcon, ButtonIcon, HStack, VStack } from '@gluestack-ui/themed'
import { StyleSheet, TouchableOpacity } from "react-native";

import StyledText from '../globalComponents/StyledText'

const MealBox = ({isSelected=false, item, onSelect}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onSelect}>
            <HStack paddingTop={5} paddingBottom={10} justifyContent='space-between' marginRight={5} style={styles.leftHStack}>
                <VStack gap={4} paddingLeft={5}>
                    <StyledText style={styles.heading}>{item.name}</StyledText>
                    <StyledText style={styles.description}>{item.info.calories} cal, {item.serving_size}, carbs {item.info.carbs}gm ,fats {item.info.fats}gm, protien {item.info.proteins}gm</StyledText>
                </VStack>

            </HStack>
            <HStack paddingTop={5} paddingBottom={10} marginRight={0} style={styles.rightHStack}>
            <Image
                    style={styles.image}
                    size="2xs"
                    source={ isSelected ? (
                        require('../../assets/icon-tick.png')
                    ) : (
                        require('../../assets/icon-plus.png')
                    )}
            />
            </HStack>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderRadius: 10,
        borderWidth: .5,
        borderColor: "#7265E3",
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.37,
        shadowRadius: 2.65,
        elevation: 3,
        flexDirection:'row',
        alignItems:"flex-start",
        justifyContent:'space-between',
      },
      leftHStack: {
        flex: 0.9, 
      },
      rightHStack: {
        flex: 0.1, 
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