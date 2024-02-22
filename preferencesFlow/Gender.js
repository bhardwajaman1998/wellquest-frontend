import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import GenderBox from "./components/GenderBox";
import male from "./components/male.png";
import female from "./components/female.png";
import other from "./components/other.png";
import maleSelected from "./components/maleSelected.png";
import femaleSelected from "./components/femaleSelected.png";
import otherSelected from "./components/otherSelected.png";
import NextButton from "./components/NextButton";

const Gender = ({ nextCompName, onPressNext }) => {
  const [selectedGender, setSelectedGender] = useState();

  const click = (gender) => {
    setSelectedGender(gender);
  }

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
        <NextButton nextCompName={nextCompName} onPressNext={onPressNext} selectedGender={selectedGender}/>
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
    fontSize: 36,
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
    fontWeight: "regular",
    marginTop: 12,
    textAlign: "center",
  },
  box: {
    marginTop: 50,
  },
});

export default Gender;
