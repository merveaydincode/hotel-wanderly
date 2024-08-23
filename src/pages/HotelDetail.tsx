import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../assets/types/types';
import { MaterialIcons, FontAwesome5, MaterialCommunityIcons, FontAwesome, Entypo } from '@expo/vector-icons';

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
     
      <View style={styles.imageContainer}>
        <FlatList
          ref={flatListRef}
          data={hotel.images}
          horizontal
          pagingEnabled  // pagingEnabled; sayfaların yatayda kaydırılmasını sağlar.
          snapToInterval={width}   // snapToInterval; sayfaların ne kadar kaydırılacağını belirler.
          snapToAlignment='center'   // snapToAlignment; sayfaların nerede duracağını belirler.
          decelerationRate='fast'   // decelerationRate; kaydırma hızını belirler.
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

      <View style={styles.textcontainer}>
        <Text style={styles.hotelName}>{hotel.name}</Text>
        <Entypo name="location-pin" size={20} color="black" style={styles.iconloc} />
        <Text style={styles.hotelLocation}>{hotel.location}</Text>
        <FontAwesome5 name="star-half-alt" size={15} color="black" style={styles.icon} />
        <Text style={styles.hotelstar}>{hotel.star}</Text>
      </View>

      <View style={styles.separator} />
      <Text style={styles.facility}>Bu mekan size neler sunuyor?</Text>
      <View style={styles.facilityContainer}>
        <View style={styles.roomContainer}>
          {hotel.rooms.map((item, index) => (
            <View key={index} style={styles.room}>
              <Text style={styles.roomType}>{item.type}</Text>
              <View style={styles.icons}>
                <MaterialCommunityIcons name="bed-empty" size={20} color="black" />
                <Text style={styles.roomDetail}>{item.bedCount} Yatak</Text>
              </View>
              <View style={styles.icons}>
                <FontAwesome name="bath" size={20} color="black" />
                <Text style={styles.roomDetail}>{item.bathroomCount} Banyo</Text>
              </View>
              <View style={styles.icons}>
                <FontAwesome5 name="swimming-pool" size={20} color="black" />
                <Text style={styles.roomDetail}>Havuz: {item.hasPool ? 'Var' : 'Yok'}</Text>
              </View>
              <View style={styles.icons}>
                <MaterialIcons name="soup-kitchen" size={20} color="black" />
                <Text style={styles.roomDetail}>Mutfak: {item.hasKitchen ? 'Var' : 'Yok'}</Text>
              </View>
              <View style={styles.icons}>
                <MaterialCommunityIcons name="smoke" size={20} color="black" />
                <Text style={styles.roomDetail}>Barbekü: {item.hasBarbecue ? 'Var' : 'Yok'}</Text>
              </View>
              <Text style={styles.roomPrice}>{item.price}₺/gece</Text>
              <TouchableOpacity 
                style={styles.reserveButton}
                onPress={() => navigation.navigate('RezScreen', { hotel })}
              >
                <Text style={styles.reserveButtonText}>Rezervasyon</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: width,
    height: height / 2.44,
    resizeMode: 'cover',
    borderBottomRightRadius: 60,
    borderBottomLeftRadius: 60,
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
  textcontainer: {
    position: 'absolute',
    height: height / 8,
    width: width,
    marginHorizontal: 20,
    marginTop: width / 1.15,
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  hotelName: {
    fontSize: 23,
    fontWeight: '600',
    marginVertical: 20,
    textAlign: 'center',
  },
  iconloc: {
    position: 'absolute',
    top: width / 10,
    padding: 10,
    marginLeft: -5,
  },
  hotelLocation: {
    fontSize: 16,
    marginVertical: -15,
    textAlign: 'center',
    color: 'gray',
    marginHorizontal: 30,
  },
  icon: {
    position: 'absolute',
    bottom: 15,
  },
  hotelstar: {
    fontSize: 14,
    marginVertical: 25,
    marginHorizontal: 20,
    color: 'black',
  },
  separator: {
    borderBottomColor: '#ccc', // Gri renk
    borderBottomWidth: 1, // Çizgi kalınlığı
    marginVertical: 10, // Metinler arasındaki boşluk
  },
  facility: {
    position: 'absolute',
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'flex-start',
    marginHorizontal: 10,
    marginVertical: width / 0.85,
  },
  facilityContainer: {
    justifyContent: 'space-evenly',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  roomContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: width / 2.5,
  },
  room: {
    width: (width / 2.1) - 20,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    borderColor: 'gray',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
  },
  roomType: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  roomDetail: {
    fontSize: 15,
    fontWeight: '500',
    color: 'gray',
    marginLeft: 5,
  },
  roomPrice: {
    fontSize: 21,
    fontWeight: 'bold',
    color: 'black',
    marginVertical: 10,
  },
  reserveButton: {
    backgroundColor: 'green',
    borderRadius: 15,
    padding: 10,
    marginTop: 10,
    width: '100%',
  },
  reserveButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});

export default HotelDetail;
