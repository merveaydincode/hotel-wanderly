// hotels.ts

import { Hotels } from '../types/types';

const hotels: Hotels = [
  {
    id: 1,
    name: 'Bali Paradise Hotel',
    location: 'Bali, Endonezya',
    image: require('../HotelsImage/Hotel1/h1.png'),
    rooms: [
      { roomId: 1, type: 'Single', price: 120, bedCount: 1 },
      { roomId: 2, type: 'Double', price: 180, bedCount: 2 }
    ]
  },
  {
    id: 2,
    name: 'Phuket Seaside Resort',
    location: 'Phuket, Tayland',
    image: require('../HotelsImage/Hotel1/h1.png'),
    rooms: [
      { roomId: 1, type: 'Single', price: 150, bedCount: 1 },
      { roomId: 2, type: 'Suite', price: 220, bedCount: 2 }
    ]
  },
  {
    id: 3,
    name: 'Jakarta City Hotel',
    location: 'Jakarta, Endonezya',
    image: require('../HotelsImage/Hotel1/h1.png'),
    rooms: [
      { roomId: 1, type: 'Single', price: 100, bedCount: 1 },
      { roomId: 2, type: 'Double', price: 150, bedCount: 2 }
    ]
  },
  {
    id: 4,
    name: 'Chiang Mai Boutique Hotel',
    location: 'Chiang Mai, Tayland',
    image: require('../HotelsImage/Hotel1/h1.png'),
    rooms: [
      { roomId: 1, type: 'Single', price: 110, bedCount: 1 },
      { roomId: 2, type: 'Double', price: 170, bedCount: 2 }
    ]
  },
  {
    id: 5,
    name: 'Ubud Royal Hotel',
    location: 'Ubud, Endonezya',
    image: require('../HotelsImage/Hotel1/h1.png'),
    rooms: [
      { roomId: 1, type: 'Single', price: 130, bedCount: 1 },
      { roomId: 2, type: 'Double', price: 200, bedCount: 2 }
    ]
  },
  {
    id: 6,
    name: 'Kuta Beach Hotel',
    location: 'Kuta, Endonezya',
    image: require('../HotelsImage/Hotel1/h1.png'),
    rooms: [
      { roomId: 1, type: 'Single', price: 140, bedCount: 1 },
      { roomId: 2, type: 'Double', price: 190, bedCount: 2 }
    ]
  },
  {
    id: 7,
    name: 'Bangkok Luxury Suites',
    location: 'Bangkok, Tayland',
    image: require('../HotelsImage/Hotel1/h1.png'),
    rooms: [
      { roomId: 1, type: 'Single', price: 160, bedCount: 1 },
      { roomId: 2, type: 'Suite', price: 250, bedCount: 2 }
    ]
  },
  {
    id: 8,
    name: 'Seminyak Beach Resort',
    location: 'Seminyak, Endonezya',
    image: require('../HotelsImage/Hotel1/h1.png'),
    rooms: [
      { roomId: 1, type: 'Single', price: 125, bedCount: 1 },
      { roomId: 2, type: 'Double', price: 175, bedCount: 2 }
    ]
  },
  {
    id: 9,
    name: 'Canggu Village Hotel',
    location: 'Canggu, Endonezya',
    image: require('../HotelsImage/Hotel1/h1.png'),
    rooms: [
      { roomId: 1, type: 'Single', price: 115, bedCount: 1 },
      { roomId: 2, type: 'Double', price: 160, bedCount: 2 }
    ]
  },
  {
    id: 10,
    name: 'Nusa Dua Beach Hotel',
    location: 'Nusa Dua, Endonezya',
    image: require('../HotelsImage/Hotel1/h1.png'),
    rooms: [
      { roomId: 1, type: 'Single', price: 135, bedCount: 1 },
      { roomId: 2, type: 'Double', price: 185, bedCount: 2 }
    ]
  },
  {
    id: 11,
    name: 'Koh Samui Hotel & Spa',
    location: 'Koh Samui, Tayland',
    image: require('../HotelsImage/Hotel1/h1.png'),
    rooms: [
      { roomId: 1, type: 'Single', price: 145, bedCount: 1 },
      { roomId: 2, type: 'Double', price: 210, bedCount: 2 }
    ]
  },
  {
    id: 12,
    name: 'Jakarta Central Hotel',
    location: 'Jakarta, Endonezya',
    image: require('../HotelsImage/Hotel1/h1.png'),
    rooms: [
      { roomId: 1, type: 'Single', price: 110, bedCount: 1 },
      { roomId: 2, type: 'Double', price: 160, bedCount: 2 }
    ]
  },
  {
    id: 13,
    name: 'Hua Hin Beach Resort',
    location: 'Hua Hin, Tayland',
    image: require('../HotelsImage/Hotel1/h1.png'),
    rooms: [
      { roomId: 1, type: 'Single', price: 120, bedCount: 1 },
      { roomId: 2, type: 'Suite', price: 230, bedCount: 2 }
    ]
  },
  {
    id: 14,
    name: 'Bandung Mountain Hotel',
    location: 'Bandung, Endonezya',
    image: require('../HotelsImage/Hotel1/h1.png'),
    rooms: [
      { roomId: 1, type: 'Single', price: 100, bedCount: 1 },
      { roomId: 2, type: 'Double', price: 140, bedCount: 2 }
    ]
  },
  {
    id: 15,
    name: 'Surabaya Grand Hotel',
    location: 'Surabaya, Endonezya',
    image: require('../HotelsImage/Hotel1/h1.png'),
    rooms: [
      { roomId: 1, type: 'Single', price: 140, bedCount: 1 },
      { roomId: 2, type: 'Double', price: 190, bedCount: 2 }
    ]
  },
  {
    id: 16,
    name: 'Krabi Sunset Hotel',
    location: 'Krabi, Tayland',
    image: require('../HotelsImage/Hotel1/h1.png'),
    rooms: [
      { roomId: 1, type: 'Single', price: 130, bedCount: 1 },
      { roomId: 2, type: 'Suite', price: 210, bedCount: 2 }
    ]
  },
  {
    id: 17,
    name: 'Medan Central Hotel',
    location: 'Medan, Endonezya',
    image: require('../HotelsImage/Hotel1/h1.png'),
    rooms: [
      { roomId: 1, type: 'Single', price: 125, bedCount: 1 },
      { roomId: 2, type: 'Double', price: 175, bedCount: 2 }
    ]
  },
  {
    id: 18,
    name: 'Bangkok Heritage Hotel',
    location: 'Bangkok, Tayland',
    image: require('../HotelsImage/Hotel1/h1.png'),
    rooms: [
      { roomId: 1, type: 'Single', price: 155, bedCount: 1 },
      { roomId: 2, type: 'Double', price: 200, bedCount: 2 }
    ]
  },
  {
    id: 19,
    name: 'Seminyak Villas',
    location: 'Seminyak, Endonezya',
    image: require('../HotelsImage/Hotel1/h1.png'),
    rooms: [
      { roomId: 1, type: 'Single', price: 130, bedCount: 1 },
      { roomId: 2, type: 'Double', price: 190, bedCount: 2 }
    ]
  },
  {
    id: 20,
    name: 'Chiang Rai Grand Hotel',
    location: 'Chiang Rai, Tayland',
    image: require('../HotelsImage/Hotel1/h1.png'),
    rooms: [
      { roomId: 1, type: 'Single', price: 140, bedCount: 1 },
      { roomId: 2, type: 'Suite', price: 220, bedCount: 2 }
    ]
  }
];

export default hotels;
