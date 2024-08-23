// northernCabins.ts

import { Hotels } from '../types/types';

const nordicHouses: Hotels = [
  {
    id: 1,
    name: 'Northern Lights Lodge',
    location: 'İsveç',
    image: require('../NorthImage/k1.png'),
    rooms: [
      { roomId: 1, type: 'Single', price: 180, bedCount: 1, bathroomCount: 1, hasBarbecue: false, hasPool: false, hasKitchen: true },
      { roomId: 2, type: 'Double', price: 300, bedCount: 2, bathroomCount: 1, hasBarbecue: false, hasPool: false, hasKitchen: true }
    ]
  },
  {
    id: 2,
    name: 'Arctic Retreat Cabin',
    location: 'Norveç',
    image: require('../NorthImage/k2.png'),
    rooms: [
      { roomId: 1, type: 'Single', price: 200, bedCount: 1, bathroomCount: 1, hasBarbecue: false, hasPool: false, hasKitchen: true },
      { roomId: 2, type: 'Suite', price: 350, bedCount: 2, bathroomCount: 1, hasBarbecue: true, hasPool: false, hasKitchen: true }
    ]
  },
  {
    id: 3,
    name: 'Snowy Peak Cabin',
    location: 'Kanada',
    image: require('../NorthImage/k3.png'),
    rooms: [
      { roomId: 1, type: 'Single', price: 220, bedCount: 1, bathroomCount: 1, hasBarbecue: false, hasPool: false, hasKitchen: true },
      { roomId: 2, type: 'Double', price: 320, bedCount: 2, bathroomCount: 2, hasBarbecue: true, hasPool: false, hasKitchen: true }
    ]
  },
  {
    id: 4,
    name: 'Glacial Haven',
    location: 'Finlandiya',
    image: require('../NorthImage/k4.png'),
    rooms: [
      { roomId: 1, type: 'Single', price: 190, bedCount: 1, bathroomCount: 1, hasBarbecue: false, hasPool: false, hasKitchen: true },
      { roomId: 2, type: 'Suite', price: 310, bedCount: 2, bathroomCount: 2, hasBarbecue: false, hasPool: false, hasKitchen: true }
    ]
  },
  {
    id: 5,
    name: 'Aurora Cabin',
    location: 'İzlanda',
    image: require('../NorthImage/k5.png'),
    rooms: [
      { roomId: 1, type: 'Single', price: 210, bedCount: 1, bathroomCount: 1, hasBarbecue: true, hasPool: false, hasKitchen: true },
      { roomId: 2, type: 'Double', price: 340, bedCount: 2, bathroomCount: 1, hasBarbecue: true, hasPool: false, hasKitchen: true }
    ]
  },
  {
    id: 6,
    name: 'Frosty Ridge Cabin',
    location: 'Grönland',
    image: require('../NorthImage/k6.png'),
    rooms: [
      { roomId: 1, type: 'Single', price: 200, bedCount: 1, bathroomCount: 1, hasBarbecue: false, hasPool: false, hasKitchen: true },
      { roomId: 2, type: 'Double', price: 330, bedCount: 2, bathroomCount: 2, hasBarbecue: false, hasPool: false, hasKitchen: true }
    ]
  },
  {
    id: 7,
    name: 'Winter Wonderland Lodge',
    location: 'Norveç',
    image: require('../NorthImage/k7.png'),
    rooms: [
      { roomId: 1, type: 'Single', price: 230, bedCount: 1, bathroomCount: 1, hasBarbecue: true, hasPool: false, hasKitchen: true },
      { roomId: 2, type: 'Suite', price: 360, bedCount: 2, bathroomCount: 2, hasBarbecue: true, hasPool: false, hasKitchen: true }
    ]
  },
  {
    id: 8,
    name: 'Polar View Cabin',
    location: 'İsveç',
    image: require('../NorthImage/k8.png'),
    rooms: [
      { roomId: 1, type: 'Single', price: 180, bedCount: 1, bathroomCount: 1, hasBarbecue: false, hasPool: false, hasKitchen: true },
      { roomId: 2, type: 'Double', price: 300, bedCount: 2, bathroomCount: 1, hasBarbecue: false, hasPool: false, hasKitchen: true }
    ]
  },
  {
    id: 9,
    name: 'Iceberg Cabin',
    location: 'Kanada',
    image: require('../NorthImage/k9.png'),
    rooms: [
      { roomId: 1, type: 'Single', price: 210, bedCount: 1, bathroomCount: 1, hasBarbecue: false, hasPool: false, hasKitchen: true },
      { roomId: 2, type: 'Double', price: 320, bedCount: 2, bathroomCount: 2, hasBarbecue: true, hasPool: false, hasKitchen: true }
    ]
  },
  {
    id: 10,
    name: 'Snowfall Retreat',
    location: 'Finlandiya',
    image: require('../NorthImage/k10.png'),
    rooms: [
      { roomId: 1, type: 'Single', price: 190, bedCount: 1, bathroomCount: 1, hasBarbecue: true, hasPool: false, hasKitchen: true },
      { roomId: 2, type: 'Double', price: 310, bedCount: 2, bathroomCount: 1, hasBarbecue: true, hasPool: false, hasKitchen: true }
    ]
  }
];

export default nordicHouses;
