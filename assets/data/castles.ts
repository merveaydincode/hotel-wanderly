// castles.ts

import { Hotels } from '../types/types';

const castles: Hotels = [
  {
    id: 1,
    name: 'Tüm kiralık konut, Cumbria, Birleşik Krallık',
    location: 'Birleşik Krallık',
    coordinate: {
      latitude: 54.5772,
      longitude: -2.7975
    },
    price: 500,
    star: '4,5',
    images: [
      require('../CastleImage/c1.png'),
      require('../CastleImage/Bedroom/c1bed.png'),
      require('../CastleImage/Bath/c1bath.png'),
      require('../CastleImage/Garden/c1garden.png'),
      require('../CastleImage/Kitchen/c1kit.png'),
    ]
  },
  {
    id: 2,
    name: 'Şato içinde özel oda, Behren-Lübchin, Almanya',
    location: 'Behren-Lübchin, Almanya',
    coordinate: {
      latitude: 53.9731,
      longitude: 12.7418
    },
    price: 600,
    star: '4,7',
    images: [
      require('../CastleImage/c2.png'),
      require('../CastleImage/Bedroom/c2bed.png'),
      require('../CastleImage/Bath/c2bath.png'),
      require('../CastleImage/Garden/c2garden.png'),
      require('../CastleImage/Kitchen/c2kit.png'),
    ]
  },
  {
    id: 3,
    name: 'Şato, Spoleto, İtalya',
    location: 'İtalya',
    coordinate: {
      latitude: 42.7406,
      longitude: 12.7362
    },
    price: 700,
    star: '4,8',
    images: [
      require('../CastleImage/c3.png'),
      require('../CastleImage/Bedroom/c3bed.png'),
      require('../CastleImage/Bath/c3bath.png'),
      require('../CastleImage/Garden/c3garden.png'),
      require('../CastleImage/Kitchen/c3kit.png'),
    ]
  },
  {
    id: 4,
    name: 'Şato, Kalamata, Yunanistan',
    location: 'Yunanistan',
    coordinate: {
      latitude: 37.0391,
      longitude: 22.1125
    },
    price: 200,
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
    id: 5,
    name: 'Tüm kiralık konut, Flims, İsviçre',
    location: 'İsviçre',
    coordinate: {
      latitude: 46.8363,
      longitude: 9.2830
    },
    price: 500,
    star: '3,1',
    images: [
      require('../CastleImage/c5.png'),
      require('../CastleImage/Bedroom/c5bed.png'),
      require('../CastleImage/Bath/c5bath.png'),
      require('../CastleImage/Garden/c5garden.png'),
      require('../CastleImage/Kitchen/c5kit.png'),
    ]
  },
  {
    id: 6,
    name: 'Tüm kiralık konut, Córdoba, İspanya',
    location: 'İspanya',
    coordinate: {
      latitude: 37.8882,
      longitude: -4.7794
    },
    price: 500,
    star: '3,4',
    images: [
      require('../CastleImage/c6.png'),
      require('../CastleImage/Bedroom/c6bed.png'),
      require('../CastleImage/Bath/c6bath.png'),
      require('../CastleImage/Garden/c6garden.png'),
      require('../CastleImage/Kitchen/c6kit.png'),
    ]
  },
  {
    id: 7,
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
    id: 8,
    name: 'Şato, Clackmannanshire, Birleşik Krallık',
    location: 'Birleşik Krallık',
    coordinate: {
      latitude: 56.1548,
      longitude: -3.7528
    },
    price: 700,
    star: '3,9',
    images: [
      require('../CastleImage/c8.png'),
      require('../CastleImage/Bedroom/c8bed.png'),
      require('../CastleImage/Bath/c8bath.png'),
      require('../CastleImage/Garden/c8garden.png'),
      require('../CastleImage/Kitchen/c8kit.png'),
    ]
  },
  {
    id: 9,
    name: 'Şato, Ballintuim, Birleşik Krallık',
    location: 'Birleşik Krallık',
    coordinate: {
      latitude: 56.6987,
      longitude: -3.4338
    },
    price: 200,
    star: '4,2',
    images: [
      require('../CastleImage/c9.png'),
      require('../CastleImage/Bedroom/c9bed.png'),
      require('../CastleImage/Bath/c9bath.png'),
      require('../CastleImage/Garden/c9garden.png'),
      require('../CastleImage/Kitchen/c9kit.png'),
    ]
  },
  {
    id: 10,
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
  }
];

export default castles;

