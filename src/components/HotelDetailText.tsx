import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';

type HotelDetailTextProps = {
  hotel: {
    name: string;
    location: string;
  };
};

const HotelDetailText: React.FC<HotelDetailTextProps> = ({ hotel }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.hotelName}>{hotel.name}</Text>
      <Entypo name="location-pin" size={22} color="black" />
      <Text style={styles.hotelLocation}>{hotel.location}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  hotelName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  hotelLocation: {
    fontSize: 16,
    color: '#555',
    marginLeft: 23,
    marginTop: -20,
  },
});

export default HotelDetailText;
