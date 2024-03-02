import React from 'react';
import { View, TextInput, StyleSheet,Image } from 'react-native';
import searchIcon from "../../../assets/search_icon.png";


const CustomSearchBar = ({ value, onChangeText, placeholder }) => {
  return (
    <View style={styles.container}>
      <Image source={searchIcon} size={25} style={styles.searchIcon} />
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#777"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height:50,
    flexDirection: 'row',
    borderRadius: 8,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: 'grey',
    margin: 20,
    backgroundColor:'#fff',
  },
  searchIcon: {
    marginTop: 10,
    alignItems:'center',
    color:'black',
  },
  input: {
    flex: 1,
    marginLeft:8,
    fontSize: 16,
    color: '#333',
  },
});

export default CustomSearchBar;