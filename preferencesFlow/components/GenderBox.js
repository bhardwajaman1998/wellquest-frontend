import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const GenderBox = ({ initialImageSource, title, onClick, newImageSource }) => {
  const [imageSource, setImageSource] = useState(initialImageSource);
  const [borderColor, setBorderColor] = useState("transparent");
  const [textColor, setTextColor] = useState("#fff");
  const [backgroundColor, setBackgroundColor] = useState("#7265E3")

  const handlePress = () => {
    onClick(imageSource === initialImageSource ? newImageSource : initialImageSource);
    
    setImageSource(imageSource === initialImageSource ? newImageSource : initialImageSource);
    setBorderColor(borderColor === "transparent" ? "#7265E3" : "transparent");
    setTextColor(textColor === "#fff" ? "#7265E3" : "#fff");
    setBackgroundColor(backgroundColor === "#7265E3" ? "#fff" : "#7265E3")
  }
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[styles.box, { backgroundColor, borderColor  }]}
    >
      <View style={[styles.box, { backgroundColor, borderColor  }]}>
        <Image source={imageSource} style={styles.image} />
        <Text style={[styles.title, { color: textColor }]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 140,
    height: 140,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    margin: 15,
    borderWidth: 2,
  },
  image: {
    width: 60,
    height: 60,
  },
  title: {
    fontSize: 16,
    color: "white",
    fontWeight: "normal",
    marginTop: 10,
    textAlign: "center",
  },
});

export default GenderBox;
