import React, { useState, useCallback, useRef } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, FlatList, ScrollView, Alert } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../assets/types/types';
import MapContainer from '../components/MapContainer';
import RoomFacility from '../components/RoomFacility';
import { MaterialIcons } from '@expo/vector-icons';
import RulesText from '../components/RulesText';
import HotelDetailText from '../components/HotelDetailText';
import { Calendar } from 'react-native-calendars';
import BottomSheet from '@gorhom/bottom-sheet';

type HotelDetailRouteProp = RouteProp<RootStackParamList, 'HotelDetail'>;
type HotelDetailNavigationProp = StackNavigationProp<RootStackParamList, 'HotelDetail'>;

type Props = {
  route: HotelDetailRouteProp;
  navigation: HotelDetailNavigationProp;
};

const { width, height } = Dimensions.get('window');

const HotelDetail: React.FC<Props> = ({ route }) => {
  const { hotel } = route.params;
  const [showBottomSheet, setShowBottomSheet] = useState(false);
  const [guests, setGuests] = useState(1);
  const [startDate, setStartDate] = useState<string | undefined>(undefined);
  const [endDate, setEndDate] = useState<string | undefined>(undefined);
  const [reservationConfirmed, setReservationConfirmed] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const flatListRef = useRef<FlatList<any>>(null);
  const bottomSheetRef = useRef<BottomSheet>(null);

  const openBottomSheet = () => {
    setShowBottomSheet(true);
    bottomSheetRef.current?.expand();
  };

  const closeBottomSheet = () => {
    bottomSheetRef.current?.collapse();
    setTimeout(() => setShowBottomSheet(false), 300); 
  };

  const handleReservation = () => {
    if (!startDate || !endDate || new Date(startDate) >= new Date(endDate)) {
      Alert.alert('Hata', 'Lütfen geçerli bir tarih aralığı seçin.');
      return;
    }

    const nights = Math.ceil((new Date(endDate).getTime() - new Date(startDate).getTime()) / (1000 * 60 * 60 * 24));
    const totalPrice = nights * hotel.price * guests;
    
    setReservationConfirmed(true);
    setTimeout(() => closeBottomSheet(), 1500);
  };

  const handleGuestChange = (change: number) => {
    setGuests((prevGuests) => Math.max(1, prevGuests + change));
  };

  const handleDayPress = (day: any) => {
    if (!startDate) {
      setStartDate(day.dateString);
    } else if (!endDate && day.dateString > startDate) {
      setEndDate(day.dateString);
    } else {
      setStartDate(day.dateString);
      setEndDate(undefined);
    }
  };

  const getMarkedDates = () => {
    const markedDates: any = {};
    if (startDate) {
      markedDates[startDate] = { startingDay: true, color: '#32CD32', textColor: 'white' };
    }
    if (endDate) {
      markedDates[endDate] = { endingDay: true, color: '#32CD32', textColor: 'white' };
    }
    return markedDates;
  };

  const calculateTotalPrice = () => {
    if (startDate && endDate && new Date(startDate) < new Date(endDate)) {
      const nights = Math.ceil((new Date(endDate).getTime() - new Date(startDate).getTime()) / (1000 * 60 * 60 * 24));
      return nights * hotel.price * guests;
    }
    return null; 
  };

  const totalPrice = calculateTotalPrice(); 

  const onViewableItemsChanged = useCallback(({ viewableItems }: { viewableItems: { index: number }[] }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }, []);

  const viewabilityConfig = {
    viewAreaCoveragePercentThreshold: 50,
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.imageContainer}>
          <FlatList
            ref={flatListRef}
            data={hotel.images}
            horizontal
            pagingEnabled
            snapToInterval={width}
            snapToAlignment='center'
            decelerationRate='fast'
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <Image source={item} style={styles.image} />
            )}
            showsHorizontalScrollIndicator={false}
            onViewableItemsChanged={onViewableItemsChanged}
            viewabilityConfig={viewabilityConfig}
          />
         
         <TouchableOpacity
  style={[styles.buttonContainer, styles.rightButton]}
  onPress={() => flatListRef.current?.scrollToIndex({ index: Math.min(currentIndex + 1, hotel.images.length - 1), animated: true })}
