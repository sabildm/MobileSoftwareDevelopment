// App.tsx

import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';




export default function ElectricScreen() {
    const navigation = useNavigation();
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch("https://api.api-ninjas.com/v1/cars?cylinders=8&limit=10", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-Api-Key': 'opiBgEzKruOUmAdTnnATew==g8fBYuUqinWqUGEZ' // Replace with your actual API key if needed
            }
        })
        .then(response => response.json())
                .then(data => {
                    console.log(data); // Log the data to see its structure
                    if (Array.isArray(data)) { // Check if data is an array
                        setCars(data);
                    } else {
                        // Handle cases where data is not an array
                        console.error('Data is not an array:', data);
                    }
                })
                .catch(error => {
                    console.error(error);
                });
            }, []);

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
            <ScrollView>
                            {cars.map((car, index) => (
                                <Car
                                    key={index}
                                    name={car.make + " " + car.model} // Assuming 'make' and 'model' fields are available
                                    fuel={car.fuel_type}
                                    transmission={car.transmission}


                                    // Add other props as needed
                                />
                            ))}
            </ScrollView>
        </View>
    );
}

const Car = ({ name, fuel, transmission, seats, price }) => {
    return (
        <View style={styles.carContainer}>
            {/* Display car details. Example: */}
            <Text>{name}</Text>
            <Text>Fuel: {fuel}</Text>
            <Text>Transmission: {transmission}</Text>

            {/* Add more details as needed */}
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



