// tropik.ts

import { Hotels } from '../types/types';

const tropicalHotels: Hotels = [
  {
    id: 1,
    name: 'Lagoon Breeze Resort',
    location: 'Maui, Hawaii',
    image: require('../TropicalImage/tr1.png'),
    rooms: [
      { roomId: 1, type: 'Single', price: 200, bedCount: 1, bathroomCount: 1, hasBarbecue: false, hasPool: true, hasKitchen: true },
      { roomId: 2, type: 'Double', price: 300, bedCount: 2, bathroomCount: 1, hasBarbecue: true, hasPool: true, hasKitchen: true }
    ]
  },
  {
    id: 2,
    name: 'Coral Reef Retreat',
    location: 'Bora Bora, Fransız Polinezyası',
    image: require('../TropicalImage/tr2.png'),
    rooms: [
      { roomId: 1, type: 'Single', price: 250, bedCount: 1, bathroomCount: 1, hasBarbecue: true, hasPool: false, hasKitchen: false },
      { roomId: 2, type: 'Suite', price: 400, bedCount: 2, bathroomCount: 2, hasBarbecue: true, hasPool: true, hasKitchen: true }
    ]
  },
  {
    id: 3,
    name: 'Sunset Haven',
    location: 'Maui, Hawaii',
    image: require('../TropicalImage/tr3.png'),
    rooms: [
      { roomId: 1, type: 'Single', price: 180, bedCount: 1, bathroomCount: 1, hasBarbecue: false, hasPool: true, hasKitchen: true },
      { roomId: 2, type: 'Double', price: 280, bedCount: 2, bathroomCount: 1, hasBarbecue: true, hasPool: true, hasKitchen: true }
    ]
  },
  {
    id: 4,
    name: 'Tropical Lagoon Villas',
    location: 'Maldivler',
    image: require('../TropicalImage/tr4.png'),
    rooms: [
      { roomId: 1, type: 'Single', price: 230, bedCount: 1, bathroomCount: 1, hasBarbecue: false, hasPool: true, hasKitchen: true },
      { roomId: 2, type: 'Suite', price: 350, bedCount: 2, bathroomCount: 2, hasBarbecue: true, hasPool: true, hasKitchen: true }
    ]
  },
  {
    id: 5,
    name: 'Paradise Bay Resort',
    location: 'Seyşeller',
    image: require('../TropicalImage/tr5.png'),
    rooms: [
      { roomId: 1, type: 'Single', price: 210, bedCount: 1, bathroomCount: 1, hasBarbecue: false, hasPool: true, hasKitchen: true },
      { roomId: 2, type: 'Double', price: 320, bedCount: 2, bathroomCount: 1, hasBarbecue: true, hasPool: true, hasKitchen: true }
    ]
  },
  {
    id: 6,
    name: 'Island Serenity Hotel',
    location: 'Samoa',
    image: require('../TropicalImage/tr6.png'),
    rooms: [
      { roomId: 1, type: 'Single', price: 190, bedCount: 1, bathroomCount: 1, hasBarbecue: true, hasPool: false, hasKitchen: true },
      { roomId: 2, type: 'Double', price: 270, bedCount: 2, bathroomCount: 1, hasBarbecue: true, hasPool: true, hasKitchen: true }
    ]
  },
  {
    id: 7,
    name: 'Oceanfront Oasis',
    location: 'Fiji',
    image: require('../TropicalImage/tr7.png'),
    rooms: [
      { roomId: 1, type: 'Single', price: 220, bedCount: 1, bathroomCount: 1, hasBarbecue: false, hasPool: true, hasKitchen: false },
      { roomId: 2, type: 'Suite', price: 350, bedCount: 2, bathroomCount: 2, hasBarbecue: true, hasPool: true, hasKitchen: true }
    ]
  },
  {
    id: 8,
    name: 'Emerald Bay Resort',
    location: 'Bali, Endonezya',
    image: require('../TropicalImage/tr8.png'),
    rooms: [
      { roomId: 1, type: 'Single', price: 200, bedCount: 1, bathroomCount: 1, hasBarbecue: false, hasPool: true, hasKitchen: false },
      { roomId: 2, type: 'Double', price: 290, bedCount: 2, bathroomCount: 1, hasBarbecue: true, hasPool: true, hasKitchen: true }
    ]
  },
  {
    id: 9,
    name: 'Crystal Waters Resort',
    location: 'Cook Adaları',
    image: require('../TropicalImage/tr9.png'),
    rooms: [
      { roomId: 1, type: 'Single', price: 240, bedCount: 1, bathroomCount: 1, hasBarbecue: true, hasPool: true, hasKitchen: true },
      { roomId: 2, type: 'Suite', price: 360, bedCount: 2, bathroomCount: 2, hasBarbecue: true, hasPool: true, hasKitchen: true }
    ]
  },
  {
    id: 10,
    name: 'Horizon Paradise',
    location: 'Koh Samui, Tayland',
    image: require('../TropicalImage/tr10.png'),
    rooms: [
      { roomId: 1, type: 'Single', price: 230, bedCount: 1, bathroomCount: 1, hasBarbecue: false, hasPool: true, hasKitchen: false },
      { roomId: 2, type: 'Double', price: 320, bedCount: 2, bathroomCount: 1, hasBarbecue: true, hasPool: true, hasKitchen: true }
    ]
  }
];

export default tropicalHotels;
