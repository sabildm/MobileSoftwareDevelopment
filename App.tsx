// App.tsx

import React from 'react';
import { View, StyleSheet } from 'react-native';
import TopBar from './TopBar.tsx';
import FilterBar from './FilterBar.tsx';
import CarList from './CarList.tsx';

const cars = [
  {
    imageSrc: require('./assets/mercedes.jpg'),
    name: 'Mercedes C63',
    fuel: 'Gas',
    transmission: 'Manual',
    seats: 5,
    price: '55.99$',
  },
  {
    imageSrc: require('./assets/vwpolo.jpg'),
    name: 'VW Polo Aut.',
    fuel: 'Gas',
    transmission: 'Automatic',
    seats: 5,
    price: '45.99$',
  },
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
    backgroundColor: '#fff',
  },
});
