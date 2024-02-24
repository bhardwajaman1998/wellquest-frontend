import React from 'react';
import { SafeAreaView, StyleSheet,Text,View,Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ClickButtton from '../../Common/ClickButtton';
import ProfilePic from '../../../assets/profilePic.jpeg';
import Message from '../../../assets/chatbubbles.png';

export default function CoachProfile() {

    const handleCoachPress = () => {
        // Navigate to the CoachProfile screen when a coach card is pressed
        navigation.navigate('CoachProfile');
      };

    const handleChat = () => {
        // Your logic here
        console.log('Button pressed!');
    };

    const handleSchedule=()=>{
        console.log("Scheduling your appointment!");
    };

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.CoachShortBio}>
                <View style={styles.CoachBio}>
                    <Image
                        source={ProfilePic}
                        style={styles.image}
                    />
                    <Text style={styles.CoachName}>
                        John Doe
                    </Text>
                    <Text style={styles.CoachCategory}>
                        Expert Trainer
                    </Text>
                </View>
                
                <View style={styles.CoachSuccess}>
                    <View style={styles.row}>
                        <Text style={[styles.cell, styles.headingCell]}>Active clients</Text>
                        <Text style={[styles.cell, styles.headingCell]}>Years of Experience</Text>
                        <Text style={[styles.cell, styles.headingCell]}>Completed Goals</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.cell}>5</Text>
                        <Text style={styles.cell}>4</Text>
                        <Text style={styles.cell}>20</Text>
                    </View>
                </View>

                <View style={styles.social}>
                <ClickButtton btntext="Message" iconUrl={Message} onPress={handleChat} />
                <ClickButtton btntext="Schedule" iconUrl={Message} onPress={handleSchedule} />
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center', // Center items vertically
        margin:10,
    },
    CoachShortBio:{
        width: '100%',
        borderColor: 'black',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: '#ffffff',
        elevation: 5, // For Android shadow
        shadowColor: '#000000', // For iOS shadow
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    CoachBio:{
        // flex:1,
        // margin:10,
        alignItems:'center',
    },
    CoachName: {
        margin:5,
        fontSize: 20,
        fontWeight: 'bold',
    },
    CoachCategory: {
        fontSize: 16, 
        marginTop: 5, 
    },
    CoachSuccess: {
        marginTop: 10,
        // borderWidth: 1,
        width:'100%',
        borderColor: 'black',
        alignItems: 'center', 
        paddingLeft:25,
    },
    row: {
        flexDirection: 'row',
    },
    cell: {
        fontSize: 18,
        flex: 1,
        padding: 10,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    headingCell: {
        // backgroundColor: 'lightblue',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 25,
        marginRight: 10,
        borderColor:'red',
    },
    social:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        marginLeft:20,
        alignItems:'flex-start',
    },
    
});
