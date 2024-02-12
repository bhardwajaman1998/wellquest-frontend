import {React} from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function CoachHeader() {
    
    return(
        <SafeAreaView style={styles.container}>
            <Icon style={styles.icon} name="arrow-left" size={25}/>
            <Icon style={styles.icon} name="bell" size={25}/>
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