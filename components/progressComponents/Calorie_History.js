import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
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
    <View style={styles.container}>
        <Text style={styles.calorieHeading}>Calorie History</Text>
            <View style={styles.chart}>
                <BarChart
                barWidth={22}
                noOfSections={1}
                barBorderRadius={12}
                frontColor="lightgray"
                data={barData}
                yAxisThickness={0}
                xAxisThickness={0}
                labelSize={8}
                showYAxis={false}
            />
            </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        margin: 10

    },
    calorieHeading:{
        fontSize: 18,
        textAlign: 'left',
    },
    chart:{
        marginTop: 15
    }

})
export default Calorie_History
