import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import BackButton from "./BackButton";
import NextButton from "./NextButton";
import WheelPicker from "react-native-wheely";
import AnimatedView from "../globalComponents/AnimatedView";

const Goal = ({ backAction, nextCompName, onPressNext }) => {
  const [selectedGoal, setSelectedGoal] = useState('Lose Weight');

  const goalOptions = [
    { label: "Get Fitter", value: "Get Fitter" },
    { label: "Gain Weight", value: "Gain Weight" },
    { label: "Lose Weight", value: "Lose Weight" },
    { label: "Build Muscle", value: "Build Muscle" },
    { label: "Improve Endurance", value: "Improve Endurance" },
  ];


  return (
    <AnimatedView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.heading}>Whats your Goal?</Text>
        <Text style={styles.text}>
          This helps us create your personalized plan
        </Text>

        <View style={styles.pickerContainer}>
          <WheelPicker
            selectedIndex={
              selectedGoal
                ? goalOptions.findIndex(
                    (option) => option.value === selectedGoal
                  )
                : 2
            }
            options={goalOptions.map((option) => option.label)}
            onChange={(index) => {
              const selectedValue = goalOptions[index]?.value || null;
              setSelectedGoal(selectedValue);
            }}
            itemTextStyle={{
              color: "black",
              fontSize: 32,
              marginTop: 10,
              marginBottom: 10,
              alignSelf: 'center'
            }}
            containerStyle={{
              marginTop: 30,
              justifyContent: 'center',
              alignContent: 'center'
            }}
            selectedIndicatorStyle={{
              width: 200,
              alignSelf: 'center',
              borderTopWidth: 3,
              borderBottomWidth: 3,
              borderRadius: 0,
              borderTopColor: "#FF934E",
              borderBottomColor: "#FF934E",
              backgroundColor: "transparent",
            }}
            itemHeight={80}
          />
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <BackButton backAction={backAction} />
        <NextButton
          nextCompName={nextCompName}
          onPressNext={() => onPressNext(selectedGoal)}
          selectedGoal={selectedGoal}
          disabled={!selectedGoal} 
        />
      </View>
    </AnimatedView>
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
    justifyContent: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-end",
  },
  heading: {
    fontSize: 34,
    fontWeight: "bold",
    marginBottom: 10,
    fontFamily: 'Helvetica Neue',

  },
  text: {
    fontSize: 16,
    marginBottom: 20,
    fontFamily: 'Helvetica Neue',

  },
  pickerContainer: {
    width: "80%",
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
    backgroundColor: "transparent",
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    color: "black",
  },
  pickerIcon: {
    top: 20,
    right: 10,
  },
});

export default Goal;
