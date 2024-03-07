// import React, { useState } from "react";
// import { View, Text, StyleSheet } from "react-native";
// import BackButton from "./BackButton";
// import NextButton from "./NextButton";
// import ToggleButton from "./ToggleButton";
// import WheelPicker from "react-native-wheely";

// const Weight = ({ backAction, nextCompName, onPressNext }) => {
//   const startWeightKgs = 30;
//   const endWeightKgs = 200;
//   const startWeightLbs = Math.round(startWeightKgs * 2.20462); // Convert start weight to lbs
//   const endWeightLbs = Math.round(endWeightKgs * 2.20462); // Convert end weight to lbs

//   const getWeightOptions = (unit) => {
//     const weights = [];
//     const startWeight = unit === "Kg" ? startWeightKgs : startWeightLbs;
//     const endWeight = unit === "Kg" ? endWeightKgs : endWeightLbs;
//     const increment = unit === "Kg" ? 1 : 5; // Increment for kgs or lbs
//     for (let weight = startWeight; weight <= endWeight; weight += increment) {
//       weights.push(String(weight));
//     }
//     return weights;
//   };

//   const [selectedWeight, setSelectedWeight] = useState(String(startWeightKgs));
//   const [selectedWeightUnit, setSelectedWeightUnit] = useState("Kg");
  
//   const initialSelectedIndex = getWeightOptions(selectedWeightUnit).indexOf(selectedWeight);

//   const [selectedIndex, setSelectedIndex] = useState(initialSelectedIndex);

//   return (
//     <View style={styles.container}>
//       <View style={styles.innerContainer}>
//         <Text style={styles.heading}>What's your weight?</Text>
//         <Text style={styles.text}>
//           This helps us create your personalized plan
//         </Text>
//         <ToggleButton
//           labels={["Kg", "Lb"]}
//           onPress={() => {
//             const newWeightUnit = selectedWeightUnit === "Kg" ? "Lb" : "Kg";
//             setSelectedWeightUnit(newWeightUnit);
//             setSelectedWeight(getWeightOptions(newWeightUnit)[selectedIndex]);
//           }}
//         />

//         <View style={styles.pickerContainer}>
//           <WheelPicker
//             selectedIndex={selectedIndex}
//             options={getWeightOptions()}
//             onChange={(index) => {
//               setSelectedWeight(getWeightOptions(selectedWeightUnit)[index]);
//               setSelectedIndex(index);
//             }}
//             itemTextStyle={{
//               color: "black",
//               fontSize: 40,
//             }}
//             containerStyle={{
//               width: "80%",
//               alignItems: "center",
//             }}
//             selectedIndicatorStyle={{
//               width: 100,
//               borderTopWidth: 3,
//               borderBottomWidth: 3,
//               borderRadius: 0,
//               borderTopColor: "#FF934E",
//               borderBottomColor: "#FF934E",
//               backgroundColor: "transparent",
//             }}
//             itemHeight={60}
//           />
//         </View>
//       </View>
//       <View style={styles.buttonsContainer}>
//         <BackButton backAction={backAction} />
//         <NextButton
//           nextCompName={nextCompName}
//           onPressNext={() => onPressNext(selectedWeight, selectedWeightUnit)}
//           selectedWeight={selectedWeight}
//           selectedWeightUnit={selectedWeightUnit}
//         />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "space-between",
//     paddingTop: 36,
//     alignItems: "center",
//     backgroundColor: "#ffffff",
//     padding: 20,
//   },
//   innerContainer: {
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   buttonsContainer: {
//     flexDirection: "row",
//     width: "100%",
//     justifyContent: "flex-end",
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   text: {
//     fontSize: 16,
//     marginBottom: 20,
//   },
//   pickerContainer: {
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 10,
//     marginTop: "10%",
//   },
//   label: {
//     fontSize: 18,
//     marginBottom: 10,
//   },
//   selectedWeight: {
//     fontSize: 20,
//     marginTop: 20,
//   },
// });

// export default Weight;


import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import BackButton from "./BackButton";
import NextButton from "./NextButton";
import ToggleButton from "./ToggleButton";
import WeightWheelPicker from "./WeightWheelPicker";

const Weight = ({ backAction, nextCompName, onPressNext }) => {
  const startWeight = 40;
  const endWeight = 300;

  const getWeightOptions = () => {
    return Array.from({ length: endWeight - startWeight + 1 }, (_, index) =>
      String(index + startWeight)
    );
  };

  const [selectedWeight, setSelectedWeight] = useState(startWeight);
  const [selectedWeightUnit, setSelectedWeightUnit] = useState("Kg");

  const initialSelectedIndex = selectedWeight
    ? getWeightOptions().indexOf(selectedWeight)
    : 0;

  const [selectedIndex, setSelectedIndex] = useState(0);

  // Define the onUnitChange function
  const onUnitChange = (unit) => {
    setSelectedWeightUnit(unit);
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.heading}>What's your weight?</Text>
        <Text style={styles.text}>This helps us create your personalized plan</Text>
        <ToggleButton
          labels={["Kg", "Lb"]}
          onPress={(unit) => {
            setSelectedWeightUnit(unit);
          }}
          // Pass the onUnitChange function to the ToggleButton component
          onUnitChange={onUnitChange}
        />

        <WeightWheelPicker
          selectedWeight={selectedWeight}
          selectedWeightUnit={selectedWeightUnit}
          setSelectedWeight={setSelectedWeight}
          setSelectedIndex={setSelectedIndex}
          onPressNext={() => onPressNext(selectedWeight, selectedWeightUnit)}
        />
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
});

export default Weight;
