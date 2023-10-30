// CarList.tsx

import React from 'react';
import { ScrollView } from 'react-native';
import CarItem from './CarItem.tsx';

const CarList = ({ cars }) => {
  return (
    <ScrollView>
      {cars.map((car, index) => (
        <CarItem key={index} car={car} />
      ))}
    </ScrollView>
  );
};

export default CarList;
