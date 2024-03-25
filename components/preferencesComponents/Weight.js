import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import BackButton from "./BackButton";
import NextButton from "./NextButton";
import ToggleButton from "./ToggleButton";
import WheelPicker from "react-native-wheely";
import AnimatedView from "../globalComponents/AnimatedView";

const Weight = ({ backAction, nextCompName, onPressNext }) => {
  const startWeightKgs = 30;
  const endWeightKgs = 200;
  const startWeightLbs = Math.round(startWeightKgs * 2.20462); // Convert start weight to lbs
  const endWeightLbs = Math.round(endWeightKgs * 2.20462); // Convert end weight to lbs

  const [selectedWeight, setSelectedWeight] = useState(String(selectedIndex));
  const [selectedWeightUnit, setSelectedWeightUnit] = useState("Kg");
  
  useEffect(() => {
    console.log(selectedWeightUnit);
    if (selectedWeightUnit === "Kg") {
      setSelectedWeight(String(weightKgs))
    } else if (selectedWeightUnit === "Lb") {
      setSelectedWeight(String(weightLbs))
    }
  }, [selectedWeightUnit, startWeightKgs, startWeightLbs]);
  
  const [selectedIndex, setSelectedIndex] = useState(5);

  const [ weightKgs, setWeightKgs] = useState([]);
  const [ weightLbs, setWeightLbs] = useState([]);


  const getWeightOptions = (unit) => {
    const startWeight = unit === "Kg" ? startWeightKgs : startWeightLbs;
    const endWeight = unit === "Kg" ? endWeightKgs : endWeightLbs;
    
    for (let weight = startWeight; weight <= endWeight; weight += 0.5) {
      weightKgs.push(String(weight));
    }
    for (let weight = startWeightLbs; weight <= endWeightLbs; weight += 1) {
      weightLbs.push(String(weight));
    }
    return [weightKgs, weightLbs];
};

const [weightOptionsKgs, weightOptionsLbs] = getWeightOptions("Kg");

  return (
    <AnimatedView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.heading}>What's your weight?</Text>
        <Text style={styles.text}>
          This helps us create your personalized plan
        </Text>
        <ToggleButton
          labels={["Kg", "Lb"]}
          onChange={(selectedButton) => {
            setSelectedWeightUnit(selectedButton);
          }}
        />
        
        <View style={styles.pickerContainer}>
        {selectedWeightUnit === "Kg" && (
          <WheelPicker
            selectedIndex={selectedIndex}
            options={weightKgs}
            onChange={(index) => setSelectedWeight(weightKgs[index])
            }
            itemTextStyle={{
              color: "black", 
              fontFamily: 'Helvetica Neue',
              fontSize: 50,
              marginTop: 10,
              marginBottom: 10,
              alignSelf: 'center'
            }}
            containerStyle={{
              marginTop: 30,
              justifyContent: 'center',
              alignContent: 'center'
            }}
            selectedIndicatorStyle={{
              width: 100,
              flex: 1,
              borderTopWidth: 3,
              borderBottomWidth: 3,
              borderRadius: 0,
              borderTopColor: "#FF934E",
              borderBottomColor: "#FF934E",
              backgroundColor: "transparent",
              alignSelf: 'center'
            }}
            itemHeight={85}
          /> 
          )}
          {selectedWeightUnit === "Lb" && (
            <WheelPicker
            selectedIndex={selectedIndex}
            options={weightLbs}
            onChange={(index) => setSelectedWeight(weightLbs[index])}
            itemTextStyle={{
              color: "black", 
              fontFamily: 'Helvetica Neue',
              fontSize: 50,
              marginTop: 10,
              marginBottom: 10,
            }}
            containerStyle={{
              marginTop: 30,
              justifyContent: 'center',
              alignContent: 'center'
            }}
            selectedIndicatorStyle={{
              flex: 1,
              alignSelf : 'center',
              width: 100,
              borderTopWidth: 3,
              borderBottomWidth: 3,
              borderRadius: 0,
              borderTopColor: "#FF934E",
              borderBottomColor: "#FF934E",
              backgroundColor: "transparent",
            }}
            itemHeight={85}
          />
        )}
        
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <BackButton backAction={backAction} />
        <NextButton
          nextCompName={nextCompName}
          onPressNext={() => onPressNext(selectedWeight, selectedWeightUnit)}
          selectedWeight={selectedWeight}
          selectedWeightUnit={selectedWeightUnit}
        />
      </View>
    </AnimatedView>
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
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: 'Helvetica Neue',

  },
  text: {
    fontSize: 14,
    marginBottom: 20,
  },
  pickerContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginTop: "2%",
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  selectedWeight: {
    fontSize: 20,
    marginTop: 20,
  },
});

export default Weight;
