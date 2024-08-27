import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, TextInput } from 'react-native';

const { width } = Dimensions.get('window');
const LoginButton = ({ onPhonePress, onApplePress, showInput, phoneNumber, setPhoneNumber, handleLogin }) => {
  return (
    <View style={styles.container}>
      {showInput && (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Telefon Numaranız"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
          />
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Giriş Yap</Text>
          </TouchableOpacity>
        </View>
      )}
      <TouchableOpacity style={styles.touch} onPress={onPhonePress}>
        <Text style={styles.loginText}>Sign in with Phone Number</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touch2} onPress={onApplePress}>
        <Text style={styles.loginText2}>Sign in With Apple</Text>
      </TouchableOpacity>
      <Text style={styles.register}>Henüz hesabınız yok mu? Üye Ol</Text>


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  touch: {
    backgroundColor: 'black',
    padding: 20,
    borderRadius: 30,
    width: width / 1.1,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
    fontSize: 17,
    fontWeight: '400',
    textAlign: 'center',
  },
  touch2: {
    backgroundColor: 'lightgray',
    padding: 20,
    borderRadius: 30,
    width: width / 1.1,
  },
  loginText2: {
    color: 'black',
    fontSize: 17,
    fontWeight: '400',
    textAlign: 'center',
  },
  register: {
    color: 'white',
    fontSize: 15,
    fontWeight: '400',
    textAlign: 'center',
    marginTop: width / 22,
  },
  inputContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: width / 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 25,
    backgroundColor: '#fff',
    width: width / 1.1,
  },
  loginButton: {
    backgroundColor: 'gray',
    padding: 12,
    borderRadius: 30,
    width: width / 3,
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: '400',
  },
});

export default LoginButton;
