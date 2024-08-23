import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'
import { MaterialIcons, Fontisto, AntDesign } from '@expo/vector-icons'



const { width, height } = Dimensions.get('window')
const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.imagecontainer}>
        <Image
          style={styles.image}
          source={require('../../assets/AppImage/profile.png')}
        />
        </View>
        <Text style={styles.name}>Can</Text>


        <View style={styles.profilcontainer}>
          <TouchableOpacity style={styles.data}>
          <MaterialIcons name="payments" size={24} color="black" style={styles.icon}/>
            <Text style={styles.text}>Ödeme Bilgileri</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.data}>
          <Fontisto name="map" size={24} color="black" style={styles.icon}/>
            <Text style={styles.text}>Yolculuk Haritan</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.data}>
          <MaterialIcons name="settings" size={24} color="black" style={styles.icon}/>
            <Text style={styles.text}>Ayarlar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.data}>
          <AntDesign name="wechat" size={24} color="black" style={styles.icon} />
            <Text style={styles.text}>Destek</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.logout}>
          <MaterialIcons name="logout" size={24} color="white" style={styles.icon}/>
            <Text style={styles.outtext}>Çıkış Yap</Text>
          </TouchableOpacity>
        </View>
      
    </SafeAreaView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    },
  imagecontainer: {
    borderRadius: 100,
    width: width / 2.5,
    height: width / 2.5,
    borderWidth: 1,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 10,
    color: 'black',
  },
  profilcontainer: {
    flexDirection: 'column',
    width: width / 1.5,
    height: height / 2,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  data: {
    width: width / 1.5,
    height: height / 16,
    borderRadius: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    shadowColor: 'gray',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  logout: {
    width: width / 1.5,
    height: height / 16,
    borderRadius: 30,
    backgroundColor: 'lightgreen',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    shadowColor: 'gray',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  outtext: {
    color: 'white',
    fontSize: 17,
    fontWeight: '600',
  },
  icon: {
    position: 'absolute',
    left: 50,
  },
  text: {
    fontSize: 15,
    fontWeight: '500',
    color: 'black',
    marginLeft: 20,
  },
})