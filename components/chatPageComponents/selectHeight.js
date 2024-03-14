import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';

const SelectHeight = () => {
  const startHeight = 140;
     const endHeight = 300;
  const navigation = useNavigation();
  const route = useRoute();
  const { dataToSend } = route.params;
  const [selectedHeight, setSelectedHeight] = useState(140);

  const getHeightOptions = () => {
    return Array.from({ length: endHeight - startHeight + 1 }, (_, index) =>
      String(index + startHeight)
    );
  };
  const handleNext = () => {
    dataToSend.height = selectedHeight;
    navigation.navigate('SelectWeight', {
      dataToSend
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/Ai.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>Let's confirm your height, edit if it's incorrect</Text>
      </View>
      <View style={styles.pickerContainer}>
        <Picker
          style={{ width: 200, height: 150 }}
          selectedValue={selectedHeight}
          onValueChange={(itemValue, itemIndex) => setSelectedHeight(itemValue)}
        > 
      {
      getHeightOptions().map((option) => (
            <Picker.Item label={option} value={option} key={option} />           
            ))}
        </Picker>
      </View>
      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>Next</Text>
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
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: -60,
    paddingLeft:50,
    paddingRight:50,
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
    //alignItems: 'center',
    marginBottom: 70,
  },
  nextButton: {
    margin: 20,
    backgroundColor: '#FF934E',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 20,
  },
  nextButtonText: {
    color: 'white',
    fontSize: 20,
  },
});

export default SelectHeight;
