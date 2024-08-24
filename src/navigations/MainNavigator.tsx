import { AntDesign, Feather, FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Dimensions } from 'react-native';
import FavoritesScreen from '../pages/FavoritesScreen';
import HomeScreen from '../pages/HomeScreen';
import HotelsScreen from '../pages/HotelsScreen';
import ProfileScreen from '../pages/ProfileScreen';

const Tab = createBottomTabNavigator();
const { width, height } = Dimensions.get('window');


const MainNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarStyle: { height: 80 },
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ tabBarIcon: ({ color }) => (<AntDesign name="home" size={24} color={color} />) }} 
      />
      <Tab.Screen 
        name="Hotels" 
        component={HotelsScreen} 
        options={{ tabBarIcon: ({ color }) => (<Feather name="map" size={24} color={color} />) }} 
      />
      <Tab.Screen 
        name="Fav" 
        component={FavoritesScreen} 
        options={{ tabBarIcon: ({ color }) => (<AntDesign name="hearto" size={24} color={color} />) }} 
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{ tabBarIcon: ({ color }) => (<FontAwesome name="user-o" size={24} color={color} />) }} 
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
