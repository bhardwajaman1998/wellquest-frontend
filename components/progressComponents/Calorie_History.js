import React from 'react'
import { View, StyleSheet } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';


const Calorie_History = () => {
    const barData = [
        {value: 250, label: 'M'},
        {value: 500, label: 'T', frontColor: '#177AD5'},
        {value: 745, label: 'W', frontColor: '#177AD5'},
        {value: 320, label: 'T'},
        {value: 600, label: 'F', frontColor: '#177AD5'},
        {value: 256, label: 'S'},
        {value: 300, label: 'S'},
    ];
  return (
    <View>
      <View style={styles.container}>
            <BarChart
                barWidth={22}
                noOfSections={3}
                barBorderRadius={4}
                frontColor="lightgray"
                data={barData}
                yAxisThickness={0}
                xAxisThickness={0}
                labelSize={8}
            />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        margin: 20
    }

})
export default Calorie_History
