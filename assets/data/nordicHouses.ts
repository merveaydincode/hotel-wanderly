// northernCabins.ts

import { Hotels } from '../types/types';

const nordicHouses: Hotels = [
  {
    id: 1,
    name: 'Tüm kır evi, Kontiolahti, Finlandiya',
    location: 'Kontiolahti, Finlandiya',
    coordinate: {
      latitude: 62.7625,
      longitude: 29.8483
    },
    price: 250,
    star: '4,5',
    images: [
      require('../NorthImage/k1.png'),
      require('../NorthImage/Bath/k1bath.png'),
      require('../NorthImage/Garden/k1garden.png'),
      require('../NorthImage/Kitchen/k1kit.png'),
      require('../NorthImage/Bedroom/k1bed.png'),
    ]
  },
  {
    id: 2,
    name: 'Tüm ev, Lehmo, Finlandiya',
    location: 'Lehmo, Finlandiya',
    coordinate: {
      latitude: 62.6667,
      longitude: 29.8333
    },
    price: 300,
    star: '4,7',
    images: [
      require('../NorthImage/k2.png'),
      require('../NorthImage/Garden/k2garden.png'),
      require('../NorthImage/Kitchen/k2kit.png'),
      require('../NorthImage/Bedroom/k2bed.png'),
      require('../NorthImage/Bath/k2bath.png'),
    ]
  },
  {
    id: 3,
    name: 'Tüm ev, Kontiolahti, Finlandiya',
    location: 'Kontiolahti, Finlandiya',
    image: require('../NorthImage/k3.png'),
    coordinate: {
      latitude: 62.7625,
      longitude: 29.8483
    },
    price: 350,
    star: '4,8',
    images: [
      require('../NorthImage/k3.png'),
      require('../NorthImage/Bath/k3bath.png'),
      require('../NorthImage/Garden/k3garden.png'),
      require('../NorthImage/Kitchen/k3kit.png'),
      require('../NorthImage/Bedroom/k3bed.png'),
    ]
  },
  {
    id: 4,
    name: 'Tüm kulübe, Joensuu, Finlandiya',
    location: 'Joensuu, Finlandiya',
    coordinate: {
      latitude: 62.6000,
      longitude: 29.7667
    },
    price: 220,
    star: '4,2',
    images: [
      require('../NorthImage/k4.png'),
      require('../NorthImage/Garden/k4garden.png'),
      require('../NorthImage/Kitchen/k4kit.png'),
      require('../NorthImage/Bedroom/k4bed.png'),
      require('../NorthImage/Bath/k4bath.png'),
    ]
  },
  {
    id: 5,
    name: 'Aurora Cabin, Finlandiya',
    location: 'Joensuu, Finlandiya',
    coordinate: {
      latitude: 62.6000,
      longitude: 29.7667
    },
    price: 270,
    star: '3,1',
    images: [
      require('../NorthImage/k5.png'),
      require('../NorthImage/Garden/k5garden.png'),
      require('../NorthImage/Kitchen/k5kit.png'),
      require('../NorthImage/Bedroom/k5bed.png'),
      require('../NorthImage/Bath/k5bath.png'),
    ]
  },
  {
    id: 6,
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
  {
    id: 7,
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
    id: 8,
    name: 'Polar View, Ilomantsi, Finlandiya',
    location: 'Ilomantsi, Finlandiya',
    coordinate: {
      latitude: 62.6667,
      longitude: 30.9167
    },
    price: 300,
    star: '3,9',
    images: [
      require('../NorthImage/k8.png'),
      require('../NorthImage/Garden/k8garden.png'),
      require('../NorthImage/Kitchen/k8kit.png'),
      require('../NorthImage/Bedroom/k8bed.png'),
      require('../NorthImage/Bath/k8bath.png'),
    ]
  },
  {
    id: 9,
    name: 'Iceberg, Joensuu, Finlandiya',
    location: 'Joensuu, Finlandiya',
    coordinate: {
      latitude: 62.6000,
      longitude: 29.7667
    },
    price: 500,
    star: '4,2',
    images: [
      require('../NorthImage/k9.png'),
      require('../NorthImage/Kitchen/k9kit.png'),
      require('../NorthImage/Bedroom/k9bed.png'),
      require('../NorthImage/Bath/k9bath.png'),
      require('../NorthImage/Garden/k9garden.png'),
    ]
  },
  {
    id: 10,
    name: 'Snowfall, Joensuu, Finlandiya',
    location: 'Joensuu, Finlandiya',
    coordinate: {
      latitude: 62.6000,
      longitude: 29.7667
    },
    price: 600,
    star: '4,3',
    images: [
      require('../NorthImage/k10.png'),
      require('../NorthImage/Kitchen/k10kit.png'),
      require('../NorthImage/Bedroom/k10bed.png'),
      require('../NorthImage/Bath/k10bath.png'),
      require('../NorthImage/Garden/k10garden.png'),
    ]
  }
];

  
    

export default nordicHouses;
