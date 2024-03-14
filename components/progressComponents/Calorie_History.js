import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { BarChart } from "react-native-gifted-charts";

const Calorie_History = () => {
  const barData = [
    { value: 25, label: "M" },
    { value: 50, label: "T", frontColor: "#177AD5" },
    { value: 74, label: "W", frontColor: "#177AD5" },
    { value: 32, label: "T" },
    { value: 60, label: "F", frontColor: "#177AD5" },
    { value: 25, label: "S" },
    { value: 30, label: "S" },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.calorieHeading}>Calorie History</Text>
      <View style={styles.chart}>
        <BarChart
          barWidth={20}
          noOfSections={3}
          barBorderRadius={12}
          frontColor="lightgray"
          data={barData}
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
