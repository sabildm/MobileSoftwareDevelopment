// CarItem.tsx

import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';

const CarItem = ({ car }) => {
  return (
    <View style={styles.container}>
      <Swiper style={styles.wrapper} showsButtons={false} autoplay={false}>
        {car.images.map((imageSrc, index) => (
          <Image key={index} source={imageSrc} style={styles.image} />
        ))}
      </Swiper>
      <Text style={styles.carName}>{car.name}</Text>
      <Text>Fuel: {car.fuel}</Text>
      <Text>Transmission: {car.transmission}</Text>
      <Text>Seats: {car.seats}</Text>
      <Text>{car.price} / day</Text>
      <Text>Rating: {car.rating}</Text>
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
  wrapper: {
  height: 200
  },
  image: {
    width: '100%',
    height: 200,
  },
  carName: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 10,
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
