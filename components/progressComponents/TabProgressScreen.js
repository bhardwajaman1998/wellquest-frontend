import React from "react"
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native"
import WaterDropIcon from "../../assets/water_drop_icon.png"
import StepsIcon from "../../assets/steps_icon.png"
import Calorie_History from "./Calorie_History"
import Weight_History from "./Weight_History"

const TabProgressScreen = () => {
  const handlePress = () => {
    console.log("Button Pressed")
  }

  return (
    <View style={styles.container}>
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
              <Text style={styles.containerHeading}>8L</Text>
              <Text style={styles.ontainerSubHeading}>Water Intake</Text>
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
              <Text style={styles.ontainerSubHeading}>Foot Steps</Text>
            </View>
          </View>
        </View>
      </View>
      <Weight_History />
      <TouchableOpacity onPress={handlePress} style={styles.button}>
        <Text style={styles.buttonText}>Want to change your Goal?</Text>
      </TouchableOpacity>
      <Calorie_History />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "white",
    alignItems: "center",
    height: "100%",
    padding: 15,
    width: "100%",
  },
  targertBox: {
    padding: 15,
    margin: 5,
    backgroundColor: "#FF934E66",
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
    textAlign: "left",
    alignSelf: "flex-start",
  },

  targetComponentsContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  containerHeading: {
    fontSize: 14,
    textAlign: "left",
  },
  containerSubHeading: {
    fontSize: 10,
    textAlign: "left",
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

  button: {
    backgroundColor: "#7265E3",
    margin: 5,
    marginTop: 20,
    borderRadius: 15,
    width: "95%",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    padding: 10,
    width: "100%",
    textAlign: "center",
  },
})

export default TabProgressScreen
