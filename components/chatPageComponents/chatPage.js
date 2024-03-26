import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import {ChatScreen} from '../chatPageComponents/chatScreen'

const ChatPage = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const coachesData = [
    { id: '1', name: 'Coach John Doe', time: '10:00 AM', chat: 'Hello, how can I help you?', image: require('../../assets/Profilee.png')},
    { id: '2', name: 'AI Assistance', time: '', image: require('../../assets/bot_icon.png') }
  ];

  const renderCoachItem = ({ item }) => (
    <View>
      <TouchableOpacity onPress={navigateToChatScreen} style={styles.chatItem}>
        <Image source={item.image} style={styles.avatar} />
        <View style={{ marginLeft: 15, justifyContent: 'space-between', gap: 15 }}>
          <View style={styles.nameTimeView}>
            <Text style={styles.nameTime}>{item.name}</Text>
            <Text style={styles.time}>{item.time}</Text>
          </View>
          {item.chat ? (
            <Text style={styles.chat}>{item.chat}</Text>
          ) : (
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startText}>Start</Text>
            </TouchableOpacity>
          )}
        </View>
      </TouchableOpacity>
      <View style={styles.separator} />
    </View>
  );
  const renderAIAssistanceItem = ({ item }) => (
    <View style={styles.chatItem}>
      <Image source={require('../../assets/profile.png')} style={styles.avatar} />
      <View style={{ marginLeft: 10 }}>
        <Text style={styles.nameTime}>{item.name}</Text>
        <Text style={styles.chat}>{item.chat}</Text>
      </View>
    </View>
  );

  const navigateToChatScreen = () => {
    // navigation.navigate("ChatScreen",{screen:'ChatScreen'});
    navigation.navigate('AiChat', {screen: 'GetStarted'})
  };

  return (
    <View style={[styles.container,{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start', padding: 20, gap: 0 }]}>
      <View style={styles.searchContainer}>
        <Image
            style={{marginRight: 10, marginLeft: 15, height: 25, width: 25}}
            source = {require('../../assets/search_icon.png')}
        />
        <TextInput
          style={styles.searchInput}
          onChangeText={(text) => setSearchQuery(text)}
          value={searchQuery}
          placeholder="Search for recommended coaches"
          placeholderTextColor="grey"
        />
      </View>
      <View style={{width: '100%'}}>
        <FlatList
          data={coachesData}
          renderItem={renderCoachItem}
          keyExtractor={item => item.id}
        />
      </View>

      {/* <TouchableOpacity style={{  backgroundColor: '#FF934E',
          paddingVertical: 10,
          paddingHorizontal: 15,
          borderRadius: 20,
          marginBottom:450,
        marginLeft:55
      } }
            onPress={() =>
              navigation.navigate('GetStarted', {name: 'GetStarted'})
            }
        >
        <Text style={{ color: 'white', fontSize: 17 }}>Start</Text>
      </TouchableOpacity> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FBF9F6',
    
  },
  chat: {
    fontSize: 14,
    marginBottom: 10,
    fontFamily: 'Helvetica Neue',
    color: 'grey'
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    width: '100%'
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#7265E3'
  },
  nameTime: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  separator: {
    height: 1,
    backgroundColor: '#CBCACA',
    width: '77%',
    alignSelf: 'flex-end'
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    width: '100%',
    height: 50
  },
  searchIcon: {
    padding: 0,
    marginLeft: 10,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
    paddingRight: 10,
    fontSize: 16,
    borderRadius: 10
  },
  nameTimeView:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '89%'
  },
  nameTime:{
    fontFamily: 'Helvetica Neue',
    fontWeight: "bold",
    fontSize: 17,
  },
  time:{
    fontFamily: 'Helvetica Neue',
    color: 'grey'
  },
  startButton: {
    backgroundColor: '#7265E3',
    width: 100,
    height: 35,
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 20  
  },
  startText: {
      textAlign: 'center',
      color: 'white',
      fontFamily: 'Helvetica Neue',
      fontWeight: "bold",
      fontSize: 16,
    }
  },
);

export default ChatPage;
