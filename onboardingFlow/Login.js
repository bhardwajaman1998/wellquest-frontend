import axios from 'axios';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView , Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // create login function
  function handleSubmit() {
    console.log(email, password);
    const userData = {
      email: email,
      password: password,
    };
    navigation.navigate('Dashboard', { screen: 'Back' });
    // call the login API using AXIOS
    // to get the ip address, run cmd, ipconfig, then copy IPv4 Address
    axios.post("http://192.168.1.188:5000/login-user", userData)
      .then((res) => {
        console.log(res.data);
        if (res.data.status == 'Ok') {
          Alert.alert("Login Successful!");
          navigation.navigate('Dashboard', { screen: 'Back' });
        }else{
          navigation.navigate('Dashboard', { screen: 'Back' });
        }
      });
  }
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={"always"}>
    <View style={styles.container}>
    
      <Text style={styles.title}>Log in</Text>
      <View style={styles.inputContainer}>
        <Text>Email address</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter email"
          keyboardType="email-address"
          autoCapitalize="none"
          onChange={e => setEmail(e.nativeEvent.text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter password"
          secureTextEntry
          onChange={e => setPassword(e.nativeEvent.text)}
        />
      </View>

      <TouchableOpacity style={styles.LoginButton} onPress={() => handleSubmit()}>
        <Text style={styles.LoginButtonText}>Log in</Text>
      </TouchableOpacity>

      <View style={styles.socialIconsContainer}>
        <Image source={require('../assets/google.png')} style={styles.socialIcon} />
        <Image source={require('../assets/logo-facebook.png')} style={styles.socialIcon} />
        <Image source={require('../assets/logo-apple.png')} style={styles.socialIcon} />
      </View>
      <TouchableOpacity onPress={() =>
        navigation.navigate('SignUp', {name: 'SignUp'})
      }>
      <Text style={styles.loginLink}>No account yet? Sign Up</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  profileImageContainer: {
    marginBottom: 20,
    width: '100%',
  },
  profileImage: {
    width: 400,
    height: 220,
    width: '100%',
    // borderRadius: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    
  },
  inputContainer: {
    marginBottom: 15,
    width: '100%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
  LoginButton: {
    backgroundColor: '#FF934E',
    padding: 15,
    borderRadius: 50,
    marginTop: 20,
    width: '50%',
    alignItems: 'center',
  },
  LoginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '50%',
    marginTop: 20,
  },
  socialIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
      },
  loginLink: {
    marginTop: 20,
    color: '#3498db',
  },
});

export default Login;
