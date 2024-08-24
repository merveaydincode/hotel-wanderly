import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ImageBackground, Dimensions, TouchableOpacity, SafeAreaView } from 'react-native';
import SearchBar from '../components/SearchBar';
import CategoryList from '../components/CategoryList';
import { Hotel } from '../../assets/types/types';
import treehouses from '../../assets/data/treehouses';
import nordicHouses from '../../assets/data/nordicHouses';
import tropicalHotels from '../../assets/data/tropicalHotels';
import castles from '../../assets/data/castles';
import mainhotels from '../../assets/data/mainhotels';
import desertHouses from '../../assets/data/desertHotels';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../assets/types/types';
import { FontAwesome, Entypo, AntDesign } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../redux/slice/favoritesSlice';
import { RootState } from '../redux/slice/store';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
  route: any;
};

const { width } = Dimensions.get('window');
const categories = ['Hotel', 'Ağaç Evler', 'Kuzey Evleri', 'Tropik Evler', 'Şatolar', 'Çöl Evleri']; 

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredHotels, setFilteredHotels] = useState<Hotel[]>(mainhotels);
  const [selectedCategory, setSelectedCategory] = useState('Hotel');

  const favorites = useSelector((state: RootState) => state.favorites.favorites);
  const dispatch = useDispatch();

  const handleFavoritePress = (hotel: Hotel) => {
    dispatch(toggleFavorite(hotel));
  };

  useEffect(() => {
    let hotels;

    // Kategoriye göre doğru veriyi ayarla
    switch (selectedCategory) {
      case 'Ağaç Evler':
        hotels = treehouses;
        break;
      case 'Kuzey Evleri':
        hotels = nordicHouses;
        break;
      case 'Tropik Evler':
        hotels = tropicalHotels;
        break;
      case 'Şatolar':
        hotels = castles;
        break;
      case 'Çöl Evleri':
        hotels = desertHouses;
        break;
      default:
        hotels = mainhotels;
    }

    // Arama sorgusuna göre filtrele
    if (searchQuery) {
      setFilteredHotels(hotels.filter(hotel => hotel.name.toLowerCase().includes(searchQuery.toLowerCase())));
    } else {
      setFilteredHotels(hotels);
    }
  }, [searchQuery, selectedCategory]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);

    // "Hotel" kategorisi seçildiğinde mainhotels verilerini göster
    if (category === 'Hotel') {
      setFilteredHotels(mainhotels);
      return;
    }

    // Veriyi kategoriye göre ayarla
    let data;
    switch (category) {
      case 'Ağaç Evler':
        data = treehouses;
        break;
      case 'Kuzey Evleri':
        data = nordicHouses;
        break;
      case 'Tropik Evler':
        data = tropicalHotels;
        break;
      case 'Şatolar':
        data = castles;
        break;
      case 'Çöl Evleri':
        data = desertHouses;
        break;
      default:
        data = mainhotels;
    }

    // Kategoriler ekranına git ve veriyi gönder
    navigation.navigate('Home', { screen: 'CategoriesScreen', params: { category, data } } as never);
  };

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar value={searchQuery} onChangeText={handleSearch} placeholder="Ara..." />
      <CategoryList
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategorySelect}
      />
      <FlatList
        contentContainerStyle={styles.scrollContainer}
        data={filteredHotels}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.hotelContainer}
            onPress={() => navigation.navigate('HotelDetail', { hotel: item })}
          >
            <ImageBackground
              source={item.image} 
              style={styles.imageBackground}
            >
              <View style={styles.icon}>
                <TouchableOpacity onPress={() => handleFavoritePress(item)}>
                  <AntDesign
                    name={favorites.some(favHotel => favHotel.id === item.id) ? "heart" : "hearto"}
                    size={20}
                    color={favorites.some(favHotel => favHotel.id === item.id) ? "red" : "black"}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.textcontainer}>
                <View style={styles.text}>
                  <Text style={styles.hotelName}>{item.name}</Text>
                  <View style={styles.iconloc}>
                    <Entypo name="location-pin" size={20} color="black" />
                  </View>
                  <Text style={styles.hotelLocation}>{item.location}</Text>
                  <View style={styles.iconstar}>
                    <FontAwesome name="star-half-empty" size={18} color="green" />
                  </View>
                  <Text style={styles.hotelstar}>{item.star}</Text>
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {
    paddingBottom: 40,
    alignItems: 'center',
    paddingTop: 60,
  },
  listContainer: {
    width: '100%',
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
    top: 15,
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
    paddingTop: 32,
    paddingLeft: 8,
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
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    paddingLeft: 10,
    paddingTop: 10,
  },
  hotelLocation: {
    fontSize: 15,
    fontWeight: '300',
    color: 'black',
    paddingLeft: 29,
    paddingTop: 5,
  },
  iconstar: {
    position: 'absolute',
    paddingTop: 70,
    paddingLeft: 15,
  },
  hotelstar: {
    fontSize: 15,
    fontWeight: '400',
    color: 'black',
    paddingLeft: 35,
    paddingTop: 18,
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
    marginTop: 20,
  },
  emptyText: {
    fontSize: 18,
    color: 'gray',
  },
});

export default HomeScreen;
