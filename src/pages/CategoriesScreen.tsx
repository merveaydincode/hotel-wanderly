import React from 'react';
import { View, Text, StyleSheet, FlatList, ImageBackground, TouchableOpacity, SafeAreaView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Hotel } from '../../assets/types/types';

const CategoriesScreen: React.FC = () => {
  const route = useRoute();
  const { category, data } = route.params as { category: string; data: Hotel[] };


  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.hotelContainer}>
            <ImageBackground source={item.image} style={styles.imageBackground}>
              {/* Hotel information and favorite button */}  
            </ImageBackground>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  hotelContainer: {
    // Styles for hotel container
  },
  imageBackground: {
    // Styles for image background
  },
});

export default CategoriesScreen;
