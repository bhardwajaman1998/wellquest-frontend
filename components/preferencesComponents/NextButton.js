import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ArrowRight } from 'lucide-react-native';
import { Icon, ChevronRightIcon } from "@gluestack-ui/themed"

const NextButton = ({ nextCompName, onPressNext, disabled }) => {
  
  const onPress = () => {
    if (!disabled && typeof onPressNext === 'function') {
      onPressNext(nextCompName);
    } else {
      console.error('onPressNext is not a function or the button is disabled');
    }
  };

  return (
    <View style={[styles.button, {backgroundColor: disabled ? 'grey' : '#7265E3'}]}>
      <TouchableOpacity onPress={onPress} disabled={disabled}>
        <View style={styles.iconWrapper}>
          <Text style={styles.text}>Next</Text>
          <Icon as={ChevronRightIcon} color={'white'} size='md' />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    bottom: 30,
    right: 0,
    height: 50,
    width: 130,
    paddingHorizontal: 20, 
    backgroundColor: '#FF934E',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconWrapper: {
    flexDirection: 'row',
    alignItems: 'center',    
    justifyContent: 'space-between',
    gap: 5
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
