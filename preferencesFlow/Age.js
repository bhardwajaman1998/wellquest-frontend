import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import BackButton from "./components/BackButton";
import NextButton from "./components/NextButton";
import RNPickerSelect from 'react-native-picker-select';
import Toast from "react-native-toast-message";

const Age = ({ backAction, nextCompName, onPressNext }) => {
  const [selectedAge, setSelectedAge] = useState(null);

  const ageOptions = Array.from({ length: 100 }, (_, index) => ({
    label: String(index + 1),
    value: String(index + 1),
  }));

  useEffect(()=> {
    if (selectedAge && parseInt(selectedAge) < 19) {
      Toast.show({
        type: 'error',
        text1: 'Age Requirement',
        text2: 'The minimum age requirement is 19.',
        position: 'bottom',
        bottomOffset: 50,
        text1Style: styles.toastText1, 
        text2Style: styles.toastText2,
      });
    }
  }, [selectedAge]);

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
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
      </View>
      <View style={styles.buttonsContainer}>
        <BackButton backAction={backAction} />
        <NextButton nextCompName={nextCompName} onPressNext={onPressNext} />
      </View>
      <Toast ref={(ref) => Toast.setRef(ref)} />

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
  innerContainer: {
    alignItems: "center",
    justifyContent: 'center'
  },
  buttonsContainer: {
    flexDirection: "row",
    width: '100%',
    justifyContent: 'flex-end'
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

  toastText1: {
    fontSize: 18, 
    fontWeight: 'bold', 
  },
  toastText2: {
    fontSize: 15, 
  },
});

export default Age;
