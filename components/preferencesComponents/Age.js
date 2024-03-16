import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import BackButton from "./BackButton";
import NextButton from "./NextButton";
import Toast from "react-native-toast-message";
import WheelPicker from "react-native-wheely";
import { Picker } from '@react-native-picker/picker';

const Age = ({ selectedGender, backAction, nextCompName, onPressNext }) => {
  const [selectedAge, setSelectedAge] = useState(19);

  const ageOptions = Array.from({ length: 100 }, (_, index) =>
    String(index + 1)
  );
  useEffect(() => {
    if (selectedAge && parseInt(selectedAge) < 19) {
      Toast.show({
        type: "error",
        text1: "Age Requirement",
        text2: "The minimum age requirement is 19.",
        position: "bottom",
        bottomOffset: 130,
        text1Style: styles.toastText1,
        text2Style: styles.toastText2,
      });
    }
  }, [selectedAge]);

  // Check if age is valid (greater than or equal to 19)
  const isAgeValid = parseInt(selectedAge) >= 19;

  const handlePressNext = () => {
    if (isAgeValid && typeof onPressNext === "function") {
      onPressNext(selectedAge);
    } else {
      console.error("onPressNext is not a function or the age is not valid");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>How old are you?</Text>
          <Text style={styles.text}>
            This helps us create your personalized plan
          </Text>
        </View>
        <View style={styles.pickerContainer}>
          <WheelPicker
            selectedIndex={selectedAge - 1}
            options={ageOptions}
            onChange={(index) => setSelectedAge(Number(ageOptions[index]))}
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
          {/* <Picker
            style={styles.picker}
            selectedValue={selectedAge}
            itemStyle={styles.itemStyle}
            onValueChange={(index) => setSelectedAge(index)}
          >
            {ageOptions.map((value, index) => (
              <Picker.Item label={value} value={index} key={index} />
            ))}
          </Picker> */}
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <BackButton backAction={backAction} />
        <NextButton
          nextCompName={nextCompName}
          onPressNext={handlePressNext}
          selectedAge={selectedAge}
          disabled={!isAgeValid}
          style={{ backgroundColor: isAgeValid ? "#FF934E" : "grey" }}
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
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  selectedAge: {
    fontSize: 20,
    marginTop: 20,
  },
  innerContainer: {
    alignItems: "center",
    justifyContent: "space-around",
  },
  headingContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  pickerContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginTop: "21%",
  },
  buttonsContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-end",
  },

  toastText1: {
    fontSize: 18,
    fontWeight: "bold",
  },
  toastText2: {
    fontSize: 15,
  },



// Picker styling
  picker: {
    width: 200,
    // height: 250,
  },
  itemStyle: {
    fontSize: 40,
  },
  selectedText: {
    marginTop: 15,
    fontSize: 16,
  },
});

export default Age;
