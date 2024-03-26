import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import Weight from '../preferencesComponents/Weight';

const SelectWeight = () => {

  const startHeight = 30;
   const endHeight = 200;

  const getWeightOptions = () => {
     return Array.from({ length: endHeight - startHeight + 1 }, (_, index) =>
       String(index + startHeight)
     );
   };

  const navigation = useNavigation();
  const route = useRoute();
  const { dataToSend } = route.params;
  const [selectedWeight, setSelectedWeight] = useState('');

  const callWeight = (weight, unit) =>{
    setSelectedWeight(`${weight} ${unit}`);
  }


  const handleNext = () => {
    if (selectedWeight) {
      dataToSend.weight = selectedWeight;
      console.log(selectedWeight)
      navigation.navigate('CalculateCalories', {
        dataToSend
      });
    }
  };



  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/Ai.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>Let's confirm your current weight</Text>
      </View>
      <Weight isForAi={true} getWeight={callWeight}/>

      {/* <View style={styles.pickerContainer}>
        <Picker
          style={{ width: 200, height: 150 }}
          selectedValue={selectedWeight}
          onValueChange={(itemValue, itemIndex) => setSelectedWeight(itemValue)}
        >
          {getWeightOptions().map((option) => (
             <Picker.Item label={option} value={option} key={option} />
          ))}
          
        </Picker>
      </View> */}
      <View style={{flexDirection: 'row', justifyContent: 'center', alignContent: 'center', width: '100%', gap: 30, marginTop: 10, paddingBottom: 80}}>
          <TouchableOpacity
          style={styles.backbutton}
          onPress={() => navigation.goBack()}
          >
            <Text style={styles.backbuttonText}>Go Back</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.nextbutton}
            onPress={handleNext}
          >
            <Text style={styles.nextbuttonText}>Next</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#FBF9F6',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: -60,
    marginTop: 20,
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
    alignItems: 'center',
    marginBottom: 70,
  },
  nextbutton: {
    backgroundColor: '#7265E3',
    borderRadius: 25,
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  nextbuttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Helvetica Neue',
  },
  backbutton: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#7265E3',
    borderRadius: 25,
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  backbuttonText: {
    color: '#7265E3',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Helvetica Neue',
  }
});

export default SelectWeight;
