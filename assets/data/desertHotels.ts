// desertHouses.ts

import { Hotels } from '../types/types';

const desertHotels: Hotels = [
  {
    id: 1,
    name: 'Sahara Oasis Villa',
    location: 'Sahra Çölü, Fas',
    image: require('../DesertImage/d1.png'),
    rooms: [
      { roomId: 1, type: 'Single', price: 250, bedCount: 1, bathroomCount: 1, hasBarbecue: true, hasPool: true, hasKitchen: true },
      { roomId: 2, type: 'Double', price: 400, bedCount: 2, bathroomCount: 1, hasBarbecue: true, hasPool: true, hasKitchen: true }
    ]
  },
  {
    id: 2,
    name: 'Marrakech Desert Lodge',
    location: 'Marrakeş, Fas',
    image: require('../DesertImage/d2.png'),
    rooms: [
      { roomId: 1, type: 'Single', price: 270, bedCount: 1, bathroomCount: 1, hasBarbecue: true, hasPool: false, hasKitchen: true },
      { roomId: 2, type: 'Suite', price: 450, bedCount: 2, bathroomCount: 1, hasBarbecue: true, hasPool: false, hasKitchen: true }
    ]
  },
  {
    id: 3,
    name: 'Desert Mirage Retreat',
    location: 'Wadi Rum, Ürdün',
    image: require('../DesertImage/d3.png'),
    rooms: [
      { roomId: 1, type: 'Single', price: 220, bedCount: 1, bathroomCount: 1, hasBarbecue: false, hasPool: false, hasKitchen: true },
      { roomId: 2, type: 'Double', price: 340, bedCount: 2, bathroomCount: 1, hasBarbecue: false, hasPool: false, hasKitchen: true }
    ]
  },
  {
    id: 4,
    name: 'Dubai Desert Haven',
    location: 'Dubai, Birleşik Arap Emirlikleri',
    image: require('../DesertImage/d4.png'),
    rooms: [
      { roomId: 1, type: 'Single', price: 300, bedCount: 1, bathroomCount: 1, hasBarbecue: true, hasPool: true, hasKitchen: true },
      { roomId: 2, type: 'Suite', price: 500, bedCount: 2, bathroomCount: 2, hasBarbecue: true, hasPool: true, hasKitchen: true }
    ]
  },
  {
    id: 5,
    name: 'Oasis Desert Retreat',
    location: 'Nevşehir, Türkiye',
    image: require('../DesertImage/d5.png'),
    rooms: [
      { roomId: 1, type: 'Single', price: 230, bedCount: 1, bathroomCount: 1, hasBarbecue: true, hasPool: false, hasKitchen: true },
      { roomId: 2, type: 'Double', price: 370, bedCount: 2, bathroomCount: 1, hasBarbecue: true, hasPool: false, hasKitchen: true }
    ]
  },
  {
    id: 6,
    name: 'Sand Dunes Lodge',
    location: 'Dakhla, Fas',
    image: require('../DesertImage/d6.png'),
    rooms: [
      { roomId: 1, type: 'Single', price: 240, bedCount: 1, bathroomCount: 1, hasBarbecue: true, hasPool: false, hasKitchen: true },
      { roomId: 2, type: 'Double', price: 380, bedCount: 2, bathroomCount: 1, hasBarbecue: true, hasPool: false, hasKitchen: true }
    ]
  },
  {
    id: 7,
    name: 'Saharan Dream House',
    location: 'Sahra Çölü, Cezayir',
    image: require('../DesertImage/d7.png'),
    rooms: [
      { roomId: 1, type: 'Single', price: 260, bedCount: 1, bathroomCount: 1, hasBarbecue: true, hasPool: true, hasKitchen: true },
      { roomId: 2, type: 'Suite', price: 430, bedCount: 2, bathroomCount: 2, hasBarbecue: true, hasPool: true, hasKitchen: true }
    ]
  },
  {
    id: 8,
    name: 'Red Sands Lodge',
    location: 'Riyad, Suudi Arabistan',
    image: require('../DesertImage/d8.png'),
    rooms: [
      { roomId: 1, type: 'Single', price: 250, bedCount: 1, bathroomCount: 1, hasBarbecue: false, hasPool: false, hasKitchen: true },
      { roomId: 2, type: 'Double', price: 400, bedCount: 2, bathroomCount: 1, hasBarbecue: false, hasPool: false, hasKitchen: true }
    ]
  },
  {
    id: 9,
    name: 'Sandstorm Retreat',
    location: 'Lalibela, Etiyopya',
    image: require('../DesertImage/d9.png'),
    rooms: [
      { roomId: 1, type: 'Single', price: 210, bedCount: 1, bathroomCount: 1, hasBarbecue: true, hasPool: false, hasKitchen: true },
      { roomId: 2, type: 'Double', price: 340, bedCount: 2, bathroomCount: 1, hasBarbecue: true, hasPool: false, hasKitchen: true }
    ]
  },
  {
    id: 10,
    name: 'Desert Sunset Lodge',
    location: 'Tunis, Tunus',
    image: require('../DesertImage/d10.png'),
    rooms: [
      { roomId: 1, type: 'Single', price: 220, bedCount: 1, bathroomCount: 1, hasBarbecue: true, hasPool: false, hasKitchen: true },
      { roomId: 2, type: 'Suite', price: 370, bedCount: 2, bathroomCount: 2, hasBarbecue: true, hasPool: false, hasKitchen: true }
    ]
  }
];

export default desertHotels;
