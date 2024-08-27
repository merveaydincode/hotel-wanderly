// desertHouses.ts

import { Hotels } from '../types/types';

const desertHotels: Hotels = [
  {
    id: 1,
    name: 'Çadır içinde özel oda, Beer Milka, İsrail',
    location: 'İsrail',
    coordinate: {
      latitude: 30.8922,
      longitude: 34.4331
    },
    price: 350,
    star: '4,6',
    images: [
      require('../DesertImage/d1.png'),
      require('../DesertImage/Bedroom/d1bed.png'),
      require('../DesertImage/Bath/d1bath.png'),
      require('../DesertImage/Kitchen/d1kit.png'),
      require('../DesertImage/Garden/d1garden.png'),
    ]
  },
  {
    id: 2,
    name: 'Otel içinde oda, Wadi Rum Village, Ürdün',
    location: 'Ürdün',
    coordinate: {
      latitude: 29.5765,
      longitude: 35.4210
    },
    price: 450,
    star: '4,8',
    images: [
      require('../DesertImage/d2.png'),
      require('../DesertImage/Bedroom/d2bed.png'),
      require('../DesertImage/Bath/d2bath.png'),
      require('../DesertImage/Kitchen/d2kit.png'),
      require('../DesertImage/Garden/d2garden.png'),
    ]
  },
  {
    id: 3,
    name: 'Wadi Rum Village, Ürdün bölgesinde oda',
    location: 'Wadi Rum, Ürdün',
    coordinate: {
      latitude: 29.5765,
      longitude: 35.4210
    },
    price: 300,
    star: '4,2',
    images: [
      require('../DesertImage/d3.png'),
      require('../DesertImage/Bedroom/d3bed.png'),
      require('../DesertImage/Bath/d3bath.png'),
      require('../DesertImage/Kitchen/d3kit.png'),
      require('../DesertImage/Garden/d3garden.png'),
    ]
  },
  {
    id: 4,
    name: 'Kubbe içinde özel oda, Wadi Rum Village, Ürdün',
    location: 'Ürdün',
    coordinate: {
      latitude: 29.5765,
      longitude: 35.4210
    },
    price: 600,
    star: '3,1',
    images: [
      require('../DesertImage/d4.png'),
      require('../DesertImage/Bedroom/d4bed.png'),
      require('../DesertImage/Bath/d4bath.png'),
      require('../DesertImage/Kitchen/d4kit.png'),
      require('../DesertImage/Garden/d4garden.png'),
    ]
  },
  {
    id: 5,
    name: 'Military Area, Suudi Arabistan bölgesinde oda',
    location: 'Military Area, Suudi Arabistan',
    coordinate: {
      latitude: 24.7136,
      longitude: 46.6753
    },
    price: 500,
    star: '3,4',
    images: [
      require('../DesertImage/d5.png'),
      require('../DesertImage/Bedroom/d5bed.png'),
      require('../DesertImage/Bath/d5bath.png'),
      require('../DesertImage/Kitchen/d5kit.png'),
      require('../DesertImage/Garden/d5garden.png'),
    ]
  },
  {
    id: 6,
    name: 'Yerin tamamı, Dahab, Mısır',
    location: 'Dahab, Mısır',
    coordinate: {
      latitude: 28.5000,
      longitude: 34.5167
    },
    price: 500,
    star: '3,7',
    images: [
      require('../DesertImage/d6.png'),
      require('../DesertImage/Bedroom/d6bed.png'),
      require('../DesertImage/Bath/d6bath.png'),
      require('../DesertImage/Kitchen/d6kit.png'),
      require('../DesertImage/Garden/d6garden.png'),
    ]
  },
  {
    id: 7,
    name: 'Doğa içinde pansiyon içinde özel oda, Siwa, Mısır',
    location: 'Siwa, Mısır',
    coordinate: {
      latitude: 29.2045,
      longitude: 25.5196
    },
    price: 600,
    star: '3,9',
    images: [
      require('../DesertImage/d7.png'),
      require('../DesertImage/Bedroom/d7bed.png'),
      require('../DesertImage/Bath/d7bath.png'),
      require('../DesertImage/Kitchen/d7kit.png'),
      require('../DesertImage/Garden/d7garden.png'),
    ]
  },
  {
    id: 8,
    name: 'Kamp aracı/Karavan, Arad, İsrail',
    location: 'Arad, İsrail',
    coordinate: {
      latitude: 31.2746,
      longitude: 35.2061
    },
    price: 200,
    star: '4,2',
    images: [
      require('../DesertImage/d8.png'),
      require('../DesertImage/Bedroom/d8bed.png'),
      require('../DesertImage/Bath/d8bath.png'),
      require('../DesertImage/Kitchen/d8kit.png'),
      require('../DesertImage/Garden/d8garden.png'),
    ]
  },
  {
    id: 9,
    name: 'Tüm misafir evi, Retamim, İsrail',
    location: 'Retamim, İsrail',
    coordinate: {
      latitude: 31.2166,
      longitude: 34.6557
    },
    price: 500,
    star: '3,1',
    images: [
      require('../DesertImage/d9.png'),
      require('../DesertImage/Bedroom/d9bed.png'),
      require('../DesertImage/Bath/d9bath.png'),
      require('../DesertImage/Kitchen/d9kit.png'),
      require('../DesertImage/Garden/d9garden.png'),
    ]
  },
  {
    id: 10,
    name: 'Kamp aracı/Karavan, Mitzpe Ramon, İsrail',
    location: 'Mitzpe Ramon, İsrail',
    coordinate: {
      latitude: 30.6133,
      longitude: 34.8035
    },
    price: 400,
    star: '4,3',
    images: [
      require('../DesertImage/d10.png'),
      require('../DesertImage/Bedroom/d10bed.png'),
      require('../DesertImage/Bath/d10bath.png'),
      require('../DesertImage/Kitchen/d10kit.png'),
      require('../DesertImage/Garden/d10garden.png'),
    ]
  }
];


export default desertHotels;
