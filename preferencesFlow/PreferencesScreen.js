import React, { useState, useEffect } from "react";
import { View, StyleSheet } from 'react-native'

import Gender from "./Gender";
import Age from "./Age";
import Height from "./Height";
import Goal from "./Goal";
import ActivityLevel from "./ActivityLevel";
import Success from "./Success";

import { BackHandler } from "react-native";

const PreferencesScreen = () => {
  const [cardType, setCardType] = useState(1);
  const screenArray = ['Gender', 'Age', 'Height', 'Goal', 'ActivityLevel', 'Success']

  const backAction = () => {
    if (cardType > 1) {
      setCardType(cardType - 1);
      return true;
    }
    return false;
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);
    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);

  const screenSelect = (name) => {
    const index = screenArray.indexOf(name);
    setCardType(index + 1);
  };

  return (
    <View style={styles.container}>
      {cardType === 1 && (
        <Gender backAction={backAction} nextCompName={'Age'}  onPressNext={(name, selectedGender) => screenSelect(name, selectedGender)} />
      )}
      {cardType === 2 && (
        <Age backAction={backAction}  nextCompName={'Height'} onPressNext={screenSelect} />
      )}
      {cardType === 3 && (
        <Height backAction={backAction}  nextCompName={'Goal'} onPressNext={screenSelect} />
      )}
      {cardType === 4 && (
        <Goal backAction={backAction}  nextCompName={'ActivityLevel'} onPressNext={screenSelect} />
      )}
      {cardType === 5 && (
        <ActivityLevel backAction={backAction}  nextCompName={'Success'} onPressNext={screenSelect} />
      )}
      {cardType === 6 && (
        <Success />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
});

export default PreferencesScreen;
