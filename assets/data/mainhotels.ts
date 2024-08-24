import { Hotels } from '../types/types';

const mainhotels: Hotels = [
  {
    id: 1,
    name: 'Lagoon Breeze Resort',
    location: 'Maui, Hawaii',
    coordinate: {
      latitude: 20.7984,
      longitude: -156.3319,
    },
    star: '4,9',
    price: 500,
    images:[
      require('../TropicalImage/tr1.png'),
      require('../TropicalImage/Bedroom/tr1bed.png'),
      require('../TropicalImage/Bath/tr1bath.png'),
    ],
  },
  {
    id: 2,
    name: 'Treehouse Retreat',
    location: 'Bali, Endonezya',
    coordinate: {
      latitude: -8.3405,
      longitude: 115.2455,
    },
    star: '4,3',
    price: 600,
    images:[
      require('../TreeHouseImage/a2.png'),
      require('../TreeHouseImage/Bedroom/a2bed.png'),
      require('../TreeHouseImage/Bath/a2bath.png'),
    ],
  },
  {
    id: 3,
    name: 'Château de Chambord',
    location: 'Loir-et-Cher, France',
    coordinate: {
      latitude: 47.6166,
      longitude: 1.5116,
    },
    star: '4,0',
    price: 700,
    images:[
       require('../CastleImage/c3.png'),
       require('../CastleImage/Bedroom/c3bed.png'),
       require('../CastleImage/Bath/c3bath.png'),
    ],
  },
  {
    id: 4,
    name: 'Chiang Mai Boutique Hotel',
    location: 'Chiang Mai, Tayland',
    coordinate: {
      latitude: 18.7061,
      longitude: 98.9817,
    },
    star: '4,2',
    price: 800,
    images:[
     require('../TropicalImage/tr11.png'),
      require('../TropicalImage/Bedroom/tr11bed.png'),
      require('../TropicalImage/Bath/tr11bath.png'),
    ],
 
  },
  {
    id: 5,
    name: 'Lagoon Breeze Resort',
    location: 'Maui, Hawaii',
    coordinate: {
      latitude: 20.7984,
      longitude:  -156.3319,
    },
    star: '4,5',
    price: 900,
    images:[
      require('../TropicalImage/tr12.png'),
      require('../TropicalImage/Bedroom/tr12bed.png'),
      require('../TropicalImage/Bath/tr12bath.png'),
    ],
  },
  {
    id: 6,
    name: 'Sahara Oasis Villa',
    location: 'Sahra Çölü, Fas',
    coordinate: {
      latitude: 31.0804,
      longitude: -7.9187,
    },
    star: '3,6 ',
    price: 1000,
    images:[
      require('../DesertImage/d1.png'),
      require('../DesertImage/Bedroom/d1bed.png'),
      require('../DesertImage/Bath/d1bath.png'),
    ],
  },
  {
    id: 7,
    name: 'Aurora Cabin',
    location: 'İzlanda',
    coordinate: {
      latitude: 64.9631,
      longitude: -19.0208,
    },
    star: '3,5',
    price: 1100,
    images:[
      require('../NorthImage/k5.png'),
      require('../NorthImage/Bedroom/k5bed.png'),
      require('../NorthImage/Bath/k5bath.png'),
    ],
  },
  {
    id: 8,
    name: 'Neuschwanstein Castle',
    location: 'Bavaria, Germany',
    coordinate: {
      latitude: 47.5576,
      longitude: 10.7498,
    },
    star: '4,4',
    price: 1200,
    images:[
      require('../CastleImage/c2.png'),
      require('../CastleImage/Bedroom/c2bed.png'),
      require('../CastleImage/Bath/c2bath.png'),
    ],
  },
 {
    id: 9,
    name: 'Emerald Bay Resort',
    location: 'Bali, Endonezya',
    coordinate: {
      latitude: -8.3405,
      longitude: 115.2455,
    },
    star: '4,9',
    price: 1300,
    images:[
      require('../TropicalImage/tr7.png'),
      require('../TropicalImage/Bedroom/tr7bed.png'),
      require('../TropicalImage/Bath/tr7bath.png'),
    ],
  },
  {
    id: 10,
    name: 'Crystal Waters Resort',
    location: 'Cook Adaları',
    coordinate: {
      latitude: -21.2367,
      longitude: -159.7777,
    },
    star: '4,2',
    price: 1400,
    images:[
      require('../TropicalImage/tr9.png'),
      require('../TropicalImage/Bedroom/tr9bed.png'),
      require('../TropicalImage/Bath/tr9bath.png'),
    ],
  },
]

export default mainhotels;