import { Hotels } from '../types/types';

const mainhotels: Hotels = [
  {
    id: 1,
    name: 'Crystal, Ko Tao, Tayland',
    location: 'Ko Tao, Tayland',
    coordinate: {
      latitude: 10.1025,
      longitude: 99.8442
    },
    price: 200,
    star: '4,2',
    images: [
      require('../TropicalImage/tr9.png'),
      require('../TropicalImage/Bath/tr9bath.png'),
      require('../TropicalImage/Garden/tr9garden.png'),
      require('../TropicalImage/Kitchen/tr9kit.png'),
      require('../TropicalImage/Bedroom/tr9bed.png'),
    ]
  },
  {
    id: 2,
    name: 'Şato, Kalamata, Yunanistan',
    location: 'Yunanistan',
    coordinate: {
      latitude: 37.0391,
      longitude: 22.1125
    },
    price: 400,
    star: '4,2',
    images: [
      require('../CastleImage/c4.png'),
      require('../CastleImage/Bedroom/c4bed.png'),
      require('../CastleImage/Bath/c4bath.png'),
      require('../CastleImage/Garden/c4garden.png'),
      require('../CastleImage/Kitchen/c4kit.png'),
    ]
  },
  {
    id: 3,
    name: 'Saint-Chartier, Fransa bölgesinde oda',
    location: 'Fransa',
    coordinate: {
      latitude: 46.6428,
      longitude: 2.0517
    },
    price: 600,
    star: '3,7',
    images: [
      require('../CastleImage/c7.png'),
      require('../CastleImage/Bedroom/c7bed.png'),
      require('../CastleImage/Bath/c7bath.png'),
      require('../CastleImage/Garden/c7garden.png'),
      require('../CastleImage/Kitchen/c7kit.png'),
    ]
  },
  {
    id: 4,
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
    id: 5,
    name: 'Sunset Baraka, Balian Beach, Endonezya',
    location: 'Balian Beach, Endonezya',
    coordinate: {
      latitude: -8.5442,
      longitude: 114.8790
    },
    price: 500,
    star: '4,8',
    images: [
      require('../TropicalImage/tr3.png'),
      require('../TropicalImage/Bath/tr3bath.png'),
      require('../TropicalImage/Garden/tr3garden.png'),
      require('../TropicalImage/Kitchen/tr3kit.png'),
      require('../TropicalImage/Bedroom/tr3bed.png'),
    ]
  },
  {
    id: 6,
    name: 'Winter Wonderland, Finlandiya',
    location: 'Ilomantsi, Finlandiya',
    coordinate: {
      latitude: 62.6667,
      longitude: 30.9167
    },
    price: 350,
    star: '3,7',
    images: [
      require('../NorthImage/k7.png'),
      require('../NorthImage/Garden/k7garden.png'),
      require('../NorthImage/Kitchen/k7kit.png'),
      require('../NorthImage/Bedroom/k7bed.png'),
      require('../NorthImage/Bath/k7bath.png'),
    ]
  },
  {
    id: 7,
    name: 'Tüm kiralık konut, Highland, Birleşik Krallık',
    location: 'Birleşik Krallık',
    coordinate: {
      latitude: 57.4791,
      longitude: -4.2247
    },
    price: 500,
    star: '3,1',
    images: [
      require('../CastleImage/c10.png'),
      require('../CastleImage/Bedroom/c10bed.png'),
      require('../CastleImage/Bath/c10bath.png'),
      require('../CastleImage/Garden/c10garden.png'),
      require('../CastleImage/Kitchen/c10kit.png'),
    ]
  },
  {
    id: 8,
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
    id: 9,
    name: 'Horizon, Cancún, Meksika',
    location: 'Cancún, Meksika',
    coordinate: {
      latitude: 21.1619,
      longitude: -86.8515
    },
    price: 300,
    star: '4,3',
    images: [
      require('../TropicalImage/tr10.png'),
      require('../TropicalImage/Bath/tr10bath.png'),
      require('../TropicalImage/Garden/tr10garden.png'),
      require('../TropicalImage/Kitchen/tr10kit.png'),
      require('../TropicalImage/Bedroom/tr10bed.png'),
    ]
  },
  {
    id: 10,
    name: 'Tüm ev, Joensuu, Finlandiya',
    location: 'Joensuu, Finlandiya',
    coordinate: {
      latitude: 62.6000,
      longitude: 29.7667
    },
    price: 400,
    star: '3,4',
    images: [
      require('../NorthImage/k6.png'),
      require('../NorthImage/Garden/k6garden.png'),
      require('../NorthImage/Kitchen/k6kit.png'),
      require('../NorthImage/Bedroom/k6bed.png'),
      require('../NorthImage/Bath/k6bath.png'),
    ]
  },
]

export default mainhotels;