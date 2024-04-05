// this is the Second screen where the user will get the recommendations of the coaches and select one of them to proceeed further

import React from 'react';
import {Text,TouchableOpacity,Image, StyleSheet,View ,navigation} from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

const CoachCard  = ({coachImg,coachName, coachDesc,onPress}) => {
    const navigation = useNavigation();

    // const handlePress = () => {
    //   navigation.navigate('Select Coach'); 
    // };
    
    return(
        <TouchableOpacity style={styles.container}  onPress={onPress}>
            <View style={styles.card}>
                <Image
                source={coachImg}
                style={styles.image}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.coachName}>{coachName}</Text>
                    <Text style={styles.coachDesc}>{coachDesc}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles=StyleSheet.create({
    container: {
        marginTop: 15,
        // height:'100%',
      },
      card: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderLeftColor:'#7265E3',
        borderLeftWidth:4,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#fff',
        elevation: 5, // For Android shadow
        shadowColor: '#7265E3', // For iOS shadow
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
      },
      textContainer: {
        flex: 1,
        marginLeft:10,
        letterSpacing:15,
      },
      coachName: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      coachDesc: {
        fontSize: 14,
        marginTop: 5,
        color: 'grey'
      },
});

export default CoachCard;

