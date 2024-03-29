import axios from 'axios';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView , Alert, KeyboardAvoidingView, Platform} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { storeUser } from '../components/UserService';
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
    axios.post("http://localhost:3000/api/admin/login", userData)
      .then((res) => {
        if (res.status === 201) {
          console.log(res.data);
          const id = res.data.data.admin.cust_id.toString();
          const token = res.data.data.token.toString();
          if(storeUser(id, token)){
            navigateToDashboard()
          }else{
            Alert.alert("Unable to navigate to dashboard");
          }
        } else {
          Alert.alert("Error! not able to sign in");
        }
      });
  }
  const navigateToDashboard = () => {
    navigation.navigate('Dashboard', { screen: 'Back' });
  };

  return (
    <KeyboardAvoidingView behavior='padding' enabled style={{height: '100%'}}>
    <ScrollView style={{backgroundColor: '#7265E3'}} contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={"always"}>
      <Image source={require('../assets/logo_white.png')} style={styles.mainLogo} />
      <View 
        style={styles.container}>
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
        <View style={styles.forgotPwdContainer}>
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
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
    width: '100%',
    padding: 30,
    fontFamily: 'Helvetica Neue',
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    // Shadow for iOS
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 6,
    // Elevation for Android
    elevation: 9,
  },
  mainLogo: {
    alignSelf: 'center',
    width: '70%',
    height: '20%',
    resizeMode: "contain",
    marginTop: 100,
    marginBottom: 20
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
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 10, 
    textAlign: 'left',
    marginLeft: 0,
    fontFamily: 'Helvetica Neue',
    color:'rgba(62, 66, 58, 1)',
  },
  heading: {
    fontSize: 14,
    textAlign: 'left',
    marginBottom: 20, 
    marginLeft: 0,
    fontFamily: 'Helvetica Neue',
    color:'#9D9D9D',
  },
  heading2:{
    fontWeight:"semibold",
    fontFamily: 'Helvetica Neue',
    fontSize:16,
  },
  forgotPwdContainer: {
    marginTop: -10
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
    borderWidth: 0,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fffcfc',
    marginTop: 10, 
    width: '100%', 
    height: 45
  },
  LoginButton: {
    backgroundColor: '#7265E3',
    padding: 10,
    borderRadius: 50,
    marginTop: 25,
    marginBottom: 5,
    height: 45,
    width: '40%',
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
    marginTop: 20,
    alignSelf: 'center', 
  },
  socialIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  loginLinkContainer: {
    marginTop: 20,
    marginBottom: 50,
    alignItems: 'center', 
  },
  loginLink: {
    color: '#808080',
    textAlign: 'center',
  },
  loginLinkText: {
    color: 'red',
    fontWeight: 'bold',
    fontFamily: 'Helvetica Neue',
  },
  shadow: {
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 3.84,
    elevation: 8,
    },
});

export default Login;
