import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import BackButton from "./BackButton";
import NextButton from "./NextButton";
import WheelPicker from "react-native-wheely";
import AnimatedView from "../globalComponents/AnimatedView";

const ActivityLevel = ({ backAction, nextCompName, onPressNext }) => {
  const [selectedActivityLevel, setSelectedActivityLevel] = useState('Moderately Active');

  const ActivityLevelOptions = [
    { label: "Sedentary", value: "Sedentary" },
    { label: "Lightly Active", value: "Lightly Active" },
    { label: "Moderately Active", value: "Moderately Active" },
    { label: "Very Active", value: "Very Active" },
    { label: "Extra Active", value: "Extra Active" },
  ];

  const handlePressNext = () => {
    onPressNext(selectedActivityLevel);
  };  

  return (
    <AnimatedView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.heading}>Your regular physical activity level</Text>
        <Text style={styles.text}>
          This helps us create your personalized plan
        </Text>
        <View style={styles.pickerContainer}>
          <WheelPicker
            selectedIndex={
              selectedActivityLevel
                ? ActivityLevelOptions.findIndex(
                    (option) => option.value === selectedActivityLevel
                  )
                : 2
            }
            options={ActivityLevelOptions.map((option) => option.label)}
            onChange={(index) => {
              const selectedValue = ActivityLevelOptions[index]?.value || null;
              setSelectedActivityLevel(selectedValue);
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
          onPressNext={handlePressNext}
          disabled={!selectedActivityLevel}
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
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: 'center',
    marginHorizontal: -20,
    fontFamily: 'Helvetica Neue',
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
    fontFamily: 'Helvetica Neue',
  },
  pickerContainer: {
    width: "100%",
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  selectedActivityLevel: {
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

export default ActivityLevel;
