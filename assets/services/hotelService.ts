import hotels from '../data/hotels';   // Tüm otelleri içe aktar
import mainhotels from '../data/mainhotels';  // Ana ekranda görülecek otelleri içe aktar
import { Hotels } from '../types/types';

export const searchHotels = (query: string): Hotels => {  // Arama fonksiyonu
  if (!query) return mainhotels;  // Arama sorgusu boşsa ana ekrandaki otelleri döndür

  return hotels.filter(hotel =>   // Otelleri ara
    hotel.name.toLowerCase().includes(query.toLowerCase()) ||   // Otel adına göre ara
    hotel.location.toLowerCase().includes(query.toLowerCase())   // Konumuna göre ara
  );
};
