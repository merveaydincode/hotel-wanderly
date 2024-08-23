import React from 'react'
import { View, TextInput, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';

const { width, height } = Dimensions.get('window')
const SearchBar = ({ value, onChangeText, placeholder }) => {
  return (
    <View style={styles.container}>
        <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        />
        <View style={styles.choose}>
          <TouchableOpacity style={styles.ophotel}>
            <View style={styles.icon}>
          <FontAwesome6 name="hotel" size={18} color="white" />
            <Text style={styles.hotel}>Hotel</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ophotel1}>
          <View style={styles.icon}>
          <Ionicons name="car-sport-outline" size={24} color="black" />
            <Text style={styles.arac}>Araç</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ophotel1}>
          <View style={styles.icon}>
          <Ionicons name="restaurant-outline" size={20} color="black" />
            <Text style={styles.rest}>Restorant</Text>
            </View>
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    alignItems: 'center',
    padding: 60,
  },
  input: {
    height: width/8,
    width: width-50,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 30,
    borderColor: 'lightgray',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  choose: {
    width: width-50,
    height: width/7,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    alignItems: 'center',
  },
  ophotel: {
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    width: width/3.5,
    height: width/10,
  },
  icon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ophotel1:{
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'lightgray',
    width: width/3.5,
    height: width/10,
  },
  hotel: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
    marginLeft: 5,
  },
  arac: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
    marginLeft: 5,
  },
  rest: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
    marginLeft: 5,
  },
})
