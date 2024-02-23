import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import BackButton from "./components/BackButton";
import NextButton from "./components/NextButton";
import ToggleButton from "./components/ToggleButton";
import WheelPicker from "react-native-wheely";

const Weight = ({ backAction, nextCompName, onPressNext }) => {
  const [selectedWeight, setSelectedWeight] = useState(null);
  const [selectedUnit, setSelectedUnit] = useState("Kg");

  const getWeightOptions = () => {
    const startValue = selectedUnit === "Kg" ? 40 : 90;
    const endValue = selectedUnit === "Lb" ? 300 : 200;

    return Array.from({ length: endValue - startValue + 1 }, (_, index) =>
      String(index + startValue)
    );
  };

  const initialSelectedIndex = selectedWeight
    ? getWeightOptions().indexOf(selectedWeight)
    : 0;

  const [selectedIndex, setSelectedIndex] = useState(initialSelectedIndex);

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.heading}>What's your weight?</Text>
        <Text style={styles.text}>
          This helps us create your personalized plan
        </Text>
        <ToggleButton
          onPress={(selectedOption) => setSelectedUnit(selectedOption)}
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
          onPressNext={() => onPressNext(selectedWeight, selectedUnit)}
          selectedWeight={selectedWeight}
          selectedUnit={selectedUnit}
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
