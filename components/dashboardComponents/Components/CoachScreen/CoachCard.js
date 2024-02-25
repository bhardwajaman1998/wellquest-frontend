// this is the Second screen where the user will get the recommendations of the coaches and select one of them to proceeed further

import React from 'react';
import {Text,TouchableOpacity,Image, StyleSheet,View ,navigation} from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

const CoachCard  = ({coachImg,coachName, coachDesc,}) => {
    const navigation = useNavigation();

    const handlePress = () => {
      navigation.navigate('Select Coach'); 
    };
    
    return(
        <TouchableOpacity style={styles.container} onPress={handlePress}>
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
        margin: 10,
      },
      card: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#fff',
      },
      image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
      },
      textContainer: {
        flex: 1,
        marginLeft:20,
        letterSpacing:15,
      },
      coachName: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      coachDesc: {
        fontSize: 16,
        marginTop: 5,
      },
});

export default CoachCard;

