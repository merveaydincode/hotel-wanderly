// treeHouses.ts

import { Hotels } from '../types/types';


const treehouses: Hotels = [
  {
    id: 1,
    name: 'Ağaç ev, Zakynthos, Yunanistan',
    location: 'Yunanistan',
    image: require('../TreeHouseImage/a1.png'),
    coordinate: {
      latitude: 37.8572,
      longitude: 20.7144
    },
    price: 400,
    star: '4,0',
    images: [
      require('../TreeHouseImage/a1.png'),
      require('../TreeHouseImage/Bedroom/a1bed.png'),
      require('../TreeHouseImage/Bath/a1bath.png'),
    ]
  },
  {
    id: 2,
    name: 'Treehouse Zemo Khiza, Gürcistan',
    location: 'Gürcistan',
    image: require('../TreeHouseImage/a2.png'),
    coordinate: {
      latitude: 41.9956,
      longitude: 42.0925
    },
    price: 300,
    star: '4,3',
    images: [
       require('../TreeHouseImage/a2.png'),
       require('../TreeHouseImage/Bedroom/a2bed.png'),
       require('../TreeHouseImage/Bath/a2bath.png'),
    ]
  },
  {
    id: 3,
    name: 'Ağaç ev, Fethiye, Türkiye',
    location: 'Fethiye, Türkiye',
    image: require('../TreeHouseImage/a3.png'),
    coordinate: {
      latitude: 36.6316,
      longitude: 29.1332
    },
    price: 500,
    star: '3,4',
    images: [
      require('../TreeHouseImage/a3.png'),
      require('../TreeHouseImage/Bedroom/a3bed.png'),
      require('../TreeHouseImage/Bath/a3bath.png'),
   ]
  },
  {
    id: 4,
    name: 'Ağaç ev, Ano Korakiana, Corfu, Yunanistan',
    location: 'Corfu, Yunanistan',
    image: require('../TreeHouseImage/a4.png'),
    coordinate: {
      latitude: 39.7131,
      longitude: 19.8186
    },
    price: 600,
    star: '3,7',
    images: [
      require('../TreeHouseImage/a4.png'),
      require('../TreeHouseImage/Bedroom/a4bed.png'),
      require('../TreeHouseImage/Bath/a4bath.png'),
    ]
  },
  {
    id: 5,
    name: 'Ağaç ev, Keda, Gürcistan',
    location: 'Keda, Gürcistan',
    image: require('../TreeHouseImage/a5.png'),
    coordinate: {
      latitude: 41.5591,
      longitude: 41.9563
    },
    price: 700,
    star: '3,9',
    images: [
      require('../TreeHouseImage/a5.png'),
      require('../TreeHouseImage/Bedroom/a5bed.png'),
      require('../TreeHouseImage/Bath/a5bath.png'),
    ]
  },
  {
    id: 6,
    name: 'Ağaç ev, Bertea, Romanya',
    location: 'Bertea, Romanya',
    image: require('../TreeHouseImage/a6.png'),
    coordinate: {
      latitude: 45.2133,
      longitude: 25.7773
    },
    price: 200,
    star: '4,2',
    images: [
      require('../TreeHouseImage/a6.png'),
      require('../TreeHouseImage/Bedroom/a6bed.png'),
      require('../TreeHouseImage/Bath/a6bath.png'),
    ]
  },
  {
    id: 7,
    name: 'Treehouse, Çayırdüzü, Türkiye',
    location: 'Çayırdüzü, Türkiye',
    image: require('../TreeHouseImage/a7.png'),
    coordinate: {
      latitude: 40.6635,
      longitude: 37.1212
    },
    price: 500,
    star: '3,1',
    images: [
      require('../TreeHouseImage/a7.png'),
      require('../TreeHouseImage/Bedroom/a7bed.png'),
      require('../TreeHouseImage/Bath/a7bath.png'),
    ]
  },
  {
    id: 8,
    name: 'Tüm ev, Vanato, Yunanistan',
    location: 'Vanato, Yunanistan',
    image: require('../TreeHouseImage/a8.png'),
    coordinate: {
      latitude: 37.8067,
      longitude: 20.7718
    },
    price: 400,
    star: '4,3',
    images: [
      require('../TreeHouseImage/a8.png'),
      require('../TreeHouseImage/Bedroom/a8bed.png'),
      require('../TreeHouseImage/Bath/a8bath.png'),
    ]
  },
  {
    id: 9,
    name: 'Ağaç ev, Jesenice, Çekya',
    location: 'Jesenice, Çekya',
    image: require('../TreeHouseImage/a9.png'),
    coordinate: {
      latitude: 49.9667,
      longitude: 14.3367
    },
    price: 800,
    star: '4,2',
    images: [
      require('../TreeHouseImage/a9.png'),
      require('../TreeHouseImage/Bedroom/a9bed.png'),
      require('../TreeHouseImage/Bath/a9bath.png'),
    ]
  },
  {
    id: 10,
    name: 'Ağaç ev, Jesenice, Çekya',
    location: 'Jesenice, Çekya',
    image: require('../TreeHouseImage/a10.png'),
    coordinate: {
      latitude: 49.9667,
      longitude: 14.3367
    },
    price: 700,
    star: '4,4',
    images: [
      require('../TreeHouseImage/a10.png'),
      require('../TreeHouseImage/Bedroom/a10bed.png'),
      require('../TreeHouseImage/Bath/a10bath.png'),
    ]
  },
];

export default treehouses;

