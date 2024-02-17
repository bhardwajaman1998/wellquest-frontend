// import React from 'react';
// import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';

// const ChatPage = () => {
//   // Mock data for coaches and AI assistance
//   const coachesData = [
//     { id: '1', name: 'John Doe', time: '10:00 AM' },
//     { id: '2', name: 'Jane Smith', time: '11:30 AM' },
//   ];

//   const aiAssistanceData = [
//     { id: '1', name: 'My AI Assistance' }
//   ];

//   // Render item for coaches list
//   const renderCoachItem = ({ item }) => (
//     <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
      
//       <Text>{item.name} - {item.time}</Text>
//     </View>
//   );

//   // Render item for AI assistance list
//   const renderAIAssistanceItem = ({ item }) => (
//     <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
      
//       <Text>{item.name}</Text>
//     </View>
//   );

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
//       <TouchableOpacity style={{ backgroundColor: 'grey', padding: 10, borderRadius: 10, marginBottom: 20 }}>
//         <Text style={{ color: 'white', fontSize: 18 }}>Search More Courses</Text>
//       </TouchableOpacity>

//       <FlatList
//         data={coachesData}
//         renderItem={renderCoachItem}
//         keyExtractor={item => item.id}
//         style={{ marginBottom: 20 }}
//       />

//       <FlatList
//         data={aiAssistanceData}
//         renderItem={renderAIAssistanceItem}
//         keyExtractor={item => item.id}
//         style={{ marginBottom: 20 }}
//       />

//       <TouchableOpacity style={{ backgroundColor: 'grey', padding: 10, borderRadius: 10 }}>
//         <Text style={{ color: 'white', fontSize: 18 }}>Start</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default ChatPage;

import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native';

const ChatPage = () => {
  // Mock data for coaches and AI assistance
  const coachesData = [
    { id: '1', name: 'John Doe', time: '10:00 AM', chat: 'Hello, how can I help you?' },
    { id: '2', name: 'Jane Smith', time: '11:30 AM', chat: 'Sure, I can assist you with that.' },
  ];

  const aiAssistanceData = [
    { id: '1', name: 'My AI Assistance', chat: 'Welcome! How may I assist you?' }
  ];

  // Render item for coaches list
  const renderCoachItem = ({ item }) => (
    <View style={styles.chatItem}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.time}>{item.time}</Text>
      <View style={{ flex: 1 }}>
      <Text style={styles.chat}>{item.chat}</Text>
      </View>
    </View>
  );

  // Render item for AI assistance list
  const renderAIAssistanceItem = ({ item }) => (
    <View style={styles.chatItem}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.chat}>{item.chat}</Text>
      
    </View>
  );

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
       <TouchableOpacity style={{ backgroundColor: 'grey', padding: 10, borderRadius: 10, marginBottom: 20 }}>
        <Text style={{ color: 'white', fontSize: 18 }}>Search More Coaches</Text>
      </TouchableOpacity>
      
      <FlatList
        data={coachesData}
        renderItem={renderCoachItem}
        keyExtractor={item => item.id}
      />

      <View style={styles.separator} />

      <FlatList
         data={aiAssistanceData}
        renderItem={renderAIAssistanceItem}
         keyExtractor={item => item.id}
         style={{ marginBottom: 20 }}
      />
<TouchableOpacity style={{ backgroundColor: 'grey', padding: 10, borderRadius: 10 }}>
         <Text style={{ color: 'white', fontSize: 18 }}>Start</Text>
       </TouchableOpacity>
       
     </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF'
  },
  chat: {
    fontSize: 14,
    marginBottom: 10,
    marginRight: 90
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    marginRight: 90
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10
  },
  time: {
    fontSize: 14,
    color: 'grey',
    marginRight: 90
  },
  separator: {
    height: 1,
    backgroundColor: 'lightgrey',
    
  }
});

export default ChatPage;

