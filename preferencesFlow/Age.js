import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import BackButton from "./components/BackButton";
import NextButton from "./components/NextButton";
import Toast from "react-native-toast-message";
import WheelPicker from "react-native-wheely";

const Age = ({ backAction, nextCompName, onPressNext }) => {
  // WheelPicker
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

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.heading}>How old are you?</Text>
        <Text style={styles.text}>
          This helps us create your personalized plan
        </Text>
        <View style={styles.pickerContainer}>
          <WheelPicker
            selectedIndex={selectedAge - 1}
            options={ageOptions}
            onChange={(index) => setSelectedAge(Number(ageOptions[index]))}
            itemTextStyle={{
              color: "black", // Set the color of the WheelPicker items
              fontSize: 40, // Adjust the font size as needed
            }}

            containerStyle={{
              width: "80%", // Adjust the width as needed
              alignItems: "center", // Center the WheelPicker horizontally
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
            visibleRest={3} // Adjust the number of visible items in each direction as needed
            itemHeight={60} // Adjust the height of each item as needed
          />
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <BackButton backAction={backAction} />
        <NextButton
          nextCompName={nextCompName}
          onPressNext={onPressNext}
          disabled={!isAgeValid}
          style={{ backgroundColor: isAgeValid ? "#FF934E" : "grey" }}
        />
      </View>
      <Toast ref={(ref) => Toast.setRef(ref)} />
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
    justifyContent: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-end",
  },
  pickerInput: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    backgroundColor: "transparent",
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    color: "black",
  },

  toastText1: {
    fontSize: 18,
    fontWeight: "bold",
  },
  toastText2: {
    fontSize: 15,
  },
});

export default Age;
