import { Text, Image, View } from '@gluestack-ui/themed'
import { StyleSheet } from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import StyledText from '../globalComponents/StyledText';

const NutritionalContent = ({isCircleView = false, label, value, unit = "gm", percent = 0, multiplier = 1, extraCalories = 0}) => {

    const showMultipliedValues = (info) => {
        if (isCircleView) {
            return parseFloat((parseFloat(info) *  multiplier) + parseFloat(extraCalories)).toFixed(2);
        }
        return parseFloat((parseFloat(info) * parseFloat(multiplier))).toFixed(2);
    }

    return (
        <View style={styles.container}>
            {isCircleView ? (
                <LinearGradient
                    colors={['#FF6200', '#7265E3']}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    style={[
                        styles.linearGradient,
                        {marginTop: 15, width: 75, borderRadius: 75}, // <-- Overwrites the preceding style property
                    ]}>
                    <View style={[styles.innerContainer, {borderRadius: 75}]}>
                        <StyledText style={styles.buttonTitleText}>{parseFloat(showMultipliedValues(value)).toFixed(0)}</StyledText>
                        <StyledText style={styles.buttonText}>{unit}</StyledText>
                    </View>
                </LinearGradient>
            ) : (
                <View style={{justifyContent: 'space-around', alignItems: 'center', gap: 5, height: 75}}>
                    <StyledText style={{color: 'grey'}}>{percent}%</StyledText>
                    <StyledText style={{fontFamily: 'poppins-semibold', fontSize: 16}}>{parseFloat(showMultipliedValues(value)).toFixed(0)} {unit}</StyledText>
                    <StyledText style={{color: 'grey'}}>{label}</StyledText>
                </View>
            )}

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-end'
    },
    linearGradient: {
        height: 75,
        width: 200,
        borderRadius: 20, // <-- Outer Border Radius
      },
      innerContainer: {
        borderRadius: 15, // <-- Inner Border Radius
        flex: 1,
        gap: 0,
        margin: 5, // <-- Border Width
        backgroundColor: '#fff',
        justifyContent: 'center',
      },
      buttonTitleText: {
        fontSize: 20,
        fontFamily: 'poppins-semibold',
        textAlign: 'center',
        margin: 0,
        color: '#7265E3',
        backgroundColor: 'transparent',
      },
      buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 0,
        color: '#7265E3',
        backgroundColor: 'transparent',
      },
  });

export default NutritionalContent