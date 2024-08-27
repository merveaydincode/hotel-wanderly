import React from 'react';
import { Text, FlatList, StyleSheet, Image, Dimensions, SafeAreaView, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { Hotel } from '../../assets/types/types';
import { RootStackParamList } from '../../assets/types/types';

type CategoryHotelsNavigationProp = StackNavigationProp<RootStackParamList, 'CategoryHotels'>;
type CategoryHotelsRouteProp = RouteProp<RootStackParamList, 'CategoryHotels'>;

type Props = {
  navigation: CategoryHotelsNavigationProp;
  route: CategoryHotelsRouteProp;
};

const { width } = Dimensions.get('window');

const CategoryHotels: React.FC<Props> = ({ route, navigation }) => {
  const { category, hotels } = route.params;

  const renderHotelItem = ({ item }: { item: Hotel }) => (
    <TouchableOpacity 
      style={styles.hotelContainer} 
      onPress={() => navigation.navigate('HotelDetail', { hotel: item })}
    >
      <Image source={item.images[0]} style={styles.hotelImage} />
      <Text style={styles.hotelName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{category}</Text>
      <FlatList
        data={hotels}
        renderItem={renderHotelItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.flatListContent}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
  },
  flatListContent: {
    paddingVertical: 10,
  },
  hotelContainer: {
    marginBottom: 15,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 3,
    width: width - 20,
    alignSelf: 'center',
  },
  hotelImage: {
    width: '100%',
    height: 200,
  },
  hotelName: {
    padding: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CategoryHotels;
