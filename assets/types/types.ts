// types.ts

// Oda bilgilerini tanımlayan arayüz
export interface Room {
    roomId: number;
    type: string;
    price: number;
    bedCount: number;
    bathroomCount?: number;
    hasBarbecue?: boolean;
    hasPool?: boolean;
    hasKitchen?: boolean;
  }

  export interface Image {
    source: any;
  }
  
  // Otel bilgilerini tanımlayan arayüz
  export interface Hotel {
    id: number;
    name: string;
    location: string;
    star: string;
    rooms: Room[];
    images : Image['source'];
  }
  
  export type Hotels = Hotel[];

  // RootStackParamList türünü tanımlayın
  export type RootStackParamList = {
    Home: undefined;  // 'Home' ekranı için parametre yok
    HotelDetail: { hotel: Hotel };  // 'HotelDetail' ekranı için 'hotel' parametresi
    RezScreen: { hotel: Hotel };  // Eğer 'RezScreen' ekranı var ve 'hotel' parametresi alıyorsa, bunu ekleyin
  };
  

