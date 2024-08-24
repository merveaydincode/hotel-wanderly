import React from 'react';
import { View, Text, StyleSheet, FlatList, ImageBackground, SafeAreaView, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/slice/store';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../assets/types/types';

type FavoritesScreenNavigationProp = StackNavigationProp<RootStackParamList, 'FavoritesScreen'>;

type Props = {
  navigation: FavoritesScreenNavigationProp;
};

const FavoritesScreen: React.FC<Props> = ({ navigation }) => {
  const favorites = useSelector((state: RootState) => state.favorites.favorites);

  return (
    <SafeAreaView style={styles.container}>
      {favorites.length > 0 ? (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.hotelContainer}
              onPress={() => navigation.navigate('HotelDetail', { hotel: item })}
            >
              <ImageBackground
                source={item.images[0]} 
                style={styles.imageBackground}
              >
                <View style={styles.textcontainer}>
                  <Text style={styles.hotelName}>{item.name}</Text>
                  <Text style={styles.hotelLocation}>{item.location}</Text>
                  <Text style={styles.hotelPrice}>{item.price}$</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          )}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Henüz favori eklemediniz.</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
  },
  hotelContainer: {
    width: '90%',
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
    alignSelf: 'center',
   
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  textcontainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    alignItems: 'flex-start',
  },
  hotelName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  hotelLocation: {
    fontSize: 15,
    color: 'black',
  },
  hotelPrice: {
    fontSize: 18,
    fontWeight: 'bold',
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

export default FavoritesScreen;
