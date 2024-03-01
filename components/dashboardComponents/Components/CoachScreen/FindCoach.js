import {React, useState} from 'react';
import { SafeAreaView, StyleSheet , View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SearchBar } from 'react-native-elements';
import CoachCard from './CoachCard';
import profileIcon from "../../../../assets/profile.png";
export default function FindCoach() {
    ///for search bar functionality 
    const [search, setSearch] = useState('');

    const updateSearch = (search) => {
        setSearch(search);
    };
        
    return(
        
        <SafeAreaView style={styles.container}>
            
            <View style={styles.content}>
                <View style={styles.searchSide}>        
                <Text style={styles.header}>Find the best coaches for You..</Text>
                <SearchBar 
                    placeholder="Search for recommended coaches.."
                    onChangeText={updateSearch}
                    value={search}
                    inputContainerStyle={styles.searchBarInputContainer}
                    containerStyle={styles.searchBarContainer}
                />
                </View>

                <View style={styles.coachData}>
                    <Text style={styles.recommendText}>Recommended for you </Text>
                    <CoachCard coachImg={profileIcon} coachName="John Doe" coachDesc="Fitness Trainer"></CoachCard>
                    <CoachCard coachImg={profileIcon} coachName="Jemmy Del" coachDesc="Fitness coach"></CoachCard>
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
        borderBottomColor: 'transparent', 
        borderTopColor: 'transparent',
        paddingRight: 10, 
        margin: 10, 
    },
    coachData:{
        margin:20,
    },
    recommendText:{
        fontSize:20,
    }
});