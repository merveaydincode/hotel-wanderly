// castles.ts

import { Hotels } from '../types/types';

const castles: Hotels = [
  {
    id: 1,
    name: 'Hogwarts Castle',
    location: 'Scotland, United Kingdom',
    image: require('../CastleImage/c1.png'),
    coordinate: {
      latitude: 0,
      longitude: 0
    },
    price: 500,
    star: '4,5',
    images: undefined
  },
  {
    id: 2,
    name: 'Neuschwanstein Castle',
    location: 'Bavaria, Germany',
    image: require('../CastleImage/c2.png'),
    coordinate: {
      latitude: 0,
      longitude: 0
    },
    price: 600,
    star: '4,7',
    images: undefined
  },
  {
    id: 3,
    name: 'Château de Chambord',
    location: 'Loir-et-Cher, France',
    image: require('../CastleImage/c3.png'),
    coordinate: {
      latitude: 0,
      longitude: 0
    },
    price: 700,
    star: '4,8',
    images: undefined
  },
  {
    id: 4,
    name: 'Castle of the Moors',
    location: 'Sintra, Portugal',
    image: require('../CastleImage/c4.png'),
    coordinate: {
      latitude: 0,
      longitude: 0
    },
    price: 200,
    star: '4,2',
    images: undefined
  },
  {
    id: 5,
    name: 'Edinburgh Castle',
    location: 'Edinburgh, Scotland',
    image: require('../CastleImage/c5.png'),
    coordinate: {
      latitude: 0,
      longitude: 0
    },
    price: 500,
    star: '3,1',
    images: undefined
  },
  {
    id: 6,
    name: 'Hohenzollern Castle',
    location: 'Swabian Alps, Germany',
    image: require('../CastleImage/c6.png'),
    coordinate: {
      latitude: 0,
      longitude: 0
    },
    price: 500,
    star: '3,4',
    images: undefined
  },
  {
    id: 7,
    name: 'Castle of Neuschwanstein',
    location: 'Bavaria, Germany',
    image: require('../CastleImage/c7.png'),
    coordinate: {
      latitude: 0,
      longitude: 0
    },
    price: 600,
    star: '3,7',
    images: undefined
  },
  {
    id: 8,
    name: 'Castle of the White Rose',
    location: 'Würzburg, Germany',
    image: require('../CastleImage/c8.png'),
    coordinate: {
      latitude: 0,
      longitude: 0
    },
    price: 700,
    star: '3,9',
    images: undefined
  },
  {
    id: 9,
    name: 'Bran Castle',
    location: 'Bran, Romania',
    image: require('../CastleImage/c9.png'),
    coordinate: {
      latitude: 0,
      longitude: 0
    },
    price: 200,
    star: '4,2',
    images: undefined
  },
  {
    id: 10,
    name: 'Château de Versailles',
    location: 'Versailles, France',
    image: require('../CastleImage/c10.png'),
    coordinate: {
      latitude: 0,
      longitude: 0
    },
    price: 500,
    star: '3,1',
    images: undefined
  }
];

export default castles;
