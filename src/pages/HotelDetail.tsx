import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../assets/types/types';
import MapContainer from '../components/MapContainer';
import RoomFacility from '../components/RoomFacility';
import { MaterialIcons } from '@expo/vector-icons';
import RulesText from '../components/RulesText';
import HotelDetailText from '../components/HotelDetailText';

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

        <HotelDetailText hotel={hotel} />
        <View style={styles.separator} />
        <RoomFacility />
        <View style={styles.separator} />
        <MapContainer hotel={hotel} />
        <RulesText />
      </ScrollView>
      
      <View style={styles.checkout} >
      <Text style={styles.price}>{hotel.price}$</Text>
      <Text style={styles.night}>/gecelik</Text>
      <TouchableOpacity
        style={styles.reserveButton}
        onPress={() => navigation.navigate('RezScreen', { hotel })}
      >
        <Text style={styles.reserveText}>Rezervasyon Yap</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  checkout: {
    justifyContent: 'center',
    position: 'absolute',
    bottom:0,
    width: width,
    height: height / 10,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  reserveButton: {
    position: 'absolute',
    bottom: 20,
    width: width / 2.3,
    height: height / 17,
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    right: 15,
  },
  reserveText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 18,
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    paddingLeft: 23,
    top: 8,
  },
  night: {
    fontSize: 17,
    color: 'black',
    paddingLeft: 90,
    bottom: 10,
  },
});

export default HotelDetail;