import { StyleSheet, TouchableOpacity } from "react-native";
import { HStack, Text, Image, View } from "@gluestack-ui/themed"
import StyledText from "../components/StyledText";
import { useNavigation } from '@react-navigation/native';

const ScanButton = () => {

    const navigation = useNavigation(); // Get navigation object

    const handlePress = () => {
        navigation.navigate('LogFood');
    }

    return (
        <View style={styles.container} >
            <TouchableOpacity onPress={handlePress} style={styles.button}>
                <Image
                    size="2xs"
                    source={require('../assets/camera-icon.png')}
                />
                <StyledText style={styles.buttonText}>Scan a meal</StyledText>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '50%',
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        padding: 5,
        borderRadius: 15,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        height: 45
      },
    buttonText: {
        fontSize: 14,
        fontFamily: 'poppins-regular'
    }
  });

  export default ScanButton