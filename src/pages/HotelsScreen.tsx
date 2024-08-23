import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, Dimensions, SafeAreaView, ScrollView } from 'react-native';
import { Hotels } from '../../assets/types/types';
import tropicalHotels from '../../assets/data/tropicalHotels';
import desertHotels from '../../assets/data/desertHotels';
import treehouses from '../../assets/data/treehouses';
import nordicHouses from '../../assets/data/nordicHouses';
import castles from '../../assets/data/castles';

const { width } = Dimensions.get('window');

const categories = [
  { title: 'Tropik Evler', data: tropicalHotels },
  { title: 'Çöl Evleri', data: desertHotels },
  { title: 'Ağaç Evler', data: treehouses },
  { title: 'Kuzey Evleri', data: nordicHouses },
  { title: 'Şatolar', data: castles },
];

const renderHotelItem = ({ item }: { item: Hotels[0] }) => (
  <View style={styles.hotelContainer}>
    <Image source={item.image} style={styles.hotelImage} />
    <Text style={styles.hotelName}>{item.name}</Text>
  </View>
);

const HotelsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {categories.map((category, index) => (
          <View key={index} style={styles.categoryContainer}>
            <Text style={styles.categoryTitle}>{category.title}</Text>
            <FlatList
              data={category.data}
              renderItem={renderHotelItem}
              keyExtractor={(item) => item.id.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.flatListContent}
            />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  categoryContainer: {
    marginBottom: 20,
    padding: 10,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  flatListContent: {
    paddingVertical: 5,
  },
  hotelContainer: {
    width: width * 0.6,
    marginRight: 10,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 3,
  },
  hotelImage: {
    width: '100%',
    height: 150,
  },
  hotelName: {
    padding: 10,
    fontSize: 16,
    fontWeight: '500',
  },
});

export default HotelsScreen;
