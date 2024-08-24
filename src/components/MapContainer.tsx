import React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Hotel } from '../../assets/types/types';

const { width, height } = Dimensions.get('window');

type Props = {
  hotel: Hotel;
};

const MapContainer: React.FC<Props> = ({ hotel }) => {
  // Harita başlangıç bölgesini otelin koordinatına göre ayarlama
  const initialRegion = {
    latitude: hotel.coordinate.latitude,
    longitude: hotel.coordinate.longitude,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Konum</Text>
      <View style={styles.mapcontainer}>
        <MapView
          style={styles.map}
          initialRegion={initialRegion}
        >
          <Marker
            coordinate={hotel.coordinate}
            title={hotel.name}
          />
        </MapView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapcontainer: {
    alignItems: 'center',
    width: width / 1.4,
    height: height / 4,
    backgroundColor: 'red',
    borderRadius: 10,
    overflow: 'hidden',
    marginLeft: 65,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default MapContainer;
