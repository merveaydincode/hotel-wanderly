// treeHouses.ts

import { Hotels } from '../types/types';

const treehouses: Hotels = [
  {
    id: 1,
    name: 'Canopy Haven',
    location: 'Costa Rica',
    image: require('../TreeHouseImage/a1.png'),
    rooms: [
      { roomId: 1, type: 'Single', price: 150, bedCount: 1, bathroomCount: 1, hasBarbecue: true, hasPool: false, hasKitchen: true },
      { roomId: 2, type: 'Double', price: 250, bedCount: 2, bathroomCount: 1, hasBarbecue: true, hasPool: false, hasKitchen: true }
    ]
  },
  {
    id: 2,
    name: 'Treehouse Retreat',
    location: 'Bali, Endonezya',
    image: require('../TreeHouseImage/a2.png'),
    rooms: [
      { roomId: 1, type: 'Single', price: 180, bedCount: 1, bathroomCount: 1, hasBarbecue: false, hasPool: true, hasKitchen: true },
      { roomId: 2, type: 'Suite', price: 320, bedCount: 2, bathroomCount: 1, hasBarbecue: true, hasPool: true, hasKitchen: true }
    ]
  },
  {
    id: 3,
    name: 'Skyview Treehouse',
    location: 'Seyşeller',
    image: require('../TreeHouseImage/a3.png'),
    rooms: [
      { roomId: 1, type: 'Single', price: 200, bedCount: 1, bathroomCount: 1, hasBarbecue: false, hasPool: false, hasKitchen: true },
      { roomId: 2, type: 'Double', price: 300, bedCount: 2, bathroomCount: 1, hasBarbecue: true, hasPool: false, hasKitchen: true }
    ]
  },
  {
    id: 4,
    name: 'Forest Hideaway',
    location: 'Meksika',
    image: require('../TreeHouseImage/a4.png'),
    rooms: [
      { roomId: 1, type: 'Single', price: 160, bedCount: 1, bathroomCount: 1, hasBarbecue: true, hasPool: true, hasKitchen: false },
      { roomId: 2, type: 'Suite', price: 280, bedCount: 2, bathroomCount: 2, hasBarbecue: true, hasPool: true, hasKitchen: true }
    ]
  },
  {
    id: 5,
    name: 'Canopy Cottage',
    location: 'Kosta Rika',
    image: require('../TreeHouseImage/a5.png'),
    rooms: [
      { roomId: 1, type: 'Single', price: 170, bedCount: 1, bathroomCount: 1, hasBarbecue: true, hasPool: false, hasKitchen: true },
      { roomId: 2, type: 'Double', price: 290, bedCount: 2, bathroomCount: 1, hasBarbecue: false, hasPool: true, hasKitchen: true }
    ]
  },
  {
    id: 6,
    name: 'Treehouse Haven',
    location: 'Vietnam',
    image: require('../TreeHouseImage/a6.png'),
    rooms: [
      { roomId: 1, type: 'Single', price: 140, bedCount: 1, bathroomCount: 1, hasBarbecue: false, hasPool: true, hasKitchen: false },
      { roomId: 2, type: 'Suite', price: 270, bedCount: 2, bathroomCount: 1, hasBarbecue: true, hasPool: true, hasKitchen: true }
    ]
  },
  {
    id: 7,
    name: 'Treehouse Paradise',
    location: 'Japonya',
    image: require('../TreeHouseImage/a7.png'),
    rooms: [
      { roomId: 1, type: 'Single', price: 220, bedCount: 1, bathroomCount: 1, hasBarbecue: true, hasPool: false, hasKitchen: true },
      { roomId: 2, type: 'Double', price: 320, bedCount: 2, bathroomCount: 1, hasBarbecue: true, hasPool: false, hasKitchen: true }
    ]
  },
  {
    id: 8,
    name: 'Skyline Treehouse',
    location: 'Hawaii, ABD',
    image: require('../TreeHouseImage/a8.png'),
    rooms: [
      { roomId: 1, type: 'Single', price: 190, bedCount: 1, bathroomCount: 1, hasBarbecue: false, hasPool: true, hasKitchen: true },
      { roomId: 2, type: 'Double', price: 310, bedCount: 2, bathroomCount: 1, hasBarbecue: true, hasPool: true, hasKitchen: true }
    ]
  },
  {
    id: 9,
    name: 'Treehouse Escape',
    location: 'Fransız Polinezyası',
    image: require('../TreeHouseImage/a9.png'),
    rooms: [
      { roomId: 1, type: 'Single', price: 210, bedCount: 1, bathroomCount: 1, hasBarbecue: true, hasPool: false, hasKitchen: true },
      { roomId: 2, type: 'Suite', price: 340, bedCount: 2, bathroomCount: 2, hasBarbecue: true, hasPool: false, hasKitchen: true }
    ]
  },
  {
    id: 10,
    name: 'Treetop Lodge',
    location: 'Endonezya',
    image: require('../TreeHouseImage/a10.png'),
    rooms: [
      { roomId: 1, type: 'Single', price: 200, bedCount: 1, bathroomCount: 1, hasBarbecue: true, hasPool: false, hasKitchen: true },
      { roomId: 2, type: 'Double', price: 290, bedCount: 2, bathroomCount: 1, hasBarbecue: true, hasPool: false, hasKitchen: true }
    ]
  },
];

export default treehouses;
