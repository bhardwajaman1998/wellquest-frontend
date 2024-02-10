import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import BackButton from "./components/BackButton";
import NextButton from "./components/NextButton";
import RNPickerSelect from 'react-native-picker-select';

const Age = () => {
  const [selectedAge, setSelectedAge] = useState(null);

  const ageOptions = Array.from({ length: 100 }, (_, index) => ({
    label: String(index + 1),
    value: String(index + 1),
  }));

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>How old are you?</Text>
      <Text style={styles.text}>
        This helps us create your personalized plan
      </Text>
      <View style={styles.pickerContainer}>
        <Text style={styles.label}>Select an Age:</Text>
        <RNPickerSelect
          placeholder={{
            label: 'Select an Age...',
            value: null,
          }}
          items={ageOptions}
          onValueChange={(value) => setSelectedAge(value)}
          style={{
            inputIOS: styles.pickerInput,
            inputAndroid: styles.pickerInput,
            iconContainer: styles.pickerIcon,
          }}
          value={selectedAge}
          useNativeAndroidPickerStyle={false}
        />
        
      </View>
      <BackButton />
      <NextButton destination="Height"/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "top",
    paddingTop: 36,
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
  },
  pickerContainer: {
    width: '80%',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  selectedAge: {
    fontSize: 20,
    marginTop: 20,
  },
  pickerInput: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    backgroundColor: 'transparent',
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    color: 'black',
  },
  pickerIcon: {
    top: 20,
    right: 10,
  },
});

export default Age;
