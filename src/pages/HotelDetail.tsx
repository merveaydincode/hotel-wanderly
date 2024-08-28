import React, { useState, useCallback, useRef } from 'react';
import { useWindowDimensions } from 'react-native';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, ScrollView, Alert } from 'react-native';
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

const HotelDetail: React.FC<Props> = ({ route }) => {
  const { hotel } = route.params;
  const [showBottomSheet, setShowBottomSheet] = useState(false);
  const [guests, setGuests] = useState(1);
  const [startDate, setStartDate] = useState<string | undefined>(undefined);
  const [endDate, setEndDate] = useState<string | undefined>(undefined);
  const [reservationConfirmed, setReservationConfirmed] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { width, height } = useWindowDimensions();
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

  const bottomSheetHeight = height * 0.7;

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={[styles.imageContainer, { height: height / 2.3 }]}>
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
              <Image source={item} style={[styles.image, { width, height: '100%' }]} />
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
        <Text style={styles.price}>${hotel.price}</Text>
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
          snapPoints={[bottomSheetHeight, bottomSheetHeight]}
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
                  style={styles.calendar}
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
    paddingBottom: 80,
  },
  scrollViewContent: {
    flexGrow: 1,  
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    height: '100%',
  },
  buttonContainer: {
    position: 'absolute',
    top: '50%',
    transform: [{ translateY: -15 }],
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 20,
  },
  leftButton: {
    left: 20,
  },
  rightButton: {
    right: 20,
  },
  checkout: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'absolute',
    flexDirection: 'row',
    bottom: 0,
    left: 40,
    right: 0,
    padding: 20,

  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    paddingBottom: 10,
    right: 35,
  },
  night: {
    fontSize: 16,
    color: 'gray',
    position: 'absolute',
    left: 48,
    bottom: 29,
  },
  reserveButton: {
    backgroundColor: '#32CD32',
    borderRadius: 25,
    alignItems: 'center',
    position: 'absolute',
    padding: 15,
    width: 200,
    bottom: 20,
    right: 20,
  },
  reserveText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  separator: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 10,
  },
  bottomSheetContent: {
    flex: 1,
    paddingHorizontal: 20,
  },
  bottomSheetInnerContent: {
    flex: 1,
    justifyContent: 'space-between',
  },
  calendar: {
    
  },
  label: {
    fontSize: 18,
    fontWeight: '500',
    alignSelf: 'center',
  },
  guestSelector: {
    flexDirection: 'row',
    alignSelf: 'center'
  },
  guestButton: {
    backgroundColor: '#32CD32',
    padding: 7,
    borderRadius: 5,
    marginHorizontal: 13,
  },
  guestCount: {
    fontSize: 18,
    fontWeight: 'bold',
    top: 5,
  },
  button: {
    backgroundColor: '#32CD32',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 40,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  confirmationContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmationText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#32CD32',
    marginTop: 20,
  },
});

export default HotelDetail;

