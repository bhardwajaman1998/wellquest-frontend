import axios from 'axios';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView ,  KeyboardAvoidingView, Platform} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { storeUser } from '../components/UserService';
const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  function handleEmail(e){
    // const emailVar = (e.nativeEvent.text);
    // setEmail(emailVar);
    // setEmailVerify(false);
    // if(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/.test(emailVar)){
    //   setEmail(emailVar);
    // setEmailVerify(true);
    // }
  }
  function handlePassword(e){
    // const passwordVar = (e.nativeEvent.text);
    // setPassword(passwordVar);
    // setPasswordVerify(false);
    // if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/.test(passwordVar)){
    //   setPassword(passwordVar);
    // setPasswordVerify(true);
    // }
  }
  //using Axios to access the API
  //You can use fetch also
  function handleSubmit(){
    // navigation.navigate('PreferencesStack', {screen: 'Preferences'})
    const userData = {
      email: email,
      password: password,
    };
    axios.post(`${process.env.API_URL}/admin/signup`, userData)
      .then((res) => {
        console.log(res);
        if (res.status === 201) {
          const id = res.data.admin.cust_id
          const token = res.data.generatedToken
          if (storeUser(id, token)){
            navigateToOnboarding();
          }else{
            Alert.alert("not able to navigate");
          }
        } else {
          Alert.alert("User Already Exist");
        }
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  }

  const navigateToOnboarding = () => {
     navigation.navigate('Preferences', {screen: 'Preferences'});
  };

  return (
    <KeyboardAvoidingView behavior='padding' enabled style={{height: '100%'}}>
      <ScrollView style={{backgroundColor: '#7265E3'}} contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={"always"}>       
      <Image source={require('../assets/logo_white.png')} style={styles.mainLogo} />
      <View style={styles.container}>
        <Text style={styles.title}>Sign up</Text>
        <Text style={styles.heading}>Unlock Your Personalized Fitness Plan. {'\n'}Sign Up Today!</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.heading2}>Full name</Text>
          <TextInput
            style={[styles.input, styles.shadow]}
            placeholder="Enter your full name"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={setName}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.heading2}>Email Address</Text>
          <TextInput
            style={[styles.input, styles.shadow]}
            placeholder="Enter Your Email"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.heading2}>Create Password</Text>
          <TextInput
            style={[styles.input, styles.shadow]}
            placeholder="Enter Password"
            secureTextEntry
            onChangeText={setPassword}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.heading2}>Confirm Password</Text>
          <TextInput
            style={[styles.input, styles.shadow]}
            placeholder="Confirm Password"
            secureTextEntry
          />
        </View>

        <TouchableOpacity style={styles.signUpButton} onPress={handleSubmit}>
          <Text style={styles.signUpButtonText}>Sign up</Text>
        </TouchableOpacity>

        <View style={styles.socialIconsContainer}>
          <Image source={require('../assets/google.png')} style={styles.socialIcon} />
          <Image source={require('../assets/facebook.png')} style={styles.socialIcon}/>
          <Image source={require('../assets/apple.png')} style={styles.socialIcon} />
        </View>
        <View style={styles.loginLinkContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Login', {name: 'Login'})}>
          <Text style={styles.loginLink}>Already have an account? <Text style={styles.loginLinkText}>Log in</Text></Text>
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
    marginBottom: 200,
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
    marginBottom: 10,
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
  inputContainer: {
    marginBottom: 10, 
    marginTop: 10, 
    width: '100%',
  },
  heading2:{
    fontWeight:"semibold",
    fontFamily: 'Helvetica Neue',
    fontSize:16,
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
  signUpButton: {
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
  signUpButtonText: {
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
    // marginBottom:10,
    resizeMode: 'contain',
    color:'#2A9D5C'
  },
  loginLinkContainer: {
    marginTop: 20,
    marginBottom: 50,
    alignItems: 'center', 
  },
  loginLink: {
    marginBottom: 0,
    color: '#808080',
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

export default SignUp;
