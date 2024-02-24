import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import Gender from "./Gender";
import Age from "./Age";
import Weight from "./Weight";
import Height from "./Height";
import Goal from "./Goal";
import ActivityLevel from "./ActivityLevel";
import Success from "./Success";
import { BackHandler } from "react-native";
import { useNavigation } from "@react-navigation/native";
import NextButton from "./components/NextButton";

const PreferencesScreen = () => {
  const [cardType, setCardType] = useState(1);
  const [gender, setGender] = useState(null);
  const [age, setAge] = useState(null);
  const [weight, setWeight] = useState(null);
  const [weightUnit, setWeightUnit] = useState(null);
  const [height, setHeight] = useState(null);
  const [heightUnit, setHeightUnit] = useState(null);
  const [goal, setGoal] = useState(null);
  const [activityLevel, setActivityLevel] = useState(null);

  const screenArray = [
    "Gender",
    "Age",
    "Weight",
    "Height",
    "Goal",
    "ActivityLevel",
    "Success",
  ];

  const [formData, setFormData] = useState({
    gender: null,
    age: null,
    weight: null,
    weightUnit: null,
    height: null,
    heightUnit: null,
    goal: null,
    activityLevel: null,
  });

  const backAction = () => {
    if (cardType > 1) {
      setCardType(cardType - 1);
      return true;
    }
    return false;
  };

  const navigation = useNavigation();

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);
    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);

  const screenSelect = (name) => {
    const index = screenArray.indexOf(name);
    setCardType(index + 1);
  };

  const handleFinish = () => {
    console.log("Collected Data:", formData);
    console.log("Gender:", gender); // Log the gender state
    navigation.navigate("Success");
  };

  return (
    <View style={styles.container}>
      {cardType === 1 && (
        <Gender
          backAction={backAction}
          nextCompName="Age"
          onPressNext={(selectedGender) => {
            setFormData(() => ({ gender: selectedGender }));
            setGender(selectedGender);
            screenSelect("Age");
          }}
          gender={gender}
          setGender={setGender}
        />
      )}
      {cardType === 2 && (
        <Age
          backAction={backAction}
          nextCompName="Weight"
          onPressNext={(selectedAge) => {
            setFormData((prevData) => ({ ...prevData, age: selectedAge }));
            setAge(selectedAge);
            screenSelect("Weight");
          }}
        />
      )}
      {cardType === 3 && (
        <Weight
          backAction={backAction}
          nextCompName="Height"
          onPressNext={(selectedWeight, selectedWeightUnit) => {
            setFormData((prevData) => ({
              ...prevData,
              weight: selectedWeight,
              weightUnit: selectedWeightUnit,
            }));
            setWeight(selectedWeight);
            setWeightUnit(selectedWeightUnit);
            screenSelect("Height");
          }}
        />
      )}

      {cardType === 4 && (
        <Height
          backAction={backAction}
          nextCompName="Goal"
          onPressNext={(selectedHeight, selectedHeightUnit) => {
            setFormData((prevData) => ({
              ...prevData,
              height: selectedHeight,
              heightUnit: selectedHeightUnit,
            }));
            setHeight(selectedHeight);
            setHeightUnit(selectedHeightUnit);
            screenSelect("Goal");
          }}
          setHeightUnit={setHeightUnit}
        />
      )}
      {cardType === 5 && (
        <Goal
          backAction={backAction}
          nextCompName="ActivityLevel"
          onPressNext={(selectedGoal) => {
            setFormData((prevData) => ({ ...prevData, goal: selectedGoal }));
            setGoal(setGoal);
            screenSelect("ActivityLevel");
          }}
        />
      )}
      {cardType === 6 && (
        <ActivityLevel
          backAction={backAction}
          nextCompName="Success"
          onPressNext={(selectedActivityLevel) => {
            setFormData((prevData) => ({ ...prevData, activityLevel: selectedActivityLevel }));
            setActivityLevel(setActivityLevel);
            screenSelect("Success");
          }}
        />
      )}
      {cardType === 7 && (
        <Success
          backAction={backAction}
          onPressNext={handleFinish}
          formData={formData}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  finishButton: {
    position: "absolute",
    bottom: 20,
  },
});

export default PreferencesScreen;
