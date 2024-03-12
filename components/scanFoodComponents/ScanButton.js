import { StyleSheet, TouchableOpacity } from "react-native";
import { HStack, Text, Image, View } from "@gluestack-ui/themed"
import StyledText from "../globalComponents/StyledText";
import { useNavigation } from '@react-navigation/native';

const ScanButton = ({isForCamera = true}) => {

    const navigation = useNavigation(); // Get navigation object

    const handlePress = () => {
        if  (isForCamera) {
            navigation.navigate('SearchFoodStack', {screen: 'CameraScreen'});
        }else{
            navigation.navigate('SearchFoodStack', {screen: 'LogFood'});
        }
    }

    return (
        <View style={styles.container} >
            <TouchableOpacity onPress={handlePress} style={styles.button}>
            {isForCamera ? (
                <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center', justifyContent:'space-between'}} >
                    <Image
                        size="xs"
                        tintColor={'rgb(114, 101, 227)'}
                        source={require('../../assets/camera-icon.png')}
                    />
                    <StyledText style={styles.buttonText}>Scan meal</StyledText>
                </View>
            ) : (
                <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center', justifyContent:'space-between'}}>
                    <Image
                        size="xs"
                        source={require('../../assets/icon-barcode.png')}
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
        fontSize: 13,
        fontFamily: 'poppins-regular'
    }
  });

  export default ScanButton