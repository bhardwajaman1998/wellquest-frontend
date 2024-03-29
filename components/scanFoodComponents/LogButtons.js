import { StyleSheet, TouchableOpacity } from "react-native"
import { HStack, Text, Image, View } from "@gluestack-ui/themed"
import StyledText from "../globalComponents/StyledText"
import { useNavigation } from "@react-navigation/native"

const LogButtons = ({
  isForCancel,
  isEdited,
  cancelPress,
  logPress,
  mealInfoPress,
}) => {
  const navigation = useNavigation()

  const handleCancel = () => {
    cancelPress()
  }

  const handleLog = () => {
    logPress()
  }
  const getMealInfo = () => {
    mealInfoPress()
  }

  return (
    <View style={styles.container}>
      {isEdited ? (
        <TouchableOpacity
          onPress={isForCancel ? handleCancel : getMealInfo}
          style={isForCancel ? styles.buttonCancel : styles.buttonApply}>
          <StyledText
            style={isForCancel ? styles.textCancel : styles.textApply}>
            {isForCancel ? "CANCEL" : "GET INFO"}
          </StyledText>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={isForCancel ? handleCancel : handleLog}
          style={isForCancel ? styles.buttonCancel : styles.buttonApply}>
          <StyledText
            style={isForCancel ? styles.textCancel : styles.textApply}>
            {isForCancel ? "CANCEL" : "LOG"}
          </StyledText>
        </TouchableOpacity>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonCancel: {
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    borderRadius: 15,
    backgroundColor: "white",
    height: 35,
    borderColor: "orange",
    borderWidth: 2,
  },
  buttonApply: {
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    borderRadius: 15,
    backgroundColor: "orange",
    height: 35,
  },
  textCancel: {
    fontSize: 14,
    fontFamily: "poppins-semibold",
    color: "orange",
  },
  textApply: {
    fontSize: 14,
    fontFamily: "poppins-semibold",
    color: "white",
  },
})

export default LogButtons
