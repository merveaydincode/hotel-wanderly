import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons"; // Importing icons

const { width, height } = Dimensions.get("window");

const RoomFacility = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Özellikler</Text>
      <View style={styles.facilityContainer}>
        <View style={styles.facility}>
          <MaterialIcons name="wifi" size={20} color="black" />
          <Text style={styles.facilityText}>Ücretsiz Wifi</Text>
        </View>
        <View style={styles.facility}>
        <MaterialIcons name="soup-kitchen" size={20} color="black" />
          <Text style={styles.facilityText}>Mutfak</Text>
        </View>
        <View style={styles.facility}>
          <FontAwesome5 name="coffee" size={20} color="black" />
          <Text style={styles.facilityText}>Kahve Makinesi</Text>
        </View>
        <View style={styles.facility}>
          <MaterialIcons name="tv" size={20} color="black" />
          <Text style={styles.facilityText}>Televizyon</Text>
        </View>
        <View style={styles.facility}>
          <MaterialIcons name="shower" size={20} color="black" />
          <Text style={styles.facilityText}>Duş</Text>
        </View>
        <View style={styles.facility}>
          <MaterialIcons name="local-parking" size={20} color="black" />
          <Text style={styles.facilityText}>Ücretsiz Otopark</Text>
          </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  facilityContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  facility: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 10,
    margin: 2,
    borderRadius: 20,
  },
  facilityText: {
    fontSize: 15,
    marginLeft: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
  },
});

export default RoomFacility;
