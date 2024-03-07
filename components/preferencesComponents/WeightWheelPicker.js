import React from "react";
import { View, StyleSheet } from "react-native";
import WheelPicker from "react-native-wheely";

const WeightWheelPicker = ({
  selectedWeight,
  selectedWeightUnit,
  setSelectedWeight,
  setSelectedIndex,
  onChange,
}) => {
  const startWeightKg = 40;
  const endWeightKg = 300;
  const incrementKg = 0.1;

  const lbsToKgConversion = 0.453592; // 1 lb = 0.453592 kg

  const getWeightOptionsKg = () => {
    const weights = [];
    for (let weight = startWeightKg; weight <= endWeightKg; weight += incrementKg) {
      weights.push(weight.toFixed(1));
    }
    return weights;
  };

  const getWeightOptionsLbs = () => {
    const weights = [];
    for (let weight = startWeightKg * lbsToKgConversion; weight <= endWeightKg * lbsToKgConversion; weight += incrementKg * lbsToKgConversion) {
      weights.push((weight / lbsToKgConversion).toFixed(1)); // Convert back to pounds
    }
    return weights;
  };

  const handleChange = (index) => {
    setSelectedIndex(index);
    const options =
      selectedWeightUnit === "Kg" ? getWeightOptionsKg() : getWeightOptionsLbs();
    const newWeight = options[index];
    setSelectedWeight(newWeight);
    if (onChange) {
      onChange(newWeight);
    }
  };

  const options =
    selectedWeightUnit === "Kg" ? getWeightOptionsKg() : getWeightOptionsLbs();

  let selectedValueIndex = 0;
  if (selectedWeight !== undefined && !isNaN(selectedWeight)) {
    selectedValueIndex = options.indexOf(selectedWeight.toFixed(1)); // Find the index of the selected weight
    if (selectedValueIndex === -1) {
      selectedValueIndex = 0; // If selected weight is not found in options, default to 0
    }
  }

  return (
    <View style={styles.container}>
      <WheelPicker
        selectedIndex={selectedValueIndex}
        options={options}
        onChange={handleChange}
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
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },
});

export default WeightWheelPicker;