>
  <MaterialIcons name="chevron-right" size={30} color="black" />
</TouchableOpacity>

<TouchableOpacity
  style={[styles.buttonContainer, styles.leftButton]}
  onPress={() => flatListRef.current?.scrollToIndex({ index: Math.max(currentIndex - 1, 0), animated: true })}
>
  <MaterialIcons name="chevron-left" size={30} color="black" />
</TouchableOpacity>
        </View>

        <HotelDetailText hotel={hotel} />
        <View style={styles.separator} />
        <RoomFacility />
        <View style={styles.separator} />
        <MapContainer hotel={hotel} />
        <RulesText />
      </ScrollView>

      <View style={styles.checkout}>
        <Text style={styles.price}>{hotel.price}$</Text>
        <Text style={styles.night}>/gece</Text>
        <TouchableOpacity
          style={styles.reserveButton}
          onPress={openBottomSheet}
        >
          <Text style={styles.reserveText}>Rezervasyon Yap</Text>
        </TouchableOpacity>
        </View>

      {showBottomSheet && (
        <BottomSheet
          ref={bottomSheetRef}
          index={-1}
          snapPoints={[height / 1.8, height / 1.8]} 
          onClose={() => setShowBottomSheet(false)}
          enablePanDownToClose
        >
          <View style={styles.bottomSheetContent}>
            {reservationConfirmed ? (
              <View style={styles.confirmationContainer}>
                <MaterialIcons name="check-circle" size={100} color="#32CD32" />
                <Text style={styles.confirmationText}>Rezervasyon Onaylandı</Text>
              </View>
            ) : (
              <View style={styles.bottomSheetInnerContent}>
                <Calendar
                  markedDates={getMarkedDates()}
                  onDayPress={handleDayPress}
                  minDate={new Date().toISOString().split('T')[0]}
                />
               
                <Text style={styles.label}>Kişi Sayısı</Text>
                <View style={styles.guestSelector}>
                  <TouchableOpacity onPress={() => handleGuestChange(-1)} style={styles.guestButton}>
                    <MaterialIcons name="remove" size={24} color="white" />
                  </TouchableOpacity>
                  <Text style={styles.guestCount}>{guests}</Text>
                  <TouchableOpacity onPress={() => handleGuestChange(1)} style={styles.guestButton}>
                    <MaterialIcons name="add" size={24} color="white" />
                  </TouchableOpacity>
                </View>
                {totalPrice !== null && (
                  <Text style={styles.totalPrice}>
                    Toplam: {totalPrice}$
                  </Text>
                )}
               
                <TouchableOpacity style={styles.button} onPress={handleReservation}>
                  <Text style={styles.buttonText}>Onayla</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </BottomSheet>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  imageContainer: {
    position: 'relative',
    height: height / 2.3,
  },
  image: {
    width,
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 30,
  },
  buttonContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)', 
    borderRadius: 20, 
    padding: 8,
    justifyContent: 'center', 
    alignItems: 'center',
  },
  rightButton: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{ translateY: -15 }],
    zIndex: 1,
  },
  leftButton: {
    position: 'absolute',
    left: 10,
    top: '50%',
    transform: [{ translateY: -15 }],
    zIndex: 1,
  },
  separator: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 10,
  },
  checkout: {
    padding: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: height / 8,
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    left: 20,
  },
  night: {
    fontSize: 17,
    right: 23,
  },

  reserveButton: {
    backgroundColor: '#32CD32',
    padding: 15,
    borderRadius: 10,
    width: '50%',
    alignSelf: 'flex-end',
    bottom: 18,
    right:  20,
  },
  reserveText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  bottomSheetContent: {
    flex: 1,
    padding: 20,
  },
  bottomSheetInnerContent: {
    flex: 1,
  },
  label: {
    fontSize: 16,
  },
  guestSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  guestButton: {
    backgroundColor: '#32CD32',
    padding: 5,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  guestCount: {
    fontSize: 18,
    marginHorizontal: 10,
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: '600',
    position: 'absolute',
    bottom: 70,
    alignSelf: 'flex-end',
  },
  button: {
    backgroundColor: '#32CD32',
    padding: 15,
    borderRadius: 25,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
  confirmationContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  confirmationText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
});


export default HotelDetail;
