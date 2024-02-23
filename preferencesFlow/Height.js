import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import BackButton from "./components/BackButton";
import NextButton from "./components/NextButton";
import ToggleButton from "./components/ToggleButton";
import WheelPicker from "react-native-wheely";

const Height = ({ backAction, nextCompName, onPressNext }) => {
  const [selectedHeight, setSelectedHeight] = useState(null);
  const [selectedUnit, setSelectedUnit] = useState("CM");

  const getHeightOptions = () => {
    const startValue = selectedUnit === "CM" ? 101 : 40;
    const endValue = selectedUnit === "Feet" ? 300 : 215; 

    return Array.from({ length: endValue - startValue + 1 }, (_, index) =>
      String(index + startValue)
    );
  };
  const initialSelectedIndex = selectedHeight
    ? getHeightOptions().indexOf(selectedHeight)
    : 0;

    const [selectedIndex, setSelectedIndex] = useState(initialSelectedIndex);


  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.heading}>What's your height?</Text>
        <Text style={styles.text}>This helps us create your personalized plan</Text>
        <ToggleButton />
        <View style={styles.pickerContainer}>
          <WheelPicker
            selectedIndex={selectedHeight ? getHeightOptions().indexOf(selectedHeight) : 0}
            options={getHeightOptions()}
            onChange={(index) => setSelectedHeight(getHeightOptions()[index])}
            itemTextStyle={{
              color: "black",
              fontSize: 40,
            }}
            containerStyle={{
              width: "80%",
              alignItems: "center",
            }}
            selectedIndicatorStyle={{
              width: 100,
              borderTopWidth: 3,
              borderBottomWidth: 3,
              borderRadius: 0,
              borderTopColor: "#FF934E",
              borderBottomColor: "#FF934E",
              backgroundColor: "transparent",
            }}
            itemHeight={60}
          />
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <BackButton backAction={backAction} />
        <NextButton
          nextCompName={nextCompName}
          onPressNext={() => {
            console.log("Selected Height:", selectedHeight);
            onPressNext(selectedHeight);
          }}
          selectedHeight={selectedHeight}
        />
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingTop: 36,
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 20,
  },
  innerContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-end",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
  },
  pickerContainer: {
    width: "80%",
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  selectedHeight: {
    fontSize: 20,
    marginTop: 20,
  },
});

export default Height;
