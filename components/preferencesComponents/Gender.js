import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import GenderBox from "./GenderBox";
import maleSelected from "./male.png";
import femaleSelected from "./female.png";
import otherSelected from "./other.png";
import male from "./maleSelected.png";
import female from "./femaleSelected.png";
import other from "./otherSelected.png";
import NextButton from "./NextButton";

const Gender = ({ nextCompName, onPressNext, gender, setGender }) => {
  const [selectedGender, setSelectedGender] = useState();

  const click = (gender) => {
    setSelectedGender((prevGender) => (prevGender === gender ? null : gender));
  };
  
  const isGenderValid =
    selectedGender !== undefined &&
    selectedGender !== null &&
    selectedGender !== "";

    const handleNextPress = () => {
      if (isGenderValid) {
        onPressNext(selectedGender);
      } else {
        console.warn('Please select a gender before proceeding.');
      }
    };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.heading}>Tell us about yourself</Text>
        <Text style={styles.text}>
          To give you a better experience we need to know your gender
        </Text>
        <View style={styles.gender}>
          <GenderBox
            initialImageSource={male}
            title="Male"
            onClick={(newImageSource) => click("Male", newImageSource)}
            newImageSource={maleSelected}
            isSelected={selectedGender === "Male"}
          />
          <GenderBox
            initialImageSource={female}
            title="Female"
            onClick={(newImageSource) => click("Female", newImageSource)}
            newImageSource={femaleSelected}
            isSelected={selectedGender === "Female"}
          />
          <GenderBox
            initialImageSource={other}
            title="Other"
            onClick={(newImageSource) => click("Other", newImageSource)}
            newImageSource={otherSelected}
            isSelected={selectedGender === "Other"}
          />
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <NextButton
          nextCompName={nextCompName}
          onPressNext={handleNextPress}
          selectedGender={selectedGender}
          disabled={!isGenderValid}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingTop: 1,
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 20,
  },
  innerContainer: {
    gap: 0,
    alignItems: "center",
    justifyContent: "center",
  },

  gender: {
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-end",
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: 'Helvetica Neue',
    textAlign: 'center'
  },
  text: {
    fontSize: 14,
    fontWeight: "regular",
    marginTop: 12,
    marginHorizontal: 10,
    textAlign: "center",
    fontFamily: 'Helvetica Neue',
  },
  box: {
    marginTop: 50,
  },
});

export default Gender;
