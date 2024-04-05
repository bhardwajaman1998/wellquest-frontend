import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import BackButton from "./BackButton";
import NextButton from "./NextButton";
import ToggleButton from "./ToggleButton";
import { RulerPicker } from "react-native-ruler-picker";
import AnimatedView from "../globalComponents/AnimatedView";

const Height = ({ backAction, nextCompName, onPressNext, isForAi = false, getHeight }) => {
  const startHeightCMs = 120;
  const endHeightCMs = 240;
  const startHeightFeet = Math.round(startHeightCMs * 0.0328084); // Convert start weight to lbs
  const endHeightFeet = Math.round(endHeightCMs * 0.0328084); // Convert end weight to lbs

  const [selectedHeight, setSelectedHeight] = useState(String(selectedIndex));
  const [selectedHeightUnit, setSelectedHeightUnit] = useState("CM");

  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <AnimatedView style={styles.container}>
      <View style={styles.innerContainer}>
        {isForAi ? (
          <></>
        ) : (
          <>
          <Text style={styles.heading}>What's your height?</Text>
          <Text style={styles.text}>
            This helps us create your personalized plan
          </Text>
          </>
        )}
        <ToggleButton
          labels={["CM", "Feet"]}
          onChange={(selectedButton) => {
            setSelectedHeightUnit(selectedButton);
          }}
        />
        <View style={styles.pickerContainer}>
          {selectedHeightUnit === "CM" && (
            <RulerPicker
              min={startHeightCMs}
              max={endHeightCMs}
              step={1}
              fractionDigits={0}
              initialValue={startHeightCMs}
              onValueChange={(number) => {
                setSelectedHeight(number);
                if (isForAi) {
                  getHeight(number, 'CM')
                }
              }}
              onValueChangeEnd={(number) => console.log(number)}
              unit="cm"
            />
          )}
          {selectedHeightUnit === "Feet" && (
            <RulerPicker
              min={startHeightFeet}
              max={endHeightFeet}
              step={0.1}
              fractionDigits={1}
              initialValue={startHeightFeet}
              onValueChange={(number) => {
                setSelectedHeight(number);
                if (isForAi) {
                  getHeight(number, 'Feet')
                }
              }}
              onValueChangeEnd={(number) => console.log(number)}
              unit="ft"
            />
          )}
        </View>
      </View>
      {isForAi ? (
        <></>
      ) : (
      <View style={styles.buttonsContainer}>
        <BackButton backAction={backAction} />
        <NextButton
          nextCompName={nextCompName}
          onPressNext={() => {
            onPressNext(selectedHeight, selectedHeightUnit);
          }}
          selectedHeight={selectedHeight}
        />
      </View>
      )} 
    </AnimatedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingTop: 36,
    alignItems: "center",
    backgroundColor: "#FBF9F6",
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
    fontFamily: 'Helvetica Neue',

  },
  text: {
    fontSize: 14,
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
  selectedHeight: {
    fontSize: 20,
    marginTop: 20,
  },
});

export default Height;
