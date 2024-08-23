import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { Dimensions, ImageBackground, StyleSheet, View } from 'react-native';
import LoginButton from '../components/LoginButton';
import LoginHeader from '../components/LoginHeader';

const { width, height } = Dimensions.get('window');

const LoginScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showInput, setShowInput] = useState(false);

  const handleLogin = async () => {
    await AsyncStorage.setItem('phoneNumber', phoneNumber);
    navigation.navigate('Main', { screen: 'HomeScreen' });
  };

  return (
    <View style={styles.container}>
      <LoginHeader />
        <LoginButton 
          onPhonePress={() => setShowInput(true)} 
          onApplePress={undefined} 
          showInput={showInput} 
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          handleLogin={handleLogin}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default LoginScreen;
