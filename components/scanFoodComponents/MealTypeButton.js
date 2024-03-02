import { View, Image } from '@gluestack-ui/themed'
import StyledText from '../globalComponents/StyledText'
import { StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";

const MealTypeButton = ({isSelected, text ,source, onSelect}) => {

  const [selected, setSelected] = useState(isSelected);

  const handlePress = () => {
    setSelected(!selected);
    onSelect(!selected);
  };

    return (
      
      <View style={isSelected ? styles.containerSelected : styles.container}>
          <TouchableOpacity onPress={onSelect} style={{gap: 15, alignItems: 'center'}}>
            <Image
                style={styles.image}
                size="xs"
                source={source}
                tintColor={isSelected ? 'rgb(255, 255, 255)' : 'rgb(114, 101, 227)'}
            />
            <StyledText style={isSelected ? styles.textSelected : styles.text}>{text}</StyledText>
            </TouchableOpacity>
      </View>
    )
}
const styles = StyleSheet.create({
  containerSelected: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
    borderRadius: 15,
    backgroundColor: 'rgb(114, 101, 227)',
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
  },
  text:{ 
    color: 'black'
  },
  textSelected: {
    color: 'white'
  },
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
        gap: 13,
        flex: 1
      },
      image:{
        aspectRatio: 1 / 1,
        padding: 15
      }
  });
export default MealTypeButton