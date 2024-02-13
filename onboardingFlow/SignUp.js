import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const SignUp = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileImage}>
        <Image
          source={require('../assets/Logo.png')}
          style={styles.profileImage}
          resizeMode="cover"
        />
      </View>
      <Text style={styles.title}>Sign up</Text>
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
        <Text>New password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter password"
          secureTextEntry
        />
      </View>

      <View style={styles.inputContainer}>
        <Text>Confirm password</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirm password"
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={styles.signUpButton}>
        <Text style={styles.signUpButtonText}>Sign up</Text>
      </TouchableOpacity>

      <View style={styles.socialIconsContainer}>
        <Image source={require('../assets/google.png')} style={styles.socialIcon} />
        <Image source={require('../assets/logo-facebook.png')} style={styles.socialIcon} />
        <Image source={require('../assets/logo-apple.png')} style={styles.socialIcon} />
      </View>

      <Text style={styles.loginLink}>Already have an account? Log in</Text>
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
  profileImage: {
    marginBottom: 20,
  },
  profileImage: {
    width: 300,
    height: 180,
    
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
  signUpButton: {
    backgroundColor: '#7265E3',
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
