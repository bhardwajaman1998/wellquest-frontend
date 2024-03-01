import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import Gender from "../components/preferencesComponents/Gender";
import Age from "../components/preferencesComponents/Age";
import Weight from "../components/preferencesComponents/Weight";
import Height from "../components/preferencesComponents/Height";
import Goal from "../components/preferencesComponents/Goal";
import ActivityLevel from "../components/preferencesComponents/ActivityLevel";
import Success from "../components/preferencesComponents/Success";
import { BackHandler } from "react-native";
import { useNavigation } from "@react-navigation/native";
import NextButton from "../components/preferencesComponents/NextButton";

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
    gender: "",
    age: "",
    weight: "",
    height: "",
    goal: "",
    activityLevel: "",
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
    postData(formData);
    navigation.navigate("Success");
  };

  const postData = async (formData) => {
    try {
      const response = await fetch('http://localhost:3000/api/customer/store_preferences', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log('Data posted successfully:', data);
    } catch (error) {
      console.error('Error posting data:', error.message);
    }
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
