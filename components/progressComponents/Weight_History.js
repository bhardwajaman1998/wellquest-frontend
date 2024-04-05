import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { LineChart } from "react-native-gifted-charts"

const data = [
  { value: 90, label: "Jan" },
  { value: 85, label: "Feb" },
  { value: 91, label: "Mar" },
  { value: 87, label: "Apr" },
  { value: 81, label: "May" },
  { value: 78, label: "Jun" },
]

const Weight_History = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.calorieHeading}>Weight History</Text>
      <View style={styles.chart}>
        <LineChart
          data={data}
          noOfSections={4}
          stepValue={20}
          overflowTop={10}
          yAxisOffset={30}
          yAxisThickness={0}
          xAxisThickness={0}
          height={100}
          width={300}
        />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginLeft: 15,
    marginRight: 15,
    width: '98%',
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
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    borderRadius: 15,
    backgroundColor: "white", // Ensure shadow is visible
  },
})
export default Weight_History

// Line Chart Props
// https://github.com/Abhinandan-Kushwaha/react-native-gifted-charts/blob/master/docs/BarChart/BarChartProps.md
