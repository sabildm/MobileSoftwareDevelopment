// TopBar.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TopBar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>RentRide</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f1f1f1',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default TopBar;
