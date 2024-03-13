import React from 'react'
import { View, StyleSheet } from "react-native";
import StyledText from './StyledText';
import GlobalBackButton from './GlobalBackButton';

const NavigationBar = ({title, leftIcon, leftClick, rightIcon, rightClick}) => {
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={styles.icons}>
                    {leftIcon ? (
                        leftIcon
                    ) : (
                        <GlobalBackButton />
                    )}
                </View>
                <StyledText style={styles.title}>{title}</StyledText>
                <View style={styles.icons}>
                    {rightIcon ? (
                        rightIcon
                    ) :(
                        <View style={{width: 20}}></View>
                    )}
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        marginTop: 0,
        backgroundColor: 'white',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        shadowColor: 'rgba(114, 101, 227, 0.5)',
        shadowOffset: {
          width: 0,
          height: -2,
        },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 4,
    },
    innerContainer: {
        width: '100%',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between'
    },
    title: {
        alignSelf: 'flex-end',
        marginBottom: 10,
        fontFamily: 'poppins-semibold',
        fontSize: 20,
        color: 'rgba(114, 101, 227, 1)',
        flex: 1,
        flexGrow: 1,
        textAlign: 'center'
    },
    icons:{
        marginHorizontal: 15,
        marginBottom: 5
    }
})


export default NavigationBar;
