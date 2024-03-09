import React from 'react'
import WheelPicker from "react-native-wheely";

const CustomWheelPicker = ({options, selectedIndex, onChange}) => {
  return (
    <WheelPicker
            selectedIndex={selectedIndex}
            options={options}
            onChange={(index) => setSelectedWeight(index)}
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
  )
}

export default CustomWheelPicker
