import React from "react";
import { View, Text, StyleSheet } from "react-native";
import GenderBox from "./components/GenderBox";
import Mars from "./components/Mars.png";
import Venus from "./components/Venus.png";
import NextButton from "./components/NextButton";

const Gender = ({nextCompName, onPressNext}) => {

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.heading}>Tell us about yourself</Text>
        <Text style={styles.text}>
          To give you a better experience we need to know your gender
        </Text>
        <View style={styles.gender}>
          <GenderBox imageSource={Mars} backgroundColor="black" title="Male" />
          <GenderBox imageSource={Venus} backgroundColor="grey" title="Female" />
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <NextButton nextCompName={nextCompName} onPressNext={onPressNext}/>
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
    justifyContent: 'center'
  },
  buttonsContainer: {
    flexDirection: "row",
    width: '100%',
    justifyContent: 'flex-end'
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
    fontWeight: "regular",
    marginTop: 10,
    textAlign: "center",
  },
  box: {
    marginTop: 50,
  },
  gender: {
    marginTop: 30
  },
});

export default Gender;
