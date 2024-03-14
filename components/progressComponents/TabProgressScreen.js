import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import WaterDropIcon from '../../assets/water_drop_icon.png'
import StepsIcon from '../../assets/steps_icon.png'
import Calorie_History from './Calorie_History'

const TabProgressScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.targertBox}>
        <Text style={styles.targertHeading}>Today's Target</Text>
        <View style={styles.targetComponentsContainer}>
          <View style={styles.targetContainer}>
          <Image 
                source={ WaterDropIcon }
                style={{ width: 16, height: 21, alignSelf: 'center'
                }}
            />
            <View style={styles.dataContainer}>
                <Text style={styles.containerHeading}>2400</Text>
                <Text style={styles.ontainerSubHeading}>Foot Steps</Text>
            </View>
          </View>
          <View style={styles.targetContainer}>
          <Image 
                source={ StepsIcon }
                style={{ width: 20, height: 17, alignSelf: 'center'
                }}
            />
            <View style={styles.dataContainer}>
                <Text style={styles.containerHeading}>8L</Text>
                <Text style={styles.ontainerSubHeading}>Water Intake</Text>
            </View>
          </View>
          
        </View>

      </View>
      <Calorie_History/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection : 'column',
    backgroundColor: 'white',
    alignItems: 'top',
    height: '100%',
    padding: 10,
    borderRadius: 12,
    width: '100%',

  },
  targertBox:{
    padding: 10,
    margin: 5,
    height: 120, 
    backgroundColor: '#FF934E66',
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  

  targetContainer:{
    flexDirection : 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 10,
    margin: 5,
    borderRadius: 12,
    width: '50%', 
  },

  targertHeading: {
    fontSize: 18,
    textAlign: 'left',
    alignSelf: 'flex-start',
  },

  targetComponentsContainer: {
    display: 'flex',
    flexDirection : 'row',

  },
  containerHeading:{
    fontSize: 14,
    textAlign: 'left'
  },
  containerSubHeading:{
    fontSize: 10,
    textAlign: 'left'
  },
  dataContainer:{
    display: 'flex',
    flexDirection : 'column',
    paddingLeft: 10,
    paddingRight: 10,
    width: "80%",
  },


  stepsContainer:{
    display: 'flex',
    flexDirection : 'row',
  },
})

export default TabProgressScreen
