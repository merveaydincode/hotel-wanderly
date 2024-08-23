import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const LoginHeader = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/AppImage/fr45.jpg')}
        style={styles.backgroundImage}
      >
        <View style={styles.overlay} />
        <View style={styles.title}>
          <Text style={styles.titleText}>Wanderly</Text>
          <Text style={styles.subtitle}>Unutulmaz Deneyimler İçin En İyi Yoldaşınız.</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: width,
    height: height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Daha koyu bir overlay rengi
  },
  title: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: width*1.5,
  },
  titleText: {
    color: 'white',
    fontSize: 35,
    fontWeight: '600',
    lineHeight: 50,
  },
  subtitle: {
    color: 'white',
    fontSize: 17,
    fontWeight: '500',
    marginTop: 10,
  },
});
