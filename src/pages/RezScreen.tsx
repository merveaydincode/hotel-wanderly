import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, SafeAreaView, Image, Dimensions } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../assets/types/types';
import { Calendar } from 'react-native-calendars';
import { MaterialIcons } from '@expo/vector-icons';

type RezScreenRouteProp = RouteProp<RootStackParamList, 'RezScreen'>;
type RezScreenNavigationProp = StackNavigationProp<RootStackParamList, 'RezScreen'>;

type Props = {
  route: RezScreenRouteProp;
  navigation: RezScreenNavigationProp;
};

const { width } = Dimensions.get('window');

const RezScreen: React.FC<Props> = ({ route }) => {
  const { hotel } = route.params;
  const [guests, setGuests] = useState(1);
  const [startDate, setStartDate] = useState<string | undefined>(undefined);
  const [endDate, setEndDate] = useState<string | undefined>(undefined);

  const handleReservation = () => {
    if (!startDate || !endDate || new Date(startDate) >= new Date(endDate)) {
      Alert.alert('Hata', 'Lütfen geçerli bir tarih aralığı seçin.');
      return;
    }

    const nights = Math.ceil((new Date(endDate).getTime() - new Date(startDate).getTime()) / (1000 * 60 * 60 * 24));
    const totalPrice = nights * hotel.price * guests;

    Alert.alert('Rezervasyon Onaylandı', `Rezervasyonunuz yapıldı. Toplam Fiyat: ${totalPrice}$`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.calen}>
        <Calendar
          onDayPress={(day) => {
            if (!startDate || (startDate && endDate)) {
              setStartDate(day.dateString);
              setEndDate(undefined);
            } else if (startDate && !endDate && new Date(day.dateString) > new Date(startDate)) {
              setEndDate(day.dateString);
            }
          }}
          markingType={'period'}
          markedDates={{
            ...(startDate && { [startDate]: { startingDay: true, color: '#32CD32', textColor: 'white' } }),
            ...(endDate && { [endDate]: { endingDay: true, color: '#32CD32', textColor: 'white' } }),
            ...(startDate && endDate && new Date(startDate) < new Date(endDate) && {
              ...getDatesInRange(startDate, endDate).reduce((acc, date) => {
                acc[date] = { color: '#90EE90', textColor: 'white' };
                return acc;
              }, {}),
            }),
          }}
          theme={{
            selectedDayBackgroundColor: '#32CD32',
            todayTextColor: '#32CD32',
            arrowColor: '#32CD32',
          }}
        />
      </View>

      <View style={styles.infoSection}>
        <View style={styles.guestSelector}>
          <Text style={styles.label}>Kişi Sayısı</Text>
          <TouchableOpacity onPress={() => setGuests(Math.max(1, guests - 1))} style={styles.guestButton}>
            <MaterialIcons name="remove" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.guestCount}>{guests}</Text>
          <TouchableOpacity onPress={() => setGuests(guests + 1)} style={styles.guestButton}>
            <MaterialIcons name="add" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <View style={styles.securityInfo}>
          <Text style={styles.securityText}>Misafirler, check-in saatinden 48 saat öncesine kadar rezervasyonlarını iptal edebilir ve tam ücret iadesi alabilirler. 
            Check-in saatine 48 saatten az bir süre kala yapılan iptallerde, toplam rezervasyon tutarının %50'si kadar ücret alınır. 
            Check-in saatinden sonra yapılan iptallerde ise ücret iadesi yapılmaz.</Text>
        </View>
      </View>

      <View style={styles.imageGallery}>
        {hotel.images.slice(0, 4).map((image, index) => (
          <Image key={index} source={image} style={styles.hotelImage} />
        ))}
      </View>

      <TouchableOpacity style={styles.button} onPress={handleReservation}>
        <Text style={styles.buttonText}>Rezervasyonu Onayla</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const getDatesInRange = (start: string, end: string) => {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const dates = [];

  while (startDate <= endDate) {
    dates.push(new Date(startDate).toISOString().split('T')[0]);
    startDate.setDate(startDate.getDate() + 1);
  }

  return dates;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  calen: {
    backgroundColor: 'red',
    marginBottom: 20,
    width: '85%',
    alignSelf: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 4,
    overflow: 'hidden',
  },
  infoSection: {
    marginBottom: 20,
    alignItems: 'flex-start',
    marginLeft: 10,
  },
  guestSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  guestButton: {
    backgroundColor: '#32CD32',
    padding: 7,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  guestCount: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  label: {
    fontSize: 18,
    color: '#555',
    },
  securityInfo: {
    marginTop: 5,
  },
  securityText: {
    fontSize: 16,
    color: '#333',
  },
  imageGallery: {
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 4,
  },
  hotelImage: {
    width: '48%',
    height: width / 4.5,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#32CD32',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#32CD32',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 4,
    width: '70%',
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default RezScreen;
