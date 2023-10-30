// CarItem.tsx

import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const CarItem = ({ car }) => {
  return (
    <View style={styles.container}>
      <Image source={car.imageSrc} style={styles.image} />
      <Text>{car.name}</Text>
      <Text>Fuel: {car.fuel}</Text>
      <Text>Transmission: {car.transmission}</Text>
      <Text>Seats: {car.seats}</Text>
      <Text>{car.price} / day</Text>
      <TouchableOpacity style={styles.moreInfoButton}>
        <Text>More info</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  image: {
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

export default CarItem;
