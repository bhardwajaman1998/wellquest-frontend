import React from "react"
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native"
import WaterDropIcon from "../../assets/water_drop_icon.png"
import StepsIcon from "../../assets/steps_icon.png"
import Calorie_History from "./Calorie_History"
import Weight_History from "./Weight_History"
import { useNavigation } from "@react-navigation/native"
import Target_Card from "../../dashboardFlow/Target_Card"

const TabProgressScreen = () => {
  const navigation = useNavigation()
  const handlePress = () => {
    navigation.navigate("PreferencesStack")
  }

  return (
    <View style={styles.container}>
      <Target_Card/>
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
    paddingTop: 15,
    width: "100%",
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

export default TabProgressScreen;
