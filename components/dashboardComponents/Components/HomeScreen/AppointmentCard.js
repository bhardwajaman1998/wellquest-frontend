//This card is shown in the Dashboard home screen
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, navigation} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import CustomCard from './CustomCard';

export default function AppointmentCard() {
  const navigation = useNavigation();

  const handleSchedulePress = () => {
    navigation.navigate('Find Coach'); // Navigate to the 'Find Coach' screen
  };

  const handleSeeAll=()=>{
    navigation.navigate('AppointmentScreen');
  }

  return (
    
    <SafeAreaView style={styles.container}>
        {/* header part  */}
        <View style={styles.header}>
            <Text style={styles.heading}>Appointments</Text>
            <TouchableOpacity onPress={handleSeeAll}>
                <Text style={styles.seeAll}>See All{' >'}</Text>
            </TouchableOpacity>
        </View>
        {/* Appointment Card */}
        <CustomCard
          text="You don't have appointments."
          buttonText="Schedule"
          onPress={handleSchedulePress}
          iconName="user"
        />


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        margin:20,
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
});
