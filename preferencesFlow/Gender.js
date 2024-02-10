import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import GenderBox from "./components/GenderBox";
import Mars from "./components/Mars.png";
import Venus from "./components/Venus.png";
import BackButton from "./components/BackButton";
import NextButton from "./components/NextButton";

const Gender = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Tell us about yourself</Text>
      <Text style={styles.text}>
        To give you a better experience we need to know your gender
      </Text>
      <View style={styles.gender}>
        <GenderBox imageSource={Mars} backgroundColor="black" title="Male" />
        <GenderBox imageSource={Venus} backgroundColor="grey" title="Female" />
      </View>
      <BackButton />
      <NextButton destination="Age"/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    paddingTop: 36,
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 20,
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
