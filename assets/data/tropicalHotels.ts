// tropik.ts

import { Hotels } from '../types/types';

const tropicalHotels: Hotels = [
    {
      id: 1,
      name: 'Providenciales, Turks ve Caicos Adaları',
      location: 'Turks ve Caicos Adaları',
      coordinate: {
        latitude: 21.7736,
        longitude: -72.2184
      },
      price: 300,
      star: '4,3',
      images: [
        require('../TropicalImage/t1.png'),
        require('../TropicalImage/Bath/t1bath.png'),
        require('../TropicalImage/Garden/t1garden.png'),
        require('../TropicalImage/Kitchen/t1kit.png'),
        require('../TropicalImage/Bedroom/t1bed.png'),
      ]
    },
    {
      id: 2,
      name: 'Las Galeras, Dominik Cumhuriyeti',
      location: 'Dominik Cumhuriyeti',
      coordinate: {
        latitude: 19.3051,
        longitude: -69.1992
      },
      price: 400,
      star: '4,7',
      images: [
        require('../TropicalImage/tr2.png'),
        require('../TropicalImage/Bath/tr2bath.png'),
        require('../TropicalImage/Garden/tr2garden.png'),
        require('../TropicalImage/Kitchen/tr2kit.png'),
        require('../TropicalImage/Bedroom/tr2bed.png'),
      ]
    },
    {
      id: 3,
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
      id: 4,
      name: 'Tropical, Abiansemal, Endonezya',
      location: 'Abiansemal, Endonezya',
      coordinate: {
        latitude: -8.5227,
        longitude: 115.2106
      },
      price: 250,
      star: '4,2',
      images: [
        require('../TropicalImage/tr4.png'),
        require('../TropicalImage/Bath/tr4bath.png'),
        require('../TropicalImage/Garden/tr4garden.png'),
        require('../TropicalImage/Kitchen/tr4kit.png'),
        require('../TropicalImage/Bedroom/tr4bed.png'),
      ]
    },
    {
      id: 5,
      name: 'Paradise Bay Resort, Klungkung, Endonezya',
      location: 'Klungkung, Endonezya',
      coordinate: {
        latitude: -8.4903,
        longitude: 115.4220
      },
      price: 270,
      star: '3,1',
      images: [
        require('../TropicalImage/tr5.png'),
        require('../TropicalImage/Bath/tr5bath.png'),
        require('../TropicalImage/Garden/tr5garden.png'),
        require('../TropicalImage/Kitchen/tr5kit.png'),
        require('../TropicalImage/Bedroom/tr5bed.png'),
      ]
    },
    {
      id: 6,
      name: 'Tüm villa, Kecamatan Kuta Utara, Endonezya',
      location: 'Endonezya',
      coordinate: {
        latitude: -8.6594,
        longitude: 115.1686
      },
      price: 220,
      star: '3,4',
      images: [
        require('../TropicalImage/tr6.png'),
        require('../TropicalImage/Bath/tr6bath.png'),
        require('../TropicalImage/Garden/tr6garden.png'),
        require('../TropicalImage/Kitchen/tr6kit.png'),
        require('../TropicalImage/Bedroom/tr6bed.png'),
      ]
    },
    {
      id: 7,
      name: 'Tüm bungalov, Tulum, Meksika',
      location: 'Tulum, Meksika',
      coordinate: {
        latitude: 20.2110,
        longitude: -87.4655
      },
      price: 400,
      star: '3,7',
      images: [
        require('../TropicalImage/tr7.png'),
        require('../TropicalImage/Bath/tr7bath.png'),
        require('../TropicalImage/Garden/tr7garden.png'),
        require('../TropicalImage/Kitchen/tr7kit.png'),
        require('../TropicalImage/Bedroom/tr7bed.png'),
      ]
    },
    {
      id: 8,
      name: 'Conceição da Aparecida, Brezilya',
      location: 'Brezilya',
      coordinate: {
        latitude: -21.0933,
        longitude: -46.1779
      },
      price: 500,
      star: '3,9',
      images: [
        require('../TropicalImage/tr8.png'),
        require('../TropicalImage/Bath/tr8bath.png'),
        require('../TropicalImage/Garden/tr8garden.png'),
        require('../TropicalImage/Kitchen/tr8kit.png'),
        require('../TropicalImage/Bedroom/tr8bed.png'),
      ]
    },
    {
      id: 9,
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
      id: 10,
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
    }
  ];
  

export default tropicalHotels;
