import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';

const SelectHeight = () => {
  const navigation = useNavigation();

  const startHeight = 30;
  const endHeight = 200;

  const getHeightOptions = () => {
    return Array.from({ length: endHeight - startHeight + 1 }, (_, index) =>
      String(index + startHeight)
    );
  };

  const [selectedHeight, setSelectedHeight] = useState(startHeight);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/Vector1.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>Let's confirm your current weight </Text>
      </View>
      <View style={styles.pickerContainer}>
        <Picker
          style={{ width: 200, height: 150 }}
          selectedValue={selectedHeight}
          onValueChange={(itemValue, itemIndex) => setSelectedHeight(itemValue)}
        >
          {getHeightOptions().map((option) => (
            <Picker.Item label={option} value={option} key={option} />
          ))}
        </Picker>
        
      </View>
      <TouchableOpacity style={styles.nextButton} onPress={() =>
        navigation.navigate('SelectPreference', { name: 'SelectPreference' })
      }>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate('SelectHeight', { name: 'SelectHeight' })}
      >
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  header: {
    paddingLeft:30,
    paddingRight: 40,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 250,
    marginRight: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  pickerContainer: {
    alignItems: 'center',
    marginBottom: 70,
  },
  nextButton: {
    margin:20,
    backgroundColor: '#FF934E',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 20,
  },
  nextButtonText: {
    color: 'white',
    fontSize: 20,
  },
  backButton:{
    marginTop:1,
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 20,
    borderColor:'black'
  },
  backButtonText: {
    color: 'black',
    fontSize: 20,
  },
});

export default SelectHeight;
