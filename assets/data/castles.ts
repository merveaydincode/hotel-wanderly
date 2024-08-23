// castles.ts

import { Hotels } from '../types/types';

const castles: Hotels = [
  {
    id: 1,
    name: 'Hogwarts Castle',
    location: 'Scotland, United Kingdom',
    image: require('../CastleImage/c1.png'),
    rooms: [
      { roomId: 1, type: 'Single', price: 500, bedCount: 1, bathroomCount: 1, hasBarbecue: false, hasPool: true, hasKitchen: true },
      { roomId: 2, type: 'Double', price: 800, bedCount: 2, bathroomCount: 2, hasBarbecue: false, hasPool: true, hasKitchen: true }
    ]
  },
  {
    id: 2,
    name: 'Neuschwanstein Castle',
    location: 'Bavaria, Germany',
    image: require('../CastleImage/c2.png'),
    rooms: [
      { roomId: 1, type: 'Single', price: 450, bedCount: 1, bathroomCount: 1, hasBarbecue: false, hasPool: true, hasKitchen: true },
      { roomId: 2, type: 'Suite', price: 750, bedCount: 2, bathroomCount: 2, hasBarbecue: false, hasPool: true, hasKitchen: true }
    ]
  },
  {
    id: 3,
    name: 'Château de Chambord',
    location: 'Loir-et-Cher, France',
    image: require('../CastleImage/c3.png'),
    rooms: [
      { roomId: 1, type: 'Single', price: 400, bedCount: 1, bathroomCount: 1, hasBarbecue: true, hasPool: true, hasKitchen: true },
      { roomId: 2, type: 'Double', price: 700, bedCount: 2, bathroomCount: 2, hasBarbecue: true, hasPool: true, hasKitchen: true }
    ]
  },
  {
    id: 4,
    name: 'Castle of the Moors',
    location: 'Sintra, Portugal',
    image: require('../CastleImage/c4.png'),
    rooms: [
      { roomId: 1, type: 'Single', price: 420, bedCount: 1, bathroomCount: 1, hasBarbecue: false, hasPool: false, hasKitchen: true },
      { roomId: 2, type: 'Double', price: 650, bedCount: 2, bathroomCount: 1, hasBarbecue: false, hasPool: false, hasKitchen: true }
    ]
  },
  {
    id: 5,
    name: 'Edinburgh Castle',
    location: 'Edinburgh, Scotland',
    image: require('../CastleImage/c5.png'),
    rooms: [
      { roomId: 1, type: 'Single', price: 430, bedCount: 1, bathroomCount: 1, hasBarbecue: false, hasPool: false, hasKitchen: true },
      { roomId: 2, type: 'Double', price: 660, bedCount: 2, bathroomCount: 1, hasBarbecue: false, hasPool: false, hasKitchen: true }
    ]
  },
  {
    id: 6,
    name: 'Hohenzollern Castle',
    location: 'Swabian Alps, Germany',
    image: require('../CastleImage/c6.png'),
    rooms: [
      { roomId: 1, type: 'Single', price: 470, bedCount: 1, bathroomCount: 1, hasBarbecue: true, hasPool: false, hasKitchen: true },
      { roomId: 2, type: 'Suite', price: 720, bedCount: 2, bathroomCount: 2, hasBarbecue: true, hasPool: false, hasKitchen: true }
    ]
  },
  {
    id: 7,
    name: 'Castle of Neuschwanstein',
    location: 'Bavaria, Germany',
    image: require('../CastleImage/c7.png'),
    rooms: [
      { roomId: 1, type: 'Single', price: 480, bedCount: 1, bathroomCount: 1, hasBarbecue: true, hasPool: true, hasKitchen: true },
      { roomId: 2, type: 'Double', price: 730, bedCount: 2, bathroomCount: 2, hasBarbecue: true, hasPool: true, hasKitchen: true }
    ]
  },
  {
    id: 8,
    name: 'Castle of the White Rose',
    location: 'Würzburg, Germany',
    image: require('../CastleImage/c8.png'),
    rooms: [
      { roomId: 1, type: 'Single', price: 440, bedCount: 1, bathroomCount: 1, hasBarbecue: false, hasPool: true, hasKitchen: true },
      { roomId: 2, type: 'Suite', price: 680, bedCount: 2, bathroomCount: 2, hasBarbecue: false, hasPool: true, hasKitchen: true }
    ]
  },
  {
    id: 9,
    name: 'Bran Castle',
    location: 'Bran, Romania',
    image: require('../CastleImage/c9.png'),
    rooms: [
      { roomId: 1, type: 'Single', price: 460, bedCount: 1, bathroomCount: 1, hasBarbecue: false, hasPool: false, hasKitchen: true },
      { roomId: 2, type: 'Double', price: 690, bedCount: 2, bathroomCount: 1, hasBarbecue: false, hasPool: false, hasKitchen: true }
    ]
  },
  {
    id: 10,
    name: 'Château de Versailles',
    location: 'Versailles, France',
    image: require('../CastleImage/c10.png'),
    rooms: [
      { roomId: 1, type: 'Single', price: 550, bedCount: 1, bathroomCount: 1, hasBarbecue: false, hasPool: true, hasKitchen: true },
      { roomId: 2, type: 'Suite', price: 850, bedCount: 2, bathroomCount: 2, hasBarbecue: false, hasPool: true, hasKitchen: true }
    ]
  }
];

export default castles;
