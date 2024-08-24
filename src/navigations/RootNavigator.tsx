import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthNavigator from './AuthNavigator';
import HomeNavigator from './HomeNavigator';
import MainNavigator from './MainNavigator';
import HotelDetail from '../pages/HotelDetail';
import RezScreen from '../pages/RezScreen';
import CategoriesScreen from '../pages/CategoriesScreen';

const Stack = createStackNavigator();

const RootNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Auth" component={AuthNavigator} />
      <Stack.Screen name="Main" component={MainNavigator} />
      <Stack.Screen name="Home" component={HomeNavigator} />
      <Stack.Screen name="HotelDetail" component={HotelDetail} />
      <Stack.Screen name="RezScreen" component={RezScreen} />
      <Stack.Screen name="CategoriesScreen" component={CategoriesScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
