// App.tsx

import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import {useNavigation} from "@react-navigation/native";


export default function HomeScreen({}) {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.header}>RentRide</Text>
            <View style={styles.menu}>
                <TouchableOpacity style={styles.moreInfoButton} onPress={() => navigation.navigate("Home" as never)}>
                    <Text>All</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.moreInfoButton} onPress={() => navigation.navigate("Sport" as never)}>
                    <Text>Sport</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.moreInfoButton} onPress={() => navigation.navigate("Electric" as never)}>
                    <Text>Electric</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.moreInfoButton} onPress={() => navigation.navigate("Moving" as never)}>
                    <Text>Moving</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.moreInfoButton} onPress={() => navigation.navigate("Family" as never)}>
                    <Text>Family</Text>
                </TouchableOpacity>
            </View>

            <Car
                imageSrc={('/MobileSoftwareDevelopment/assets/mercedes.jpg')}
                name="Mercedes C63"
                fuel="Gas"
                transmission="Manual"
                seats={5}
                price="55.99$"
            />
            <Car
                imageSrc={('/MobileSoftwareDevelopment/assets/vwpolo.jpg')}
                name="VW Polo Aut."
                fuel="Gas"
                transmission="Automatic"
                seats={5}
                price="45.99$"
            />
        </View>
    );
}

const Car: React.FC<{
    imageSrc: any;
    name: string;
    fuel: string;
    transmission: string;
    seats: number;
    price: string;
}> = ({ imageSrc, name, fuel, transmission, seats, price }) => {
    return (
        <View style={styles.carContainer}>
            <Image source={imageSrc} style={styles.carImage} />
            <Text>{name}</Text>
            <Text>Fuel: {fuel}</Text>
            <Text>Transmission: {transmission}</Text>
            <Text>Seats: {seats}</Text>
            <Text>{price} / day</Text>
            <TouchableOpacity style={styles.moreInfoButton}>
                <Text>More info</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    menu: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    carContainer: {
        marginBottom: 20,
    },
    carImage: {
        width: '100%',
        height: 200,
    },
    moreInfoButton: {
        marginTop: 10,
        padding: 10,
        backgroundColor: '#f1f1f1',
        borderRadius: 5,
        alignItems: 'center',
    },
});



