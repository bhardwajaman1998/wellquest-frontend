import { StyleSheet, TouchableOpacity } from "react-native";
import { HStack, Text, Image, View } from "@gluestack-ui/themed"
import StyledText from "../globalComponents/StyledText";
import { useNavigation } from '@react-navigation/native';

const LogButtons = ({isForCancel}) => {

    const navigation = useNavigation(); // Get navigation object

    const handlePress = () => {

    }

    return (
        <View style={styles.container} >
            <TouchableOpacity onPress={handlePress} style={isForCancel ? (styles.buttonCancel) : (styles.buttonApply)}>
                <StyledText style={isForCancel ? (styles.textCancel) : (styles.textApply)}>{isForCancel  ? 'CANCEL' : 'LOG'}</StyledText>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex : 1
    },
    buttonCancel: {
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        borderRadius: 15,
        backgroundColor: 'white',
        height: 50,
        borderColor: 'orange',
        borderWidth: 2
      },
      buttonApply: {
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        borderRadius: 15,
        backgroundColor: 'orange',
        height: 50
    },
    textCancel: {
        fontSize: 18,
        fontFamily: 'poppins-semibold',
        color: 'orange'
    },
    textApply: {
        fontSize: 18,
        fontFamily: 'poppins-semibold',
        color: 'white'
    }
  });

  export default LogButtons