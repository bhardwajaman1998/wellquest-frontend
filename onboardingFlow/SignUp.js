import axios from 'axios';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView , Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState('');
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
    navigation.navigate('PreferencesStack', {screen: 'Preferences'})
    return
    const userData = {
      email: email,
      password: password,
    };
    navigation.navigate('Preferences', {screen: 'Preferences'});
    // Call the sign-up API using AXIOS
    // axios.post("http://192.168.1.188:5000/signup", userData)
    //   .then((res) => {
    //     console.log(res.data);
    //     if (res.data.status === 'Ok') {
    //       Alert.alert("Registration Successful!");
    //       navigation.navigate('Preferences', {screen: 'Preferences'});
    //     } else {
    //       Alert.alert("User Already Exist");
    //     }
    //   })
    //   .catch((error) => {
    //     console.error("Error: ", error);
    //   });
  }

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="always">
      <View style={styles.container}>
        <Text style={styles.title}>Sign up</Text>
        <Text style={styles.heading}>Unlock Your Personalized Fitness Plan. {'\n'}Sign Up Today!</Text>

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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    width: '100%',
    marginTop: 70,
    fontFamily: 'Helvetica Neue',
    // marginBottom: 50,
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
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 10, 
    textAlign: 'left',
    marginLeft: 0,
    fontFamily: 'Helvetica Neue',
  },
  heading: {
    fontSize: 15,
    textAlign: 'left',
    marginBottom: 20, 
    marginLeft: 0,
    fontFamily: 'Helvetica Neue',
  },
  inputContainer: {
    marginBottom: 10, 
    width: '100%',
  },
  heading2:{
    fontWeight:"bold",
    fontSize:16,
     },
  input: {
    borderWidth: 1,
    borderColor: '#C1C7CD',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#E7EBF1',
    marginTop: 5, 
    width: '100%', 
  },
  signUpButton: {
    backgroundColor: '#7265E3',
    padding: 10,
    borderRadius: 50,
    marginTop: 30,
    marginBottom: 30,
    width: '50%',
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
    // marginBottom: 30,
    marginTop:30,
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
    marginTop: 30,
    marginBottom:10,
    alignItems: 'center', 
  },
  loginLink: {
    marginBottom: 10,
    color: '#808080',
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

export default SignUp;
