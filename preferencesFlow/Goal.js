import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import BackButton from "./components/BackButton";
import NextButton from "./components/NextButton";
import RNPickerSelect from 'react-native-picker-select';

const Goal = ({backAction, nextCompName, onPressNext}) => {
  const [selectedGoal, setSelectedGoal] = useState(null);

  const GoalOptions = [
    { label: 'Get Fitter', value: 'Get Fitter' },
    { label: 'Gain Weight', value: 'Gain Weight' },
    { label: 'Lose Weight', value: 'Lose Weight' },
    { label: 'Build Muscle', value: 'Build Muscle' },
    { label: 'Improve Endurance', value: 'Improve Endurance' }
  ];

  return (
    <View style={styles.container}>
       <View style={styles.innerContainer}>
      <Text style={styles.heading}>Whats your Goal?</Text>
      <Text style={styles.text}>
        This helps us create your personalized plan
      </Text>
      <View style={styles.pickerContainer}>
        <RNPickerSelect
          placeholder={{
            label: 'Select Goal...',
            value: null,
          }}
          items={GoalOptions}
          onValueChange={(value) => setSelectedGoal(value)}
          style={{
            inputIOS: styles.pickerInput,
            inputAndroid: styles.pickerInput,
            iconContainer: styles.pickerIcon,
          }}
          value={selectedGoal}
          useNativeAndroidPickerStyle={false}
        />
        
      </View>
      </View>
      <View style={styles.buttonsContainer}>
        <BackButton backAction={backAction}  />
        <NextButton nextCompName={nextCompName} onPressNext={onPressNext}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingTop: 36,
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 20,
  },
  innerContainer: {
    alignItems: "center",
    justifyContent: 'center'
  },
  buttonsContainer: {
    flexDirection: "row",
    width: '100%',
    justifyContent: 'flex-end'
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
  selectedGoal: {
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

export default Goal;
