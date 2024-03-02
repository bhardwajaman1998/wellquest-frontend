// Import necessary modules
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import {ChatScreen} from '../chatPageComponents/chatScreen'

// Define the ChatPage component
const ChatPage = () => {
  // Initialize navigation
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data for coaches and AI assistance
  const coachesData = [
    { id: '1', name: 'John Doe', time: '10:00 AM', chat: 'Hello, how can I help you?' },
    { id: '2', name: 'My AI Assistance', chat: 'Welcome! How may I assist you?' }
  ];

  const aiAssistanceData = [
    { id: '1', name: 'My AI Assistance', chat: 'Welcome! How may I assist you?' }
  ];

  // Render item for coaches list
  const renderCoachItem = ({ item }) => (
    <TouchableOpacity onPress={navigateToChatScreen} style={styles.chatItem}>
      <Image source={require('../../assets/Profilee.png')} style={styles.avatar} />
      <View style={{ marginLeft: 10 }}>
        <Text style={styles.nameTime}>{item.name} - {item.time}</Text>
        <Text style={styles.chat}>{item.chat}</Text>
      </View>
    </TouchableOpacity>
  );

  // Render item for AI assistance list
  const renderAIAssistanceItem = ({ item }) => (
    <View style={styles.chatItem}>
      <Image source={require('../../assets/profile.png')} style={styles.avatar} />
      <View style={{ marginLeft: 10 }}>
        <Text style={styles.nameTime}>{item.name}</Text>
        <Text style={styles.chat}>{item.chat}</Text>
      </View>
    </View>
  );

  // Function to navigate to the ChatScreen.js component
  const navigateToChatScreen = () => {
    navigation.navigate("ChatScreen",{screen:'ChatScreen'});
  };

  // <TouchableOpacity style={styles.signUpButton}  onPress={() => 
  // navigation.navigate("Preferences", {screen: 'Preferences'})}>
  //       <Text style={styles.signUpButtonText}>Sign up</Text>
  //     </TouchableOpacity>

  // Return the JSX layout of the component
  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start', padding: 20, gap: 0 }}>
      <View style={styles.searchContainer}>
        <MaterialIcons name="search" size={24} color="black" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          onChangeText={(text) => setSearchQuery(text)}
          value={searchQuery}
          placeholder="Search Coaches"
          placeholderTextColor="grey"
        />
      </View>
      <FlatList
        data={coachesData}
        renderItem={renderCoachItem}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity style={{  backgroundColor: '#FF934E',
          paddingVertical: 12,
          paddingHorizontal: 10,
          borderRadius: 20,} }
            onPress={() =>
              navigation.navigate('AiStarted', {name: 'AiStarted'})
            }
        >
        <Text style={{ color: 'white', fontSize: 18 }}>Start</Text>
      </TouchableOpacity>
      <View style={styles.separator} />
        {/* <FlatList
          data={aiAssistanceData}
          renderItem={renderAIAssistanceItem}
          keyExtractor={item => item.id}
          style={{ marginBottom: 0 }}
        /> */}
        <TouchableOpacity style={{  backgroundColor: '#FF934E',
          paddingVertical: 12,
          paddingHorizontal: 10,
          borderRadius: 20,} }
            onPress={() =>
              navigation.navigate('AiStarted', {name: 'AiStarted'})
            }
        >
        <Text style={{ color: 'white', fontSize: 18 }}>Start</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity onPress={() =>
        navigation.navigate('SignUp', {name: 'SignUp'})
      }></TouchableOpacity> */}

    </View>
  );
};

// Define styles for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF'
  },
  chat: {
    fontSize: 14,
    marginBottom: 10,
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  nameTime: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  separator: {
    height: 1,
    backgroundColor: 'lightgrey',
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    marginBottom: 10,
    width: '100%',
  },
  searchIcon: {
    padding: 10,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
    paddingRight: 10,
    fontSize: 16,
  }
});

// Export the component as the default export
export default ChatPage;
