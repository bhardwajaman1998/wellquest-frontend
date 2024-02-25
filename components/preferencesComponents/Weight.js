import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import BackButton from "./BackButton";
import NextButton from "./NextButton";
import ToggleButton from "./ToggleButton";
import WheelPicker from "react-native-wheely";

const Weight = ({ backAction, nextCompName, onPressNext }) => {
  const startWeight = 40;
  const endWeight = 300;

  const getWeightOptions = () => {
    
    return Array.from({ length: endWeight - startWeight + 1 }, (_, index) =>
    String(index + startWeight)
    );
  };

  const [selectedWeight, setSelectedWeight] = useState(startWeight);
  const [selectedWeightUnit, setSelectedWeightUnit] = useState("Kg");
  
  const initialSelectedIndex = selectedWeight
    ? getWeightOptions().indexOf(selectedWeight)
    : 0;

  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.heading}>What's your weight?</Text>
        <Text style={styles.text}>
          This helps us create your personalized plan
        </Text>
        <ToggleButton
          onPress={() => {
            const newWeightUnit = selectedWeightUnit === "Kg" ? "Lb" : "Kg";
            setSelectedWeightUnit(newWeightUnit);
            const weightOptions = getWeightOptions();
            setSelectedWeight(weightOptions[selectedIndex]);
          }}
        />

        <View style={styles.pickerContainer}>
          <WheelPicker
            selectedIndex={selectedIndex}
            options={getWeightOptions()}
            onChange={(index) => {
              setSelectedWeight(getWeightOptions()[index]);
              setSelectedIndex(index);
            }}
            itemTextStyle={{
              color: "black",
              fontSize: 40,
            }}
            containerStyle={{
              width: "80%",
              alignItems: "center",
            }}
            selectedIndicatorStyle={{
              width: 100,
              borderTopWidth: 3,
              borderBottomWidth: 3,
              borderRadius: 0,
              borderTopColor: "#FF934E",
              borderBottomColor: "#FF934E",
              backgroundColor: "transparent",
            }}
            itemHeight={60}
          />
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <BackButton backAction={backAction} />
        <NextButton
          nextCompName={nextCompName}
          onPressNext={() => onPressNext(selectedWeight, selectedWeightUnit)}
          selectedWeight={selectedWeight}
          selectedWeightUnit={selectedWeightUnit}
        />
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
    justifyContent: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-end",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
  },
  pickerContainer: {
    width: "80%",
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  selectedWeight: {
    fontSize: 20,
    marginTop: 20,
  },
});

export default Weight;
