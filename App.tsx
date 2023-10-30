// App.tsx

import React from 'react';
import { View, StyleSheet } from 'react-native';
import TopBar from './TopBar.tsx';
import FilterBar from './FilterBar.tsx';
import CarList from './CarList.tsx';

const cars = [
  {
    images: [require('./assets/mercedes1.jpg'), require('./assets/mercedes2.jpg')],
    name: 'Mercedes C63',
    fuel: 'Gas',
    transmission: 'Manual',
    seats: 5,
    price: '55.99$',
    rating: 4.5,
  },
  {
    images: [require('./assets/vwpolo1.jpg'), require('./assets/vwpolo2.jpg')],
    name: 'VW Polo Aut.',
    fuel: 'Gas',
    transmission: 'Automatic',
    seats: 5,
    price: '45.99$',
    rating: 4,
  },
  {
  images: [require('./assets/flyttecar1.jpg'), require('./assets/flyttecar2.jpg')],
      name: 'Renault Master',
      fuel: 'Diesel',
      transmission: 'Manual',
      seats: 3,
      price: '109.99$',
      rating: 5,
  },
  {
  images: [require('./assets/varevognscar1.jpg'), require('./assets/varevognscar2.jpg')],
      name: 'Peugot Boxer',
      fuel: 'Diesel',
      transmission: 'Manual',
      seats: 3,
      price: '59.99$',
      rating: 3,
  }
];


export default function App() {
  return (
    <View style={styles.container}>
      <TopBar />
      <FilterBar />
      <CarList cars={cars} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ede6da",
  },
});
