import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'; 
import { Alert } from 'react-native';
import axios from 'axios'

const SignUp = ({ navigation }) => {
  //let us set the state for user inputs
  const [email, setEmail] = useState("");
  const [emailverify, setEmailVerify] = useState(true);
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState(true);
  const [showPassword, setShowpasswor] = useState(false);

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
    navigation.navigate('Preferences', {screen: 'Preferences'})
    return
    const userData = {
      email: email,
      password:password,
      };
      if(emailverify && passwordVerify){
        axios
    .post("http://192.168.1.188:5000/register", userData)
    .then(res=> {
      console.log(res.data);
      if(res.data.status == 'Ok'){
        Alert.alert("Registration Successful!")
        navigation.navigate('Preferences', {screen: 'Preferences'})
      } else {
        navigation.navigate('Preferences', {screen: 'Preferences'})
        // Alert.alert("User Already exist")
      }
    }
     )
    .catch(e =>console.log(e))
      } else {
        Alert.alert("Fill all Mandatory Fields !!!")
      }
    
      }
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="always">
    <View style={styles.container}>
      
      <Text style={styles.title}>Sign up</Text>
      <View style={styles.inputContainer}>
      <Text>Email address</Text>
  <TextInput
    style={styles.input}
    placeholder="Enter email"
    keyboardType="email-address"
    autoCapitalize="none"
    onChangeText={(text) => handleEmail({nativeEvent: {text} })}
  />
  {email.length < 1 ? null : emailverify ? (
    <Feather name="check-circle" color="green" size={20} />
  ) : (
    <Feather name="x-circle" color="red" size={20} />
  )}
</View>
{email.length < 1 ? null : emailverify ? null : (
  <Text style={{ marginLeft: 20, color: 'red' }}>
    Email should be more than 1 character
  </Text>
)}
      <View style={styles.inputContainer}>
        <Text>New password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter password"
          onChangeText={(text) => handlePassword({nativeEvent: {text} })}
          secureTextEntry={showPassword}
        />
        <TouchableOpacity onPress={()=> setShowpasswor(!showPassword)}> 
        {password.length<1?null : !showPassword?
        <Feather name="eye-off" style={marginRight= -10} color={passwordVerify? "green" :"red"} size={20} />
        :
        <Feather name="eye" style={marginRight= -10} color={passwordVerify? "green" :"red"} size={20} />
        }
        </TouchableOpacity>
      </View>
      {password.length < 1 ? null : passwordVerify ? null : (
  <Text style={{ marginLeft: 20, color: 'red' }}>
    Password should contain upper-case and number
  </Text>
)}
      <View style={styles.inputContainer}>
        <Text>Confirm password</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirm password"
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={styles.signUpButton} onPress={() => handleSubmit()}>
        <Text style={styles.signUpButtonText}>Sign up</Text>
      </TouchableOpacity>

      <View style={styles.socialIconsContainer}>
        <Image source={require('../assets/google.png')} style={styles.socialIcon} />
        <Image source={require('../assets/logo-facebook.png')} style={styles.socialIcon} />
        <Image source={require('../assets/logo-apple.png')} style={styles.socialIcon} />
      </View>
      <TouchableOpacity onPress={() =>
        navigation.navigate('Login', {name: 'Login'})
      }>
      <Text style={styles.loginLink}>Already have an account? Log in</Text>
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
    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
    
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
  signUpButton: {
    backgroundColor: '#FF934E',
    padding: 15,
    borderRadius: 50,
    marginTop: 20,
    width: '50%',
    alignItems: 'center',
  },
  signUpButtonText: {
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

export default SignUp;
