import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

type Props = {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
};

const CategoryList: React.FC<Props> = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <ScrollView horizontal style={styles.container}>
      {categories.map((category) => (
        <TouchableOpacity
          key={category}
          style={[
            styles.categoryButton,
            selectedCategory === category && styles.selectedCategory
          ]}
          onPress={() => onSelectCategory(category)}
        >
          <Text style={[
            styles.categoryText,
            selectedCategory === category && styles.selectedCategoryText
          ]}>
            {category}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    width: '100%',
  },
  categoryButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    height: 40,
    paddingHorizontal: 10,
  },
  selectedCategory: {
    backgroundColor: 'green',
  },
  categoryText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '400',
  },
  selectedCategoryText: {
    color: 'white',
  },
});

export default CategoryList;
