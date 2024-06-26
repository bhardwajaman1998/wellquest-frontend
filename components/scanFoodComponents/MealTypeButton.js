import { View, Image } from "@gluestack-ui/themed"
import StyledText from "../globalComponents/StyledText"
import { StyleSheet, TouchableOpacity } from "react-native"
import { useState } from "react"

const MealTypeButton = ({ isSelected, text, source, onSelect }) => {
  const [selected, setSelected] = useState(isSelected)

  const handlePress = () => {
    setSelected(!selected)
    onSelect(!selected)
  }

  return (
    <View style={isSelected ? styles.containerSelected : styles.container}>
      <TouchableOpacity
        onPress={onSelect}
        style={{ gap: 0, alignItems: "center" }}>
        <Image
          style={styles.image}
          source={source}
          tintColor={isSelected ? "rgb(255, 255, 255)" : "rgb(114, 101, 227)"}
        />
        <StyledText style={isSelected ? styles.textSelected : styles.text}>
          {text}
        </StyledText>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  containerSelected: {
    flexDirection: "column",
    alignItems: "center",
    padding: 8,
    borderRadius: 15,
    backgroundColor: "rgb(114, 101, 227)",
    shadowColor: "#000",
    borderWidth: .5,
    borderColor: "#7265E3",
    shadowOffset: {
      width: 0,
      height: 4, // Adjusted to remove upper shadow
    },
    shadowOpacity: 0.65,
    shadowRadius: 3.84,
    elevation: 5,
    gap: 10,
    flex: 1,
  },
  image: {
    aspectRatio: 1 / 1,
    padding: 5,
    width: 80,
    height: 80,
  },
  text: {
    color: "black",
  },
  textSelected: {
    color: "white",
  },
  container: {
    flexDirection: "column",
    alignItems: "center",
    padding: 5,
    borderRadius: 15,
    backgroundColor: "white",
    shadowColor: "#7265E3",
    borderWidth: 0,
    borderColor: "#7265E3",
    shadowOffset: {
      width: 0,
      height: 3, // Adjusted to remove upper shadow
    },
    shadowOpacity: 0.47,
    shadowRadius: 2.65,
    elevation: 5,
    gap: 13,
    flex: 1,
  },
})
export default MealTypeButton
