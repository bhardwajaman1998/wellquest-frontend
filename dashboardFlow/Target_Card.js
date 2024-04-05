import React from "react"
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native"
import WaterDropIcon from "../assets/water_drop_icon.png"
import StepsIcon from "../assets/steps_icon.png"

const Target_Card=()=>{


return(
<View style={styles.targertBox}>
        <Text style={styles.targertHeading}>Today's Target</Text>
        <View style={styles.targetComponentsContainer}>
          <View style={styles.targetContainer}>
            <Image
              source={WaterDropIcon}
              style={{
                width: 16,
                height: 21,
                margin: 5,
                alignSelf: "center",
              }}
            />
            <View style={styles.dataContainer}>
              <Text style={styles.containerHeading}>4L</Text>
              <Text style={styles.containerSubHeading}>Water Intake</Text>
            </View>
          </View>
          <View style={styles.targetContainer}>
            <Image
              source={StepsIcon}
              style={{
                width: 20,
                height: 17,
                margin: 5,
                alignSelf: "center",
              }}
            />
            <View style={styles.dataContainer}>
              <Text style={styles.containerHeading}>2400</Text>
              <Text style={styles.containerSubHeading}>Foot Steps</Text>
            </View>
          </View>
        </View>
      </View>
)
            }

const styles = StyleSheet.create({
targertBox: {
    padding: 15,
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: "rgba(114, 101, 227, 0.2)",
    borderRadius: 22,
    alignItems: "center",
  },

  targetContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    marginTop: 10,
    margin: 5,
    borderRadius: 12,
    flex: 1,
  },

  targertHeading: {
    fontSize: 18,
    marginLeft: 10,
    textAlign: "left",
    alignSelf: "flex-start",
    fontWeight:'bold',
    fontFamily: 'Helvetica Neue',
  },

  targetComponentsContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  containerHeading: {
    fontSize: 16,
    textAlign: "left",
    fontWeight:'bold',

  },
  containerSubHeading: {
    fontSize: 14,
    textAlign: "left",
    color: 'grey'
  },
  dataContainer: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: 8,
    paddingRight: 8,
    width: "80%",
  },

  stepsContainer: {
    display: "flex",
    flexDirection: "row",
  },
})

export default Target_Card;