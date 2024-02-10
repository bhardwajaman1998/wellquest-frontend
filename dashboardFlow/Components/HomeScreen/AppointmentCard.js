import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function AppointmentCard() {
  return (
    <SafeAreaView style={styles.container}>
        {/* header part  */}
        <View style={styles.header}>
            <Text style={styles.heading}>Appointments</Text>
            <TouchableOpacity>
                <Text style={styles.seeAll}>See All{' >'}</Text>
            </TouchableOpacity>
        </View>
        {/* Appointment Card */}
        <View style={styles.card}>
            <Text style={styles.cardText}>You don't have appointments.</Text>
            <TouchableOpacity style={styles.button}>
                <Icon style={styles.icon} name="user" size={25}/>
                <Text style={styles.buttonText}>Schedule</Text>
            </TouchableOpacity>
        </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        // flex:1,
      },
      header: {
        flexDirection: 'row',
        marginBottom: 20,
        flexDirection:'row',
        justifyContent:'space-between',
      },
      heading: {
        fontSize: 20,
        fontWeight: 'bold',
      },
      seeAll: {
        fontSize: 16,
      },
      card: {
        width: 323, 
        marginLeft: 10,
        padding: 15, 
        borderLeftColor:'grey',
        borderLeftWidth:5,
        borderRadius:10,
        backgroundColor:'#fff',
      },
      cardText: {
        fontSize: 16,
      },
      button: {
        flexDirection: 'row',
        marginTop: 10, 
        alignItems: 'center',
        width:149,
        height:42,
        borderRadius:20,
        backgroundColor:'lightgrey',
      },
      buttonText: {
        marginLeft: 20,
        fontSize: 16,
        color: 'black',
      },
      icon:{
        marginLeft:15,
      },
});
