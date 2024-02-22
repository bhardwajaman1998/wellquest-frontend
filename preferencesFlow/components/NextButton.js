import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ArrowRight } from 'lucide-react-native';
import { useNavigation } from "@react-navigation/native";


const NextButton = ({nextCompName, onPressNext, selectedGender, disabled }) => {
  const navigation = useNavigation();
  
  const onPress = () => {
    if (!disabled && typeof onPressNext === 'function') {
      onPressNext(nextCompName, selectedGender);
      console.log(`Navigating to ${nextCompName} with selected gender: ${selectedGender}`);
    } else {

      console.error('onPressNext is not a function or the button is disabled');
    }
  };

  return (
    <View style={[styles.button, {backgroundColor: disabled ? 'grey' : '#FF934E'}]}>
      <TouchableOpacity onPress={onPress} disabled={disabled}>
        <View style={styles.iconWrapper}>
          <Text style={styles.text}>Next</Text>
          <ArrowRight style={styles.arrowRight} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    bottom: 30,
    right: 30,
    height: 50,
    paddingHorizontal: 20, 
    backgroundColor: '#f8f',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconWrapper: {
    flexDirection: 'row',
    alignItems: 'center'    
},
  text: {
    color: 'white',
    fontSize: 18,
    marginRight: 5
  },
  arrowRight: {
    color: 'white',
    width: 18,
    height: 18,
  }
});

export default NextButton;
