import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import SearchBar from '../components/SearchBar';
import { Hotel } from '../../assets/types/types';
import mainhotels from '../../assets/data/mainhotels';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../assets/types/types';

const { width } = Dimensions.get('window');

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredHotels, setFilteredHotels] = useState<Hotel[]>(mainhotels);

  useEffect(() => {
    if (searchQuery) {
      setFilteredHotels(mainhotels.filter(hotel => hotel.name.toLowerCase().includes(searchQuery.toLowerCase())));
    } else {
      setFilteredHotels(mainhotels);
    }
  }, [searchQuery]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <View style={styles.container}>
      <SearchBar value={searchQuery} onChangeText={handleSearch} placeholder="Ara..." />
      <View style={styles.Flatlist}>
        <FlatList
          data={filteredHotels}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.hotelContainer}
              onPress={() => navigation.navigate('HotelDetail', { hotel: item })}>
              <ImageBackground
                source={item.images[0]} 
                style={styles.imageBackground}
              >
                <View style={styles.icon}>
                  <AntDesign name="hearto" size={20} color="black" />
                </View>
                <View style={styles.textcontainer}>
                  <View style={styles.text}>
                    <Text style={styles.hotelName}>{item.name}</Text>
                    <View style={styles.iconloc}>
                      <Entypo name="location-pin" size={22} color="black" />
                    </View>
                    <Text style={styles.hotelLocation}>{item.location}</Text>
                  </View>
                  <View style={styles.text1}>
                    <Text style={styles.hotelPrice}>{item.price}$</Text>
                    <Text style={styles.hotelPrice1}>/gecelik</Text>
                  </View>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          )}
          ListEmptyComponent={
            searchQuery && (
              <View style={styles.emptyContainer}>
                <Text style={styles.emptyText}>Arama sonuçları bulunamadı.</Text>
              </View>
            )
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  Flatlist: {
    flex: 1,
    marginTop: -50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  hotelContainer: {
    width: width - 50,
    height: width,
    borderRadius: 20,
    marginBottom: 20,
    overflow: 'hidden',
  },
  icon: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 10,
  },
  imageBackground: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
    borderRadius: 20,
    justifyContent: 'flex-end',
  },
  textcontainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    height: width / 4,
    marginBottom: 10,
    width: width - 69,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconloc: {
    position: 'absolute',
    top: 38,
    padding: 10,
    marginLeft: -5,
  },
  text: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  text1: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingBottom: 20,
    paddingRight: 10,
  },
  hotelName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    paddingLeft: 10,
    paddingTop: 10,
  },
  hotelLocation: {
    fontSize: 15,
    fontWeight: '300',
    color: 'black',
    paddingLeft: 40,
    paddingBottom: 10,
  },
  hotelPrice: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'black',
    paddingLeft: 10,
  },
  hotelPrice1: {
    fontSize: 15,
    fontWeight: '300',
    color: 'black',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: 'gray',
  },
});

export default HomeScreen;
