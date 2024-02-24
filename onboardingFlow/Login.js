import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const Login = ({ navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileImageContainer}>
        <Image
          source={require('../assets/Logo.png')}
          style={styles.profileImage}
          resizeMode="cover"
        />
      </View>
      <Text style={styles.title}>Log in</Text>
      <View style={styles.inputContainer}>
        <Text>Email address</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter password"
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={styles.LoginButton}>
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
