import React from "react"
import { View, Text } from "react-native"
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
    <View>
      <Text>Weight History</Text>
      <View>
        <LineChart data={data} />
      </View>
    </View>
  )
}

export default Weight_History

// Line Chart Props
// https://github.com/Abhinandan-Kushwaha/react-native-gifted-charts/blob/master/docs/BarChart/BarChartProps.md
