import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ImageBackground, Dimensions, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import SearchBar from '../components/SearchBar';
import CategoryList from '../components/CategoryList';
import { Hotel } from '../../assets/types/types';
import treehouses from '../../assets/data/treehouses';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../assets/types/types';
import { FontAwesome, Entypo, AntDesign, EvilIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../redux/slice/favoritesSlice';
import { RootState } from '../redux/slice/store';
import nordicHouses from '../../assets/data/nordicHouses';
import tropicalHotels from '../../assets/data/tropicalHotels';
import castles from '../../assets/data/castles';
import mainhotels from '../../assets/data/mainhotels';
import desertHouses from '../../assets/data/desertHotels';


type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
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
    switch (selectedCategory) {
      case 'Hotel':
        hotels = mainhotels;
        break;
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
  };

  const handleBackToHotel = () => {
    setSelectedCategory('Hotel');
    setFilteredHotels(mainhotels); // mainhotels'i yeniden ayarla
  };

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar value={searchQuery} onChangeText={handleSearch} placeholder="Ara..." />
      <CategoryList
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategorySelect}
      />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.listContainer}>
          <FlatList
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
                  <View style={styles.infoContainer}>
                    <View style={styles.header}>
                      <Text style={styles.hotelName}>{item.name}</Text>
                    </View>
                    <View style={styles.loc}>
                    <EvilIcons name="location" size={22} color="white" />
                    <Text style={styles.hotelLocation}>{item.location}</Text>
                    </View>
                    <View style={styles.stars}>
                      <AntDesign name="star" size={14} color="white" />
                      <Text style={styles.star}>{item.star}</Text>
                    </View>
                    <Text style={styles.hotelPrice}>{item.price}$ / gece</Text>
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
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 40,
    paddingTop: 60,
  },
  listContainer: {
    width: '100%',
    alignItems: 'center',
  },
  hotelContainer: {
    width: width - 20,
    height: 200,
    marginBottom: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  infoContainer: {
    flexDirection: 'column',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    padding: 10,
    position: 'relative', // Added position relative for absolute positioning of price
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  hotelName: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  hotelLocation: {
    color: 'white',
    fontSize: 14,
    marginVertical: 5,
  },
  loc: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stars: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
  },
  star: {
    color: 'white',
    fontSize: 16,
    marginLeft: 3,
  
  },
  hotelPrice: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
    position: 'absolute',
    right: 10,
    bottom: 10,

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
