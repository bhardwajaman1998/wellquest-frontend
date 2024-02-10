import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import BackButton from "./components/BackButton";
import NextButton from "./components/NextButton";
import RNPickerSelect from 'react-native-picker-select';

const Height = () => {
  const [selectedHeight, setSelectedHeight] = useState(null);

  const HeightOptions = Array.from({ length: 300 }, (_, index) => ({
    label: String(index + 101),
    value: String(index + 101),
  }));

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Whats your height?</Text>
      <Text style={styles.text}>
        This helps us create your personalized plan
      </Text>
      <View style={styles.pickerContainer}>
        <RNPickerSelect
          placeholder={{
            label: 'Select Height... (CentiMeter)',
            value: null,
          }}
          items={HeightOptions}
          onValueChange={(value) => setSelectedHeight(value)}
          style={{
            inputIOS: styles.pickerInput,
            inputAndroid: styles.pickerInput,
            iconContainer: styles.pickerIcon,
          }}
          value={selectedHeight}
          useNativeAndroidPickerStyle={false}
        />
        
      </View>
      <BackButton />
      <NextButton destination="Goal"/>
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
  selectedHeight: {
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

export default Height;
