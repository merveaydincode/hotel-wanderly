import React from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";


const { width, height } = Dimensions.get("window");


const HotelDetailText = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>İptal Politikası</Text>
            <Text style={styles.cancel}>
            Misafirler, check-in saatinden 48 saat öncesine kadar rezervasyonlarını iptal edebilir ve tam ücret iadesi alabilirler. 
            Check-in saatine 48 saatten az bir süre kala yapılan iptallerde, toplam rezervasyon tutarının %50'si kadar ücret alınır. 
            Check-in saatinden sonra yapılan iptallerde ise ücret iadesi yapılmaz.
            </Text>
            <Text style={styles.title}>Güvenlik Ve Mekan</Text>
            <Text style={styles.security}>
            Misafirlerin güvenliği için, mekânda bulunan güvenlik kameraları sadece ortak alanları kapsar ve özel alanlarda bulunmaz. 
            Giriş ve çıkış saatlerine riayet edilmesi önemlidir; gece geç saatlerde yüksek sesli etkinlikler yapılmasına izin verilmez. 
            Evcil hayvanlar, önceden izin alınmadan mekâna getirilemez.
            </Text>
        </View>
    );
 }

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cancel: {
        fontSize: 16,
        padding: 10,
    },
    security: {
        fontSize: 16,
        padding: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10,
    },
});

export default HotelDetailText;