import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import HotelDetailText from '../components/HotelDetailText';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../assets/types/types';
import MapContainer from '../components/MapContainer';
import RoomFacility from '../components/RoomFacility';
import { MaterialIcons } from '@expo/vector-icons';

type HotelDetailRouteProp = RouteProp<RootStackParamList, 'HotelDetail'>;
type HotelDetailNavigationProp = StackNavigationProp<RootStackParamList, 'HotelDetail'>;

type Props = {
  route: HotelDetailRouteProp;
  navigation: HotelDetailNavigationProp;
};

const { width, height } = Dimensions.get('window');

const HotelDetail: React.FC<Props> = ({ route, navigation }) => {
  const { hotel } = route.params;
  const flatListRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToRight = () => {
    if (flatListRef.current && currentIndex < hotel.images.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      flatListRef.current.scrollToIndex({ index: newIndex, animated: true });
    }
  };
  const scrollToLeft = () => {
    if (flatListRef.current && currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      flatListRef.current.scrollToIndex({ index: newIndex, animated: true });
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.imageContainer}>
          <FlatList
            ref={flatListRef}
            data={hotel.images}
            horizontal
            pagingEnabled
            snapToInterval={width}
            snapToAlignment='center'
            decelerationRate='fast'
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <Image source={item} style={styles.image} />
            )}
            showsHorizontalScrollIndicator={false}
          />
          
          <TouchableOpacity
            style={styles.rightButton}
            onPress={scrollToRight}
          >
            <MaterialIcons name="chevron-right" size={30} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.leftButton}
            onPress={scrollToLeft}
          >
            <MaterialIcons name="chevron-left" size={30} color="black" />
          </TouchableOpacity>
        </View>
        <RoomFacility />
        <HotelDetailText hotel={hotel} />
        <View style={styles.separator} />
        <View style={styles.separator} />
        <MapContainer hotel={hotel} />
      </ScrollView>

      <TouchableOpacity
        style={styles.reserveButton}
        onPress={() => navigation.navigate('RezScreen', { hotel })}
      >
        <Text style={styles.reserveText}>Rezervasyon Yap</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: width,
    height: height / 2.44,
    resizeMode: 'cover',
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  rightButton: {
    position: 'absolute',
    right: 10,
    top: height / 5,
    height: height / 14,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 4,
    borderRadius: 20,
  },
  leftButton: {
    position: 'absolute',
    left: 10,
    top: height / 5,
    height: height / 14,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 4,
    borderRadius: 20,
  },
  separator: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  reserveButton: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#f9bc2b',
    padding: 15,
    alignItems: 'center',
    borderRadius: 10,
  },
  reserveText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default HotelDetail;
