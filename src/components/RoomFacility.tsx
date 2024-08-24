import React from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";


const { width, height } = Dimensions.get("window");

const RoomFacility = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Oda Özellikleri</Text>
        <View style={styles.facilityContainer}>
            <View style={styles.facility}>
            <Text style={styles.facilityText}>Wifi</Text>
            </View>
            <View style={styles.facility}>
            <Text style={styles.facilityText}>Klima</Text>
            </View>
            <View style={styles.facility}>
            <Text style={styles.facilityText}>Balkon</Text>
            </View>
            <View style={styles.facility}>
            <Text style={styles.facilityText}>Televizyon</Text>
            </View>
            <View style={styles.facility}>
            <Text style={styles.facilityText}>Saç Kurutma Makinesi</Text>
            </View>
            <View style={styles.facility}>
            <Text style={styles.facilityText}>Telefon</Text>
            </View>
            <View style={styles.facility}>
            <Text style={styles.facilityText}>Kasa</Text>
            </View>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  facilityContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  facility: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    margin: 5,
    borderRadius: 10,
  },
  facilityText: {
    fontSize: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  },
});


export default RoomFacility






