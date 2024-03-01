import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import BackButton from "./BackButton";
import NextButton from "./NextButton";
import ToggleButton from "./ToggleButton";
import WheelPicker from "react-native-wheely";

const Height = ({ backAction, nextCompName, onPressNext }) => {
  const startHeight = 40;
  const endHeight = 300;
  
  const getHeightOptions = () => {
    
    return Array.from({ length: endHeight - startHeight + 1 }, (_, index) =>
    String(index + startHeight)
    );
  };

  const [selectedHeight, setSelectedHeight] = useState(startHeight);
  const [selectedHeightUnit, setSelectedHeightUnit] = useState("CM");

  const initialSelectedIndex = selectedHeight
    ? getHeightOptions().indexOf(selectedHeight)
    : 0;

  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.heading}>What's your height?</Text>
        <Text style={styles.text}>
          This helps us create your personalized plan
        </Text>
        <ToggleButton
          labels={["CM", "Feet"]}
          onPress={(selectedUnit) => {
            setSelectedHeightUnit(selectedUnit);
            const heightOptions = getHeightOptions();
            setSelectedHeight(heightOptions[selectedIndex]);
          }}
        />
        <View style={styles.pickerContainer}>
          <WheelPicker
            selectedIndex={selectedIndex}
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
            onPressNext(selectedHeight, selectedHeightUnit);
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
