import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import BackButton from "./components/BackButton";
import RNPickerSelect from "react-native-picker-select";
import { ArrowRight } from 'lucide-react-native';
import { useNavigation } from "@react-navigation/native";

const ActivityLevel = ({ backAction, nextCompName }) => {
  const [selectedActivityLevel, setSelectedActivityLevel] = useState(null);


  const ActivityLevelOptions = [
    { label: "Rookie", value: "Rookie" },
    { label: "Beginner", value: "Beginner" },
    { label: "Intermediate", value: "Intermediate" },
    { label: "Advance", value: "Advance" },
    { label: "True Beast", value: "True Beast" },
  ];
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.heading}>Your regular physical activity level</Text>
        <Text style={styles.text}>
          This helps us create your personalized plan
        </Text>
        <View style={styles.pickerContainer}>
          <RNPickerSelect
            placeholder={{
              label: "Select ActivityLevel...",
              value: null,
            }}
            items={ActivityLevelOptions}
            onValueChange={(value) => setSelectedActivityLevel(value)}
            style={{
              inputIOS: styles.pickerInput,
              inputAndroid: styles.pickerInput,
              iconContainer: styles.pickerIcon,
            }}
            value={selectedActivityLevel}
            useNativeAndroidPickerStyle={false}
          />
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <BackButton backAction={backAction} />
        <View style={styles.button}>
          <TouchableOpacity onPress={onPress}>
            <View style={styles.iconWrapper}>
              <Text style={styles.text}>Finishing Up!</Text>
              <ArrowRight style={styles.arrowRight} />
            </View>
          </TouchableOpacity>
        </View>
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
  selectedActivityLevel: {
    fontSize: 20,
    marginTop: 20,
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
  pickerIcon: {
    top: 20,
    right: 10,
  },

  button: {
    position: "absolute",
    bottom: 30,
    right: 30,
    height: 50,
    paddingHorizontal: 20, 
    borderRadius: 25,
    backgroundColor: "#808080",
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconWrapper: {
    flexDirection: 'row',
    alignItems: 'center'    
},
  text: {
    color: 'white',
    fontSize: 18,
    marginRight: 5
  },
  arrowRight: {
    color: 'white',
    width: 18,
    height: 18,
  }
});

export default ActivityLevel;
