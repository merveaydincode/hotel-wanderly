import { Hotels } from '../types/types';

const mainhotels: Hotels = [
  {
    id: 1,
    name: 'Lagoon Breeze Resort',
    location: 'Maui, Hawaii',
    star: '4,5 değerlendirme',
    images:[
      require('../TropicalImage/tr1.png'),
      require('../TropicalImage/Bedroom/tr1bed.png'),
      require('../TropicalImage/Bath/tr1bath.png'),
    ],
   
    rooms: [
      { roomId: 1, type: 'Single', price: 200, bedCount: 1, bathroomCount: 1, hasBarbecue: false, hasPool: true, hasKitchen: true },
      { roomId: 2, type: 'Double', price: 300, bedCount: 2, bathroomCount: 1, hasBarbecue: true, hasPool: true, hasKitchen: true }
    ]
  },
  {
    id: 2,
    name: 'Treehouse Retreat',
    location: 'Bali, Endonezya',
    star: '4,5 değerlendirme',
    images:[
      require('../TreeHouseImage/a2.png'),
      require('../TreeHouseImage/Bedroom/a2bed.png'),
      require('../TreeHouseImage/Bath/a2bath.png'),
    ],
   
    rooms: [
      { roomId: 1, type: 'Single', price: 180, bedCount: 1, bathroomCount: 1, hasBarbecue: false, hasPool: true, hasKitchen: true },
      { roomId: 2, type: 'Suite', price: 320, bedCount: 2, bathroomCount: 1, hasBarbecue: true, hasPool: true, hasKitchen: true }
    ]
  },
  {
    id: 3,
    name: 'Château de Chambord',
    location: 'Loir-et-Cher, France',
    star: '4,5 değerlendirme',
    images:[
       require('../CastleImage/c3.png'),
       require('../CastleImage/Bedroom/c3bed.png'),
       require('../CastleImage/Bath/c3bath.png'),
    ],
   
    rooms: [
      { roomId: 1, type: 'Single', price: 400, bedCount: 1, bathroomCount: 1, hasBarbecue: true, hasPool: true, hasKitchen: true },
      { roomId: 2, type: 'Double', price: 700, bedCount: 2, bathroomCount: 2, hasBarbecue: true, hasPool: true, hasKitchen: true }
    ]
  },
  {
    id: 4,
    name: 'Chiang Mai Boutique Hotel',
    location: 'Chiang Mai, Tayland',
    star: '4,5 değerlendirme',
    images:[
     require('../TropicalImage/tr11.png'),
      require('../TropicalImage/Bedroom/tr11bed.png'),
      require('../TropicalImage/Bath/tr11bath.png'),
    ],
 
    rooms: [
      { roomId: 1, type: 'Single', price: 110, bedCount: 1 },
      { roomId: 2, type: 'Double', price: 170, bedCount: 2 }
    ]
  },
  {
    id: 5,
    name: 'Lagoon Breeze Resort',
    location: 'Maui, Hawaii',
    star: '4,5 değerlendirme',
    images:[
      require('../TropicalImage/tr12.png'),
      require('../TropicalImage/Bedroom/tr12bed.png'),
      require('../TropicalImage/Bath/tr12bath.png'),
    ],
  
    rooms: [
      { roomId: 1, type: 'Single', price: 200, bedCount: 1, bathroomCount: 1, hasBarbecue: false, hasPool: true, hasKitchen: true },
      { roomId: 2, type: 'Double', price: 300, bedCount: 2, bathroomCount: 1, hasBarbecue: true, hasPool: true, hasKitchen: true }
    ]
  },
  {
    id: 6,
    name: 'Sahara Oasis Villa',
    location: 'Sahra Çölü, Fas',
    star: '4,5 değerlendirme',
    images:[
      require('../DesertImage/d1.png'),
      require('../DesertImage/Bedroom/d1bed.png'),
      require('../DesertImage/Bath/d1bath.png'),
    ],
   
    rooms: [
      { roomId: 1, type: 'Single', price: 250, bedCount: 1, bathroomCount: 1, hasBarbecue: true, hasPool: true, hasKitchen: true },
      { roomId: 2, type: 'Double', price: 400, bedCount: 2, bathroomCount: 1, hasBarbecue: true, hasPool: true, hasKitchen: true }
    ]
  },
  {
    id: 7,
    name: 'Aurora Cabin',
    location: 'İzlanda',
    star: '4,5 değerlendirme',
    images:[
      require('../NorthImage/k5.png'),
      require('../NorthImage/Bedroom/k5bed.png'),
      require('../NorthImage/Bath/k5bath.png'),
    ],

    rooms: [
      { roomId: 1, type: 'Single', price: 210, bedCount: 1, bathroomCount: 1, hasBarbecue: true, hasPool: false, hasKitchen: true },
      { roomId: 2, type: 'Double', price: 340, bedCount: 2, bathroomCount: 1, hasBarbecue: true, hasPool: false, hasKitchen: true }
    ]
  },
  {
    id: 8,
    name: 'Neuschwanstein Castle',
    location: 'Bavaria, Germany',
    star: '4,5 değerlendirme',
    images:[
      require('../CastleImage/c2.png'),
      require('../CastleImage/Bedroom/c2bed.png'),
      require('../CastleImage/Bath/c2bath.png'),
    ],

    rooms: [
      { roomId: 1, type: 'Single', price: 450, bedCount: 1, bathroomCount: 1, hasBarbecue: false, hasPool: true, hasKitchen: true },
      { roomId: 2, type: 'Suite', price: 750, bedCount: 2, bathroomCount: 2, hasBarbecue: false, hasPool: true, hasKitchen: true }
    ]
  },
 {
    id: 9,
    name: 'Emerald Bay Resort',
    location: 'Bali, Endonezya',
    star: '4,5 değerlendirme',
    images:[
      require('../TropicalImage/tr7.png'),
      require('../TropicalImage/Bedroom/tr7bed.png'),
      require('../TropicalImage/Bath/tr7bath.png'),
    ],
    rooms: [
      { roomId: 1, type: 'Single', price: 200, bedCount: 1, bathroomCount: 1, hasBarbecue: false, hasPool: true, hasKitchen: false },
      { roomId: 2, type: 'Double', price: 290, bedCount: 2, bathroomCount: 1, hasBarbecue: true, hasPool: true, hasKitchen: true }
    ]
  },
  {
    id: 10,
    name: 'Crystal Waters Resort',
    location: 'Cook Adaları',
    star: '4,5 değerlendirme',
    images:[
      require('../TropicalImage/tr9.png'),
      require('../TropicalImage/Bedroom/tr9bed.png'),
      require('../TropicalImage/Bath/tr9bath.png'),
    ],
   
    rooms: [
      { roomId: 1, type: 'Single', price: 240, bedCount: 1, bathroomCount: 1, hasBarbecue: true, hasPool: true, hasKitchen: true },
      { roomId: 2, type: 'Suite', price: 360, bedCount: 2, bathroomCount: 2, hasBarbecue: true, hasPool: true, hasKitchen: true }
    ]
  },
]

export default mainhotels;