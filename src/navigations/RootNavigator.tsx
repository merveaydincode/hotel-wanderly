import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';
import HotelDetail from '../pages/HotelDetail';
import RezScreen from '../pages/RezScreen';
import HomeScreen from '../pages/HomeScreen';
import CategoryHotels from '../pages/CategoryHotels';

const Stack = createStackNavigator();

const RootNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Auth" component={AuthNavigator} />
      <Stack.Screen name="Main" component={MainNavigator} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="HotelDetail" component={HotelDetail} />
      <Stack.Screen name="RezScreen" component={RezScreen} />
      <Stack.Screen name="CategoryHotels" component={CategoryHotels} />
     </Stack.Navigator>
  );
};

export default RootNavigator;
