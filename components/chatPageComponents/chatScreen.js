import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Assuming you're using Expo for icons
import { useNavigation } from '@react-navigation/native';

const ChatScreen = () => {
  const navigation = useNavigation();
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const sendMessage = () => {
    if (inputMessage.trim() === '') return;

    setMessages(prevMessages => [
      ...prevMessages,
      { id: prevMessages.length.toString(), text: inputMessage, sender: 'user' }
    ]);
    setInputMessage('');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity 
      onPress={() =>
        navigation.navigate('ChatPage', {name: 'ChatPage'})
      }>
        <Text style={styles.buttonText}>   Back</Text>
      </TouchableOpacity>
      <View style={styles.header}>
        
        <View style={styles.userInfo}>
          <Image source={require('../../assets/Profilee.png')} style={styles.profilePic} />
          <Text style={styles.userName}>John Doe</Text>
        </View>
        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="search" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={messages}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={item.sender === 'user' ? styles.userMessageContainer : styles.otherMessageContainer}>
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
        inverted
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputMessage}
          onChangeText={setInputMessage}
          placeholder="Type your message..."
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //padding: 10,
  },
  header: {
    backgroundColor:'#7265E3',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
    //borderBottomWidth: 1,
    //borderBottomColor: '',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 15,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'white'
  },
  userMessageContainer: {
    backgroundColor: '#AAA3EE',
    alignSelf: 'flex-end',
    maxWidth: '100%',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    marginRight:10
  },
  otherMessageContainer: {
    backgroundColor: '#E5E7EB',
    alignSelf: 'flex-start',
    maxWidth: '70%',
    padding: 10,
    borderRadius: 10,
    marginBottom: 8,
  },
  messageText: {
    fontSize: 16,
    color: 'white',
    
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 45,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 18,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight:8,
    padding:10,
  },
  sendButton: {
    backgroundColor: '#AAA3EE',
    borderRadius: 18,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  sendButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default ChatScreen;

// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';
// import { Ionicons } from '@expo/vector-icons'; // Assuming you're using Expo for icons
// import { useNavigation } from '@react-navigation/native'; // Import navigation hook

// const ChatScreen = () => {
//   const [messages, setMessages] = useState([]);
//   const [inputMessage, setInputMessage] = useState('');
//   const navigation = useNavigation(); // Initialize navigation

//   const sendMessage = () => {
//     if (inputMessage.trim() === '') return;

//     setMessages(prevMessages => [
//       ...prevMessages,
//       { id: prevMessages.length.toString(), text: inputMessage, sender: 'user' }
//     ]);
//     setInputMessage('');
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <TouchableOpacity 
//         onPress={() =>
//           navigation.navigate('ChatPage', {name: 'ChatPage'})
//         }
//         > {/* Go back onPress */}
//           <Ionicons name="arrow-back" size={24} color="white" />
//         </TouchableOpacity>
//         <View style={styles.userInfo}>
//           <Image source={require('../../assets/Profilee.png')} style={styles.profilePic} />
//           <Text style={styles.userName}>John Doe</Text>
//         </View>
//         <TouchableOpacity onPress={() => {}}>
//           <Ionicons name="search" size={24} color="white" />
//         </TouchableOpacity>
//       </View>
//       <FlatList
//         data={messages}
//         keyExtractor={item => item.id}
//         renderItem={({ item }) => (
//           <View style={item.sender === 'user' ? styles.userMessageContainer : styles.otherMessageContainer}>
//             <Text style={styles.messageText}>{item.text}</Text>
//           </View>
//         )}
//         inverted
//       />
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.input}
//           value={inputMessage}
//           onChangeText={setInputMessage}
//           placeholder="Type your message..."
//         />
//         <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
//           <Text style={styles.sendButtonText}>Send</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     //padding: 10,
//   },
//   header: {
//     backgroundColor:'#7265E3',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingVertical: 20,
//     paddingHorizontal: 20,
//     //borderBottomWidth: 1,
//     //borderBottomColor: '',
//   },
//   userInfo: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   profilePic: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     marginRight: 15,
//   },
//   userName: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color:'white'
//   },
//   userMessageContainer: {
//     backgroundColor: '#AAA3EE',
//     alignSelf: 'flex-end',
//     maxWidth: '100%',
//     padding: 12,
//     borderRadius: 10,
//     marginBottom: 10,
//     marginRight:10
//   },
//   otherMessageContainer: {
//     backgroundColor: '#E5E7EB',
//     alignSelf: 'flex-start',
//     maxWidth: '70%',
//     padding: 10,
//     borderRadius: 10,
//     marginBottom: 8,
//   },
//   messageText: {
//     fontSize: 16,
//     color: 'white',
    
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderTopWidth: 1,
//     borderTopColor: 'white',
//     paddingHorizontal: 10,
//     paddingVertical: 45,
//   },
//   input: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 18,
//     paddingHorizontal: 15,
//     paddingVertical: 10,
//     marginRight:8,
//     padding:10,
//   },
//   sendButton: {
//     backgroundColor: '#AAA3EE',
//     borderRadius: 18,
//     paddingHorizontal: 20,
//     paddingVertical: 12,
//   },
//   sendButtonText: {
//     color: '#FFF',
//     fontWeight: 'bold',
//   },
// });

// export default ChatScreen;
