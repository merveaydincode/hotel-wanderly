import { Hotels } from '../types/types';

const mainhotels: Hotels = [
  {
    id: 1,
    name: 'Lagoon Breeze Resort',
    location: 'Maui, Hawaii',
    star: '4,5 değerlendirme',
    images: [
      require('../TropicalImage/tr8.png'),
      require('../TropicalImage/tr9.png')
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
    images: [
      require('../TropicalImage/tr8.png'),
      require('../TropicalImage/tr9.png')
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
    images: [
      require('../TropicalImage/tr8.png'),
      require('../TropicalImage/tr9.png')
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
    images: [
      require('../TropicalImage/tr8.png'),
      require('../TropicalImage/tr9.png')
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
    images: [
      require('../TropicalImage/tr8.png'),
      require('../TropicalImage/tr9.png')
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
    images: [
      require('../TropicalImage/tr8.png'),
      require('../TropicalImage/tr9.png')
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
    images: [
      require('../TropicalImage/tr8.png'),
      require('../TropicalImage/tr9.png')
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
    images: [
      require('../TropicalImage/tr8.png'),
      require('../TropicalImage/tr9.png')
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
    images: [
      require('../TropicalImage/tr8.png'),
      require('../TropicalImage/tr9.png')
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
    images: [
      require('../TropicalImage/tr8.png'),
      require('../TropicalImage/tr9.png')
    ],
    rooms: [
      { roomId: 1, type: 'Single', price: 240, bedCount: 1, bathroomCount: 1, hasBarbecue: true, hasPool: true, hasKitchen: true },
      { roomId: 2, type: 'Suite', price: 360, bedCount: 2, bathroomCount: 2, hasBarbecue: true, hasPool: true, hasKitchen: true }
    ]
  },
]

export default mainhotels;