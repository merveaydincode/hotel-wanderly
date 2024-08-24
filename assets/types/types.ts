// types.ts


  export interface Image {
    source: any;
  }
  
  // Otel bilgilerini tanımlayan arayüz
  export interface Hotel {
    id: number;
    name: string;
    location: string;
    coordinate: {
      latitude: number;
      longitude: number;
    };
    price: number;
    star: string;
    images : Image['source'];
    image: Image['source'];
  }
  
  export type Hotels = Hotel[];

  // RootStackParamList türünü tanımlayın
  export type RootStackParamList = {
    Home: undefined;  // 'Home' ekranı için parametre yok
    HotelDetail: { hotel: Hotel };  // 'HotelDetail' ekranı için 'hotel' parametresi
    RezScreen: { hotel: Hotel };  // Eğer 'RezScreen' ekranı var ve 'hotel' parametresi alıyorsa, bunu ekleyin
  };
  

