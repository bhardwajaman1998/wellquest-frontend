import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ChevronLeft } from 'lucide-react-native';

const onPress = () => {

}

const BackButton = ({backAction}) => {

  const onPress = () => {
    backAction();
  }

  return (
    <View style={styles.button}>
      <TouchableOpacity onPress={onPress}>
      <View style={styles.iconWrapper}>
        <ChevronLeft style={styles.chevron}/>
      </View>      
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    bottom: 30,
    left: 30,
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: "#3A3A3C",
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconWrapper: {
    marginRight: 1,
  },
  chevron: {
    color: 'white',
    alignSelf: 'center',
  }
});

export default BackButton;
