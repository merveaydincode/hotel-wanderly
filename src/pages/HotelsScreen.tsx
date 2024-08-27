import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, Dimensions, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { Hotels, Hotel, RootStackParamList } from '../../assets/types/types';
import tropicalHotels from '../../assets/data/tropicalHotels';
import desertHotels from '../../assets/data/desertHotels';
import treehouses from '../../assets/data/treehouses';
import nordicHouses from '../../assets/data/nordicHouses';
import castles from '../../assets/data/castles';
import { StackNavigationProp } from '@react-navigation/stack';

const { width } = Dimensions.get('window');

type HotelsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Hotels'>;

type Props = {
  navigation: HotelsScreenNavigationProp;
};

const HotelsScreen: React.FC<Props> = ({ navigation }) => {
  const categories = [
    { title: 'Tropik Evler', data: tropicalHotels },
    { title: 'Ağaç Evler', data: treehouses },
    { title: 'Kuzey Evleri', data: nordicHouses },
    { title: 'Şatolar', data: castles },
    { title: 'Çöl Evleri', data: desertHotels },
  ];

  const handleCategoryPress = (categoryTitle: string, hotels: Hotel[]) => {
    navigation.navigate('CategoryHotels', { category: categoryTitle, hotels });
  };

  const renderHotelItem = ({ item }: { item: Hotel }) => (
    <View style={styles.hotelContainer}>
      <Image source={item.images[0]} style={styles.hotelImage} />
      <Text style={styles.hotelName}>{item.name}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {categories.map((category, index) => (
          <View key={index} style={styles.categoryContainer}>
            <TouchableOpacity
              onPress={() => handleCategoryPress(category.title, category.data)}
            >
              <Text style={styles.categoryTitle}>{category.title}</Text>
            </TouchableOpacity>
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
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
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
