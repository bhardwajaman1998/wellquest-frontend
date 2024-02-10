import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ArrowRight } from 'lucide-react-native';
import { useNavigation } from "@react-navigation/native";


const NextButton = ({ destination }) => {
  const navigation = useNavigation();
  
  const onPress = () => {
    navigation.navigate(destination);
  }

  return (
    <View style={styles.button}>
      <TouchableOpacity onPress={onPress}>
      <View style={styles.iconWrapper}>
        <Text style={styles.text}>Next</Text>
        <ArrowRight style={styles.arrowRight}/>
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
    borderRadius: 25,
    backgroundColor: "#808080",
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
