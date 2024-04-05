//this is the page where you can view coach profile and schedule or message him 
import React,{useState} from 'react';
import { SafeAreaView, ScrollView,StyleSheet,Text,View,Image, SectionList, FlatList,Modal,Button,navigation,navigate } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ClickButtton from '../../../dashboardComponents/Common/ClickButtton';
import ScheduleScreen from '../Schedule/ScheduleScreen';
import { useNavigation } from '@react-navigation/native';
import profileIcon from "../../../../assets/coach-icon.png";
import scheduleIcon from "../../../../assets/find_coach.png";
import messageIcon from "../../../../assets/message-blue.png";
import { useEffect } from 'react';
import axios from 'axios';
import { NativeBaseProvider } from 'native-base';

const CoachProfile = ({ route }) => {

    const { coachId } = route.params;
    const [coachData, setCoachData] = useState(null);
    const [isPersonalTrainer, setIsPersonalTrainer] = useState(false); 
    const [isSchedulingModalVisible, setSchedulingModalVisible] = useState(false);


    const navigation=useNavigation();

    useEffect(() => {
        fetchCoachData();
    }, []);

    const fetchCoachData = async () => {
        try {
            const response = await axios.get(`${process.env.API_URL}/customer/get_selected_coach?coach_id=${coachId}`);
            console.log(response.data.coachData);
            setCoachData(response.data.coachData);
            setIsPersonalTrainer(response.data.coachData.personal_trainer);
            console.log("PERSONAL TRAINER IS ?? ",response.data.coachData.personal_trainer);
        } catch (error) {
            console.error('Error fetching coach data:', error);
        }
    };

    const handleChat = () => {
        navigation.navigate('chat page');
    };

    //START -- to show the images of the active links of gyms associated with the coach
    const imagePaths = [
        require('../../../../assets/gym2.png'),
        require('../../../../assets/gym3.png'),
      ];
    
      const renderItem = ({ item }) => (
        <Image source={item} style={styles.cardImage} />
      );
    //END -- to show the images of the active links of gyms associated with the coach
    
    // to show the schedule pop-up

    const handleSchedule = () => {
        setSchedulingModalVisible(true);
    };

    const handleCloseSchedulingModal = () => {
        setSchedulingModalVisible(false);
    };

    const handleCloseSchedulingModalAfterScheduled = () => {
        setSchedulingModalVisible(false);
        navigation.navigate('Dashboard', {screen: 'Back'});
    };


    return(
        <NativeBaseProvider style={styles.container}>
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false} bounces={false}>
            {coachData && (
            <View style={styles.CoachShortBio}>
                <View style={styles.CoachBio}>
                    <Image
                        source={profileIcon}
                        style={styles.image}
                    />
                    <Text style={styles.CoachName}>
                        {coachData.name}
                    </Text>
                    <Text style={styles.CoachCategory}>
                        {coachData.bio}
                    </Text>
                </View>
                
                <View style={styles.CoachSuccess}>
                    <View style={styles.row}>
                        <Text style={[styles.cell, styles.headingCell]}>Active clients</Text>
                        <Text style={[styles.cell, styles.headingCell]}>Years of Experience</Text>
                        <Text style={[styles.cell, styles.headingCell]}>Completed Goals</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.cell}>{coachData.num_of_clients}</Text>
                        <Text style={styles.cell}>{coachData.exp}</Text>
                        <Text style={styles.cell}>{coachData.completed_goals}</Text>
                    </View>
                </View>

                <View style={styles.social}>
                        {isPersonalTrainer ? (
                                <ClickButtton btntext="CONNECT" iconUrl={messageIcon} onPress={handleChat} style={styles.btnStyle} />
                            ) : (
                                <>
                                    <ClickButtton btntext="Message" iconUrl={messageIcon} onPress={handleChat} style={styles.btnStyle} />
                                    <ClickButtton btntext="Schedule" iconUrl={scheduleIcon} onPress={handleSchedule} style={styles.btnStyle} />
                                </>
                        )}
                </View>
            </View>
            )}
            <View style={styles.CoachInfo}>
            {coachData && (
                    <>
                <Text style={styles.headingText}>Active in the following gyms</Text>
                <View style={styles.coachLinks}>  
                    <FlatList
                    ///figure out how to add images in mongodb and add it then here update teh line below by --->{ data={coachData.gyms}}
                        data={imagePaths}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={renderItem}
                        contentContainerStyle={{width: '100%', justifyContent: 'center', alignItems: 'center'}}
                    />
                </View>
                
                
                <View>
                    <Text style={styles.headingText}>Knowledge Strength</Text>
                    <SectionList
                        sections={coachData.description_array.map((daySchedule, index) => ({
                                    title: daySchedule[0], // Day
                                    data: daySchedule.slice(1), // Time slots
                                    key: index.toString()
                                }))}
                                renderItem={({ item }) => <Text style={[styles.item, styles.sectionItem]}>{item}</Text>}
                                renderSectionHeader={({ section }) => (
                                    <Text style={[styles.sectionHeader, styles.sectionItem]}>{section.title}</Text>
                                )}
                                keyExtractor={(item, index) => index.toString()}
                                contentContainerStyle = {{marginTop: 5}}
                    />
                </View>
                </>
            )}
            </View>
            <View style={{height: 30}}></View>
            </ScrollView>
            {isSchedulingModalVisible ? (
                <Modal visible={isSchedulingModalVisible} animationType="slide" transparent={true} onClose={handleCloseSchedulingModal}>
                    <ScheduleScreen onClose={handleCloseSchedulingModal} coachId={coachId} coachData={coachData} closeAfterScheduled={handleCloseSchedulingModalAfterScheduled}/>
                </Modal>
            ) : (
                <></>
            )}
        </NativeBaseProvider>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    },
    CoachShortBio:{
        paddingRight:0,
        marginTop:0,
        borderColor: 'black',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: '#ffffff',
        elevation: 5, // For Android shadow
        shadowColor: '#7265E3', // For iOS shadow
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.45,
        shadowRadius: 3.84,
    },
    CoachBio:{
        marginTop:30,
        alignItems:'center',
    },
    CoachName: {
        margin:5,
        fontSize: 20,
        fontWeight: 'bold',
    },
    CoachCategory: {
        fontSize: 12, 
        marginTop: 0, 
        color: 'grey'
    },
    CoachSuccess: {
        alignSelf: 'center',
        marginTop: 20,
        width:'85%',
        alignItems: 'center', 
        justifyContent:'center'
    },
    row: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'space-betwen'
    },
    cell: {
        fontSize: 16,
        flex: 1,
        padding: 5,
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
        marginHorizontal:10,
        justifyContent:'space-between',
        resizeMode: 'contain'
    },
    social:{
        alignSelf: 'center',
        width: '80%',
        flexDirection:'row',
        justifyContent:'center',
        alignContent: 'center',
        margin: 20,
        gap: 20
    },
    CoachInfo:{
        margin:20,
        justifyContent: 'center',
    },
    headingText:{
        marginTop:10,
        marginBottom: 0,
        fontSize:20,
        fontWeight:'bold',
        textAlign: 'center'
    },
    coachLinks: {
        marginTop: 10,
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 10,
    },
    cardImage: {
        width: 120,  
        height: 100, 
        resizeMode: 'center',
        marginHorizontal: 5, 
        borderRadius: 10,
    },
    headingSmall:{
        fontSize:18,
        fontWeight:'bold',
        marginTop:20,
    },
    sectionHeader: {
        fontSize: 15,
        fontWeight: 'bold',
        paddingVertical: 0,
        paddingHorizontal: 10,
        marginTop: 15,
    },
    item: {
        fontSize: 12,
        paddingVertical: 5, 
        paddingHorizontal: 15,
        color: 'grey'
    },
    btnStyle:{
        backgroundColor:"#8080808",
        color:"#808080",
    }
});

export default CoachProfile