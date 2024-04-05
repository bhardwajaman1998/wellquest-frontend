import { StyleSheet, TouchableOpacity } from "react-native"
import { HStack, Text, Image, View } from "@gluestack-ui/themed"
import StyledText from "../globalComponents/StyledText"
import { useNavigation } from "@react-navigation/native"

const ScanButton = ({ navigation, isForCamera = true }) => {
  const handlePress = () => {
    if (isForCamera) {
      navigation.navigate("SearchFoodStack", { screen: "CameraScreen" })
    } else {
      navigation.navigate("SearchFoodStack", { screen: "LogFood" })
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress} style={styles.button}>
        {isForCamera ? (
          <View
            style={{
              flexDirection: "row",
              gap: 5,
              alignItems: "center",
              justifyContent: "space-between",
            }}>
            <Image
              size="xs"
              tintColor={"rgb(114, 101, 227)"}
              marginTop={6}
              source={require("../../assets/camera-icon.png")}
            />
            <StyledText style={styles.buttonText}>Scan meal</StyledText>
          </View>
        ) : (
          <View
            style={{
              flexDirection: "row",
              gap: 5,
              alignItems: "center",
              justifyContent: "space-between",
            }}>
            <Image
              size="xs"
              source={require("../../assets/icon-barcode.png")}
            />
            <StyledText style={styles.buttonText}>Scan barcode</StyledText>
          </View>
        )}
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "50%",
    alignItems: "center",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    padding: 5,
    borderRadius: 15,
    borderWidth: 0.5,
    borderColor: "#7265E3",
    backgroundColor: "white",
    shadowColor: "grey",
    borderWidth: 0,
    borderColor: "#7265E3",
    shadowOffset: {
      width: 2,
      height: 5, // Adjusted to remove upper shadow
    },
    shadowOpacity: 0.47,
    shadowRadius: 2.65,
    elevation: 5,
    height: 45,
    width: 150,
  },
  buttonText: {
    fontSize: 13,
    fontFamily: "poppins-regular",
  },
})

export default ScanButton
