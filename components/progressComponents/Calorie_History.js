import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { BarChart } from "react-native-gifted-charts";

const Calorie_History = () => {
  const barData = [
    { value: 2500, label: "M" },
    { value: 3000, label: "T" },
    { value: 2700, label: "W" },
    { value: 2000, label: "T" },
    { value: 1900, label: "F" },
    { value: 2300, label: "S" },
    { value: 2600, label: "S" },
  ];

  function changeColorIfNeeded(barData, threshold, thresholdColor) {
    return barData.map((item) => ({
      ...item,
      frontColor: item.value > threshold ? thresholdColor : item.frontColor,
    }));
  }

  const thresholdValue = 2500;
  const thresholdColor = "red";

  const updatedBarData = changeColorIfNeeded(
    barData,
    thresholdValue,
    thresholdColor
  );
  console.log(updatedBarData);

  return (
    <View style={styles.container}>
      <Text style={styles.calorieHeading}>Calorie History</Text>
      <View style={styles.chart}>
        <BarChart
          barWidth={20}
          noOfSections={2}
          barBorderRadius={12}
          frontColor="lightgray"
          data={updatedBarData}
          yAxisThickness={0}
          xAxisThickness={0}
          labelSize={8}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  calorieHeading: {
    fontSize: 18,
    textAlign: "left",
  },
  chart: {
    marginTop: 10,
  },
});
export default Calorie_History;
