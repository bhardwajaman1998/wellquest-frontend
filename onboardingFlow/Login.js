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
    return
    // call the login API using AXIOS
    // to get the ip address, run cmd, ipconfig, then copy IPv4 Address
    axios.post("http://localhost:3000//api/admin/login", userData)
      .then((res) => {
        console.log(res.data);
        if (res.data.status == 'Ok') {
          Alert.alert("Login Successful!");
          navigation.navigate('Dashboard', { screen: 'Back' });
        } else {
          navigation.navigate('Dashboard', { screen: 'Back' });
        }
      });
  }

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={"always"}>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.heading}>Log in to Access Your Personalized Fitness Plan.</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.heading2}>Email Address</Text>
          <TextInput
            style={[styles.input, styles.shadow]}
            placeholder="Enter Your Email"
            keyboardType="email-address"
            autoCapitalize="none"
            onChange={e => setEmail(e.nativeEvent.text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.heading2}>Password</Text>
          <TextInput
            style={[styles.input, styles.shadow]}
            placeholder="Enter Password"
            secureTextEntry
            onChange={e => setPassword(e.nativeEvent.text)}
          />
        </View>
        <View>
          <Text style={styles.forgetPwd}>Forgot Password?</Text>
        </View>
        <TouchableOpacity style={styles.LoginButton} onPress={() => handleSubmit()}>
          <Text style={styles.LoginButtonText}>LOGIN</Text>
        </TouchableOpacity>

        <View style={styles.socialIconsContainer}>
          <Image source={require('../assets/google.png')} style={styles.socialIcon} />
          <Image source={require('../assets/facebook.png')} style={styles.socialIcon} />
          <Image source={require('../assets/apple.png')} style={styles.socialIcon} />
        </View>

        <View style={styles.loginLinkContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp', {name: 'SignUp'})}>
            <Text style={styles.loginLink}>No account yet? <Text style={styles.loginLinkText}>Sign Up</Text></Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    width: '100%',
    fontFamily: 'Helvetica Neue',
    marginTop: 70,
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
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 10, 
    textAlign: 'left',
    marginLeft: 0,
    fontFamily: 'Helvetica Neue',
    color:'#3E423A',
  },
  heading: {
    fontSize: 15,
    textAlign: 'left',
    marginBottom: 20, 
    marginLeft: 0,
    fontFamily: 'Helvetica Neue',
    color:'#7A7A7A',
  },
  heading2:{
 fontWeight:"bold",
 fontSize:16,
  },
  forgetPwd:{
    fontSize:14,
    color:"#808080",
    fontFamily: 'Helvetica Neue',
    textAlign:'right',
    margin:'1%'
  },
  inputContainer: {
    marginBottom: 20, 
    width: '100%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#E7EBF1',
    marginTop: 5, 
    width: '100%', 
  },
  LoginButton: {
    backgroundColor: '#7265E3',
    padding: 10,
    borderRadius: 50,
    marginTop: 50,
    marginBottom: 30,
    width: '50%',
    alignItems: 'center',
    alignSelf: 'center', 
  },
  LoginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Helvetica Neue',
  },
  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '50%',
    marginBottom: 10,
    marginTop: 50,
    alignSelf: 'center', 
  },
  socialIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  loginLinkContainer: {
    marginTop: 20,
    marginBottom: 30,
    alignItems: 'center', 
  },
  loginLink: {
    color: '#808080',
    textAlign: 'center',
  },
  loginLinkText: {
    color: 'red',
    fontFamily: 'Helvetica Neue',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
     },
});

export default Login;
