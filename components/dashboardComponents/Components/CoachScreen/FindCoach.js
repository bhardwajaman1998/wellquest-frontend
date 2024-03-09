import {React, useState, useEffect} from 'react';
import { SafeAreaView, StyleSheet , View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SearchBar } from 'react-native-elements';
import CoachCard from './CoachCard';
import profileIcon from "../../../../assets/Maskgroup.png";
import CustomSearchBar from '../../Common/CustomSearchBar';
import axios from 'axios';
import { useRoute } from "@react-navigation/native"
import { useNavigation } from "@react-navigation/native";

export default function FindCoach() {
    ///for search bar functionality 
    const navigation = useNavigation();
    const [search, setSearch] = useState('');
    const [coaches, setCoaches] = useState([]);
    //this message state is used so when there is no coach found on seach it should show this 
    const [showMessage, setShowMessage] = useState(false);

    const updateSearch = (search) => {
        setSearch(search);
    };
    useEffect(() => {
        fetchCoachData();
    }, [search]); 

    const fetchCoachData = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/customer/get_coaches');
            console.log(response); 
            console.log("data setting ",response.data.coaches);
            const allCoaches = response.data.coaches;
            const filteredCoaches = allCoaches.filter(coach => {
                const bio = coach.bio.toLowerCase();
                const keywords = search.toLowerCase().split(' ');
                return keywords.every(keyword => bio.includes(keyword));
            });
            setCoaches(filteredCoaches);
            // setCoaches(response.data.coaches); // Update state with coaches array
            setShowMessage(filteredCoaches.length === 0); 
        } catch (error) {
            console.error('Error fetching the coach data:', error);
        }
    };

    const handleCoachPress = (coachId) => {
        navigation.navigate('Select Coach', { coachId });
        console.log('this coach Id is transferred',coachId);
    };
        
    return(
        
        <SafeAreaView style={styles.container}>
            
            <View style={styles.content}>
                <View style={styles.searchSide}>        
                <Text style={styles.header}>Find the best coaches for You..</Text>
                <CustomSearchBar
                value={search}
                onChangeText={updateSearch}
                placeholder="Search for recommended coaches.."
                />

                </View>

                <View style={styles.coachData}>
                    {showMessage ? (
                        <Text style={styles.message}>Seems like there are no coaches matching your search. Why not explore the world of health and wellness with different keywords like 'fitness', 'weight', 'trainer'  or 'nutrition 🥗 🌟</Text>
                    ) : (
                        <>
                            <Text style={styles.recommendText}>Recommended for you </Text>
                            {coaches.map((coach) => (    
                                <CoachCard
                                    key={coach._id}
                                    coachImg={profileIcon}
                                    coachName={coach.name}
                                    coachDesc={coach.bio}
                                    onPress={() => handleCoachPress(coach._id)}
                                />
                            ))} 
                        </>
                    )}
                </View>
            </View>
            {/* <NavBar/> */}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container:{
        // flex:1,
    },
    header:{
        padding:5,
        flexDirection:'row',
        justifyContent:'space-between',
        margin:10,
        fontSize:25,
        fontWeight:'bold',
    },
    searchSide:{
        marginLeft:10,
    },
    searchBarInputContainer: {
        backgroundColor: '#fff',
        borderRadius:20,
    },
    searchBarContainer: {
        backgroundColor: 'transparent',
        paddingRight: 10, 
        margin: 10, 
        borderWidth:2,
        borderColor:'grey',
    },
    searchIconContainer:{
        marginLeft:10,
    },
    coachData:{
        margin:20,
    },
    recommendText:{
        fontSize:20,
    },
    message: {
        textAlign: 'center',
        fontSize: 20,
        lineHeight:40,
        marginTop: 50,
    }
});