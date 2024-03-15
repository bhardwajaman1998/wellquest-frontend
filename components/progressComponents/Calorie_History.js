import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { BarChart } from "react-native-gifted-charts"

const Calorie_History = () => {
  const barData = [
    { value: 2500, label: "M" },
    { value: 3000, label: "T" },
    { value: 2700, label: "W" },
    { value: 2000, label: "T" },
    { value: 1900, label: "F" },
    { value: 2300, label: "S" },
    { value: 2600, label: "S" },
  ]

  function changeColorIfNeeded(barData, threshold, thresholdColor) {
    return barData.map((item) => ({
      ...item,
      frontColor: item.value > threshold ? thresholdColor : item.frontColor,
    }))
  }

  const thresholdValue = 2500
  const thresholdColor = "red"

  const updatedBarData = changeColorIfNeeded(
    barData,
    thresholdValue,
    thresholdColor
  )

  return (
    <View style={styles.container}>
      <Text style={styles.calorieHeading}>Calorie History</Text>
      <View style={styles.chart}>
        <BarChart
          barWidth={20}
          noOfSections={5}
          barBorderRadius={12}
          frontColor="#7265E3"
          yAxisOffset={500}
          stepValue={500}
          data={updatedBarData}
          yAxisThickness={0}
          xAxisThickness={0}
          labelSize={8}
          height={100}
          width={300}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  calorieHeading: {
    fontSize: 18,
    textAlign: "left",
  },
  chart: {
    marginTop: 15,
    paddingTop: 20,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    borderRadius: 15,
    backgroundColor: "white",
  },
})
export default Calorie_History

// Bar Chart Props
// https://github.com/Abhinandan-Kushwaha/react-native-gifted-charts/blob/master/docs/BarChart/BarChartProps.md
