import {React} from 'react';
import { SafeAreaView, StyleSheet,Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function CoachProfile() {
    
    return(
        <SafeAreaView style={styles.container}>
            <Text>IN COACH PROFILE</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        margin:10,
    },
});